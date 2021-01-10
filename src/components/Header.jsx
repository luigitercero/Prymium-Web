import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Logo, HamburguerMenu } from '../initiaState';
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
        <Image src="/img.png" alt={Logo.alt} width="75" height="75" />
        <div className="menu-container">
          <HambuergerMenu open={open} keyOpen={keyOpen} onClick={onClick}>
            <NavigationList />
          </HambuergerMenu>
          <div className='hide'>
            <NavigationList />
          </div>
        </div>
      </nav>
    </div>

  )
}

const NavigationList = () => {

  return (
    <ul>
      <NavItem {..._route.home} />
      <NavItem key={_route.products.key} to='#product' name={_route.products.name}>
        <SubMenu />
      </NavItem>
      <NavItem {..._route.asks} />
      <NavItem {..._route.blog} />
      <NavItem {..._route.contact} />
    </ul>
  );
}

const NavItem = ({ id, to, name, children }) => {
  const [showSubMenu, setSubMenu] = useState(false);
  const onPress = () => {

    setSubMenu(!showSubMenu);
  }
  const close = () => {
    setSubMenu(false);
  }

  const menu = () => {
    const childrenWithProps = React.Children.map(children, child => {
      // checking isValidElement is the safe way and avoids a typescript error too
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { close });
      }
      return child;
    });
    return (
      <>
        <a href={to} onClick={onPress}>{name}</a>
        {showSubMenu && childrenWithProps}
      </>
    )
  }

  return (

    <li key={id}>
      {
        children ? (
          <OutsideAlerter onClick={close}>
            {menu()}
          </OutsideAlerter>
        )
          : <Link href={to}><div>{name}</div></Link>
      }
    </li>

  );
}

const SubMenu = ({ close }) => {

  return (


    <ul className="sub-menu">
      <li id="lavatrastos"><Link href={`${_route.products.to}lavatrastos`} onClick={close}>Lavatrastos</Link></li>
      <li id="grifo"><Link href={`${_route.products.to}grifo`} onClick={close}>Grifos</Link></li>
      <li id="bidet"><Link href={`${_route.products.to}bidet`} onClick={close}>Bidet</Link></li>
      <li id="all"><Link href={`${_route.products.to}all`} onClick={close}>Todos</Link></li>
    </ul>

  );

}

const HambuergerMenu = ({ children, open, onClick, keyOpen }) => {

  return (
    <div className="contariner-hamburger">
      <a href={keyOpen} className="hambuerguer" onClick={onClick}>
        <i className="icon hamburguer icon--check" />
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

  );

}




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
