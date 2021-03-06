class Post extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const post = document
      .getElementById('post')
      .content.children[0].cloneNode(true);
    this.shadowRoot.appendChild(post);
  }

  connectedCallback() {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'style.css');
    this.shadowRoot.appendChild(link);
  }

  attributeChangedCallback(attr, oVal, nVal) {
    switch (attr) {
      case 'id':
        this.shadowRoot.querySelector('.id').innerText = nVal;
        break;
      case 'title':
        this.shadowRoot.querySelector('.title').innerText = nVal;
        break;
      case 'body':
        this.shadowRoot.querySelector('.body').innerText = nVal;
        break;
    }
  }

  static get observedAttributes() {
    return ['id', 'title', 'body'];
  }
}

window.customElements.define('x-post', Post);
