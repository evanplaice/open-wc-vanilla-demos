class UpdateArraysAndObjects extends HTMLElement {
  __array = [
    { id: 1 },
    { id: 2 }
  ];

  __object = {
    id: 1,
    text: "foo"
  };

  get array() { return this.__array; }
  set array(value) {
    this.__array = value;
    this.renderArray();
  }

  get object() { return this.__object; }
  set object(value) {
    this.__object = value;
    this.renderObject();
  }

  connectedCallback() {
    this.render();
    this.renderArray();
    this.renderObject();
  }

  render() {
    this.innerHTML = `
      <h3>Array items</h3>
      <ul id="array"></ul>
      <button id="update-array">Add array item</button>

      <h3>Object</h3>
      <div id="object"></div>
      <button id="update-object" >Add object item</button>
    `;

    this.querySelector('#update-array').addEventListener('click', () => this.addArrayItem());
    this.querySelector('#update-object').addEventListener('click', () => this.updateObjectId());
  }

  renderArray() {
    this.querySelector('#array').innerHTML = `
      ${this.array.map(item => `
        <li>${item.id}</li>
      `).join('\n')}
    `;
  }

  renderObject() {
    this.querySelector('#object').innerHTML = `
      <strong>${this.object.id}</strong>: ${this.object.text}
    `;
  }

  // Mutating the array's contents doesn't change it's value therefore the setter won't be called. To ensure the setter is called, the spread syntax operator can be used to construct a new array.
  addArrayItem() {
    const newId = Math.round(Math.random() * 100);
    const newItem = { id: newId };
    this.array = [
      ...this.array, 
      newItem,
    ];
  }

  /**
   * If you mutate an object's contents, it's value (reference) doesn't change.
   * 
   * The recommended approach is to use immutable data patterns.
   * You can easily update an object's property using the object
   * spread syntax:
   */
  updateObjectId() {
    const newId = Math.round(Math.random() * 100);

    this.object = { 
      ...this.object,
      id: newId,
    };
  }
}

customElements.define('update-arrays-and-objects', UpdateArraysAndObjects);