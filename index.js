const BODY = document.querySelector('body');
const createWrapper = document.createElement('div');
createWrapper.classList.add('wrapper');
const createText = document.createElement('textarea');
createText.setAttribute('wrap', '');
createText.setAttribute('name', 'textarea');
createText.classList.add('textarea');
const createBlock = document.createElement('div');
createBlock.classList.add('keybroad');
const Discriptions = document.createElement('div');
Discriptions.classList.add('discriptions');
BODY.prepend(createWrapper);
const Wrapper = document.querySelector('.wrapper');
Wrapper.prepend(createBlock);
Wrapper.prepend(createText);
Wrapper.append(Discriptions);
const Keybroad = document.querySelector('.keybroad');
const Textarea = document.querySelector('.textarea');
const Discript = document.querySelector('.discriptions');
Discript.innerHTML = `<h1>
keyboard create in operating system windows</h1>
<h2>
to switch the language: left сtrl + left alt </h2>`;
let rubilnik = 0;
let knop = 0;
// создание клопок
function createButton(inner, inner2, i) {
  const crbutton = document.createElement('div');
  crbutton.setAttribute('id', `button${i}`);
  crbutton.classList.add(`button${i}`);
  crbutton.classList.add('button');
  crbutton.innerHTML = ` <span class='span${i} spanrus'>${inner}</span> <span class='spaneng${i} spaneng'>${inner2}</span>`;
  return crbutton;
}
// создание блоков
function createDiv(i) {
  const crDiv = document.createElement('div');
  crDiv.classList.add(`block${i}`);
  crDiv.classList.add('block');
  return crDiv;
}

const arrayNameButton1 = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', ' ',
  ' ', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', ' ',
  ' ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', ' ',
  ' ', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', ' ', ' ',
  ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
const arrayNameButton2 = ['Backspace', 'Tab', 'DEL', 'Caps Lock', 'ENTER',
  'Shift', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', '&nbsp;',
  'Alt', 'Ctrl', '&#9668;', '&#9660;', '&#9658;'];

const arrayNameButton = [];

const arrayNamesubrus = ['!', '"', '№', ';', '%', '^', '&', '*', '(', ')', '_', '+', '/'];

const arrayNamesubeng = ['~', '!', '@', '#', '$', '%', ':', '?', '*', '(', ')', '_', '+', '/'];

const arrayNameButtonEng1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', ' ',
  ' ', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', ' ',
  ' ', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', '',
  ' ', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '/', ' ', ' ',
  ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
const arrayNameButtonEng = [];
let j = 0;
// массивы для rus и eng раскладки
for (let i = 0; i < arrayNameButton1.length; i += 1) {
  if (arrayNameButton1[i] === ' ') {
    arrayNameButton[i] = arrayNameButton2[j];

    arrayNameButtonEng[i] = arrayNameButton2[j];
    j += 1;
  } else {
    arrayNameButton[i] = arrayNameButton1[i];

    arrayNameButtonEng[i] = arrayNameButtonEng1[i];
  }
}
// нельзя написать в месте вставки курсора на вирт клаве
j = 0;

let p = 0;
let u = 0;
function createSpanBeforerus(inner, i) {
  const createspan = document.createElement('span');
  createspan.classList.add(`spansubrus${i}`);
  createspan.classList.add('spansubrus');
  createspan.innerHTML = `${inner}`;
  return createspan;
}

function createSpanBeforeeng(inner, i) {
  const createspan = document.createElement('span');
  createspan.classList.add(`spansubeng${i}`);
  createspan.classList.add('spansubeng');
  createspan.innerHTML = `${inner}`;
  return createspan;
}

// создаем и вносим кнопки с их полным заполнением
for (let i = 0; i < arrayNameButton.length; i += 1) {
  if ((i === 0) || (i === 14) || (i === 29) || (i === 42) || (i === 56)) {
    Keybroad.appendChild(createDiv(j));

    j += 1;
  }

  // rus
  document.querySelector(`.block${j - 1}`).appendChild(createButton(arrayNameButton[i], arrayNameButtonEng[i], i));

  if ((i > 0) && ((i < 13) || (i === 27))) {
    document.querySelector(`.button${i}`).prepend(createSpanBeforerus(arrayNamesubrus[p], i));

    p += 1;
  }

  if (((i < 13) || (i === 27))) {
    // eng
    document.querySelector(`.button${i}`).prepend(createSpanBeforeeng(arrayNamesubeng[u], i));
    u += 1;
  }
}

