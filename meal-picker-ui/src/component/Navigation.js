import React from 'react';
import {Link, Redirect} from '@reach/router';
import './Navigation.css'
import Home from '../Home'

class Navigation extends React.Component {
        handleLogoutClick(event) {
          event.preventDefault();
          this.props.user.logout();
      }

    render() {
      const user = this.props.user;
        return(
        
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav">
            { user.isLoggedIn && user.currentUser &&
              < >
                  
                  <li className="nav-item">
                    <Link className="nav-link" to="/home"><img className="logo" alt="logo" src="../logo.svg"></img></Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link menu-text" to="/search/">Search</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link menu-text" to="/searchlocation/">Search by Location</Link>
                  </li> 
                    <li className="nav-item" >
                            <Link className='nav-link menu-text' to="/" onClick={(e)=>this.handleLogoutClick(e)}>Logout</Link>
                    </li>
                    <span className="user-name">
                    {user.currentUser.name}
                    </span> 
                    </>
                }
              { !user.isLoggedIn &&
              <>
              
              <li className="nav-item">
              <Link className="nav-link menu-text"  to="/signUp">SignUp</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link menu-text"  to="/">Login</Link>
              </li> 
              </>
              }
            </ul>
           
            </nav>

        )
    }
}

export default Navigation