class ObservingAttributes extends HTMLElement {
  // this tells browsers what custom attributes to look for.
  static observedAttributes() {
    return ['message'];
  }

  // a getter/setter can be used to get/set the attribute value like it is a class property
  get message() { return this.getAttribute('message'); }
  set message(value) { this.setAttribute('message', value); }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div>
        <!-- Render a the attribute value directly -->
        <div>
          The message is: ${this.message}
        </div>

        <!-- Call a function and render the return value -->
        <div>
          The reversed message is: ${this.reverseMessage(this.message)}
        </div>

      </div>
    `;
  }

  reverseMessage(message) {
    return message.split('').reverse().join('');
  }
}

customElements.define('observing-attributes', ObservingAttributes);