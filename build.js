const fs = require('fs')

const LVLS_DIR = './sokobapp/www/js/lvl'

var i = 0;
const lvls = fs.readdir(LVLS_DIR, (err, filenames) => {

      filenames
      	.filter(filename => /maps-[0-9]+\.js/.test(filename))
        .map(function(filename){
            i++;
        	  fs.writeFileSync(`${LVLS_DIR}/world-${i}.json`,
              JSON.stringify(
                require(`${LVLS_DIR}/${filename}`)
              )
            );
            fs.writeFileSync(
              `${LVLS_DIR}/all-levels.json`,
              `{"number":${i}}`
            )
        })

})