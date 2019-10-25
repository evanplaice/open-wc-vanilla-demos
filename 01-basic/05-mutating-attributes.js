class MutatingAttributes extends HTMLElement {
  static observedAttributes() {
    return ['greeting'];
  }

  get greeting() { return this.getAttribute('greeting'); }
  set greeting(value) { this.setAttribute('greeting', value); }

  connectedCallback() {
    this
  attributeChangedCallback(name, oldValue, newValue) {
    

  }

  render() {
    this.innerHTML = `
      ${this.greeting}
    `;
  }

}

customElements.define('mutating-attributes', MutatingAttributes);