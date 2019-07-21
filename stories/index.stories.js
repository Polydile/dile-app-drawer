import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { DileAppDrawer } from '../dile-app-drawer.js';
import '../dile-app-drawer.js';

import readme from '../README.md';

storiesOf('dile-app-drawer', module)
  .addDecorator(withKnobs)
  .add(
    'Defautl drawer',
    () => html`
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
    `,
  )
  .add(
    'Customized drawer',
    () => html`
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
        .content {
          padding: 30px;
        }
        .content a {
          color: #fff;
        }
        dile-app-drawer {
          --dile-app-drawer-content-height: 100vh;
          --dile-app-drawer-background-color: #303090;
          --dile-app-drawer-closed-top: 0;
          --dile-app-drawer-closed-left: 100%;
        }
      </style>
      <dile-app-drawer id="menu">
        <div class="content">
          <p><a href="#">Link 1</a></p>
          <p><a href="#">Another link</a></p>
          <p><a href="#">More information</a></p>
          <p><a href="#">Contact us</a></p>
        </div>
      </dile-app-drawer>
      <div class="trigger" @click=${
        () => {
          let menu = document.getElementById('menu');
          menu.opened = ! menu.opened;
        }
      }>
        Abre / Cierra
      </div>
    `,
  )
  .add('Documentation', () => withClassPropertiesKnobs(DileAppDrawer), { notes: { markdown: readme } })
