import React from 'react'

const Header = () => {
	const hola = () => {
		const amigos = 25;
		const bueno = `hola${amigos}`;
		return bueno;
	}
	return (
  <div>
    {hola()}
  </div>
	)
}

export default Header
