import {LitElement, html, customElement, css} from 'lit-element';

import 'profile-hover';
import '@material/mwc-button';

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  render() {
    return html`
      <h1>Hello 3Box!</h1>
      <threebox-address
        data-address='0xa8ee0babe72cd9a80ae45dd74cd3eae7a82fd5d1'
      ></threebox-address>
      <h1>Hello Material!</h1>
      <mwc-button raised>a button component</mwc-button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
