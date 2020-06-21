import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const json = [
  {
    type: 'KnowledgeCheck',
    data: {
      prompt: 'What is this a picture of?',
      media: 'https://images.articulate.com/f:jpg%7Cpng,a:retain,b:fff/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/d229V-nstxA6tZdi.gif',
      feedback: 'I just love cookies and a warm cup of coffee!',
      choices: [
        {
          correct: true,
          label: 'Coffee and Cookies'
        },
        {
          correct: false,
          label: 'Donusts and cider'
        },
      ]
    }
  }
]

ReactDOM.render(
  <React.StrictMode>
    <App blocks={json}/>
  </React.StrictMode>,
  document.getElementById('root')
);
