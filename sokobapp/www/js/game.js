function $(){return document.getElementById(arguments[0]);}


var stonefit = new Audio("r/sounds/stone-fit.mp3");
var stonemove = new Audio("r/sounds/stone-move.mp3");
var walk = new Audio("r/sounds/walk-short.mp3");
var win = new Audio("r/sounds/win.mp3");

function setvolumeOfAlltracks(volum){
    stonefit.volume = volum;
    stonemove.volume = volum;
    walk.volume = volum;
    win.volume = volum;
}

setvolumeOfAlltracks(1);



function lpad(n, z)
{
    for (var str = '' + n, i = str.length; i < z; i++) {
        str = '0' + str;
    }

    return str;
}


var SM_NULL     = 0x000;
var SM_WALL     = 0x01 << 1; // OPT_BACKGROUND|OPT_SOLID
var SM_PLAYER   = 0x01 << 2; // OPT_PLAYER
var SM_BOX      = 0x01 << 3; // OPT_SOLID|OPT_MOVABLE
var SM_BASE     = 0x01 << 4; // OPT_BACKGROUND

var SD_FORWARD  = 0x01;
var SD_BACKWARD = 0x02;
var SD_LEFT     = 0x03;
var SD_RIGHT    = 0x04;

var world = 0;
world = localStorage.getItem("playWorld");
var lvl = 0;
lvl = localStorage.getItem("playLvl");

function Sokoban(){
    this.end_game         = false;
    this.grid_width       = 0;
    this.grid_width       = 0;
    this.grid_height      = 0;
    this.click_matching   = 0;
    this.grid_code        = null;
    this.grid             = [];
    this.path             = [];
    this.floor_coord      = [];
    this.walkable_zone    = [];
    this.undo_strate      = [];
    this.player_location  = null;
    this.player_direction = SD_FORWARD;
    this.base_count       = null;
    this.moves            = 0;
    this.pushes           = 0;
    this.action_push      = 0;
    this.grid_size        = null;
    this.undo             = null;

}


Sokoban.prototype.get_grid_id = function(k)
{
    var kw = Math.floor(k / this.grid_width);
    return 'grid-' + kw + '-' + (k - (kw * this.grid_width));
}


Sokoban.prototype.grid_ntoc = function(n)
{
    var c0 = Math.floor(n / this.grid_width);
    return [c0, (n - (c0 * this.grid_width))];
}


Sokoban.prototype.grid_cton = function(c)
{
    return (c[0] * this.grid_width) + c[1];
}


Sokoban.prototype.render_grid = function() {

    if (this.grid_code != null) {
        this.unmap_grid();
        this.grid_code = null;
    }

    var tmp = '<div id="grid">';

    for (var i = 0; i < this.grid_height; i++) {
        tmp += '<div class="grid-row">\n\n';

        for (var j = 0; j < this.grid_width; j++) {
            tmp += '<div id="grid-' + i + '-' + j + '"></div>';
        }

        tmp += '</div>\n\n';
    }

    $('game').innerHTML = tmp;

    this.reinitGame();

    // Size block
    this.render_grid_objects();
}


Sokoban.prototype.reinitGame = function(){
  this.moves = -1;
  this.update_moves();
  this.pushes = -1;
  this.update_pushes();
}

Sokoban.prototype.render_grid_objects = function()
{
    for (var k = 0; k < this.grid_size; k++) {
        try {
            this.render_grid_object(k);
        }
        
        catch(e) {
            console.log(k + '\n' + this.get_grid_id(k) + '\n' + e);
            break;
        }
        
    }

    //Once all cases calculated
    var heightDevice = window.innerHeight;
    var widthDevice = window.innerWidth;
    var marginWidth = (widthDevice*10)/100;
    var concreteWidth = widthDevice - marginWidth;
    var boardHeight = heightDevice - 110;
    var idealHeight = this.roundWithTwoDecimal(boardHeight/this.grid_height);
    var idealWidth = this.roundWithTwoDecimal(concreteWidth/this.grid_width);
    var nbr = 100/this.grid_width;

    var valueWidth = (idealHeight>idealWidth ? idealWidth : idealHeight );
    var gridWidth = Math.ceil(valueWidth*this.grid_width);

    $('game').style.width  = gridWidth+"px";

    [].forEach.call(document.querySelectorAll(".grid-row > div"), function(el){
        el.style.width = valueWidth + 'px';
        el.style.paddingTop = valueWidth + 'px';
    });
}

