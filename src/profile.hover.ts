import { LitElement, html, css, property } from 'lit-element';

// import 3box stuff

export class ProfileHover extends LitElement {

  @property({ type: String, attribute: 'data-address' })
  dataAddress!: string;
  
  @property({ attribute: false })
  username: string = ''

  async firstUpdated() {
    this.username = this.dataAddress;
    // await profile read
    // this.username = ...
    // beacuse username has @property, changes are retected and reactiviy will just work.
  } 

  render() {
    return html`
      <h3>${this.username}</h3>
    `;
  }

  static styles = css`
    :host {
      display: block;
      border: solid 1px red;
      padding: 20px;
    }
  `;
}