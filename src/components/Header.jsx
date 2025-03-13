import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import _route from "@routes/Config";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [keyOpen, setkeyOpen] = useState("#closeMenu");

  const onClick = () => {
    setOpen(!open);
    setkeyOpen(keyOpen === "#openMenu" ? "#closeMenu" : "#openMenu");
  };

  return (
    <div className="header">
      <AnimatePresence>
        {open && (
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={onClick}
          />
        )}
      </AnimatePresence>

      <nav className="direction">
        <div className="image-container">
          <Image
            src="/images/logo/logotipo-Prymium.webp"
            fill="true"
            sizes="(min-width: 600px) 600px, 100vw"
            alt="Prymium"
          />
        </div>
        <div className="menu-container">
          <HamburgerMenu open={open} keyOpen={keyOpen} onClick={onClick}>
            <NavigationList onClick={onClick} />
          </HamburgerMenu>
          <div className="hide">
            <NavigationList />
          </div>
        </div>
      </nav>
    </div>
  );
};

const NavigationList = ({ onClick }) => (
  <ul>
    <NavItem onClick={onClick} {..._route.home} />
    <NavItem onClick={onClick} {..._route.products} />
    <NavItem onClick={onClick} {..._route.asks} />
    <NavItem onClick={onClick} {..._route.contact} />
  </ul>
);

const NavItem = ({ id, to, name, children, onClick }) => {
  const [showSubMenu, setSubMenu] = useState(false);

  const onPress = () => {
    setSubMenu(!showSubMenu);
  };

  const close = () => {
    setSubMenu(false);
  };

  const childrenWithProps = React.Children.map(children, (child) =>
    React.isValidElement(child) ? React.cloneElement(child, { close }) : child
  );

  return (
    <li key={id} onClick={close}>
      {children ? (
        <OutsideAlerter onClick={close}>
          <a href={to} onClick={onPress}>
            {name}
          </a>
          <AnimatePresence>
            {showSubMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {childrenWithProps}
              </motion.div>
            )}
          </AnimatePresence>
        </OutsideAlerter>
      ) : (
        <Link onClick={close} href={to}>
          {name}
        </Link>
      )}
    </li>
  );
};

const SubMenu = ({ close }) => (
  <ul className="sub-menu">
    <li id="lavatrastos" onClick={close}>
      <Link href={`${_route.products.to}lavatrastos`}>Lavatrastos</Link>
    </li>
    <li id="grifo" onClick={close}>
      <Link href={`${_route.products.to}grifos`}>Grifos</Link>
    </li>
    <li id="bidet" onClick={close}>
      <Link href={`${_route.products.to}bidets`} onClick={close}>
        Bidet
      </Link>
    </li>
    <li id="all" onClick={close}>
      <Link href={`${_route.products.to}`}>Todos</Link>
    </li>
  </ul>
);

const HamburgerMenu = ({ children, open, onClick, keyOpen }) => (
  <div className="container-hamburger">
    <a href={keyOpen} className="hamburger" onClick={onClick}>
      <span className="icon hamburger-icon">
        <img src="/images/icons/bars-solid.webp" alt="b" />
      </span>
    </a>

    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

/**
 * Hook that detects clicks outside of the passed ref
 */
const UseOutsideAlerter = (ref, onClick) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

/**
 * Component that detects outside clicks
 */
const OutsideAlerter = ({ children, onClick }) => {
  const wrapperRef = useRef(null);
  UseOutsideAlerter(wrapperRef, onClick);
  return <div ref={wrapperRef}>{children}</div>;
};

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Header;
