import React from 'react'
import Axios from 'axios'
import Info from './Info'
const Form = () => {
    const [dados, setDados] = React.useState(null)
    const [cep, setCep] = React.useState(null)

    const handleClick = (e) => {
        e.preventDefault()
        Axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
            setDados(response.data)
        })
    }

    return (
        <form onSubmit={handleClick}>
            <label htmlFor="cep">Cep</label>
            <input type="text" onChange={(e) => setCep(e.target.value)}/>
            <button>Buscar</button>
            {dados ? <Info dados={dados}/> : null}
        </form>

    )



}

export default Form;