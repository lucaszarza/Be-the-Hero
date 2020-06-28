import React, {useState} from 'react';
import { Link, useHistory} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function Register(){
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();
    
    async function handleRegister(evt) {
        evt.preventDefault();
        
        const data = {
            name, 
            email,
            whatsapp,
            city,
            uf, 
        };

        try {
            const response = await api.post('/ongs', data)
            alert(`Seu ID de acesso: ${response.data.id}`)

            history.push('/')
        } catch (err){
            alert('Erro no cadastro, tente novamente')
        };

    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo Be The Hero" />
                    
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para o logon
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input
                        type="text" 
                        value={name} 
                        onChange={evt => setName(evt.target.value)}
                        placeholder="Nome da ONG"
                    />
                    <input 
                        type="email" 
                        value={email}
                        onChange={evt => setEmail(evt.target.value)} 
                        placeholder="E-mail"
                    />
                    <input 
                        type="text" 
                        value={whatsapp} 
                        onChange={evt => setWhatsapp(evt.target.value)}
                        placeholder="WhatsApp"
                    />

                    <div className="input-group">
                        <input
                            type="text" 
                            value={city}
                            onChange={evt => setCity(evt.target.value)} 
                            placeholder="Cidade"
                        />
                        <input 
                            type="text" 
                            value={uf}
                            onChange={evt => setUf(evt.target.value)} 
                            placeholder="UF" 
                            style={{ width: 80 }}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}