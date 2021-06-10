const rootEl = document.getElementById('root');
// const el = document.createElement('div');
// el.textContent = 'React';
// el.className = 'container';
// rootEl.append(el);

const el = React.createElement('div', { className: 'container' }, 'React');
ReactDOM.render(el, rootEl);

const el = <div className="container">test</div>;
