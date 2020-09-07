import React from 'react';
import ToggleButton from './ToggleButton';
import '../css/Navbar.css';

const navigation = [
    {
        name: 'Services'
    },
    {
        name: 'Pricing'
    },
    {
        name: 'FAQs'
    },
    {
        name: 'Blog'
    },
    {
        name: 'Sign in'
    },
]

const Navbar = (props) => {
    return (
        <div className="navbar">
            <div className="logo">
                Simon
            </div>
            <div className="toggle" style={{float: 'right', marginInlineEnd: '5%'}}>
                <ToggleButton toggle={props.toggle} style={{float: 'right'}} />
            </div>
        
            <ul className="links">
                {navigation.map((nav) => (
                    <li className="link"><a>{nav.name}</a></li>
                ))}
            </ul>
        </div>
    );
}

export default Navbar;