/* eslint-disable no-console */
import {
  rusLayout,
  engLayout,
  shiftRusLayout,
  shiftEngLayout,
  rusLayoutCaps,
  engLayoutCaps,
} from '../const/const';

import { changeLanquageHelper, startRender } from '../utils/utils';

export default class Render {
  widthNorm = '50px';

  widthProbel = '357px';

  widthShift = '152px';

  widthTab = '87px';

  widthEnter = '115px';

  widthCtrl = '110px';

  displayNone = 'none';

  layoutKeyboard = ['.rusLayout', '.engLayout', '.shiftRusLayout', '.shiftEngLayout', '.capsRusLayout', '.capsEngLayout'];

  rubilnik = 0;

  renderPage() {
    startRender();
    this.createBlock();
    this.changeLanquage();
  }

  createBlock() {
    const keyboard = document.querySelector('.keyboard');
    for (let i = 0; i < rusLayout.length; i += 1) {
      keyboard.appendChild(
        this.createButton(
          rusLayout,
          engLayout,
          shiftRusLayout,
          shiftEngLayout,
          rusLayoutCaps,
          engLayoutCaps,
          i,
        ),
      );
    }
  }

  createButton(innerRus, innerEng, innerRusShift, innerEngShift, innerRusCaps, innerEngCaps, i) {
    const button = document.createElement('div');
    button.setAttribute('id', `button${i}`);
    if (i === 13 || i === 29 || i === 42) {
      button.setAttribute('style', `width: ${this.widthShift};`);
    } else if (i === 14) {
      button.setAttribute('style', `width: ${this.widthTab};`);
    } else if (i === 41) {
      button.setAttribute('style', `width: ${this.widthEnter};`);
    } else if (i === 61 || i === 56) {
      button.setAttribute('style', `width: ${this.widthCtrl};`);
    } else if (i === 59) {
      button.setAttribute('style', `width: ${this.widthProbel};`);
    } else {
      button.setAttribute('style', `width: ${this.widthNorm};`);
    }

    button.classList.add(`button${i}`);
    button.classList.add('button');
    button.innerHTML = ` <span class='ruslayout${i} rusLayout'>${innerRus[i]}</span> 
                         <span class='englayout${i} engLayout'>${innerEng[i]}</span>
                         <span class='shiftRusLayout${i} shiftRusLayout'>${innerRusShift[i]}</span>
                         <span class='shiftEngLayout${i} shiftEngLayout'>${innerEngShift[i]}</span>
                         <span class='capsRusLayout${i} capsRusLayout'>${innerRusCaps[i]}</span>
                         <span class='capsEngLayout${i} capsEngLayout'>${innerEngCaps[i]}</span>
                       `;
    return button;
  }

  changeLanquage() {
    if (localStorage.getItem('lang') === 'en') this.rubilnik = 1;
    if (localStorage.getItem('lang') === 'ru') this.rubilnik = 0;

    if (this.rubilnik === 0) {
      changeLanquageHelper(this.layoutKeyboard[1], 'none');
      changeLanquageHelper(this.layoutKeyboard[0], 'flex');
    } else {
      changeLanquageHelper(this.layoutKeyboard[1], 'flex');
      changeLanquageHelper(this.layoutKeyboard[0], 'none');
    }
  }
}
