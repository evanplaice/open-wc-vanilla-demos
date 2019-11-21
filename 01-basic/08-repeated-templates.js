class RepeatedTemplates extends HTMLElement {
  constructor() {
    super();
    this.books = [
        { author: 'G.R.R. Martin', title: 'A Game of Thrones'}, 
        { author: 'Tolkien', title: 'Lord of the Rings'}
    ];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <!--
        To repeat a template, you can simply use a map function of arrays.
        In this case, it maps the array of messages to an array of templates.
        Lit-html will read the array and render the templates inside it.
      -->
      Books:
      <ul>
        ${this.books.map(book => `<li>${book.author}: ${book.title}</li>`).join('\n')}
      </ul>

      <!--
        If a template gets too large, you can also split it in a separate function
      -->
      Books:
      <ul>
        ${this.books.map(this.bookTemplate).join('\n')}
      </ul>
    `;
  }

  bookTemplate(book) {
    return `<li>${book.author}: ${book.title}</li>`;
  }
}

customElements.define('repeated-templates', RepeatedTemplates);