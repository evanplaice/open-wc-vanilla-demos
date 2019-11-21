class ConditionalRendering extends HTMLElement {
  constructor() {
    super();
    this.__disabled = false;
    this.__showMessage = false;
  }

  static observedAttributes() {
    return ['message'];
  }

  get disabled() { return this.__disabled; }
  set disabled(value) {
    this.__disabled = value;
    this.render();
  }

  get showMessage() { return this.__showMessage; }
  set showMessage(value) {
    this.__showMessage = value;
    this.render();
  }

  get message() { return this.getAttribute('message'); }
  set message(value) { this.setAttribute('message', value); }

  connectedCallback() {
    this.render();
  }

  render() {
    // you can use regular if statements
    if (this.disabled) {
      this.innerHTML = `Nothing to see here`;
      return;
    }

    this.innerHTML = `
      <div>
        <!-- You can use ternary expressions for quick conditional rendering -->
        <button id="show-message">
          Click to ${this.showMessage ? 'hide' : 'show'} message
        </button>

        <!-- Or to conditionally show/hide a template -->
        <div>
          ${this.showMessage
            ? `The message is: ${this.message}`
            : ''}
        </div>

        <!-- You can also call a function and handle the conditional rendering in there -->
        <div>
          ${getMessage(this.message, this.showMessage)}
        </div>
      </div>
    `;

    this.querySelector("#show-message").addEventListener('click', () => {
      this.showMessage = !this.showMessage
    });
  }
}

// You also implement conditional logic in separate functions
function getMessage(message, showMessage) {
  if (!showMessage) {
    return '';
  }

  return `Message from function: ${message}`;
}

customElements.define('conditional-rendering', ConditionalRendering);