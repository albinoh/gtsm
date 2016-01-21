var stuffs = require('./component2')
require("./style.css");

document.write('Stuff is coming:<br>');

stuffs.forEach(function (stuff) {
    document.write('<span class="stuff">' + stuff + '</span>');
    document.write('<br/>');
});
