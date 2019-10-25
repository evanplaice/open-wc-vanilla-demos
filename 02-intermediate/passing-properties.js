// <paper-card>
//   <div class="demo">
//     <a href="https://stackblitz.com/edit/open-wc-vanilla-demos?file=01-basic%2F06-passing-properties.js" target="_blank"><h2>06 Passing properties</h2></a>
//     <passing-properties></passing-properties>
//   </div>
// </paper-card>


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
    // create the element imperatively
    const child = document.createElement('author-profile');
    // assign the properties
    child.author = this.author;
    child.books = this.books;
    // rerender the child
    child.render();
    // attach the child
    this.appendChild(child);
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
    this.innerHTML = `
      <div>${this.author.name}</div>
      <ul>
        ${this.books.map(book => `<li>${book.title}</li>`).join('\n')}
      </ul>
    `;
  }
}

customElements.define('author-profile', AuthorProfile);