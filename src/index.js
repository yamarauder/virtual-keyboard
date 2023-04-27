import Render from './components/render/render';
import EventListner from './components/utils/eventListner';
import './components/render/render.css';

const render = new Render();
const listner = new EventListner();
render.renderPage();
listner.onListner();
