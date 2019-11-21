class MutatingProperties extends HTMLElement {
  constructor() {
    super();
    // the '__' prefix is used to avoid a naming conflict w/ the getter/setter
    this.__count = 1;
  }

  // get/set methods can be used to trigger changes when a property changes
  get count() { return this.__count; }
  set count(value) {
    this.__count = value;
    // re-render the contents when the count changes
    this.render();  
  }

  connectedCallback() {
    this.render();

    // this updates the count property every second, looping from 0 to 10
    setInterval(() => {
      this.count = this.count < 10 ? this.count + 1 : 1;
    }, 1000);
  }

  render() {
    this.innerHTML = `
      Count from 1 to 10: [${this.count}]
    `;
  }
}

customElements.define('mutating-properties', MutatingProperties);