Sokoban.prototype.roundWithTwoDecimal = function(result){
    return Math.floor(result * 100) / 100;
}


Sokoban.prototype.render_grid_object = function(k)
{


    if($(this.get_grid_id(k)).className.contains("floor")){
        var floor = "floor";
    }else{
        var floor = "";
    }

    if (this.grid[k] & SM_PLAYER) {

        var pushingClass = this.action_push === 1 ? "pushing-"+(this.moves%3) : "walking-"+(this.moves%3);

        switch(this.player_direction) {
            //character turn on left
            case SD_LEFT:
                $(this.get_grid_id(k)).classList.add("left", pushingClass);
                break;
            //character turn on left
            case SD_RIGHT:
                $(this.get_grid_id(k)).classList.add("right", pushingClass);
                break;
            //character turn on left
            case SD_FORWARD:
                $(this.get_grid_id(k)).classList.add("fwd", pushingClass);
                break;
            //character turn on left
            case SD_BACKWARD:
                $(this.get_grid_id(k)).classList.add("bwd", pushingClass);
                break;
        }
    }
    else if (this.grid[k] & SM_BOX) {
        //$(this.get_grid_id(k)).innerHTML = '<img src="media/sokoban-box-' + (this.grid[k] & SM_BASE ? '1' : '0') + '.png" alt="" />';
        var thename = this.grid[k] & SM_BASE ? "based"+" "+floor  : "stone"+" "+floor;
        if(thename === "based") stonefit.play();
        $(this.get_grid_id(k)).className = thename;
    }
    else if (this.grid[k] & SM_BASE) {
        $(this.get_grid_id(k)).className = "base"+" "+floor;
        //$(this.get_grid_id(k)).innerHTML = '<img src="media/sokoban-base.png" alt="" />';
    }
    else if (this.grid[k] & SM_WALL) {
        $(this.get_grid_id(k)).className = "wall";
        $(this.get_grid_id(k)).innerHTML = '<div class="wall"></div>';
    }
    else {
        $(this.get_grid_id(k)).className = floor;
    }
}


Sokoban.prototype.init_player_location = function(k, direction)
{
    if (this.player_location == null) {
        this.grid[k]        = SM_PLAYER;
        this.player_location  = k;
        this.player_direction = direction;
    }
    else {
        this.grid[k] = SM_NULL;
    }
}


Sokoban.prototype.update_moves = function()
{
    if (this.moves == 0) {
        //If game just start
    }

    if(this.moves > 0){
        walk.play();
    }

    this.moves++;
    //insert moves into consol
    if(this.moves>0){
        $('undo').classList.remove("off");
        $('restart').classList.remove("off");
    }

    $( 'moves' ).innerHTML = lpad(this.moves, 4);
}


Sokoban.prototype.update_pushes = function() {
    this.pushes++;
    //insert push into consol
    $('pushes').innerHTML = lpad(this.pushes, 4);
}


Sokoban.prototype.unmap_grid = function()
{
    this.base_count = 0;
    this.grid_size  = this.grid_width * this.grid_height;

    for (var k = 0; k < this.grid_size; k++) {
        switch(this.grid_code.substr(k, 1)) {
            case '#': this.grid[k] = SM_WALL; break;
            case '$': this.grid[k] = SM_BOX; break;
            case '*': this.grid[k] = SM_BOX | SM_BASE; this.base_count++; break;
            case '.': this.grid[k] = SM_BASE; this.base_count++; break;
            case '@': this.init_player_location(k, SD_FORWARD); break;
            case 'B': this.init_player_location(k, SD_BACKWARD); break;
            case 'L': this.init_player_location(k, SD_LEFT); break;
            case 'R': this.init_player_location(k, SD_RIGHT); break;
            default:  this.grid[k] = SM_NULL; break;
        }
    }
}


