import { html, render } from 'lit-html';
import '../dile-app-drawer.js';

const title = 'test';
render(html`
  <style>
  .trigger {
    position: fixed;
    background-color: red;
    color: #fff;
    padding: 15px;
    z-index: 9999999999999;
    top: 10px;
    left: 100px;
  }
  </style>
  <dile-app-drawer id="menu">
    <p><a href="#">Link 1</a></p>
    <p><a href="#">Another link</a></p>
    <p><a href="#">More information</a></p>
    <p><a href="#">Contact us</a></p>
  </dile-app-drawer>
  <div class="trigger" @click=${
    () => {
      let menu = document.getElementById('menu');
      menu.opened = ! menu.opened;
    }
  }>
    Abre / Cierra
  </div>
`, document.querySelector('#demo'));
