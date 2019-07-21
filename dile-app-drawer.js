import { LitElement, html, css } from 'lit-element';

export class DileAppDrawer extends LitElement {
  
  static get properties() {
    return {
      opened: { type: Boolean },
      _currentClass: { type: String }
    };
  }

  constructor() {
    super();
    this.opened = false;
    this._currentClass = '';
  }

  static get styles() { 
    return css`
      :host {
        display: block;
      }
      
      .menu {
        display: none;
        position: fixed;
        top: -100vh;
        left: 0;
        width: 100vw;
        height: var(--dile-app-drawer-content-height, auto);
        background-color: var(--dile-app-drawer-background-color, #ddd);
        z-index: var(--dile-app-drawer-z-index, 10000);
        padding: var(--dile-app-drawer-relocate-from, 40vh 0 0 0);
        overflow: hidden;
        transition-property: top, padding;
        transition-duration: 0.3s, 0.3s;
        transition-delay: 0s, 0.35s;
        transition-timing-function: ease, ease-in;
      }

      .opening {
        display: block;
      }

      .opened {
        top: 0;
        padding: 0;
        display: block;
      }
      `;
  }

  render() {
    return html`
      <div class="menu ${ this._currentClass }">
          <slot></slot>
      </div>
    `;
  }

  updated(changedProperties) {
    if(changedProperties.has('opened')) {
      if(this.opened) {
        this._currentClass = 'opening';
        setTimeout(() => this._currentClass = 'opened', 100);
      } else {
        this._currentClass = 'opening';
        setTimeout(() => this._currentClass = '', 200);
      }  
    }
  }

  toggle() {
    this.opened = !this.opened;
  }

  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }
}
customElements.define('dile-app-drawer', DileAppDrawer);