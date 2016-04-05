function windowPopup(url, w, h) {
    var left = (screen.width / 2) - (w / 2),
        top = (screen.height / 2) - (h / 2);

    window.open(url, 'name', 'menubar=0,toolbar=0,resizable=1,scrollbars=1,width=' + w + ',height=' + h + ',top=' + top + ',left=' + left);
};

var classname = document.getElementsByClassName('share'),
    myFunction = function(e) {
        e.preventDefault();
        windowPopup(this.getAttribute('href'), 650, 450);
    };

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', myFunction, false);
};
