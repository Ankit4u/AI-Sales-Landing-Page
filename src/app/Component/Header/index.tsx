'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Header = () => {
  useEffect(() => {
    // Optional: Include Bootstrap JS (if needed for dropdowns or navbar collapse)
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  const [navbar, setNavbar] = useState(false);
  const handleNavbar = () => {
    setNavbar(false);
  };

  return (
    <>
      {/* Main Header */}
      <header className="main-header header-style-one">
        {/* Header Lower */}
        <div className="header-lower">
          <div className="auto-container">
            <div className="inner-container">
              <div className="d-flex justify-content-between align-items-center flex-wrap">

                <div className="logo-box">
                  <div className="logo">
                    <Link href="/">
                      <Image src="/assets/images/logo.svg" alt="" title="" width={120} height={40} />
                    </Link>
                  </div>
                </div>

                <div className="nav-outer d-flex flex-wrap">
                  {/* Main Menu */}
                  <nav className="main-menu navbar-expand-md">
                    <div className="navbar-header">
                      {/* Toggle Button */}
                      <button onClick={handleNavbar} className="navbar-toggler" type="button">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                    </div>

                    <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                      <ul className="navigation clearfix">
                        <li><a href="/">Home</a>
                        </li>
                        <li><Link href="/about">About</Link></li>
                        <li className="dropdown"><a href="/about">Pages</a>
                          <ul>
                            <li><Link href="/faq">Faq</Link></li>
                            <li><Link href="/price">Price</Link></li>
                            <li><Link href="/testimonial">Testimonial</Link></li>
                          </ul>
                        </li>
                        <li><a href="/product">Product</a>
                        </li>
                        <li><a href="/blog">Blog</a>
                        </li>
                        <li><Link href="/contact">Contact</Link></li>
                      </ul>
                    </div>
                  </nav>
                </div>

                {/* Main Menu End */}
                <div className="outer-box d-flex align-items-center flex-wrap">
                  {/* Language DropDown */}
                  <div className="language-dropdown">
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className="flag"><Image src="/assets/images/icons/flag.png" alt="" width={20} height={14} /></span>
                      <span className="fa-solid fa-angle-down fa-fw"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item" href="#"><span className="flag"><Image src="/assets/images/icons/flag.png" alt="" width={20} height={14} /></span> English</a></li>
                      <li><a className="dropdown-item" href="#"><span className="flag"><Image src="/assets/images/icons/arabic.png" alt="" width={20} height={14} /></span> Arabic</a></li>
                      <li><a className="dropdown-item" href="#"><span className="flag"><Image src="/assets/images/icons/germany.png" alt="" width={20} height={14} /></span> German</a></li>
                      <li><a className="dropdown-item" href="#"><span className="flag"><Image src="/assets/images/icons/france.png" alt="" width={20} height={14} /></span> French</a></li>
                    </ul>
                  </div>

                  {/* Button Box */}
                  <div className="main-header_buttons">
                    <a href="/login" className="template-btn btn-style-two">
                      <span className="btn-wrap">
                        <span className="text-one">Login</span>
                        <span className="text-two">Login</span>
                      </span>
                    </a>
                    <a href="/register" className="template-btn btn-style-one">
                      <span className="btn-wrap">
                        <span className="text-one">Join now</span>
                        <span className="text-two">Join now</span>
                      </span>
                    </a>
                  </div>

                  {/* Mobile Navigation Toggler */}
                  <div onClick={() => setNavbar(!navbar)} className="mobile-nav-toggler">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 6l16 0" />
                      <path d="M4 12l16 0" />
                      <path d="M4 18l16 0" />
                    </svg>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* End Header Lower */}

      </header>
      {/* End Main Header */}
      {/* Mobile Menu */}
      <div className={"mobile-menu" + (navbar ? ' active' : '')}>
        <div className="menu-backdrop"></div>
        <div className="close-btn" onClick={() => setNavbar(!navbar)}><span className="icon fa-solid fa-xmark fa-fw"></span></div>

        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="index.html">
              <Image src="/assets/images/mobile-logo.svg" alt="" width={120} height={40} />
            </Link>
          </div>
          <div className="menu-outer">
            <ul className="navigation clearfix">
              <li><a href="/">Home</a>
              </li>
              <li><Link href="/about">About</Link></li>
              <li className="dropdown"><a href="/about">Pages</a>
                <ul>
                  <li><Link href="/faq">Faq</Link></li>
                  <li><Link href="/price">Price</Link></li>
                  <li><Link href="/testimonial">Testimonial</Link></li>
                </ul>
              </li>
              <li><a href="/product">Product</a>
              </li>
              <li><a href="/blog">Blog</a>
              </li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
    </>
  );
};

export default Header;
