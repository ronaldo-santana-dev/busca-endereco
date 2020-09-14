import React from 'react'

const Info = ({dados}) => {
    return (
        <div>
            <ul>
                <li>{dados.cep}</li>
                <li>{dados.logradouro}</li>
                <li>{dados.bairro}</li>
            </ul>
        </div>
    )
}

export default Info

