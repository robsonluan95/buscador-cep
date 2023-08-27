import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import api  from './services';
import './App.css';

function App() {
  const [buscaCep, setBuscaCep]=useState('')
  const [cep,setCep]=useState({})

  

  async function buscarOCep(){
    
    if (buscaCep!==null){
    }else{
      alert('Digite algum CEP!')
    }

    try{
      const response = await api.get(`${buscaCep}/json`)
      setCep(response.data)
      console.log(response.data)
    }catch{
      alert('erro ou CEP não encontrado')
      setBuscaCep('')
    }
  }
  function apertoEnter(e){
    if (e.key==='Enter'){
      buscarOCep()
    }
  }
  


  return (
    <div className="container">
      <h1 className='titulo--buscador'>Busca CEP</h1>

      <div className="input--botao">
        <input
        onKeyDown={ (e)=>{
          apertoEnter(e)}}
        id='aticaoBotao'
        type='text'
        placeholder="Digite seu Cep..."
        value={buscaCep}
        onChange={(evento)=> setBuscaCep(evento.target.value) }
        />

        <button id='botaoCep' onClick={buscarOCep} className="botao--buscador">
          <FiSearch size={25} color='#FFF'/>
        </button>

      </div>  

      {Object.keys(cep).length>0&&(
        <div className='area--itens'>
          {(cep.cep)!==''&&(
            <h2>CEP: {cep.cep} </h2>
          )}
          
          {(cep.logradouro)!==''&&(
            <span>Rua: {cep.logradouro}</span>
          )}
          
          {(cep.complemento)!==''&&(
            <span>Complemento: {cep.complemento}</span>
          )}

          {(cep.bairro)!==''&&(
            <span>Bairro:{cep.bairro}</span>
          )}

          {(cep.localidade)!==''&&(
            <span>Cidade: {cep.localidade} - {cep.uf}</span>
          )}
          
          
          
          
          
          
        </div>
      )}
        
    </div>
  );
}

export default App;
