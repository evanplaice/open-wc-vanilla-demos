// <paper-card>
//   <div class="demo">
//     <a href="https://stackblitz.com/edit/open-wc-vanilla-demos?file=01-basic%2F12-firing-events.js" target="_blank"><h2>12 Firing events</h2></a>
//     <fire-events-parent></fire-events-parent>
//   </div>
// </paper-card>

class FireEventsParent extends HTMLElement {
  someCallback(event) {
    console.log(event.detail);
  }

  render() {
    return html`
      <fire-events-child @event-fired=${this.someCallback}></fire-events-child>
    `;
  }
}

class FireEventsChild extends HTMLElement {
  handleClick() {
    this.dispatchEvent(new CustomEvent('event-fired', { detail: 'some data' }));
  }

  render() {
    return html`<button @click=${this.handleClick}>clickity</button>`;
  }
}

customElements.define('fire-events-parent', FireEventsParent);
customElements.define('fire-events-child', FireEventsChild);