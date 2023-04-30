import {
  body,
  lang,
  nameKey,
  rusLang,
  storageLang,
  engLang,
  letters,
} from '../const/const';

export function changeLangHelper(inner, displayAmount) {
  document.querySelectorAll(inner).forEach(((elem) => {
    const el = elem;
    el.style.display = `${displayAmount}`;
  }));
}

export function startRender() {
  const crwrapper = document.createElement('div');
  crwrapper.classList.add('wrapper');

  const crtextWindow = document.createElement('textarea');
  crtextWindow.setAttribute('wrap', '');
  crtextWindow.setAttribute('name', 'textarea');
  crtextWindow.classList.add('textarea');

  const crkeyboard = document.createElement('div');
  crkeyboard.classList.add('keyboard');

  const crdiscriptions = document.createElement('div');
  crdiscriptions.classList.add('discriptions');

  body.prepend(crwrapper);
  const wrapper = document.querySelector('.wrapper');
  wrapper.prepend(crkeyboard);
  wrapper.prepend(crtextWindow);
  wrapper.append(crdiscriptions);
  const discript = document.querySelector('.discriptions');
  discript.innerHTML = `<h1> keyboard create in operating system windows</h1>
                        <h2>to switch the language: left shift + left alt </h2>
                        `;
}

export function keyDownKeuUpView(func, array, index) {
  for (let i = 0; i < array.length; i += 1) {
    if (i === index) {
      func(array[i], 'flex');
    } else func(array[i], 'none');
  }
}

export function getLang() {
  const langNow = localStorage.getItem(storageLang);
  if (lang.includes(langNow)) {
    return langNow;
  }
  localStorage.setItem(storageLang, engLang);
  return engLang;
}

export function changeLangKeyboard(func, ...codes) {
  const pressed = new Set();
  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);
    if (codes.some((code) => (!pressed.has(code)))) return;
    if (getLang() === rusLang) {
      localStorage.setItem(storageLang, engLang);
      func();
    } else {
      localStorage.setItem(storageLang, rusLang);
      func();
    }
  });
  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}

export function changeViewKeyboard(capsIndicator, language, layoutKeyboard, startLang) {
  if (capsIndicator === 0) {
    if (language === startLang) {
      keyDownKeuUpView(changeLangHelper, layoutKeyboard, 0);
    } else {
      keyDownKeuUpView(changeLangHelper, layoutKeyboard, 1);
    }
  } else if (language === startLang) {
    keyDownKeuUpView(changeLangHelper, layoutKeyboard, 4);
  } else {
    keyDownKeuUpView(changeLangHelper, layoutKeyboard, 5);
  }
}

export function drawKey(i) {
  if (i === -1) return;
  document.querySelector(`.button${i}`).classList.add('drawKeyButton');
  document.querySelector(`.englayout${i} `).classList.add('drawKeySpan');
  document.querySelector(`.shiftRusLayout${i} `).classList.add('drawKeySpan');
  document.querySelector(`.shiftEngLayout${i} `).classList.add('drawKeySpan');
  document.querySelector(`.capsRusLayout${i} `).classList.add('drawKeySpan');
  document.querySelector(`.capsEngLayout${i} `).classList.add('drawKeySpan');
  document.querySelector(`.ruslayout${i} `).classList.add('drawKeySpan');
}

export function drawKeyDelete(i) {
  if (i === -1) return;
  document.querySelector(`.button${i}`).classList.remove('drawKeyButton');
  document.querySelector(`.englayout${i} `).classList.remove('drawKeySpan');
  document.querySelector(`.shiftRusLayout${i} `).classList.remove('drawKeySpan');
  document.querySelector(`.shiftEngLayout${i} `).classList.remove('drawKeySpan');
  document.querySelector(`.capsRusLayout${i} `).classList.remove('drawKeySpan');
  document.querySelector(`.capsEngLayout${i} `).classList.remove('drawKeySpan');
  document.querySelector(`.ruslayout${i} `).classList.remove('drawKeySpan');
}

function cursorVvod(layout) {
  const textarea = document.querySelector('.textarea');
  const startPos = textarea.selectionStart;
  textarea.value = textarea.value.slice(0, startPos)
  + layout
  + textarea.value.slice(startPos - 1 + layout.length);
  textarea.setSelectionRange(startPos + 1, startPos + 1);
}

export function downKeyClap(event, Layout) {
  cursorVvod(Layout[nameKey.indexOf(event.code)]);
}

export function pressShiftAltHelper(language, boolean) {
  if (language === rusLang) {
    document.querySelectorAll('.shiftRusLayout').forEach(((elem) => {
      const el = elem;
      if (letters.includes(el.innerHTML)) {
        if (boolean) el.innerHTML = el.innerHTML.toLowerCase();
        if (!boolean) el.innerHTML = el.innerHTML.toUpperCase();
      }
    }));
  } else {
    document.querySelectorAll('.shiftEngLayout').forEach(((elem) => {
      const el = elem;
      if (letters.includes(el.innerHTML)) {
        if (boolean) el.innerHTML = el.innerHTML.toLowerCase();
        if (!boolean) el.innerHTML = el.innerHTML.toUpperCase();
      }
    }));
  }
}

export function pressShiftAlt(func, shiftIndicator, capsIndicator) {
  const pressed = new Set();
  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);
    if (shiftIndicator() === 0 || capsIndicator() === 0) {
      func(getLang(), false);
      return;
    }
    func(getLang(), true);
  });
  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}