Sokoban.prototype.validate_push = function(m, m_co){

    if (this.grid[m] & SM_WALL || this.grid[m] & SM_BOX) {
        return false;
    }

    if (m_co[0] < 0
     || m_co[0] >= this.grid_height
     || m_co[1] < 0
     || m_co[1] >= this.grid_width) {
        return false;
    }

    //here acting when moving stone
    stonemove.play();
    this.action_push = 1;
    return true;
}


Sokoban.prototype.validate_move = function(direction){

    if (this.end_game) {
        return false;
    }

    var k    = this.player_location;
    var k_co = this.grid_ntoc(k);
    var m_co = this.modify_coords([k_co[0], k_co[1]], direction);
    var m    = this.grid_cton(m_co);
    var egc  = 0;
    var undo = [null, null, this.player_direction];

    this.player_direction = direction;

    if (m_co[0] < 0
     || m_co[0] >= this.grid_height
     || m_co[1] < 0
     || m_co[1] >= this.grid_width) {
        return false;
    }

    if (!(this.grid[m] & SM_WALL)) {
        if (this.grid[m] & SM_BOX) {
            var p_co = this.modify_coords(m_co, direction),
                p    = this.grid_cton(p_co);

            if (this.validate_push(p, p_co)) {
                //When pushing concretly
                undo[1] = [m, p];
                this.grid[m] ^= SM_BOX;
                this.grid[p] |= SM_BOX;
                egc++;
                this.update_pushes();
                this.render_grid_object(m);
                this.render_grid_object(p);
            }else{
                //When pushing against wall
                this.action_push = 1;
            }
        }else{
            //When not pushing anything
            this.action_push = 0;
        }

        if (!(this.grid[m] & SM_BOX)) {
            undo[0] = [k, m];

            this.grid[k]         ^= SM_PLAYER;
            this.grid[m]         |= SM_PLAYER;
            this.player_location  = m;
            egc++;
            this.update_moves();
            this.render_grid_object(k);
            this.render_grid_object(m);
        }

        if (undo[0] != null) {
            this.undo_strate[this.moves-1] = undo;
        }

        
    }
    else {
        //If no move (player locked by wall for an example)
        this.render_grid_object(k);
    }

    if (egc >= 2) {
        //Loop on grid
        for (var k = 0, egc = 1; k < this.grid_size; k++){
            //if there is only one stone not in his final place
            if (this.grid[k] & SM_BOX && !(this.grid[k] & SM_BASE)) {
                //break the verification, meaning game is not over.
                egc = 0;
                break;
            }
        }

        //If no any break in previous loop, egc equal 1, level terminate
        if (egc == 1){
            this.end_game = true;
            this.endLevel();
        }
    }
}


Sokoban.prototype.endLevel = function(){
    document.querySelector("html").className = "end";
    var current = localStorage.getItem("status-"+world+"-"+lvl);
    current = parseInt(current);
    if(current===0 || current>this.moves){
        localStorage.setItem("status-"+world+"-"+lvl, this.moves);
    }
}

Sokoban.prototype.restart_level = function(){
    $("grid").remove();
    loadAll();
}

Sokoban.prototype.undo_move = function(){

    if (this.undo_strate[this.moves-1] == null || this.end_game){
        //this.moves = this.moves+1;
        return;
    }

    if (this.undo_strate[this.moves-1][2] != null) {
        this.player_direction = this.undo_strate[this.moves-1][2];
    }

    //second array inside undo object is the box position
    if (this.undo_strate[this.moves-1][1] != null) {
        var m = this.undo_strate[this.moves-1][1][0],
            p = this.undo_strate[this.moves-1][1][1];

        this.grid[m] |= SM_BOX;
        this.grid[p] ^= SM_BOX;
        this.render_grid_object(m);
        this.render_grid_object(p);
    }

    //first array inside undo object is the player position
    if (this.undo_strate[this.moves-1][0] != null) {
        var k = this.undo_strate[this.moves-1][0][0],
            m = this.undo_strate[this.moves-1][0][1];
        this.grid[k]         |= SM_PLAYER;
        this.grid[m]         ^= SM_PLAYER;
        this.player_location  = k;
        //this.pushes = 0;
        this.moves = this.moves-2;
        this.update_moves();
        this.render_grid_object(k);
        this.render_grid_object(m);
    }

}

