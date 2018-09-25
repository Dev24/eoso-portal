import React, { Component } from 'react';

import Header from './header';
import Footer from './footer';
//import SideBar from './side-bar';
import SideBarMenu from './side-bar-menu';
import './template_main.css'


export default class TemplateMain extends Component {

    render(){
        return (
            <div>
                <div className="row header-section section">
                    <div className="col">EOSO Portal</div>
                </div>
            
                <div className="row">
                    <div className="col-md-3 left-section section">
                        <SideBarMenu />
                    </div>
                    <div className="col-md-9 main-section section">
                        {this.props.children}
                    </div>
                </div>

                <div className="row footer-section section">
                    <div className="col">Footer</div>
                </div>
            </div>
        );
    }
}
