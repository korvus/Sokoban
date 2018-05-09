//https://github.com/straker/css-style-guide-audit < to test

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
  window.location = "#levels";
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

//Function for remove all the stuffs on the homepage
function cleanHome(){
  removeLists();
  removeConsol();
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