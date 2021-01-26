import React, { Component } from 'react'
import Features from './Features'

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

export class Header extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/">
                    <li class="nav-item">Navbar</li>
                </Link>
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <Link to="/Contact">
                            <li class="nav-item">Contact</li>
                        </Link>
                        <Link to="/Features">
                            <li class="nav-item">Features</li>
                        </Link>
                               
                
                    </ul>
                </div>
                </nav>
            </div>
        )
    }
}

export default Header
