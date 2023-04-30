import Render from './components/render/render';
import EventListener from './components/utils/eventListner';
import './components/render/render.css';

const render = new Render();
const listener = new EventListener();
render.renderPage();
listener.onListener();
