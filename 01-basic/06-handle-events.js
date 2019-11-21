class HandleEvents extends HTMLElement {
  constructor() {
    super();
    this.__count = 0;
  }

  // much like the mutating-properties eample, this rerenders the value when it changes 
  get count() { return this.__count; }
  set count(value) {
    this.__count = value;
    this.renderCount();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div>
        Current count: [<span id="count">${this.count}</span>]
        <!-- Render the buttons imperatively with ids for easy lookup -->
        <button id="increment">+</button>
        <button id="decrement">-</button>
      </div>
    `;

    // attach the events imperatively
    // Events can either run an anonymous function directly
    this.querySelector('#increment').addEventListener('click', () => this.count += 1);
    // ...or can call a function. Using arrow functions ensure that 'this' is accessible from within the function. 
    this.querySelector('#decrement') .addEventListener('click', () => this.decrement());
  }

  // to limit work, updates to the 'count' property should only rerender the number
  renderCount() {
    this.querySelector('#count').innerHTML = this.count;
  }

  decrement() {
    this.count -= 1;
  }
}

customElements.define('handle-events', HandleEvents);