import React from 'react';
// import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { Link } from "react-router-dom";
import avatar from "../../assets/images/avatar.jpg";

// Header.propTypes = {
    
// };

function Header(props) {
    return (
        <header className="header">
            <Container className="themed-container" fluid={true}>
                <div className="header-box">
                    <div className="header-box__logo">
                        <h2>
                            <Link to="/photos">
                                PHOTO BTF
                            </Link>
                        </h2>
                        <nav>
                            <ul>
                                <li>
                                <Link to="/photos">
                                    Home
                                </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-box__search">
                        <form>
                            <input type="text" placeholder="Tìm kiếm" />
                            <button type="button">
                                <i className="fas fa-search"></i>
                            </button>
                        </form>
                    </div>
                    <div className="header-box__section">
                        <ul>
                            <li>
                                <Link to="/">
                                    <i className="fas fa-bell"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/photos/add">
                                    <i className="fal fa-plus"></i>
                                </Link>
                            </li>
                            <li className="user">
                                <Link to="/">
                                    <img src={avatar} alt="avatar"/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Header;