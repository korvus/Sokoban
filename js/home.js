//https://github.com/straker/css-style-guide-audit < to test

var height = 20;
var width = 10;


// hasClass(document.getElementById('ud'), 'class-deska');
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function listLvl(){
  //Remove, if exists, all stuff on home by default
  cleanHome();
  //init main ul wrapper
  createUl();
  [].forEach.call(
      document.querySelectorAll('ul li'),function (world){
          world.remove();
      }
  );
  var wichWorldToGet = localStorage.getItem("world");
  fetchJSONFile('js/lvl/world-'+wichWorldToGet+'.json', function(data){
    displayLvls(data, wichWorldToGet);
    sessionStorage.setItem("wantToGo","lvls");
  });

}

function setClickOnLvls(){
  var lksToLvls = document.querySelectorAll("ul li .temple");
  var c = 0;
  for (c; c < lksToLvls.length; c++){
    lksToLvls[c].addEventListener('click', function(e){
      e.preventDefault();
      localStorage.setItem("playWorld", this.dataset.world);
      localStorage.setItem("playLvl", this.dataset.lvl);
      // console.log(this.dataset.world, '-', this.dataset.lvl)
      document.location.href = "game.html";
    });
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function generateGrid(){
  var mapTop = document.createElement("div");
  mapTop.setAttribute("class", "topMap");

  var mapBottom = document.createElement("div");
  mapBottom.setAttribute("class", "mapBottom");

  var mainWrapper = document.querySelector('main');

  var container = document.querySelector('ul');
  mainWrapper.insertBefore(mapTop, container);
  mainWrapper.append(mapBottom);

  container.setAttribute("class","lvls");
  /*
  for(a = 0; a < height; a++){
    var line = document.createElement('li');
    for(b = 0; b < width; b++) {
      var col = document.createElement('div');
      col.dataset.col = b;
      col.dataset.lin = a;
      col.classList.add("col");
      line.appendChild(col);
    }
    line.classList.add("line");
    container.appendChild(line);
  }
  */
}

function generatePath(nbLvls, world){
  var startLine = [];
  var startCol = [];
  var cnEdge = [];
  var direction = '';
  var cn = '';
  var lineIter = 0;
  var nbTmpl = 0;

  var b = 0;
  var cumulBottomDirection = 0;

  startLine[0] = 0;
  startCol[0] = 5;
  direction = 'b';
  // startDrawingPath = 0;

  var container = document.querySelector('ul');

  var line = document.createElement('li');
  for(ba = 0; ba < width; ba++) {
    var precol = document.createElement('div');
    precol.dataset.col = ba;
    precol.dataset.lin = 0;
    precol.classList.add("col");
    line.appendChild(precol);
  }
  line.classList.add("line");
  container.appendChild(line);

  document.querySelector('[data-col="5"][data-lin="0"]').classList.add('path');

  // while (startLine[b] <= height) {
  while (nbLvls !== 0) {
    b++;

    var randomDirection = getRandomInt(10);
    if(cumulBottomDirection === 1){randomDirection = 0;}

    if(startCol[b-1] === width-1){
      if(cumulBottomDirection===0){
        randomDirection = 0;
      }else{
        direction = 'l';
      }
    }
    if(startCol[b-1] === 0){
      if(cumulBottomDirection===0){
        randomDirection = 0;
      }else{
        direction = 'r';
      }
    };

    if(cumulBottomDirection > 2){
      randomDirection = width;
    }

    if(randomDirection>5){

      cumulBottomDirection = 0;
      // Déplacement horizontal
      var randomNumber = getRandomInt(width);
      if(direction !== 'b'){
        if(direction === 'r'){ randomNumber = width; }
        if(direction === 'l'){ randomNumber = 0; }
      }
      if(randomNumber >= startCol[b-1]){
        direction = 'r';
        startCol[b] = startCol[b-1]+1;
      } else {
        direction = 'l';
        startCol[b] = startCol[b-1]-1;
      }
      startLine[b] = startLine[b-1];
    } else {
      // Déplacement vertical
      /* -pregenerate the line------- */
      lineIter++;
      var line = document.createElement('li');
      for(bb = 0; bb < width; bb++) {
        var precol = document.createElement('div');
        precol.dataset.col = bb;
        precol.dataset.lin = lineIter;
        precol.classList.add("col");
        line.appendChild(precol);
      }
      line.classList.add("line");
      container.appendChild(line);
      /* -------- */

      direction = 'b';
      cumulBottomDirection++;
      startCol[b] = startCol[b-1];
      startLine[b] = startLine[b-1]+1;
    }

    // console.log(startCol[b],'-',startLine[b]);
    document.querySelector('[data-col="'+startCol[b]+'"][data-lin="'+startLine[b]+'"]').classList.add('path');

    if(b>1){

      if(startCol[b-2] > startCol[b-1]){cn = 'fromRight';}
      if(startCol[b-2] < startCol[b-1]){cn = 'fromLeft';}
      if(startCol[b-2] === startCol[b-1]){ cn = 'fromTop';}
      // console.log(startLine[b-2] ,'/', startLine[b-1], '/', cn);

      var lastCn = '';
      if(startCol[b-1] > startCol[b]){lastCn = 'fromRightToBottom';}
      if(startCol[b-1] < startCol[b]){lastCn = 'fromLeftToBottom';}
      if(startCol[b-1] === startCol[b]){ lastCn = 'fromTopToBottom';}
      cnEdge[b] = lastCn;

      if(startCol[b-1] > startCol[b]){cn += 'ToLeft';}
      if(startCol[b-1] < startCol[b]){cn += 'ToRight';}
      if(startCol[b-1] === startCol[b]){ cn += 'ToBottom';}

      document.querySelector('[data-col="'+startCol[b-1]+'"][data-lin="'+startLine[b-1]+'"]').classList.remove(cnEdge[b-1]);
      document.querySelector('[data-col="'+startCol[b-1]+'"][data-lin="'+startLine[b-1]+'"]').classList.add(cn);
      document.querySelector('[data-col="'+startCol[b]+'"][data-lin="'+startLine[b]+'"]').classList.add(lastCn);

    } else if(b === 1){
      if(startCol[b-1] > startCol[b]){cn += 'fromTopToLeft';}
      if(startCol[b-1] < startCol[b]){cn += 'fromTopToRight';}
      if(startCol[b-1] === startCol[b]){ cn += 'fromTopToBottom';}
      // First case
      document.querySelector('[data-col="'+startCol[b-1]+'"][data-lin="'+startLine[b-1]+'"]').classList.add(cn);
    }


    /* 1 sur 3 */
    var gap = 3;
    var breakLoop = false;
    var loop = 0;
    var templePossible = [];

    /* Create temples */
    if(b%gap === 1 && b !== 1){
      for(acol=(startCol[b-gap]-1); acol<=(startCol[b-gap]+1); acol++){
        for(brow=(startLine[b-gap]-1);brow<=(startLine[b-gap]+1); brow++){
          if(document.querySelector('[data-col="'+acol+'"][data-lin="'+brow+'"]')){
            loop++;
            var potentialTemple = document.querySelector('[data-col="'+acol+'"][data-lin="'+brow+'"]');
            if(!hasClass(potentialTemple, 'path')){
              // Check if another temple around
              templePossible[loop] = true;
              for(tcol=acol-1; tcol<=acol+1; tcol++){
                for(trow=brow-1; trow<=brow+1; trow++){
                  if(document.querySelector('[data-col="'+tcol+'"][data-lin="'+trow+'"]')){
                    var aroundPossible = document.querySelector('[data-col="'+tcol+'"][data-lin="'+trow+'"]');
                    if(hasClass(aroundPossible, 'temple')){
                      templePossible[loop] = false;
                    }
                  }
                }
              }
              if(templePossible[loop]){

                var nbMv = localStorage.getItem("status-"+world+"-"+nbTmpl);
                potentialTemple.classList.add('temple');
                breakLoop = true;
                nbLvls--;
                var classSuffix = nbTmpl;
                if(nbTmpl>45){
                  classSuffix = getRandomInt(45);
                }
                potentialTemple.classList.add('temple-'+classSuffix);

                potentialTemple.dataset.world = world;
                potentialTemple.dataset.lvl = nbTmpl;

                if(nbMv === "0" || !nbMv){
                  localStorage.setItem("status-"+world+"-"+nbTmpl, 0);
                  potentialTemple.classList.add("uncompleted");
                } else {
                  var moves = document.createElement("span");
                  var hm = document.createTextNode(nbMv);
                  moves.appendChild(hm);
                  potentialTemple.classList.add("completed");
                  potentialTemple.appendChild(moves);
                }

                nbTmpl++;
                setClickOnLvls();

                if(nbLvls === 0){
                  document.querySelector('[data-col="'+startCol[b]+'"][data-lin="'+startLine[b]+'"]').classList.add('last');
                }
                break;
              }
            }
            // .classList.add('temple')
          }
        }
        if (breakLoop){
          breakLoop = false;
          break;
        }
      }
    }


  /* End boucle */
  }
}

function displayLvls(lvls, world){
  window.location = "#levels";
  var nbLvls = lvls.length;

  generateGrid();
  generatePath(nbLvls, world);

  var height = 20;
  var width = 10;
  /*
  var b = 0;
  var ul = document.querySelector('ul');
  var list = [], links = [], text = [];
  for(b; b < nbLvls; b++){
    list[b] = document.createElement('li');
    links[b] = document.createElement('a');
    links[b].dataset.world = world;
    links[b].dataset.lvl = b;

    var nbMv = localStorage.getItem("status-"+world+"-"+b);
    if(!nbMv || nbMv == 0){
      localStorage.setItem("status-"+world+"-"+b, 0);
      list[b].setAttribute("class","uncompleted");
    }else{
      var moves = document.createElement("span");
      var hm = document.createTextNode(nbMv);
      moves.appendChild(hm);
      list[b].setAttribute("class","completed");
      list[b].appendChild(moves);
    }

    text[b] = document.createTextNode(b+1);
    links[b].appendChild(text[b]);
    list[b].appendChild(links[b]);
    ul.appendChild(list[b]);
  }
  */
  setClickOnLvls();
  setConsole();
}

function initClickBtWorld(){
  var lksToWorld = document.querySelectorAll("ul li a");
  var i = 0;
  for (i; i < lksToWorld.length; i++){
    lksToWorld[i].addEventListener('click', function(e){
      e.preventDefault();
      var wichWorld = this.getAttribute("data-href");
      localStorage.setItem("world",wichWorld);
      listLvl();
    });
  }
}

function getWorldInfos(a, d){
  fetchJSONFile('js/lvl/world-'+a+'.json', function(data){
    elli = document.createElement('li');
    ela = document.createElement('a');
    ela.setAttribute('href', 'game.html');
    ela.setAttribute('data-href', a);
    eltxt = document.createTextNode("World "+(a+1)+" ("+data.length+" levels)");
    ela.appendChild(eltxt);
    elli.appendChild(ela);
    document.querySelector("ul").appendChild(elli);
    if(a==d-1){
      initClickBtWorld();
    }else{
      getWorldInfos(a+1,d);
    }
  });
}

function createUl(){
  var ulWrapper = document.createElement('ul');
  var wrapper = document.querySelector('main');
  wrapper.appendChild(ulWrapper);
}

function listWorld(){
  fetchJSONFile('js/lvl/all-levels.json', function(data){
    createUl();
    var ul = document.querySelector('ul');
    ul.setAttribute("class","worlds");
    getWorldInfos(0, data.number);
  });

}

function changeH2(txt){
  var h2 = document.querySelector("h2");
  h2.textContent = txt;
}

function removeCharacter(){
  if(document.querySelector(".character")){
    var character = document.querySelector(".character");
    character.remove();
  }
}

function removeBT(){
  if(document.querySelector(".bt")){
    document.querySelector(".bt").remove();
  }
}

function removeLists(){
  if(document.querySelector("ul")){
    var list = document.querySelector("ul");
    list.remove();
  }
}

function displayWorld(){
  cleanHome();
  window.location = "#temple";
  listWorld();
  setConsole();
}

function eventDisplayWorld(e){
  e.preventDefault();
  displayWorld();
}

function btEvent(){
  document.querySelector(".bt").addEventListener("click", eventDisplayWorld);
}

function removeConsol(){
  if(document.querySelector(".consol")){
    document.querySelector(".consol").remove();
  }
}

function removeDecorum(){
  if(document.querySelector('.topMap')){
    document.querySelector('.topMap').remove();
  };
  if(document.querySelector('.mapBottom')){
    document.querySelector('.mapBottom').remove();
  };
}

//Function for remove all the stuffs on the homepage
function cleanHome(){
  removeLists();
  removeConsol();
  removeDecorum();
  changeH2("Choose a world");
  removeCharacter();
  removeBT();
}

function initClickConsoleEvent(){
  var homePagelk = document.querySelector(".block.home");
  homePagelk.addEventListener('click', function(e){
    e.preventDefault();
    cleanHome();
    sessionStorage.setItem("wantToGo","home");
    document.location.href = "index.html";
  });

  var homePagelk = document.querySelector(".block.worlds");
  homePagelk.addEventListener('click', function(e){
    e.preventDefault();
    cleanHome();
    sessionStorage.setItem("wantToGo","world");
    document.location.href = "index.html#temple";
    displayWorld();
  });
}

function setConsole(){
  var elConsole = document.createElement('section');
  elConsole.classList.add("consol");

  var elHomect = document.createTextNode("Home");
  var elHome = document.createElement('span');
  elHome.appendChild(elHomect);
  elHome.classList.add("home", "block");

  var elWorldct = document.createTextNode("Worlds");
  var elWorld = document.createElement('span');
  elWorld.appendChild(elWorldct);
  elWorld.classList.add("worlds", "block");

  elConsole.appendChild(elHome);
  elConsole.appendChild(elWorld);

  document.body.appendChild(elConsole);

  initClickConsoleEvent();
}

function entryGame(){
  window.location = "#home";
  var wrapper = document.querySelector('main');
  elCharachter = document.createElement('div');
  elCharachter.className = "character";
  elPerso = document.createElement('div');
  elPerso.classList.add("perso","animation");
  elStone = document.createElement('div');
  elStone.classList.add("stone","animation");
  elCharachter.appendChild(elPerso);
  elCharachter.appendChild(elStone);
  //Append the character first
  wrapper.appendChild(elCharachter);

  elBt = document.createElement('a');
  elBt.className = "bt";
  elBt.setAttribute("href","#temple");
  elBt.setAttribute("title","Go for a run!");
  elBt.textContent = "Play";
  wrapper.appendChild(elBt);

  btEvent();
}


function ifSessionStorage(){
  if(sessionStorage.getItem("wantToGo")){
    if(sessionStorage.wantToGo === "lvls"){
      listLvl();
    }else if(sessionStorage.wantToGo === "world"){
      displayWorld();
    }else if(sessionStorage.wantToGo === "home"){
      entryGame();
    }

  }else{

    //if there is no directive with session storage
    var anchor = getAnchor();
    if(anchor == "levels"){
      listLvl();
    }else if(anchor == "temple"){
      displayWorld();
    }else{
      //without any indication, root to the home by default
      entryGame();
    }

  }
}

document.addEventListener("DOMContentLoaded", function(){
  ifSessionStorage();
})
