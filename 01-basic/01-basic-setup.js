// Create a class definition for your component and extend the HTMLElement base class
class BasicSetup extends HTMLElement {
  // Extending HTMLElement inherits all of the baseline properties, attributes, methods, and events that all DOM elements use.

  // this method runs the first time the component is rendered
  connectedCallback() {
    this.innerHTML = `<div>Hello world!</div>`;
  }
}

// Register your element to custom elements registry, pass it a tag name and your class definition
// The element name must always contain at least one dash
customElements.define('basic-setup', BasicSetup);