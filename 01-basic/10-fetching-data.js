class FetchingData extends HTMLElement {
  constructor() {
    super();
    this.__response = [];
  }
  

  get response() { return this.__response; }
  set response(value) {
    this.__response = value;
    this.render();
  }

  connectedCallback() {
    this.fetchData();
  }

  fetchData() {
    fetch('https://swapi.co/api/people/')
      .then((r) => r.json())
      .then((r) => {
        this.response = r.results;
      });
  }

  render() {
    this.innerHTML = `
      <ul>
        ${this.response.map(item => `<li>${item.name}</li>`).join('\n')}
      </ul>
    `;
  }
}

customElements.define('fetching-data', FetchingData);