class PassingProperties extends HTMLElement {
  author = { name: 'G.R.R. Martin', age: 70 };
  books = [
      { title: 'Game of Thrones', pages: 697 },
      { title: 'The Ice Dragon', pages: 521 }
  ];

  connectedCallback() {
    this.render();
  }

  render() {
    const child = document.createElement('author-profile');
    // this.innerHTML = ` 
    //   <author-profile id="author-profile"></author-profile>
    // `;

    // const child = this.querySelector("#author-profile");
    // child.author = this.author;
    // child.books = this.books;
  }
}

customElements.define('passing-properties', PassingProperties);

class AuthorProfile extends HTMLElement {
  author = {};
  books = [];

  connectedCallback() {
    this.render();
  }

  render() {
    return html`
      <div>${this.author.name}</div>
      <div>${this.books.map(book => html`<li>${book.title}</li>`)}
    `;
  }
}

customElements.define('author-profile', AuthorProfile);