import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>;
      default:
        return [
          <li key="1"><Payments /></li>,
          <li key="2" style={{ margin: "0 1rem"}}>Credits: {this.props.auth.credits}</li>,
          <li key="3"><a href="/api/logout">Logout</a></li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="brand-logo"
          >
            Feedback4U
          </Link>
          <a href="#" data-activates="mobile-demo" className="button-collapse">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
          <ul className="side-nav text-black" style={{color: 'black'}} id="mobile-demo">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

// destructuring auth off of state object
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
