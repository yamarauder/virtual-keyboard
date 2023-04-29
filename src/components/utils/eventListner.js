import Render from '../render/render';
import {
  changeLangHelper,
  keyDownKeuUpView,
  getLang,
  changeLangKeyboard,
  changeViewKeyboard,
  drawKey,
  drawKeyDelete,
  downKeyClap,
} from './utils';
import {
  rusLang,
  nameKey,
  amountKey,
  engLayout,
  shiftEngLayout,
  rusLayout,
  shiftRusLayout,
  rusLayoutCaps,
  engLayoutCaps,
} from '../const/const';

export default class EventListner {
  capsIndicator = 0;

  shiftIndicator = 0;

  focusValueStart;

  render = new Render();

  onListner() {
    changeLangKeyboard(
      () => changeViewKeyboard(
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
      this.focusValueStart = textarea.selectionStart;
      textarea.focus();
    });
    this.eventListnerCapsLock();
    this.eventKeyboard();
  }

  eventListnerCapsLock() {
    document.addEventListener('keydown', (event) => {
      event.preventDefault();
      const textarea = document.querySelector('.textarea');
      this.focusValueStart = textarea.selectionStart;
      textarea.focus();
      if ((event.key === 'CapsLock')) {
        if (this.capsIndicator === 0) {
          if (getLang() === rusLang) {
            keyDownKeuUpView(changeLangHelper, this.render.layoutKeyboard, 4);
          } else {
            keyDownKeuUpView(changeLangHelper, this.render.layoutKeyboard, 5);
          }
          this.capsIndicator = 1;
        } else {
          if (getLang() === rusLang) {
            keyDownKeuUpView(changeLangHelper, this.render.layoutKeyboard, 0);
          } else {
            keyDownKeuUpView(changeLangHelper, this.render.layoutKeyboard, 1);
          }
          this.capsIndicator = 0;
        }
      }
      if ((event.shiftKey === true) || ((event.shiftKey === true) && event.repeat)) {
        if (event.key === 'Alt') return;
        if (getLang() === rusLang) {
          keyDownKeuUpView(changeLangHelper, this.render.layoutKeyboard, 2);
        } else {
          keyDownKeuUpView(changeLangHelper, this.render.layoutKeyboard, 3);
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
          }
          if (this.shiftIndicator === 0 && this.capsIndicator !== 0) {
            downKeyClap(event, rusLayoutCaps);
          }
          if (this.shiftIndicator === 1) {
            downKeyClap(event, shiftRusLayout);
          }
        } else {
          if (this.shiftIndicator === 0 && this.capsIndicator === 0) {
            downKeyClap(event, engLayout);
          }
          if (this.shiftIndicator === 0 && this.capsIndicator !== 0) {
            downKeyClap(event, engLayoutCaps);
          }
          if (this.shiftIndicator === 1) {
            downKeyClap(event, shiftEngLayout);
          }
        }
      }
      if (event.key === 'Enter') {
        this.focusValueStart = textarea.selectionStart;
        textarea.value = `${textarea.value.slice(0, textarea.selectionStart)}\n${textarea.value.slice(textarea.selectionStart)}`;
        textarea.setSelectionRange(this.focusValueStart + 1, this.focusValueStart + 1);
      }
      if (event.key === 'ArrowUp') {
        textarea.value += '▲';
      }
      if (event.key === 'ArrowDown') {
        textarea.value += '▼';
      }
      if (event.key === 'ArrowLeft') {
        textarea.value += '◄';
      }
      if (event.key === 'ArrowRight') {
        textarea.value += '►';
      }
      if (event.key === 'Backspace') {
        if (textarea.selectionStart !== 0) {
          textarea.value = textarea.value.slice(0, this.focusValueStart - 1)
            + textarea.value.slice(this.focusValueStart);
          textarea.setSelectionRange(this.focusValueStart - 1, this.focusValueStart - 1);
        } else {
          textarea.setSelectionRange(this.focusValueStart, this.focusValueStart);
        }
      }
      if (event.key === 'Delete') {
        textarea.value = textarea.value.slice(0, textarea.selectionStart)
          + textarea.value.slice(textarea.selectionStart + 1);
        textarea.setSelectionRange(this.focusValueStart, this.focusValueStart);
      }
    });
    document.addEventListener('keyup', (event) => {
      if ((event.key === 'Shift')) {
        if (event.repeat) return;
        if (this.capsIndicator === 0) {
          if (getLang() === rusLang) {
            keyDownKeuUpView(changeLangHelper, this.render.layoutKeyboard, 0);
          } else {
            keyDownKeuUpView(changeLangHelper, this.render.layoutKeyboard, 1);
          }
        } else if (getLang() === rusLang) {
          keyDownKeuUpView(changeLangHelper, this.render.layoutKeyboard, 4);
        } else {
          keyDownKeuUpView(changeLangHelper, this.render.layoutKeyboard, 5);
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
    this.focusValueStart = textarea.selectionStart;
    document.querySelector('.keyboard').addEventListener('click', (e) => {
      textarea.focus();
      if (amountKey.includes(e.target.innerHTML)) {
        textarea.value += e.target.innerHTML;
      }
      if (e.target.innerHTML === '&lt;') textarea.value += '<';
      if (e.target.innerHTML === '&gt;') textarea.value += '>';
      if (e.target.innerHTML === 'Backspace') {
        if (textarea.selectionStart !== 0) {
          textarea.value = textarea.value.slice(0, this.focusValueStart - 1)
            + textarea.value.slice(this.focusValueStart);
          textarea.setSelectionRange(this.focusValueStart - 1, this.focusValueStart - 1);
        } else {
          textarea.setSelectionRange(this.focusValueStart, this.focusValueStart);
        }
      }
      if (e.target.innerHTML === 'DEL') {
        textarea.value = textarea.value.slice(0, textarea.selectionStart)
          + textarea.value.slice(textarea.selectionStart + 1);
        textarea.setSelectionRange(this.focusValueStart, this.focusValueStart);
      }
      if (e.target.innerHTML === 'ENTER') {
        textarea.value = `${textarea.value.slice(0, textarea.selectionStart)}\n${textarea.value.slice(textarea.selectionStart)}`;
        textarea.setSelectionRange(this.focusValueStart + 1, this.focusValueStart + 1);
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
            keyDownKeuUpView(changeLangHelper, this.render.layoutKeyboard, 4);
          } else {
            keyDownKeuUpView(changeLangHelper, this.render.layoutKeyboard, 5);
          }
          this.capsIndicator = 1;
        } else {
          drawKeyDelete(nameKey.indexOf('CapsLock'));
          if (getLang() === rusLang) {
            keyDownKeuUpView(changeLangHelper, this.render.layoutKeyboard, 0);
          } else {
            keyDownKeuUpView(changeLangHelper, this.render.layoutKeyboard, 1);
          }
          this.capsIndicator = 0;
        }
      }
    });
    document.querySelector('.keyboard').addEventListener('mousedown', (e) => {
      if ((e.target.innerHTML === 'Shift')) {
        if (getLang() === rusLang) {
          keyDownKeuUpView(changeLangHelper, this.render.layoutKeyboard, 2);
        } else {
          keyDownKeuUpView(changeLangHelper, this.render.layoutKeyboard, 3);
        }
      }
    });
    document.querySelector('.keyboard').addEventListener('mouseup', (e) => {
      if ((e.target.innerHTML === 'Shift')) {
        if (this.capsIndicator === 0) {
          if (getLang() === rusLang) {
            keyDownKeuUpView(changeLangHelper, this.render.layoutKeyboard, 0);
          } else {
            keyDownKeuUpView(changeLangHelper, this.render.layoutKeyboard, 1);
          }
        } else if (getLang() === rusLang) {
          keyDownKeuUpView(changeLangHelper, this.render.layoutKeyboard, 4);
        } else {
          keyDownKeuUpView(changeLangHelper, this.render.layoutKeyboard, 5);
        }
      }
    });
  }
}
