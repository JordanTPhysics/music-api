
import React, {useState} from 'react';

import './App.css'
import './index.css'
import Item from './components/Item'
import {ReactComponent as GuitarIcon} from './images/guitar.svg';
import {CSSTransition} from 'react-transition-group';
import Main from './components/Main.js'
// https://www.youtube.com/watch?v=IF6k0uZuypA
function App(){

    
        return(
            <div className='App'>
                <Navbar>
                    <h1>ML Melodies</h1>
                    <NavItem icon="🎻">
                        <DropMenu></DropMenu>
                        </NavItem>
                    <NavItem icon="🪕"><DropMenu></DropMenu></NavItem>
                    <NavItem icon="🎹"><DropMenu></DropMenu></NavItem>
                    <NavItem icon="🎼"><DropMenu></DropMenu></NavItem>
                    <NavItem icon="🎷"><DropMenu></DropMenu></NavItem>
                </Navbar>
                <Main/>
                <div className='body'>
                
                </div>
            </div>
        );
    
}

class Navbar extends React.Component{
    constructor(props){
        super(props)
    }

    render(props){
    return(
        <nav className="navbar">
            <ul className="navbar-nav">
            {props.children}
            </ul>
        </nav>
    )}
}
function NavItem(props){

    const [open, setOpen] = useState(false);
    return (
        <li className='nav-item'>
            <a href = '#' className='icon-button'onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </li>
    )
}

function DropMenu(){

    
    
    const [activeMenu, setActiveMenu] = useState('main')

    function DropItem(props) {
        return(
            <a href='#' className='menu-item' onClick={ () => props.goToMenu && setActiveMenu(props.goToMenu)} >
                <span className='icon-button'>{props.lefticon}</span>
            {props.children}
            <span className='icon-right'>{props.righticon}</span>
            </a>
        )
    }
    return (
        <div className='dropdown'>
         <CSSTransition in={activeMenu === 'main'} 
            unmountOnExit
            timeout={500}
            classNames='menu-primary'>

        <div className='menu'>
            <DropItem>MainPage</DropItem>
            <DropItem >Jamz </DropItem>

        </div>
        </CSSTransition>

        <CSSTransition in={activeMenu === 'settings'} 
            unmountOnExit
            timeout={500}
            classNames='menu-secondary'>

        <div className='menu'>
            <DropItem>MainPage</DropItem>
            <DropItem >Jamz </DropItem>

        </div>
        </CSSTransition>
        </div>

    )
}
export default App;