// let language = localStorage.getItem(`lang`);
function changeLanquage() {
  if (localStorage.getItem('lang') === 'en') rubilnik = 1;
  if (localStorage.getItem('lang') === 'ru') rubilnik = 0;
  if (rubilnik === 0) {
    for (let i = 0; i < arrayNameButton.length; i += 1) {
      document.querySelector(`.spaneng${i}`).style.display = 'none';
      if (document.querySelector(`.spansubeng${i}`)) {
        document.querySelector(`.spansubeng${i}`).style.display = 'none';
      }
      document.querySelector(`.span${i}`).style.display = 'flex';
      if (document.querySelector(`.spansubrus${i}`)) {
        document.querySelector(`.spansubrus${i}`).style.display = 'flex';
      }
    } // rubilnik-= 1
  } else {
    for (let i = 0; i < arrayNameButton.length; i += 1) {
      document.querySelector(`.span${i}`).style.display = 'none';
      if (document.querySelector(`.spansubrus${i}`)) {
        document.querySelector(`.spansubrus${i}`).style.display = 'none';
      }
      document.querySelector(`.spaneng${i}`).style.display = 'flex';
      if (document.querySelector(`.spansubeng${i}`)) {
        document.querySelector(`.spansubeng${i}`).style.display = 'flex';
      }
    }
  }

  knop = rubilnik;
}
changeLanquage();

