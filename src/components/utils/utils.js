import { body } from '../const/const';

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
                        <h2>to switch the language: left сtrl + left alt </h2>
                        `;
}

export function keyDownKeuUpView(func, array, index) {
  for (let i = 0; i < array.length; i += 1) {
    if (i === index) {
      func(array[i], 'flex');
    } else func(array[i], 'none');
  }
}
