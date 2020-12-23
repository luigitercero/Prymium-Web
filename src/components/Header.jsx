import React from 'react'

const Header = () => {
  const hola = () => {
    const amigos = 25;
    const bueno = `hola${amigos}`;
    return bueno;
  }
  return (
    <div>
      <ol start="5">
        <li>Julio</li>
        <li>Carmen</li>
        <li>Ignacio</li>
        <li>Elena</li>
      </ol>
    </div>
  )
}

export default Header
