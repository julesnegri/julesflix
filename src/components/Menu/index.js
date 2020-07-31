import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { LogoImage, MenuWrapper } from './styles.js'
//import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <MenuWrapper className="Menu">
            <a href="/">
                <LogoImage src={Logo} alt="NegriFlix logo" />
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo 
            </Button>
        </MenuWrapper>
    );
}


export default Menu