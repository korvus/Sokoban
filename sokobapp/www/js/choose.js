function listWorld(){
  fetchJSONFile('js/lvl/all-levels.json', function(data){
    var ulWrapper = document.querySelector("ul");
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
  });
}


document.addEventListener("DOMContentLoaded", function(){
  listWorld();
});