class MutatingAttributes extends HTMLElement {
  static observedAttributes() {
    return ['greeting'];
  }

  get greeting() { return this.getAttribute('greeting'); }
  set greeting(value) {
    this.setAttribute('greeting', value);
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  // this callback triigers when an attribute has changed
  // attributeChangedCallback(name, oldValue, newValue) {
  //   if (name === 'greeting' && oldValue !== newValue) {
  //     this.render();
  //   }
  // }

  render() {
    this.innerHTML = `
      ${this.greeting}
    `;
  }

}

customElements.define('mutating-attributes', MutatingAttributes);