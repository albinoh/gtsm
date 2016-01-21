var stuffs = require('./component2');

document.write('Stuff is coming:<br>');

stuffs.forEach(function (stuff) {
    document.write(stuff);
    document.write('<br/>');
});
