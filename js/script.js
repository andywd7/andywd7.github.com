function windowPopup(url,w,h) {
    var left = (screen.width / 2) - (w / 2),
        top = (screen.height / 2) - (h / 2);
    window.open(url, 'name', 'menubar=0,toolbar=0,resizable=1,scrollbars=1,width=' + w + ',height=' + h + ',top=' + top + ',left=' + left);
};

var classname = document.getElementsByClassName('link--share');
var clickOpen = function(e) {
        e.preventDefault();
        windowPopup(this.getAttribute('href'), 500, 400);
    };

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', clickOpen, false);
};
