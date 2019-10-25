// Create a HTML template for your component
const template = document.createElement('template');
template.innerHTML = `<div>Hello world!</div>`

// Create a class definition for your component and extend the HTMLElement base class
class BasicSetup extends HTMLElement {
  // A HTMLElement is just that, a basic HTML element. But, web components can have a special style/element encapsulation mechanism called the Shadow DOM

  connectedCallback() {
    this.innerHTML = `<div>Hello world!</div>`;
  }

  // Lets apply both during the component construction 
  constructor() {
    super();
    // This creates the Shadow DOM
    // mode 'open' mode means its contents can be inspected in browsers
    this.attachShadow({mode: 'open'});
    // the shadow element is just a blank slate, this clones the template and attaches it to the shadow
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

// Register your element to custom elements registry, pass it a tag name and your class definition
// The element name must always contain at least one dash
customElements.define('basic-setup', BasicSetup);