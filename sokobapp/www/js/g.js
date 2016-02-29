function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.overrideMimeType("application/json");
    httpRequest.onreadystatechange = function() {
      ///application/json
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send(); 
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function setRandomBG(){
  fetchJSONFile('css/i/bg/bg.json', function(data){
    random = Math.round(getRandomArbitrary(0,parseInt(data.number)));
    document.querySelector("html").style.backgroundImage = "url(css/i/bg/bg"+random+".png)";
  });
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

document.addEventListener("DOMContentLoaded", function(){
  setRandomBG();
  btEvent();
});
