import React, {useState, useEffect} from 'react';

export default function App6(){
    // const [nome, setNome] = useState('Rosana');
    const [nome, setNome] = useState(undefined);
    // const onClick = ()=> {setPessoa({nome: 'Luis'}); console.log(pessoa)};

    useEffect(() => {
        if(nome === undefined){
          setNome(sessionStorage.getItem('nome') || "");
        } 
        else{
          sessionStorage.setItem('nome', nome);
        }
    }, [nome]);

    return (
        // <>
        // Nome: <input type="text" value={nome} onChange={(event)=>setNome(event.target.value)} />
        // <br />
        // Olá {nome}
        // </>
        <>
        <input type='text' onChange={(evt) => setNome(evt.target.value)} value={nome} />
        <h1>{nome}</h1>
        </>
    );
}