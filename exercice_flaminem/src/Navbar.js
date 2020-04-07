import React from 'react';
import {
    Navbar,
    NavbarBrand,
} from 'reactstrap';

class NavbarMenu extends React.Component {

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Application JUMP</NavbarBrand>
                </Navbar>
            </div>
        )
    }
}

export default NavbarMenu;