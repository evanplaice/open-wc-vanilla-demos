import './01-basic/basic-demos.js';
import './02-intermediate/intermediate-demos.js';
import './03-advanced/advanced-demos.js';
import '@polymer/paper-card';
import '@vaadin/vaadin-tabs';
import { github } from './assets/github.js';
import { openWc } from './assets/open-wc.js';
import { Router } from '@vaadin/router';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';

/**
 * This component combines all the examples to be displayed. See the basic/intermediate/advanced folders for the actual examples.
 */

const styles = document.createElement('style');
styles.innerHTML = `
:host {
  display: block;
}

h2 {
  font-size: 20px;
  color: #217FF9;
}

h1 {
  margin-top: 0px;
  color: #217FF9;
}

#header {
  display: flex;
}

a {
  text-decoration: none;
}

a:visited {
  color: #217FF9;
}

#header h1 { flex: 1; }
#header svg { margin: 8px 0 8px 0; }
.github {transform: scale(1.2, 1.2);}
.logo {
  margin-top: -3px;
  margin-right: 8px;
}

.nav { margin-bottom: 20px; }
.footer { text-align: center; color: #a8a8a8;}
`;

class OpenWcDemo extends HTMLElement {
  styles;
  header;
  nav;
  main;
  footer;

  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    this.styles = styles.cloneNode(true);
    this.shadowRoot.appendChild(styles);

    this.activeTab = location.pathname === '/' ? 'basic' : location.pathname.replace('/', '');
    this.tabs = ['basic', 'intermediate', 'advanced'];

    this.header = document.createElement('header');
    this.header.id = "header";
    this.renderHeader();
    this.shadowRoot.appendChild(this.header);

    this.nav = document.createElement('nav');
    this.nav.id = 'nav';
    this.renderNav();
    this.shadowRoot.appendChild(this.nav);

    this.main = document.createElement('main');
    this.main.id = 'main';
    this.renderMain();
    this.shadowRoot.appendChild(this.main);

    this.footer = document.createElement('footer');
    this.footer.id = 'footer';
    this.renderFooter();
    this.shadowRoot.appendChild(this.footer);

    installMediaQueryWatcher(`(min-width: 600px)`, (matches) => {
      this.smallScreen = !matches;
      this.renderNav();
    });
  }

  connectedCallback() {
    this.router = new Router(this.shadowRoot.getElementById('outlet'));
    this.router.setRoutes([
      {path: '/',     component: 'basic-demos'},
      {path: '/basic',  component: 'basic-demos'},
      {path: '/intermediate',  component: 'intermediate-demos'},
      {path: '/advanced',  component: 'advanced-demos'},
      {path: '(.*)', redirect: '/', action: () => {
        this.activeTab = 'basic';
        }
      }
    ]);
  }

  switchRoute(route) {
    this.activeTab = route;
    Router.go(`/${route}`); 
  }

  renderHeader() {
    this.header.innerHTML = `
      <span class="logo"><a href="https://open-wc.org">${openWc.strings[0]}</a></span>
      <h1>${this.capitalize(this.activeTab)} Vanilla WC demos</h1>
      <a class="github" href="https://www.github.com/open-wc/vanilla-demos" target="_blank">${github.strings[0]}</a>
    `;
  }

  renderNav() {
    this.nav.innerHTML = `
      <vaadin-tabs class="${this.smallScreen ? 'nav' : ''}" orientation="${this.smallScreen ? 'vertical' : 'horizontal'}" selected=${this.tabs.indexOf(this.activeTab)} theme="${this.smallScreen ? '' : 'centered'}">
        <vaadin-tab id="basic"}>Basic</vaadin-tab>
        <vaadin-tab id="intermediate">Intermediate</vaadin-tab>
        <vaadin-tab id="advanced">Advanced</vaadin-tab>
      </vaadin-tabs>
    `;

    // events
    this.nav.querySelector("#basic").addEventListener('click', ()=> this.switchRoute('basic'));
    this.nav.querySelector("#intermediate").addEventListener('click', ()=> this.switchRoute('intermediate'));
    this.nav.querySelector("#advanced").addEventListener('click', ()=> this.switchRoute('advanced'));
  }

  renderMain() {
    this.main.innerHTML = `
      <div id="outlet"></div>
    `;
  }

  renderFooter() {
    this.footer.innerHTML = `
      <p class="footer">🚽 Made with love by <a target="_blank" href="https://open-wc.org/">open-wc</a>.</p>
    `;
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
      
}

customElements.define('open-wc-demo', OpenWcDemo);
