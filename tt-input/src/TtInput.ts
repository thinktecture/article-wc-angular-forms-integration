import { css, html, LitElement, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { query } from 'lit-element';

@customElement('tt-input')
export class TtInput extends LitElement {
  @property({ type: String }) label = 'Input within shadow DOM:';

  @property() value: string = '';

  @query('input') input!: HTMLInputElement;

  static styles = css`
    :host {
      display: inline-flex;
      justify-content: space-between;
      gap: 1rem;
      padding: 0.2rem;
      color: var(--tt-input-text-color, #000);
    }
    label {
      text-align: right;
    }
    input {
      border: none;
      background-color: transparent;
      margin: 0;
      border-radius: 10px;
      font-size: 0.8rem;
      font-weight: 200;
    }
    .input-box {
      display: inline-flex;
      border: 2px solid var(--tt-primary, #ff584f);
      border-radius: 10px;
      background-color: var(--tt-input-background-color);
      padding: 0 0.8rem;
      min-width: 170px;
    }

    ::slotted(*) {
      font-size: 0.8rem;
      font-weight: 200;
    }
  `;

  render() {
    return html`
      <label for=${this.id}>${this.label}</label>
      <div class="input-box">
        <input type="text" @input="${this.handleInput}" />
        <slot></slot>
      </div>
    `;
  }

  protected firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);
    this.input.value = this.value;
  }

  private handleInput() {
    this.value = this.input.value;
    this.dispatchValueChange();
  }

  private dispatchValueChange() {
    const options = {
      detail: this.value,
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('valueChange', options));
  }
}
