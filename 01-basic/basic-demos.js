import './01-basic-setup.js';
import './02-using-properties.js';
import './03-mutating-properties.js';
import './04-using-attributes.js';
import './05-mutating-attributes.js';
import './06-handle-events.js';
import './07-conditional-rendering.js';
import './08-repeated-templates.js';
import './09-update-arrays-and-objects.js';
import './10-fetching-data.js';

const template = document.createElement('template');
template.innerHTML = `
<style>
  :host {
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
  }

  a {
    text-decoration: none;
  }

  .demo > *:not(h2):not(a) {
    display: block;
    border: 1px solid	#e2e2e2;
    border-radius: 5px;
    padding: 8px;
    margin: 8px 0;
    line-height: 32px;
  }

  paper-card { 
    border-radius: 5px;
    flex: 1; 
    padding: 12px;
    margin: 0 0 32px 0;
  }

  h2 {
    font-size: 20px;
    color: #2c3e50;
  }

  h2:hover::after { 
    color: #9B35FA;
    content: " #";
  }

  h1 {
    margin-top: 0px;
    color: #9B35FA;
  }
</style>

<paper-card>
  <div class="demo">
    <a href="https://stackblitz.com/edit/open-wc-vanilla-demos?file=01-basic%2F01-basic-setup.js" target="_blank"><h2>01 Basic setup</h2></a>
    <basic-setup></basic-setup>
  </div>
</paper-card>

<paper-card>
  <div class="demo">
    <a href="https://stackblitz.com/edit/open-wc-vanilla-demos?file=01-basic%2F02-using-properties.js" target="_blank"><h2>02 Using properties</h2></a>
    <using-properties id="using-properties"></using-properties>
  </div>
</paper-card>

<paper-card>
  <div class="demo">
    <a href="https://stackblitz.com/edit/open-wc-vanilla-demos?file=01-basic%2F03-mutating-properties.js" target="_blank"><h2>03 Mutating Properties</h2></a>
    <mutating-properties></mutating-properties>
  </div>
</paper-card>

<paper-card>
  <div class="demo">
    <a href="https://stackblitz.com/edit/open-wc-vanilla-demos?file=01-basic%2F04-using-attributes.js" target="_blank"><h2>04 Using attributes</h2></a>
    <using-attributes message="Hello world"></using-attributes>
  </div>
</paper-card>

<paper-card>
  <div class="demo">
    <a href="https://stackblitz.com/edit/open-wc-vanilla-demos?file=01-basic%2F05-mutating-attributes.js" target="_blank"><h2>05 Mutating attributes</h2></a>
    <mutating-attributes greeting="Hello web component"></mutating-attributes>
  </div>
</paper-card>

<paper-card>
  <div class="demo">
    <a href="https://stackblitz.com/edit/open-wc-vanilla-demos?file=01-basic%2F06-handle-events.js" target="_blank"><h2>06 Handle events</h2></a>
    <handle-events></handle-events>
  </div>
</paper-card>

<paper-card>
  <div class="demo">
    <a href="https://stackblitz.com/edit/open-wc-vanilla-demos?file=01-basic%2F07-conditional-rendering.js" target="_blank"><h2>07 Conditional rendering</h2></a>
    <conditional-rendering message="Hello world"></conditional-rendering>
  </div>
</paper-card>

<paper-card>
  <div class="demo">
    <a href="https://stackblitz.com/edit/open-wc-vanilla-demos?file=01-basic%2F08-repeated-templates.js" target="_blank"><h2>08 Repeated templates</h2></a>
    <repeated-templates></repeated-templates>
  </div>
</paper-card>

<paper-card>
  <div class="demo">
    <a href="https://stackblitz.com/edit/open-wc-vanilla-demos?file=01-basic%2F09-update-arrays-and-objects.js" target="_blank"><h2>09 Update arrays and objects</h2></a>
    <update-arrays-and-objects></update-arrays-and-objects>
  </div>
</paper-card>

<paper-card>
  <div class="demo">
    <a href="https://stackblitz.com/edit/open-wc-vanilla-demos?file=01-basic%2F10-fetching-data.js" target="_blank"><h2>10 Fetching data</h2></a>
    <fetching-data></fetching-data>
  </div>
</paper-card>
`;

class BasicDemos extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('basic-demos', BasicDemos);