import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function NewIncident(){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const history = useHistory();

    const ongId = localStorage.getItem("ongId")

    async function handleNewIncident(evt){
        evt.preventDefault();

        const data = {
            title,
            description,
            value
        }

        try {
            const response = await api.post('/incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })
            alert(`Seu ID do caso é: ${response.data.id}`)

            history.push('/profile')
        } catch (err){
            alert('Erro no cadastro do caso, tente novamente')
        };

    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo Be The Hero" />
                    
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para a home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input type="text" 
                        placeholder="Títúlo do caso"
                        value={title}
                        onChange={evt => setTitle(evt.target.value)}
                    />
                    <textarea type="text" 
                        placeholder="Descrição"
                        value={description}
                        onChange={evt => setDescription(evt.target.value)}
                    />
                    <input type="text" 
                        placeholder="Valor em reais (R$)"
                        value={value}
                        onChange={evt => setValue(evt.target.value)}
                    />

                    <button onClick={handleNewIncident} className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}