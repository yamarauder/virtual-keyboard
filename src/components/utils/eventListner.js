import Render from '../render/render';
import {
  changeLanquageHelper,
  keyDownKeuUpView,
  getLang,
  changeLangKeyboard,
  changeViewKetboard,
  drawKey,
  drawKeyDelete,
  pushButton,
} from './utils';
import { rusLang, nameKey } from '../const/const';

export default class EventListner {
  capsIndicator = 0;

  focusValue;

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
    this.eventListnerCapsLock();
    this.eventKeyboard();
  }

  eventListnerCapsLock() {
    document.addEventListener('keydown', (event) => {
      // event.preventDefault();
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
      }
      if (event.key) {
        if (nameKey.indexOf(event.code) !== -1) {
          drawKey(nameKey.indexOf(event.code));
        }
      }
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
      }
      if (event.key) {
        drawKeyDelete(nameKey.indexOf(event.code));
      }
    });
  }

  eventKeyboard() {
    const textarea = document.querySelector('.textarea');
    document.querySelector('.keyboard').addEventListener('click', (e) => pushButton(e, this.focusValue, this.render.layoutKeyboard));
    document.querySelector('.keyboard').addEventListener('click', (e) => {
      if (e.target.innerHTML === 'Caps Lock') {
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
    });
    textarea.addEventListener('blur', () => {
      this.focusValue = textarea.selectionStart;
    });
  }
}
