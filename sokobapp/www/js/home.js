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
  });

}

function setClickOnLvls(){
  var lksToLvls = document.querySelectorAll("ul li a");
  var c = 0;
  for (c; c < lksToLvls.length; c++){
    lksToLvls[c].addEventListener('click', function(e){
      e.preventDefault();
      localStorage.setItem("playWorld", this.dataset.world);
      localStorage.setItem("playLvl", this.dataset.lvl);
      document.location.href = "game.html";
    });
  }
}


function displayLvls(lvls, world){
  var nbLvls = lvls.length;
  var b = 0;
  var ul = document.querySelector('ul');
  ul.setAttribute("class","lvls");
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
      list[b].setAttribute("class","completed");
    }

    text[b] = document.createTextNode(b+1);
    links[b].appendChild(text[b]);
    list[b].appendChild(links[b]);
    ul.appendChild(list[b]);
  }
  setClickOnLvls();
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
    eltxt = document.createTextNode("temple "+(a+1)+" ("+data.length+" floors)");
    ela.appendChild(eltxt);
    elli.appendChild(ela);
    document.querySelector("ul").appendChild(elli);
    if(a==d-1){
      initClickBtWorld();
    }else{
      console.log(a);
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
    var bt = document.querySelector(".bt");
    bt.remove();
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
  listWorld();
}

function eventDisplayWorld(e){
  e.preventDefault();
  displayWorld();
}

function btEvent(e){
  document.querySelector(".bt").addEventListener("click", eventDisplayWorld);
}

//Function for remove all the stuffs on the homepage
function cleanHome(){
  removeLists();
  changeH2("Choose a temple");
  removeCharacter();
  removeBT();
}

function ifSessionStorage(){
  btEvent();
  if(sessionStorage.getItem("wantToGo")){
    if(sessionStorage.wantToGo === "lvls"){
      listLvl();
    }else if(sessionStorage.wantToGo === "world"){
      displayWorld();
    }
  }
}

document.addEventListener("DOMContentLoaded", function(){
  ifSessionStorage();
})