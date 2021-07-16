import React from 'react';

class App4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: undefined,
            txtNome: ''
        }
    }
    changeTxtNome = (evt) => {
        this.setState({ txtNome: evt.target.value });
    }
    persistTxtNome = () => {
        this.setState({ nome: this.state.txtNome });
    }
    render() {
        if (!this.state.nome) {
            return (
                <>
                    Nome: <input type='text' onChange={this.changeTxtNome} />
                    <button onClick={this.persistTxtNome}>Salvar</button>
                </>
            )
        }
        else {
            return <p>Olá{this.state.nome}</p>
        }
    }
}

export default App4;