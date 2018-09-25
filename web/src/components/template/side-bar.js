import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import './side-bar.css'

export default class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuItems: [
                { id: 'home', text: 'Home', route: '/' },
                { id: 'page1', text: 'Home', route: '/' }
            ]
        };
    }

    showSettings (event) {
        event.preventDefault();
        //do something
      }

    render(){
        let {className} = this.props;
        return (
            <div className={"side-bar-section "+ (className?className:"") }>
                <Menu outerContainerId="App" pageWrapId="main-section"
                    >
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                    <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>
          </div>
        );
    }
}
