class UsingProperties extends HTMLElement {
  constructor() {
    super();
    // default property values can be defined in the constructor
    this.count = 5;
  }

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