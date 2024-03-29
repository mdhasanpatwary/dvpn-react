import React, { Component } from 'react'
import Logo from '../images/logo.png'
import stickyLogo from '../images/sticky-logo.png'
import { Link, NavLink } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import { FaSearch, FaGlobe, FaAngleDown, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

//import image
import Flag1 from '../images/flag1.png'
import Flag2 from '../images/flag2.png'
import Flag3 from '../images/flag3.png'
import Flag4 from '../images/flag4.png'
import Flag5 from '../images/flag5.png'
import Flag6 from '../images/flag6.png'

class Navbar extends Component {
    _isMounted = false;

    state = {
        stickyClass: '',
        mobileNav: false
    }
    myRef = React.createRef();

    componentDidMount() {
        this._isMounted = true;
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        this._isMounted = false;
        // window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
        let lastScrollY = window.scrollY

        if (lastScrollY >= 70 && this._isMounted) {
            this.setState((state, props) => ({
                stickyClass: 'sticky fadeInDown animated fixed-top'
            }));
        } else {
            if(this._isMounted)
            this.setState((state, props) => ({
                stickyClass: ''
            }));
        }
    }

    funRef(e) {
        e.preventDefault();
        this.setState({
            mobileNav: !this.state.mobileNav
        })
    }

    style = {
        color: "#5551EF"
    }
    
    render() {
        let headerTop = this.props.headerTop
        return (
            <header className={`header ${headerTop ? "" : "fixed-top"}`}>
                <div className={`header-top pb-2 pb-lg-0 ${headerTop ? "" : "d-none"}`}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-9 text-center text-lg-left">
                                <div className="info-bar text-white">
                                    <ul className="list-inline">
                                        <li>Your Ip : 103.237.76.105</li>
                                        <li>Your Location : Sydney, Australia</li>
                                        <li>Your Status : <span>Protected</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 text-center text-lg-right">
                                <div className="social-links">
                                    <a href="https://www.facebook.com"><FaFacebookF /></a>
                                    <a href="https://twitter.com/"><FaTwitter /></a>
                                    <a href="https://www.linkedin.com"><FaLinkedinIn /></a>
                                    <a href="https://www.instagram.com/"><FaInstagram /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${this.state.stickyClass} ${headerTop ? "bg-white" : ""} header-main`}>
                    <Container>
                        <Row className="position-relative">
                            <Col lg={2} xs={5}>
                                {/* Logo */}
                                <div className="logo">
                                    <Link to="/">
                                        <img src={headerTop ? stickyLogo : Logo} className="main-logo" alt="Logo"/>
                                        <img src={stickyLogo} className="sticky-logo" alt="Sticky Logo"/>
                                    </Link>
                                </div>
                                {/* End Logo */}
                            </Col>

                            <Col lg={10} xs={7} className="d-flex align-items-center justify-content-end position-static">
                                {/* Nav Wrapper */}
                                <div className="nav-wrapper">
                                    {/* Menu Button */}
                                    <div id="menu-button" onClick={(e) => this.funRef(e)}>
                                        <span></span>
                                    </div>
                                    {/* End Menu Button */}
                                    <div className={`nav-wrap-inner ${this.state.mobileNav ? 'active' : ''}`} ref={this.myRef}>
                                        {/* Nav */}
                                        <ul className="nav justify-content-end">
                                            <li><NavLink to="#">Home</NavLink>
                                                <ul className="sub-menu">
                                                    <li><NavLink exact to="/" activeStyle={this.style}>Home One</NavLink></li>
                                                    <li><NavLink to="/home-v2" activeStyle={this.style}>Home Two</NavLink></li>
                                                    <li><NavLink to="/home-v3" activeStyle={this.style}>Home Three</NavLink></li>
                                                </ul>
                                            </li>
                                            <li><NavLink to="#">Pages</NavLink>
                                                <ul className="sub-menu">
                                                    <li><NavLink to="/about" activeStyle={this.style}>About</NavLink></li>
                                                    <li><NavLink to="/coming-soon" activeStyle={this.style}>Coming Soon</NavLink></li>
                                                    <li><NavLink to="/error" activeStyle={this.style}>404</NavLink></li>
                                                </ul>
                                            </li>
                                            <li><NavLink to="#">Services</NavLink>
                                                <ul className="sub-menu">
                                                    <li><NavLink to="/service" activeStyle={this.style}>Service</NavLink></li>
                                                    <li><NavLink to="/single-service" activeStyle={this.style}>Service Details</NavLink></li>
                                                </ul>
                                            </li>
                                            <li><NavLink to="#">Blog</NavLink>
                                                <ul className="sub-menu">
                                                    <li><NavLink to="/blog" activeStyle={this.style}>Blog</NavLink></li>
                                                    <li><NavLink to="/single-blog" activeStyle={this.style}>Blog Details</NavLink></li>
                                                </ul>
                                            </li>
                                            <li><NavLink to="/contact">Contact</NavLink></li>
                                        </ul>
                                        {/* End Nav */}
                                    </div>
                                </div>
                                {/* End Nav Wrapper */}


                                <div className="d-flex align-items-center">
                                    {/* Search Toggle */}
                                    <div className="search-toggle">
                                        <button className="search-toggle-btn" onClick={this.props.handler.handleSearch}>
                                            <FaSearch />
                                        </button>
                                    </div>
                                    {/* End Search Toggle */}

                                    {/* Language */}
                                    <div className="flag-dropdown ml-3">
                                        <Dropdown>
                                            <Dropdown.Toggle className="dropdown-btn d-flex align-items-center">
                                                <FaGlobe />
                                                <FaAngleDown />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#"><img src={Flag1} alt="Flag" /></Dropdown.Item>
                                                <Dropdown.Item href="#"><img src={Flag2} alt="Flag" /></Dropdown.Item>
                                                <Dropdown.Item href="#"><img src={Flag3} alt="Flag" /></Dropdown.Item>
                                                <Dropdown.Item href="#"><img src={Flag4} alt="Flag" /></Dropdown.Item>
                                                <Dropdown.Item href="#"><img src={Flag5} alt="Flag" /></Dropdown.Item>
                                                <Dropdown.Item href="#"><img src={Flag6} alt="Flag" /></Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    {/* End Language */}

                                    {/* Offcanvas Triggar */}
                                    <div className="offcanvas-trigger ml-3 mr-2 mr-sm-0" onClick={this.props.handler.handleOffcanvas}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    {/* End Offcanvas Triggar */}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </header>
        )
    }
}

export default Navbar

