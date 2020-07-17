// Navigation Bar along top of every page

import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { NavLink, withRouter } from 'react-router-dom';

class NavBar extends React.Component {
    state = {};

    handleClick = (event, { name }) => {
        this.setState({ activeItem: name });
    };

    render() {
        const { activeItem } = this.state;

        return (
            <Menu secondary pointing>
                <Menu.Item
                    as={NavLink}
                    to="/"
                    name="Home"
                    active={activeItem === 'Home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={NavLink}
                    to="/list"
                    name="List"
                    active={activeItem === 'List'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={NavLink}
                    to="/survey"
                    name="Student Survey"
                    active={activeItem === 'Student Survey'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={NavLink}
                    to="/community"
                    name="CommunityHome"
                    active={activeItem === 'CommunityHome'}
                    onClick={this.handleItemClick}
                />
            </Menu>
        );
    }
}

export default NavBar;
