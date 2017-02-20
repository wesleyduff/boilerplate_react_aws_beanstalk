import React from 'react';

class Header extends React.Component{
  render(){
    return (
      <nav className="navbar navbar-custom" role="navigation">
        <div className="container navigation">
          <div className="navbar-header page-scroll">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
              <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand" href="index.html">
              <img src="img/logo.png" alt="" width="150" height="40" />
            </a>
          </div>
          <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
            <ul className="nav navbar-nav">
              <li><div id="cart"></div></li>
              <li className="active"><a href="#intro">Home</a></li>
              <li><a href="#">Store location <span className="label label-danger">65</span></a> </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;