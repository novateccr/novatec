const fs = require('fs');
const toml = require('toml');
const yaml = require('js-yaml');
const glob = require('glob');

// Encuentra todos los archivos .md en el directorio actual y subdirectorios
const files = glob.sync('**/*.md');

files.forEach(function (file) {
  fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
      console.error('Error while reading file:', err);
      process.exit(1);
    }

    const frontMatterRegex = /(\+\+\+)((.|\n)*?)(\+\+\+)/g;
    const convertedData = data.replace(
      frontMatterRegex,
      function (_, p1, p2, p3, p4) {
        const tomlData = toml.parse(p2);
        const yamlData = yaml.dump(tomlData);
        return '---\n' + yamlData + '---';
      }
    );

    fs.writeFile(file, convertedData, function (err) {
      if (err) {
        console.error('Error while writing to file:', err);
        process.exit(1);
      }
    });
  });
});
