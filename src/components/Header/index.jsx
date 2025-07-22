import './Header.scss';

import { ReactComponent as BellIcon } from '../../assets/icons/bell.svg';
import { ReactComponent as MessengerIcon } from '../../assets/icons/messenger.svg';
import { ReactComponent as CaretIcon } from '../../assets/icons/caret.svg';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';
import { ReactComponent as CogIcon } from '../../assets/icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../../assets/icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import { ReactComponent as BoltIcon } from '../../assets/icons/bolt.svg';

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar>
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);

  const dropdownRef = useRef(null);
  const mainRef = useRef(null);
  const settingsRef = useRef(null);
  const animalsRef = useRef(null);

  useEffect(() => {
    if (mainRef.current) {
      setMenuHeight(mainRef.current.offsetHeight);
    }
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
        nodeRef={mainRef}
      >
        <div className="menu" ref={mainRef}>
          <DropdownItem><Link to="/login">perfil</Link></DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="pendentes"
          >
            Pendentes
          </DropdownItem>
          <DropdownItem
            leftIcon="📊"
            rightIcon={<ChevronIcon />}
            goToMenu="dash"
          >
            Dashboards
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'pendentes'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
        nodeRef={settingsRef}
      >
        <div className="menu" ref={settingsRef}>
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Logins</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><Link to="/renan">Renan</Link></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><Link to="/juliana">Juliana</Link></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><Link to="/vanderlei">Vanderlei</Link></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}><Link to="/gilvan">Gilvan</Link></DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'dash'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
        nodeRef={animalsRef}
      >
        <div className="menu" ref={animalsRef}>
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Dash</h2>
          </DropdownItem>
          <DropdownItem leftIcon="☢️"><Link to="/geral">Geral</Link></DropdownItem>
          <DropdownItem leftIcon="🌫️"><Link to="/hidro">Hidrometros</Link></DropdownItem>
          <DropdownItem leftIcon="⛔"><Link to="/pendentes">Pendentes</Link></DropdownItem>
          <DropdownItem leftIcon="🏁"><Link to="/rastreador">Rastreador</Link></DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}


export default Header;
