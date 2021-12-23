import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Logo } from '../initiaState';
import _route from '../routes/Config';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [keyOpen, setkeyOpen] = useState("#closeMenu");

  const onClick = () => {
    setOpen(!open);
    setkeyOpen(keyOpen === "#openMenu" ? '#closeMenu' : '#openMenu');
    
  }
  return (

    <div className='header'>

      <CSSTransition
        in={open}
        timeout={500}
        classNames="fadeover"
        unmountOnExit
      >
        <div className="overlay" onClick={onClick} aria-hidden="true" />
      </CSSTransition>


      <nav className="direction ">
        <div className="image-container">
          <Image src="/images/logo/logotipo-Prymium.webp" alt={Logo.alt} width="227" height="67" layout='responsive' priority />
        </div>
        <div className="menu-container">
          <HambuergerMenu open={open} keyOpen={keyOpen} onClick={onClick}>
            <NavigationList onClick={onClick} />
          </HambuergerMenu>
          <div className='hide'>
            <NavigationList />
          </div>
        </div>
      </nav>
    </div>

  )
}

const NavigationList = ({onClick}) => (
  <ul>
    <NavItem onClick={onClick} {..._route.home} />
    <NavItem onClick={onClick} {..._route.products} />

    <NavItem onClick={onClick} {..._route.asks} />
    {/* <NavItem {..._route.blog} /> */}
    <NavItem onClick={onClick} {..._route.contact} />
  </ul>
  )

const NavItem = ({ id, to, name, children, onClick }) => {
  const [showSubMenu, setSubMenu] = useState(false);

  const onPress = () => {
    setSubMenu(!showSubMenu);
    onClick(); 
  }

  const close = () => {

    setSubMenu(false);
    onClick(); //close menut principal
  
  }

  const childrenWithProps = React.Children.map(children, child => {
    // checking isValidElement is the safe way and avoids a typescript error too
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { close });
    }
    return child;
  });

  const menu = () => (
    <>
      <a href={to} onClick={onPress}>{name}</a>
      {showSubMenu && childrenWithProps}
    </>
    )

  return (

    <li key={id} onClick={close}>
      {
        children ? (
          <OutsideAlerter onClick={close}>
            {menu()}
          </OutsideAlerter>
        )
          : <Link onClick={close} href={to}>{name}</Link>
      }
    </li>

  );
}

const SubMenu = ({ close }) => (
  <ul className="sub-menu">
    <li id="lavatrastos" onClick={close} aria-hidden><Link href={`${_route.products.to}lavatrastos`}>Lavatrastos</Link></li>
    <li id="grifo" onClick={close} aria-hidden><Link href={`${_route.products.to}grifos`}>Grifos</Link></li>
    <li id="bidet" onClick={close} aria-hidden><Link href={`${_route.products.to}bidets`} onClick={close}>Bidet</Link></li>
    <li id="all" onClick={close} aria-hidden><Link href={`${_route.products.to}`}>Todos</Link></li>
  </ul>

  )

const HambuergerMenu = ({ children, open, onClick, keyOpen }) => (
  <div className="container-hamburger">
    <a href={keyOpen} className="hamburger" onClick={onClick}>
      <span className="icon hamburger-icon"><img src="/images/icons/bars-solid.webp" alt="b" /></span>
    </a>


    <CSSTransition
      in={open}
      timeout={1000}
      classNames="fade"
      unmountOnExit
    >
      {children}
    </CSSTransition>


  </div>

  )




/**
 * Hook that alerts clicks outside of the passed ref
 */
const UseOutsideAlerter = (ref, onClick) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClick();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up

      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
const OutsideAlerter = ({ children, onClick }) => {
  const wrapperRef = useRef(null);
  UseOutsideAlerter(wrapperRef, onClick);

  return <div ref={wrapperRef}>{children}</div>;
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired
};



export default Header
