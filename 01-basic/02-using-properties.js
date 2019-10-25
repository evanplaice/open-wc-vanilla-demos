class UsingProperties extends HTMLElement {
  // default property values can be defined directly on the class
  count = 5;

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <!-- Render the property value directly -->
      The count is: ${this.count}
    `;
  }
}

customElements.define('using-properties', UsingProperties);