import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    {/* <NavLink to='/home' activeStyle>Home</NavLink>
                    <NavLink to='/easyprogramming/' activeStyle>Easy Programming</NavLink>
                    <a href='https://goelvinay5.github.io/easyprogramming/'>Easy Programming</a>
                    <NavLink to='/organizer' activeStyle>Organizer</NavLink>
                    <NavLink to='/dsa' activeStyle>DSA</NavLink> */}
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                {/* <NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn> */}
            </Nav>
        </>
    );
};

export default Navbar;
