/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import {
  body, rusLayout, engLayout, shiftRusLayout, shiftEngLayout,
} from '../const/const';

export default class Render {
  width = '1440px';

  renderPage() {
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

    // const textarea = document.querySelector('.textarea');
    const discript = document.querySelector('.discriptions');
    discript.innerHTML = `<h1> keyboard create in operating system windows</h1>
                          <h2>to switch the language: left сtrl + left alt </h2>
                          `;

    this.createBlock();
  }

  createBlock() {
    const keyboard = document.querySelector('.keyboard');
    let j = 1;
    for (let i = 0; i < rusLayout.length; i += 1) {
      if ((i === 0) || (i === 14) || (i === 29) || (i === 42) || (i === 56)) {
        keyboard.appendChild(this.createDiv(j));
        j += 1;
      }
      this.fillingBlock(i, j - 1);
    }
  }

  createDiv(j) {
    const div = document.createElement('div');
    div.classList.add('block');
    div.classList.add(`block${j}`);
    return div;
  }

  createButton(innerRus, innerEng, innerRusShift, innerEngShift, i) {
    const button = document.createElement('div');
    button.setAttribute('id', `button${i}`);
    button.classList.add(`button${i}`);
    button.classList.add('button');
    button.innerHTML = ` <span class='ruslayout${i} ruslayout'>${innerRus[i]}</span> 
                         <span class='englayout${i} englayout'>${innerEng[i]}</span>
                         <span class='shiftRusLayout${i} shiftRusLayout'>${innerRusShift[i]}</span>
                         <span class='shiftEngLayout${i} shiftEngLayout'>${innerEngShift[i]}</span>
                       `;
    return button;
  }

  fillingBlock(i, j) {
    const block = document.querySelector(`.block${j}`);
    block.appendChild(this.createButton(rusLayout, engLayout, shiftRusLayout, shiftEngLayout, i));
  }
}
