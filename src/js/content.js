var link = document.querySelector('link[rel="import"]');
var content = link.import;
var element = content.querySelector('.flex-container');

document.body.appendChild(element.cloneNode(true));