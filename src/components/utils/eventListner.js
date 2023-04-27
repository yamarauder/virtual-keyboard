import Render from '../render/render';
import { changeLanquageHelper, keyDownKeuUpView } from './utils';

export default class EventListner {
  capsIndicator = 0;

  render = new Render();

  onListner() {
    this.eventListnerCapsLock();
  }

  eventListnerCapsLock() {
    document.addEventListener('keydown', (event) => {
      if ((event.key === 'CapsLock')) {
        if (this.capsIndicator === 0) {
          if (this.render.rubilnik === 0) {
            keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 4);
          } else {
            keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 5);
          }
          this.capsIndicator = 1;
        } else {
          if (this.render.rubilnik === 0) {
            keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 0);
          } else {
            keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 1);
          }
          this.capsIndicator = 0;
        }
      }
      if ((event.shiftKey === true) || ((event.shiftKey === true) && event.repeat)) {
        if (this.render.rubilnik === 0) {
          keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 2);
        } else {
          keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 3);
        }
      }
    });
    document.addEventListener('keyup', (event) => {
      if ((event.key === 'Shift')) {
        if (event.repeat) return;
        if (this.capsIndicator === 0) {
          if (this.render.rubilnik === 0) {
            keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 0);
          } else {
            keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 1);
          }
        } else if (this.render.rubilnik === 0) {
          keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 4);
        } else {
          keyDownKeuUpView(changeLanquageHelper, this.render.layoutKeyboard, 5);
        }
      }
    });
  }
}
