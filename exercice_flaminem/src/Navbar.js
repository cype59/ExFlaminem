import React from 'react';
import fire from './config/fire';
import {
    Navbar,
    NavbarBrand,
    NavbarText
} from 'reactstrap';

class NavbarMenu extends React.Component {

    logout() {
        fire.auth().signOut();
      }
    

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Application JUMP</NavbarBrand>
                    <NavbarText onClick={this.logout}>Se deconnecter</NavbarText>
                </Navbar>
            </div>
        )
    }
}

export default NavbarMenu;