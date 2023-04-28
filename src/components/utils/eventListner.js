import Render from '../render/render';
import {
  changeLanquageHelper,
  keyDownKeuUpView,
  getLang,
  changeLangKeyboard,
  changeViewKetboard,
  drawKey,
  drawKeyDelete,
  downKeyClap,
} from './utils';
import {
  rusLang, nameKey, amountKey, engLayout, shiftEngLayout, rusLayout, shiftRusLayout,
} from '../const/const';

export default class EventListner {
  capsIndicator = 0;

  shiftIndicator = 0;

  focusValue = 0;

  render = new Render();

  onListner() {
    changeLangKeyboard(
      () => changeViewKetboard(
        this.capsIndicator,
        getLang(),
        this.render.layoutKeyboard,
        rusLang,
      ),
      'AltLeft',
      'ShiftLeft',
    );
    const textarea = document.querySelector('.textarea');
    textarea.addEventListener('blur', () => {
      this.focusValue = textarea.selectionStart;
      textarea.focus();
    });
    this.eventListnerCapsLock();
    this.eventKeyboard();
  }

  eventListnerCapsLock() {
    document.addEventListener('keydown', (event) => {
      event.preventDefault();
      const textarea = document.querySelector('.textarea');
      textarea.focus();
      if ((event.key === 'CapsLock')) {
        if (this.capsIndicator === 0) {
          if (getLang() === rusLang) {
            keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 4);
          } else {
            keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 5);
          }
          this.capsIndicator = 1;
        } else {
          if (getLang() === rusLang) {
            keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 0);
          } else {
            keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 1);
          }
          this.capsIndicator = 0;
        }
      }
      if ((event.shiftKey === true) || ((event.shiftKey === true) && event.repeat)) {
        if (event.key === 'Alt') return;
        if (getLang() === rusLang) {
          keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 2);
        } else {
          keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 3);
        }
        this.shiftIndicator = 1;
      }
      if (event.key) {
        if (nameKey.indexOf(event.code) !== -1) {
          drawKey(nameKey.indexOf(event.code));
        }
        if (event.code === 'CapsLock' && this.capsIndicator !== 0) {
          drawKey(nameKey.indexOf(event.code));
        }
      }
      if (event.key === 'Tab') {
        textarea.value += '    ';
      }
      if (amountKey.includes(event.key)) {
        if (getLang() === rusLang) {
          if (this.shiftIndicator === 0 && this.capsIndicator === 0) {
            downKeyClap(event, rusLayout);
            if (this.shiftIndicator === 0 && this.capsIndicator !== 0) {
              downKeyClap(event, shiftRusLayout);
            }
          } else {
            downKeyClap(event, shiftRusLayout);
          }
        }
        //  else if (this.shiftIndicator === 0) {
        //   if (engLayout.indexOf(event.key) === -1) {
        //     textarea.value += engLayout[rusLayout.indexOf(event.key)];
        //   } else {
        //     textarea.value += engLayout[engLayout.indexOf(event.key)];
        //   }
        // } else if (shiftEngLayout.indexOf(event.key) === -1) {
        //   textarea.value += shiftEngLayout[shiftRusLayout.indexOf(event.key)];
        // } else {
        //   textarea.value += shiftEngLayout[shiftEngLayout.indexOf(event.key)];
        // }
      }
      // if (event.key === 'Enter') {
      //   textarea.value = `${[...textarea.value].slice(0, textarea.selectionStart).join('')}\n${[...textarea.value].slice(textarea.selectionStart).join('')}`;
      //   textarea.setSelectionRange(this.focusValue, this.focusValue);
      // }
      // console.log(this.focusValue);
    });
    document.addEventListener('keyup', (event) => {
      if ((event.key === 'Shift')) {
        if (event.repeat) return;
        if (this.capsIndicator === 0) {
          if (getLang() === rusLang) {
            keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 0);
          } else {
            keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 1);
          }
        } else if (getLang() === rusLang) {
          keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 4);
        } else {
          keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 5);
        }
        this.shiftIndicator = 0;
      }
      if (event.key) {
        drawKeyDelete(nameKey.indexOf(event.code));
      }
      if (event.code === 'CapsLock' && this.capsIndicator !== 0) {
        drawKey(nameKey.indexOf(event.code));
      }
    });
  }

  eventKeyboard() {
    const textarea = document.querySelector('.textarea');
    document.querySelector('.keyboard').addEventListener('click', (e) => {
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
        textarea.setSelectionRange(this.focusValue - 1, this.focusValue - 1);
      }
      if (e.target.innerHTML === 'DEL') {
        textarea.value = [...textarea.value].slice(0, textarea.selectionStart).join('') + [...textarea.value].slice(textarea.selectionStart + 1).join('');
        textarea.setSelectionRange(this.focusValue, this.focusValue);
      }
      if (e.target.innerHTML === 'ENTER') {
        textarea.value = `${[...textarea.value].slice(0, textarea.selectionStart).join('')}\n${[...textarea.value].slice(textarea.selectionStart).join('')}`;
        textarea.setSelectionRange(this.focusValue + 1, this.focusValue + 1);
      }
      if ((e.target.innerHTML === 'Tab')) {
        textarea.value += '    ';
      }
    });
    document.querySelector('.keyboard').addEventListener('click', (e) => {
      if (e.target.innerHTML === 'Caps Lock') {
        if (this.capsIndicator === 0) {
          drawKey(nameKey.indexOf('CapsLock'));
          if (getLang() === rusLang) {
            keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 4);
          } else {
            keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 5);
          }
          this.capsIndicator = 1;
        } else {
          drawKeyDelete(nameKey.indexOf('CapsLock'));
          if (getLang() === rusLang) {
            keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 0);
          } else {
            keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 1);
          }
          this.capsIndicator = 0;
        }
      }
    });
    document.querySelector('.keyboard').addEventListener('mousedown', (e) => {
      if ((e.target.innerHTML === 'Shift')) {
        if (getLang() === rusLang) {
          keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 2);
        } else {
          keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 3);
        }
      }
    });
    document.querySelector('.keyboard').addEventListener('mouseup', (e) => {
      if ((e.target.innerHTML === 'Shift')) {
        if (this.capsIndicator === 0) {
          if (getLang() === rusLang) {
            keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 0);
          } else {
            keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 1);
          }
        } else if (getLang() === rusLang) {
          keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 4);
        } else {
          keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 5);
        }
      }
    });
  }
}
