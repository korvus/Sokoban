const fs = require('fs')

const LVLS_DIR = './sokobapp/www/js/lvl'

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