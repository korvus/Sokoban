const fs = require('fs')

const LVLS_DIR = './sokobapp/www/js/lvl'

const lvls = fs.readdir(LVLS_DIR, (err, filenames) => {
  fs.writeFileSync(
    `${LVLS_DIR}/levels.json`,
    JSON.stringify(
      filenames
      	.filter(filename => /maps-[0-9]+\.js/.test(filename))
        .map(filename => require(`${LVLS_DIR}/${filename}`))
    )
  )
})