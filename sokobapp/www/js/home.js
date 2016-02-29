function initClickBtWorld(){
  var lksToWorld = document.querySelectorAll("ul li a");
  var i = 0;
  for (i; i < lksToWorld.length; i++) {
    console.log(i);
    lksToWorld[i].addEventListener('click', function(e){
      e.preventDefault();
      alert(this.getAttribute("data-href"));
    });
  }
}

function listWorld(){
  fetchJSONFile('js/lvl/all-levels.json', function(data){
    var ulWrapper = document.createElement('ul');
    var wrapper = document.querySelector('main');
    wrapper.appendChild(ulWrapper);
    var list = [], links = [], text = [];
    for(a=0;a<data.number;a++){
      list[a] = document.createElement('li');
      links[a] = document.createElement('a');
      links[a].setAttribute('href', 'game.html');
      links[a].setAttribute('data-href', a);
      text[a] = document.createTextNode("hello");
      links[a].appendChild(text[a]);
      list[a].appendChild(links[a]);
      ulWrapper.appendChild(list[a]);
    }
    initClickBtWorld();
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