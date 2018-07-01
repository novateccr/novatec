var critical = require('critical');

critical.generate({
  inline: true,
  base: 'public/',
  src: 'index.html',
  dest: 'index.html',
  width: 1366,
  height: 768
});