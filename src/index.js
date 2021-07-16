import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import App2 from './components/App2';
import App3 from './components/App3';
import App4 from './components/App4';
import App5 from './components/App5';
import { Lista, Item } from './components/Lista';
import Formulario from './components/Formulario';
import Hello from './components/Hello';
import App6 from './components/App6';
import reportWebVitals from './reportWebVitals';
// {/* <App2 title="Título">
//       Contéudo
//     </App2>

//     <App2 title="Título2">
//       Contéudo2
//     </App2> */}
//     {/* <App3 /> */}
//     {/* <App4 /> */}
// {/* <App5 /> */ }
// {/* <Lista>
//       Texto1
//       Texto2
//       <Item key={999} id={999} completo={false}>
//         Teste1
//       </Item>
//       <Item key={998} id={998} completo={true}>
//         Teste2
//       </Item>
//     </Lista> */}
// <Formulario></Formulario>
// <Hello text="Olá">
// {/* <h1>hello</h1>
// </Hello> */}
ReactDOM.render(
  <React.StrictMode>
    <App6></App6>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
