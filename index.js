const app = document.getElementById('app');

const API = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const res = await fetch(url);
  const data = await res.json();
  data.forEach((elem) => {
    render(elem);
  });
};

const render = (elem) => {
  const id = elem.id;
  const title = elem.title;
  const body = elem.body;
  const post = document.createElement('x-post');
  post.setAttribute('id', id);
  post.setAttribute('title', title);
  post.setAttribute('body', body);
  app.appendChild(post);
};

API();
