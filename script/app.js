const text = "#000000"
const bg1 = "#808080"
const bg2 = "#FFFFFF"

let sheet = document.styleSheets[2];
let rules = sheet.cssRules

let darkBtn;
let dark;

if (sessionStorage.getItem('dark') === null) {
    sessionStorage.setItem('dark', 'false');
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

function changeMode() {
    if (!dark) {
        sessionStorage.setItem('dark', 'false');
        document.documentElement.style
            .setProperty('--text', text);
        document.documentElement.style
            .setProperty('--bg2', bg2);

    }
    else {
        sessionStorage.setItem('dark', 'true');
        document.documentElement.style
            .setProperty('--text', bg2);
        document.documentElement.style
            .setProperty('--bg2', text);
    }
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'c' || event.key === 'C') { 
    document.documentElement.style.setProperty('--text', getRandomHexColor);
		document.documentElement.style.setProperty('--bg1', getRandomHexColor);
		document.documentElement.style.setProperty('--bg2', getRandomHexColor);
  }
});

function getRandomHexColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  while (randomColor.length < 6) {
    randomColor = "0" + randomColor;
  }
  return "#" + randomColor;
}