p = 0;
j = 0;
u = 0;
let rubilnik2 = 0;
const arrayNameС = ['Backquote', 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 'KeyQ', 'KeyW', 'KeyE', 'KeyR',
  'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 1, 1, 1,
  'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 1, 1,
  'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1];

// вывод символов на клаве в облость ввода

// const pos = 0;
let focusValue = 0;

// отрабатываем события нажатия на витруальной клавиатуре
function PushButton(e) {
  Textarea.focus();
  if (e.target.innerHTML === 'Backspace') {
    if (Textarea.selectionStart !== 0) {
      Textarea.value = [...Textarea.value].slice(0, Textarea.selectionStart - 1).join('')
        + [...Textarea.value].slice(Textarea.selectionStart).join('');
    }
    Textarea.setSelectionRange(focusValue - 1, focusValue - 1);
  }

  if (e.target.innerHTML === 'DEL') {
    Textarea.value = [...Textarea.value].slice(0, Textarea.selectionStart).join('') + [...Textarea.value].slice(Textarea.selectionStart + 1).join('');
    Textarea.setSelectionRange(focusValue, focusValue);
  }

  if (e.target.innerHTML === 'ENTER') {
    Textarea.value = `${[...Textarea.value].slice(0, Textarea.selectionStart).join('')}\n${[...Textarea.value].slice(Textarea.selectionStart).join('')}`;
    Textarea.setSelectionRange(focusValue + 1, focusValue + 1);
  }

  if (e.target.innerHTML === 'Caps Lock') {
    if (rubilnik2 === 0) {
      for (let i = 0; i < arrayNameС.length; i += 1) {
        if (arrayNameС[i] !== 1) {
          document.querySelector(`.span${i}`).innerHTML = document.querySelector(`.span${i}`).innerHTML.toUpperCase();
          document.querySelector(`.spaneng${i}`).innerHTML = document.querySelector(`.spaneng${i}`).innerHTML.toUpperCase();
        }
      }
      rubilnik2 += 1;
      return rubilnik2;
    }

    if (rubilnik2 === 1) {
      for (let i = 0; i < arrayNameС.length; i += 1) {
        if (arrayNameС[i] !== 1) {
          document.querySelector(`.span${i}`).innerHTML = document.querySelector(`.span${i}`).innerHTML.toLowerCase();
          document.querySelector(`.spaneng${i}`).innerHTML = document.querySelector(`.spaneng${i}`).innerHTML.toLowerCase();
        }
      }
      rubilnik2 -= 1;
      return rubilnik2;
    }
  }

  if ((e.target.innerHTML === 'Tab')) {
    Textarea.value += '    ';
    return Textarea.value;
  }
  if ((e.target.innerHTML.length === 6)) {
    Textarea.value += ' ';
    return Textarea.value;
  }
  if ((e.target.innerHTML.length > 1)) return false;

  Textarea.value = `${[...Textarea.value].slice(0, Textarea.selectionStart).join('')}${e.target.innerHTML}${[...Textarea.value].slice(Textarea.selectionEnd).join('')}`;

  Textarea.setSelectionRange(focusValue + 1, focusValue + 1);
}
Keybroad.addEventListener('click', (e) => PushButton(e));

Textarea.addEventListener('blur', () => {
  focusValue = Textarea.selectionStart;
});

function SwutButton(event, background, color) {
  if ((event.target.classList[0] === 'keybroad') || (event.target.classList[0] === 'block1')
    || (event.target.classList[0] === 'block0') || (event.target.classList[0] === 'block2')
    || (event.target.classList[0] === 'block3') || (event.target.classList[0] === 'block4')) return;

  if ((event.target.classList[0].slice(0, 6) === 'button')) return;

  if ((event.target.classList[0] === 'span29') || (event.target.classList[0] === 'spaneng29') || (rubilnik2 === 0)) {
    document.querySelector(`.button${29}`).style.background = 'blue';
    document.querySelector(`.span${29}`).style.color = 'white';
    document.querySelector(`.spaneng${29}`).style.color = 'white';
  }
  if (((event.target.classList[0] === 'spaneng29') && (event.target.classList[0] === 'span29')) || (rubilnik2 === 1)) {
    document.querySelector(`.button${29}`).style.background = '#cdcdcd';
    document.querySelector(`.span${29}`).style.color = 'green';
    document.querySelector(`.spaneng${29}`).style.color = 'green';
  }
  if ((!(event.target.classList[0] === 'span29') && !(event.target.classList[0] === 'spaneng29')) || (rubilnik2 === 1)) {
    document.querySelector(`.button${29}`).style.background = '#cdcdcd';
    document.querySelector(`.span${29}`).style.color = 'green';
    document.querySelector(`.spaneng${29}`).style.color = 'green';
  }

  if ((event.target.classList[0].slice(4, 7) === 'eng') && (!(event.target.classList[0] === 'spaneng29'))) {
    document.querySelector(`.button${event.target.classList[0].slice(7)}`).style.background = background;

    document.querySelector(`.${event.target.classList[0]}`).style.color = color;
  } else if (((event.target.classList[0].slice(4, 7) !== 'eng')) && ((event.target.classList[0] !== 'span29'))) {
    document.querySelector(`.button${event.target.classList[0].slice(4)}`).style.background = background;
    document.querySelector(`.${event.target.classList[0]}`).style.color = color;
  }
}
Keybroad.addEventListener('mousedown', (event) => SwutButton(event, 'blue', 'white'));

Keybroad.addEventListener('mouseup', (event) => SwutButton(event, '#cdcdcd', 'green'));

// подсвет клавиш при нажатии

const arrayNameB = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7',
  'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR',
  'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'Caps Lock',
  'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'ENTER', 'Shift',
  'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

function HendlerKeyBoardsButtons(event, background, color) {
  // console.log(event.key);//название
  // console.log(event.code)
  for (let i = 0; i < arrayNameButton1.length; i += 1) {
    // console.log(event.key)

    if ((event.key === ' ')) { // пробел
      document.querySelector(`.button${59}`).style.background = background;
      document.querySelector(`.span${59}`).style.color = color;
    }
    if ((i !== 42) && (i !== 55) && (i !== 58) && (i !== 60)) {
      if ((event.code === arrayNameB[i])) {
        document.querySelector(`.button${i}`).style.background = background;
        document.querySelector(`.span${i}`).style.color = color;
        document.querySelector(`.spaneng${i}`).style.color = color;
      }
    }

    if ((event.key === 'CapsLock')) {
      document.querySelector(`.button${29}`).style.background = background;
      document.querySelector(`.span${29}`).style.color = color;
      document.querySelector(`.spaneng${29}`).style.color = color;
    }

    if ((event.key === 'CapsLock') || (rubilnik2 === 1)) {
      document.querySelector(`.button${29}`).style.background = 'blue';
      document.querySelector(`.span${29}`).style.color = 'white';
      document.querySelector(`.spaneng${29}`).style.color = 'white';
    }
    if (!(event.key === 'CapsLock') || (rubilnik2 === 0)) {
      document.querySelector(`.button${29}`).style.background = '#cdcdcd';
      document.querySelector(`.span${29}`).style.color = 'green';
      document.querySelector(`.spaneng${29}`).style.color = 'green';
    }

    if ((event.code === 'ShiftRight')) {
      document.querySelector(`.button${55}`).style.background = background;
      document.querySelector(`.span${55}`).style.color = color;
      document.querySelector(`.spaneng${55}`).style.color = color;
    }

    if ((event.code === 'ShiftLeft')) {
      document.querySelector(`.button${42}`).style.background = background;
      document.querySelector(`.span${42}`).style.color = color;
      document.querySelector(`.spaneng${42}`).style.color = color;
    }

    if ((event.code === 'ControlLeft')) {
      document.querySelector(`.button${56}`).style.background = background;
      document.querySelector(`.span${56}`).style.color = color;
      document.querySelector(`.spaneng${56}`).style.color = color;
    }

    if ((event.code === 'ControlRight')) {
      document.querySelector(`.button${61}`).style.background = background;
      document.querySelector(`.span${61}`).style.color = color;
      document.querySelector(`.spaneng${61}`).style.color = color;
    }

    if ((event.code === 'AltLeft')) {
      document.querySelector(`.button${58}`).style.background = background;
      document.querySelector(`.span${58}`).style.color = color;
      document.querySelector(`.spaneng${58}`).style.color = color;
    }

    if ((event.code === 'AltRight')) {
      document.querySelector(`.button${60}`).style.background = background;
      document.querySelector(`.span${60}`).style.color = color;
      document.querySelector(`.spaneng${60}`).style.color = color;
    }

    if ((event.key === 'Enter')) {
      document.querySelector(`.button${41}`).style.background = background;
      document.querySelector(`.span${41}`).style.color = color;
      document.querySelector(`.spaneng${41}`).style.color = color;
    }
    if ((event.key === 'Delete')) {
      document.querySelector(`.button${28}`).style.background = background;
      document.querySelector(`.span${28}`).style.color = color;
      document.querySelector(`.spaneng${28}`).style.color = color;
    }

    if ((event.key === 'Meta')) {
      document.querySelector(`.button${57}`).style.background = background;
      document.querySelector(`.span${57}`).style.color = color;
      document.querySelector(`.spaneng${57}`).style.color = color;
    }

    if ((event.key === 'ArrowUp')) {
      document.querySelector(`.button${54}`).style.background = background;
      document.querySelector(`.span${54}`).style.color = color;
      document.querySelector(`.spaneng${54}`).style.color = color;
    }
    if ((event.key === 'ArrowLeft')) {
      document.querySelector(`.button${62}`).style.background = background;
      document.querySelector(`.span${62}`).style.color = color;
      document.querySelector(`.spaneng${62}`).style.color = color;
    }
    if ((event.key === 'ArrowRight')) {
      document.querySelector(`.button${64}`).style.background = background;
      document.querySelector(`.span${64}`).style.color = color;
      document.querySelector(`.spaneng${64}`).style.color = color;
    }
    if ((event.key === 'ArrowDown')) {
      document.querySelector(`.button${63}`).style.background = background;
      document.querySelector(`.span${63}`).style.color = color;
      document.querySelector(`.spaneng${63}`).style.color = color;
    }
  }
}
document.addEventListener('keydown', (event) => HendlerKeyBoardsButtons(event, 'blue', 'white'));

document.addEventListener('keyup', (event) => HendlerKeyBoardsButtons(event, '#cdcdcd', 'green'));

// смена языка на клаве
// при зажатии клавиш вызываем функцию

function RunOnKeys(func, ...codes) {
  const pressed = new Set();

  document.addEventListener('keydown', (event) => {
    if ((event.code === 'ShiftLeft')) return;

    pressed.add(event.code);

    if (codes.some((code) => (!pressed.has(code)))) return;
    func();
  });

  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}

// при зажатии клавиш меняем язык на клаве

RunOnKeys(
  () => {
    if (localStorage.getItem('lang') === 'en') {
      localStorage.setItem('lang', 'ru');
    } else {
      localStorage.setItem('lang', 'en');
    }
    changeLanquage();
  },
  'AltLeft',
  'ControlLeft',

);

const arrayNameD = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7',
  'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 'Backslash'];

// CapsLock
RunOnKeys(
  () => {
    // console.log(rubilnik2 );
    if (rubilnik2 === 0) {
      for (let i = 0; i < arrayNameС.length; i += 1) {
        if (arrayNameС[i] !== 1) {
          document.querySelector(`.span${i}`).innerHTML = document.querySelector(`.span${i}`).innerHTML.toUpperCase();
          document.querySelector(`.spaneng${i}`).innerHTML = document.querySelector(`.spaneng${i}`).innerHTML.toUpperCase();
        }
      }
      rubilnik2 += 1;
      return rubilnik2;
    }

    for (let i = 0; i < arrayNameС.length; i += 1) {
      if (arrayNameС[i] !== 1) {
        document.querySelector(`.span${i}`).innerHTML = document.querySelector(`.span${i}`).innerHTML.toLowerCase();
        document.querySelector(`.spaneng${i}`).innerHTML = document.querySelector(`.spaneng${i}`).innerHTML.toLowerCase();
      }
    }
    rubilnik2 -= 1;
    return rubilnik2;
  },

  'CapsLock',
);

// Shift
document.addEventListener('keydown', (event) => {
  if ((event.shiftKey === true) || ((event.shiftKey === true) && event.repeat)) {
    for (let i = 0; i < arrayNameС.length; i += 1) {
      if (arrayNameС[i] !== 1) {
        document.querySelector(`.span${i}`).innerHTML = document.querySelector(`.span${i}`).innerHTML.toUpperCase();
        document.querySelector(`.spaneng${i}`).innerHTML = document.querySelector(`.spaneng${i}`).innerHTML.toUpperCase();
      }
    }
  }
});
document.addEventListener('keyup', (event) => {
  if ((event.key === 'Shift')) {
    for (let i = 0; i < arrayNameС.length; i += 1) {
      if (arrayNameС[i] !== 1) {
        document.querySelector(`.span${i}`).innerHTML = document.querySelector(`.span${i}`).innerHTML.toLowerCase();
        document.querySelector(`.spaneng${i}`).innerHTML = document.querySelector(`.spaneng${i}`).innerHTML.toLowerCase();
      }
    }
  }
});

// Shift символы над цифрами
let amountInner = 0;
let kolzahodov = 0;

document.addEventListener('keydown', (event) => {
  if ((event.shiftKey === true)) {
    if (event.repeat) return;

    for (let i = 0; i < arrayNameD.length; i += 1) {
      if (arrayNameD[i] !== 1) {
        if ((i < 13) || (i === 27)) {
          kolzahodov += 1;

          if (kolzahodov > 14) return;
          if ((knop === 0) && (i !== 0)) {
            amountInner = document.querySelector(`.span${i}`).innerHTML;

            document.querySelector(`.span${i}`).innerHTML = document.querySelector(`.spansubrus${i}`).innerHTML;

            document.querySelector(`.spansubrus${i}`).innerHTML = amountInner;
          } else {
            amountInner = document.querySelector(`.spaneng${i}`).innerHTML;

            document.querySelector(`.spaneng${i}`).innerHTML = document.querySelector(`.spansubeng${i}`).innerHTML;

            document.querySelector(`.spansubeng${i}`).innerHTML = amountInner;
          }
        }
      }
    }
  }
});

document.addEventListener('keyup', (event) => {
  if ((event.key === 'Shift') || ((event.key === 'Shift') && event.repeat)) {
    //
    for (let i = 0; i < arrayNameD.length; i += 1) {
      if (arrayNameD[i] !== 1) {
        if ((i < 13) || (i === 27)) {
          if ((knop === 0) && (i !== 0)) {
            amountInner = document.querySelector(`.spansubrus${i}`).innerHTML;
            document.querySelector(`.spansubrus${i}`).innerHTML = document.querySelector(`.span${i}`).innerHTML;

            document.querySelector(`.span${i}`).innerHTML = amountInner;
          } else {
            amountInner = document.querySelector(`.spansubeng${i}`).innerHTML;
            document.querySelector(`.spansubeng${i}`).innerHTML = document.querySelector(`.spaneng${i}`).innerHTML;

            document.querySelector(`.spaneng${i}`).innerHTML = amountInner;
          }
        }
      }
      kolzahodov = 0;
    }

    //
  }
});
