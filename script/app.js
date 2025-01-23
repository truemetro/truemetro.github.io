const c1d = "#251749";
const c2d = "#263159";
const c3d = "#5c6b99";
const c4d = "#FFFBEB";

let sheet = document.styleSheets[2];
let rules = sheet.cssRules;

// let c1d = "#432C7A";
// let c2d = "#80489C";
// let c3d = "#FF8FB1";
// let c4d = "#FCE2DB";

links = document.querySelectorAll('a');
let body = document.querySelector('body');
let mnav = document.querySelector('.mnav');
let mnavmenu = document.querySelector('.mobilenav');
let newLocation;
let darkBtn;
let dark;


if (sessionStorage.getItem('dark') === null) {
    sessionStorage.setItem('dark', 'true');
}

if (sessionStorage.getItem('dark') == 'true') {
    dark = true;
}
else if (sessionStorage.getItem('dark') == 'false') {
    dark = false;
}

changeMode();

let symbols = document.querySelectorAll('.material-symbols-outlined');

symbols.forEach(symbol => {
    if (symbol.innerText == 'dark_mode' || symbol.innerText == 'brightness_5') {
        darkBtn = symbol;
    }
});

if (!dark) {
    darkBtn.innerText = 'brightness_5';
}
else {
    darkBtn.innerText = 'dark_mode';
}

darkBtn.addEventListener('click', function () {
    if (!dark) {
        darkBtn.innerText = 'dark_mode';
        dark = true;
        changeMode();
        
    }
    else {
        darkBtn.innerText = 'brightness_5';
        dark = false;
        changeMode();
    }
});

links.forEach(link => {
    if (link.href != window.location.href) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            newLocation = this.href;
            body.style.transform = 'translate(0, -100vh)';
            body.style.filter = 'blur(5px)';
            body.style.transition = 'all 0.5s';
            changeWindow(e);
        });

    }
    else {
        link.style.setProperty('text-decoration', 'none');
        link.addEventListener('click', function (e) {
            e.preventDefault();
        });
        link.innerHTML = '<svg width="10" height="10">'
            + '<circle cx = "5" cy = "5" r = "5" />'
            + '</svg >';
    }
});

function changeWindow(e) {
    window.location = newLocation;
}

function changeMode() {
    if (!dark) {
        sessionStorage.setItem('dark', 'false');
        document.documentElement.style
            .setProperty('--c1', c4d);
        document.documentElement.style
            .setProperty('--c2', c3d);
        document.documentElement.style
            .setProperty('--c3', c2d);
        document.documentElement.style
            .setProperty('--c4', c3d);

    }
    else {
        sessionStorage.setItem('dark', 'true');
        document.documentElement.style
            .setProperty('--c1', c1d);
        document.documentElement.style
            .setProperty('--c2', c2d);
        document.documentElement.style
            .setProperty('--c3', c3d);
        document.documentElement.style
            .setProperty('--c4', c4d);
    }
}

mnav.addEventListener('click', function () {
    if (getComputedStyle(mnavmenu).display == "none") {
        mnavmenu.style.display = 'grid';
    }
    else if (mnavmenu.style.display == 'grid') {
        mnavmenu.style.display = 'none';
    }
});