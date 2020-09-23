import React from 'react'
import Axios from 'axios'
import './form.css'
const Form = () => {
    
    const [cep, setCep] = React.useState(null)
    const [logradouro, setLogradouro] = React.useState(null)
    const [bairro, setBairro] = React.useState(null)
    const [municipio, setMunicipio] = React.useState(null)
    const [uf, setUf] = React.useState(null)
    const [ddd, setDdd] = React.useState(null)


    const [dados, setDados] = React.useState(null)
    
    const handleAutoPreencher = (e) => {
        e.preventDefault()
        Axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
            setDados(response.data)
            setLogradouro(response.data.logradouro)
            setBairro(response.data.bairro)
            setMunicipio(response.data.localidade)
            setUf(response.data.uf)
            setDdd(response.data.ddd)
            
            console.log(dados)
        })
    }

    return (
        <>
        <form className="container-form">
            
            <h1>FORM CEP</h1>
            
            <input type="text" id="cep" placeholder="Digite seu CEP" onBlur={handleAutoPreencher} onChange={(e) => setCep(e.target.value)}/>

            <input type="text" id="logradouro" placeholder="Digite seu logradouro" value={logradouro} onChange={(e) => setLogradouro(e.target.value)}/>

            <input type="text" id="bairro" placeholder="Digite seu bairro" value={bairro} onChange={(e) => setBairro(e.target.value)}/>

            <input type="text" id="municipio" placeholder="Digite seu municipio" value={municipio} onChange={(e) => setMunicipio(e.target.value)}/>

            <input type="text" id="uf" placeholder="Digite sua UF" value={uf} onChange={(e) => setUf(e.target.value)}/>

            <input type="text" id="ddduf" placeholder="Digite seu DDD" value={ddd} onChange={(e) => setDdd(e.target.value)}/>
            <button>Enviar</button>
            {dados ? true : false}
        </form>
        
        </>

    )



}

export default Form;