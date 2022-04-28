import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { queryAssignedElements } from 'lit-element';

@customElement('tt-input')
export class TtInput extends LitElement {
  @queryAssignedElements({ selector: 'label' })
  slottedLabel!: ReadonlyArray<HTMLLabelElement | undefined>;

  static styles = css`
    :host {
      display: inline-flex;
      justify-content: space-between;
      gap: 1rem;
      padding: 0.2rem;
      color: var(--tt-input-text-color, #000);
    }

    ::slotted(label) {
      text-align: right;
    }

    .input-box {
      display: inline-flex;
      border: 2px solid var(--tt-primary, #ff584f);
      border-radius: 10px;
      background-color: var(--tt-input-background-color);
      padding: 0 0.8rem;
      min-width: 170px;
    }

    .input-box ::slotted(input) {
      border: none;
      background-color: transparent;
      margin: 0;
      border-radius: 10px;
      font-size: 0.8rem;
      font-weight: 200;
      order: 1;
    }

    ::slotted(input:focus-visible) {
      border: none;
      background-color: transparent;
      outline: none;
    }

    ::slotted(span) {
      font-size: 0.8rem;
      order: 3;
    }
  `;

  render() {
    return html`
      <slot name="label"></slot>
      <div class="input-box">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }

  private handleSlotChange(): void {
    const [label] = this.slottedLabel;
    if (label) {
      label.setAttribute('slot', 'label');
    }
  }
}