Sokoban.prototype.map_tmp_walkable_array = function(){

    var row_tmp = -1;
    var col_tmp = 0;
    var tmp_grid = [];

    for (var a = 0; a < this.grid_size; a++) {
       col_tmp = a % this.grid_width;
       if(( a % this.grid_width) === 0){
           row_tmp++;
           this.walkable_zone[row_tmp] = [];
       }

       if(this.grid[a] !== 0){

           switch(this.grid[a]){
               //Wall
               case 2: tmp_grid[a] = 1; break;
               //shelve
               case 16: tmp_grid[a] = 0; break;
               //hero
               case 4: var start = [row_tmp,col_tmp]; tmp_grid[a] = 0; break;
               //hero on shelve
               case 20: var start = [row_tmp,col_tmp]; tmp_grid[a] = 0; break;
               //default
               default: tmp_grid[a] = 1; break;
           }

       }else{
           tmp_grid[a] = 0;
       }

       this.walkable_zone[row_tmp].push(tmp_grid[a]);

    }

    return start;

 }


Sokoban.prototype.set_click_floor = function() {
    
    var allFloor = document.querySelectorAll(".floor");

    //array.forEach(function (value) {

    [].forEach.call(allFloor, function(floorTile) {

        floorTile.addEventListener("mouseover", function(){
            var toGoId = this.getAttribute("id");
            var splitedId = toGoId.split("-");
            var coordEnd = [parseInt(splitedId[1]), parseInt(splitedId[2])];

            var start = sb.map_tmp_walkable_array();

            sb.path = findPath(sb.walkable_zone,start,coordEnd);

            sb.path.forEach(function(tile){
                $("grid-"+tile[0]+"-"+tile[1]).classList.add("walkable");
            })       

        });

        floorTile.addEventListener("mousedown", function(){
            var pathIteration = 0;
            var direction = SD_FORWARD;
            sb.path.forEach(function(tile){
                if(pathIteration>0){
                    
                    //first value is about vertical
                    switch(sb.path[pathIteration][0] - sb.path[pathIteration-1][0]){
                        case 0:
                            //second value is about horizontal
                            switch(sb.path[pathIteration][1] - sb.path[pathIteration-1][1]){
                                case 1: direction = SD_RIGHT; break;
                                case -1: direction = SD_LEFT; break;
                            }
                            break;
                        case 1: direction = SD_BACKWARD; break;
                        case -1: direction = SD_FORWARD; break;
                    }
                    
                    sb.validate_move(direction);
                }
                pathIteration++;
            })

            //sb.validate_move(SD_FORWARD)

        })

        floorTile.addEventListener("mouseout", function(){
            [].forEach.call(document.querySelectorAll(".walkable"), function(el){
                el.classList.remove("walkable");
            });
        });

    })
    
}

Sokoban.prototype.check_if_floor = function(next_check){
    if(!$(this.get_grid_id(next_check[2])).classList.contains("floor")){
        $(this.get_grid_id(next_check[2])).classList.add("floor");
        //Continue and loop.
        sb.get_tiles_floor(next_check);
    }
}

Sokoban.prototype.get_tiles_floor = function(ref){
    if(ref != undefined){
        var coords = this.floor_coord;
        //top
        if(coords[ref[0]-1][ref[1]][3] != 2 ){
            sb.check_if_floor(coords[ref[0]-1][ref[1]]);
        }
        //right
        if(coords[ref[0]][ref[1]+1][3] != 2 ){
            sb.check_if_floor(coords[ref[0]][ref[1]+1]);
        }
        //bottom
        if(coords[ref[0]][ref[1]-1][3] != 2 ){
            sb.check_if_floor(coords[ref[0]][ref[1]-1]);
        }
        //left
        if(coords[ref[0]+1][ref[1]][3] != 2 ){
            sb.check_if_floor(coords[ref[0]+1][ref[1]]);
        }
    }
}

