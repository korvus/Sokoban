const fs = require('fs')
//const xml2js = require("xml2js");
//const parser = new xml2js.Parser();

const LVLS_DIR = './sokobapp/www/js/lvl'
const XTRA_LVLS_DIR = './sokobapp/www/js/extra'
const BG_DIR = './sokobapp/www/css/i/bg'

fs.readdir(LVLS_DIR, (err, filenames) => {
  const levels = (
    filenames
      .filter(filename => /maps-[0-9]+\.js/.test(filename))
      .map((filename, i) => {
        fs.writeFileSync(
          `${LVLS_DIR}/world-${i}.json`,
          JSON.stringify(require(`${LVLS_DIR}/${filename}`))
        )
      })
  )
  fs.writeFileSync(`${LVLS_DIR}/all-levels.json`, `{"number":${levels.length}}`)
})

fs.readdir(BG_DIR, (err, filenames) => {
  const background = filenames.filter(filename => /bg[0-9]+\.png/.test(filename));
  fs.writeFileSync(`${BG_DIR}/bg.json`, `{"number":${background.length}}`)
})

/*
fs.readdir(XTRA_LVLS_DIR, (err, filenames) => {
  const sokobanFiles = filenames
    .filter(xmlFile => /.*(\.slc|\.xml)/.test(xmlFile))
    .map((xmlFile, i) => {
              
          fs.readFile(`${XTRA_LVLS_DIR}/${xmlFile}`, function(err, data) {
            parser.parseString(data, function (err, result) {
              var r = result;
              const rootXML = r.SokobanLevels;
              //If fit with the xsd datas
              if(rootXML.$["xsi:schemaLocation"] === "SokobanLev.xsd"){
                //r.SokobanLevels.LevelCollection[0].Level.length
                //console.log(r.SokobanLevels.LevelCollection[0].Level.length);
                for (var lvls in rootXML.LevelCollection[0].Level) {
                  var widthLvl = rootXML.LevelCollection[0].Level[lvls].$.Width;
                  var heightLvl = rootXML.LevelCollection[0].Level[lvls].$.Height;
                  var oneLvl = rootXML.LevelCollection[0].Level[lvls].L;
                  for (var lines in rootXML.LevelCollection[0].Level[lvls].L){
                    if(rootXML.LevelCollection[0].Level[lvls].L[lines].length != widthLvl){
                      
                    }
                    console.log("line lenght is "+rootXML.LevelCollection[0].Level[lvls].L[lines].length+" when it must be "+);
                  }
                }

              };
              //fs.writeFileSync(`${XTRA_LVLS_DIR}/world-${i}.txt`, );
            })
          })

    });
})
*/
