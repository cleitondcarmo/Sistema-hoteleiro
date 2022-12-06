import React from 'react'
import '../../public/style.css'
import background from '../assets/logo.png'
import MediaQuery from 'react-responsive'
import menuImg from '../assets/icons/menu.svg'
import { Link } from 'react-router-dom'
import command from '../assets/icons/command.svg'
import plus from '../assets/icons/plus.svg'
import settings from '../assets/icons/settings.svg'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react'

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={background} alt="Logo" />
            </div>
            <div className="menuMobile">
                <MediaQuery maxWidth={899}>
                    <Menu>
                        <MenuButton as={Button}>
                            <img src={menuImg} />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <Link to="/">
                                    <img src={command}/>
                                    <p>Dashboard</p>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/cadastro">
                                    <img src={plus}/>
                                    <p>Nova reserva</p>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/">
                                    <img src={settings}/>
                                    <p>Configurações</p>
                                </Link>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </MediaQuery>
            </div>
        </div>
    );
};

export default Header;