Sokoban.prototype.set_virtual_array = function(){

    var row = -1;
    var col = 0;

    for (var k = 0; k < this.grid_size; k++) {
       col = k % this.grid_width;
       if(( k % this.grid_width) === 0){
           row++;
           this.floor_coord[row] = [];
       }
       this.floor_coord[row].push([row, col, k, this.grid[k]]);

       if(this.grid[k] === 4){
           var character = this.floor_coord[row][col];
       }

    }

    return character;
}

Sokoban.prototype.set_floor = function(){
    var hero = sb.set_virtual_array();
    sb.get_tiles_floor(hero);
    sb.set_click_floor();
}

Sokoban.prototype.modify_coords = function(coords, direction)
{
    switch (direction) {
        case SD_LEFT:     coords[1]--; break;
        case SD_RIGHT:    coords[1]++; break;
        case SD_FORWARD:  coords[0]--; break;
        case SD_BACKWARD: coords[0]++; break;
    }

    return coords;
}


var sb = null;


function load_map(all_maps){

    var sb_maps = all_maps;

    sb = new Sokoban();

    sb.grid_data  = sb_maps[lvl].split("|");
    sb.grid_code = sb.grid_data[2];

    sb.grid_width  = sb.grid_data[0];
    sb.grid_height = sb.grid_data[1];

    sb.render_grid();
    $('map').innerHTML = lpad((parseInt(lvl) + 1), 2);
    $('world').innerHTML = lpad((parseInt(world) + 1), 2);

    sb.set_floor();
}


function sokoban_move(e)
{
    var keynum;

    if (sb == null) {
        return true;
    }

    if (window.event) {
        keynum = e.keyCode;
    }
    else if (e.which) {
        keynum = e.which;
    }

    //Undo
    if (keynum == 85) {
        sb.undo_move();
        return false;
    }

    //Restart
    if (keynum == 82) {
        sb.restart_level();
        return false;
    }

    if (keynum == 37 || keynum == 100 || keynum == 65) { sb.validate_move(SD_LEFT); return false; }
    if (keynum == 39 || keynum == 102 || keynum == 68) { sb.validate_move(SD_RIGHT); return false; }
    if (keynum == 38 || keynum == 104 || keynum == 87) { sb.validate_move(SD_FORWARD); return false; }
    if (keynum == 40 || keynum ==  98 || keynum == 83) { sb.validate_move(SD_BACKWARD); return false; }

    return true;
}


//Bind key events
function bindKeyEvent(){
    document.body.onkeydown = function(e){
        return window.sokoban_move ? sokoban_move(e) : true;
    };
}

function bindConsolEvent(){
    $('restart').addEventListener('click', function(e){
        sb.restart_level();
    });

    $('undo').addEventListener('click', function(e){
        sb.undo_move();
    });

    $('map').addEventListener('click', function(e){
        //sessionStorage.setItem("wantToGo","lvls");
        document.location ="index.html#levels";
    });

    $('world').addEventListener('click', function(e){
        //sessionStorage.setItem("wantToGo","world");
        document.location ="index.html#temple";
    });

    var nbMv = localStorage.getItem("status-"+world+"-"+lvl);
    if(nbMv && nbMv > 0){
      var best = document.createTextNode(nbMv);
      $("best").appendChild(best);
      document.querySelector(".best").classList.remove("hide");
    }

}

function loadAll(){

    $('restart').setAttribute("class","off");
    $('undo').setAttribute("class","off");

    fetchJSONFile('js/lvl/world-'+world+'.json', function(data){
      load_map(data);
      bindKeyEvent();
      bindConsolEvent();
    })
}

//Loading
document.addEventListener("DOMContentLoaded", function(){
    
    loadAll();

});
