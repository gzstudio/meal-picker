import React from 'react';
import {Link} from '@reach/router';

class Navigation extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/search/">Search</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/">Logout</Link>
              </li>
            </ul>
            </nav>
        )
    }
}

export default Navigation