function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
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
  fetchJSONFile('r/css/i/bg/bg.json', function(data){
    random = Math.round(getRandomArbitrary(0,parseInt(data.number)));
    document.querySelector("html").style.backgroundImage = "url(r/css/i/bg/bg"+random+".png)";
    //console.log(random);
  });
}


document.addEventListener("DOMContentLoaded", function(){
  setRandomBG();
});
