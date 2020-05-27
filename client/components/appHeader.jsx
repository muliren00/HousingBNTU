import React from 'react';
import {Navbar, Nav, NavDropdown, NavItem, MenuItem} from 'react-bootstrap'
import './appHeader.less';

class AppHeader extends React.Component{

    render(){
        return(
            <Navbar staticTop navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        Система управления корпусами БНТУ
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>

                    <Nav pullRight>
                        <NavItem eventKey={1} href="http://www.bntu.by/">
                            Сайт БНТУ
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default AppHeader;