const folders = ['familias', 'industrias', 'marcas', 'ncmarcas']
const fs = require('fs');

folders.map(folder => {
  let testFolder = `./content/${folder}/`
  fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
      const fileToRename = `${testFolder}${file}/_index.md`
      fs.rename(fileToRename, `${testFolder}${file}.md`, function (err) {
        if (err) console.log('ERROR: ' + err);
      });
    });
  })
})