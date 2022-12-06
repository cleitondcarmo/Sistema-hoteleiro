import React from 'react'
import '../../public/style.css'
import command from '../assets/icons/command.svg'
import plus from '../assets/icons/plus.svg'
import settings from '../assets/icons/settings.svg'
import {Link} from 'react-router-dom'

function Side(){
    return(
    <div className="side">
        <Link to="/">
            <button className="buttonSide">
                <img src={command} alt="Logo" />
                <p>Dashboard</p>
            </button>
        </Link>
        <Link to="/cadastro">
            <button className="buttonSide">
                <img src={plus} alt="plus" />
                <p>Nova reserva</p>
            </button>
        </Link>
        <button className="buttonSide">
            <img src={settings} alt="settings" />
            <p>Configurações</p>
        </button>
    </div>
    );
}

export default Side