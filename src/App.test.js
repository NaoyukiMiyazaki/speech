import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<p>hogehoge</p>, div);
  ReactDOM.unmountComponentAtNode(div);
});
