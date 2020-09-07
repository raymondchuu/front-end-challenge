import React from 'react';
import '../Sidebar.css';

const Sidebar = (props) => {
    let sideClass = props.show ? "show" : "";
    let close = props.setshow;

    return (
        <nav className={"sidebar " + sideClass}>
            <ul>
                <li>Services</li>
                <li>Pricing</li>
                <li>FAQs</li>
                <li>Blog</li>
                <li>Sign in</li>
            </ul>
        </nav>
    )
}

export default Sidebar;