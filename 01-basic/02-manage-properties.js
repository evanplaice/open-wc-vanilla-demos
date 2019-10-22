const template = document.createElement('template');

class ManageProperties extends HTMLElement {
  __message = "";

  // To make the browser aware of custom attributes they need to be defined in this method
  static observedAttributes() {
    return ['message', 'count'];
  }

  // the value can be stored/retrived directly on the HTML attribute
  get count() { return this.getAttribute('count'); }
  set count(value) { this.setAttribute('count', value); }

  // or it can be stored in the class
  get message() { return __.message; }
  set message(value) { this.__message = value; }

  constructor() {
    super();

    // default values can be set from the constructor
    this.count = 0;
  }

  render() {
    return html`
      <div>
        <!--
          Dynamic parts of your template are set through template string expressions.
          It's plain javascript, so you can use any valid javascript expression. lit-html handles
          updating the dom efficiently.
        -->

        <!-- Render a string or number directly -->
        <div>
          The message is: ${this.message}, count is: ${this.count}
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

customElements.define('manage-properties', ManageProperties);