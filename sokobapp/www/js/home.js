function listLvl(){
  [].forEach.call(
      document.querySelectorAll('ul li'),function (world){
          world.remove();
      }
  );
  var wichWorldToGet = localStorage.getItem("world");
  fetchAnyFile('js/lvl/maps-'+wichWorldToGet+'.js', function(data){
    var lvls = eval(data);
    displayLvls(lvls);
  });
  //alert(wichWorldToGet);
}

function displayLvls(lvls){
  var nbLvls = lvls.length;
  var b = 0;
  var ul = document.querySelector('ul');
  ul.setAttribute("class","lvls");
  var list = [], links = [], text = [];
  for(b; b < nbLvls; b++){
    list[b] = document.createElement('li');
    links[b] = document.createElement('a');
    text[b] = document.createTextNode("lvl "+(b+1));
    links[b].appendChild(text[b]);
    list[b].appendChild(links[b]);
    ul.appendChild(list[b]);
  }
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

  fetchAnyFile('js/lvl/maps-'+a+'.js', function(data){
    var lvls = eval(data);
    elli = document.createElement('li');
    ela = document.createElement('a');
    ela.setAttribute('href', 'game.html');
    ela.setAttribute('data-href', a);
    eltxt = document.createTextNode("hello "+lvls.length);
    ela.appendChild(eltxt);
    elli.appendChild(ela);
    d[0].appendChild(elli);
    if(a==d[1]-1){
      initClickBtWorld();
    }else{
      getWorldInfos(a+1,d);
    }
  });
}

function listWorld(){
  fetchJSONFile('js/lvl/all-levels.json', function(data){
    var ulWrapper = document.createElement('ul');
    var wrapper = document.querySelector('main');
    wrapper.appendChild(ulWrapper);
    var obj = [ulWrapper, data.number];
    getWorldInfos(0, obj);
/*    for(a=0;a<data.number;a++){
      getInfos(a, obj);
    }*/
  });

}

function changeH2(txt){
  var h2 = document.querySelector("h2");
  h2.textContent = txt;
}

function removeCharacter(){
  var character = document.querySelector(".character");
  character.remove();
}

function removeBT(){
  var bt = document.querySelector(".bt");
  bt.remove();
}

function displayWorld(e){
  e.preventDefault();
  changeH2("Choose a temple");
  removeCharacter();
  removeBT();
  listWorld();
}

function btEvent(e){
  document.querySelector(".bt").addEventListener("click", displayWorld);
}