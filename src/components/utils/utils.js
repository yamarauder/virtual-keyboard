import {
  body, lang, rusLang, storageLang, engLang, amountKey,
} from '../const/const';

export function changeLanquageHelper(inner, displayAmount) {
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
  localStorage.setItem(storageLang, rusLang);
  return rusLang;
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

export function changeViewKetboard(capsIndicator, language, layoutKeyboard, startLang) {
  if (capsIndicator === 0) {
    if (language === startLang) {
      keyDownKeuUpView(changeLanquageHelper, layoutKeyboard, 0);
    } else {
      keyDownKeuUpView(changeLanquageHelper, layoutKeyboard, 1);
    }
  } else if (language === startLang) {
    keyDownKeuUpView(changeLanquageHelper, layoutKeyboard, 4);
  } else {
    keyDownKeuUpView(changeLanquageHelper, layoutKeyboard, 5);
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

export function pushButton(e, focusValue) {
  const textarea = document.querySelector('.textarea');
  textarea.focus();
  if (amountKey.includes(e.target.innerHTML)) {
    textarea.value += e.target.innerHTML;
  }
  if (e.target.innerHTML === '&lt;') textarea.value += '<';
  if (e.target.innerHTML === '&gt;') textarea.value += '>';
  if (e.target.innerHTML === 'Backspace') {
    if (textarea.selectionStart !== 0) {
      textarea.value = [...textarea.value].slice(0, textarea.selectionStart - 1).join('')
        + [...textarea.value].slice(textarea.selectionStart).join('');
    }
    textarea.setSelectionRange(focusValue - 1, focusValue - 1);
  }
  if (e.target.innerHTML === 'DEL') {
    textarea.value = [...textarea.value].slice(0, textarea.selectionStart).join('') + [...textarea.value].slice(textarea.selectionStart + 1).join('');
    textarea.setSelectionRange(focusValue, focusValue);
  }
  if (e.target.innerHTML === 'ENTER') {
    textarea.value = `${[...textarea.value].slice(0, textarea.selectionStart).join('')}\n${[...textarea.value].slice(textarea.selectionStart).join('')}`;
    textarea.setSelectionRange(focusValue + 1, focusValue + 1);
  }
  if ((e.target.innerHTML === 'Tab')) {
    textarea.value += '    ';
  }
}
