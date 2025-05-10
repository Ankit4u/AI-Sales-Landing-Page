import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div
        className="footer_pattern"
        style={{ backgroundImage: "url(/assets/images/background/footer-pattern.png)" }}
      ></div>
      <div className="auto-container">
        <div className="inner-container">
          {/* Widgets Section */}
          <div className="widgets-section">
            <div className="row clearfix">
              {/* Big Column */}
              <div className="big-column col-lg-5 col-md-12 col-sm-12">
                <div className="footer-newsletter">
                  <h5 className="footer-title">Newsletter</h5>
                  <div className="footer-newsletter_text">
                    Lorem ipsum dolor sit amet consectetur adipiscing vitae mattis
                    tellus. Nullam quis mattis.
                  </div>
                  <div className="newsletter-box">
                    <form method="post" action="/contact">
                      <div className="form-group">
                        <span className="icon fa-regular fa-envelope fa-fw"></span>
                        <input
                          type="email"
                          name="search-field"
                          placeholder="Enter your mail"
                          required
                        />
                        <button type="submit" className="template-btn btn-style-one">
                          <span className="btn-wrap">
                            <span className="text-one">Subscribe</span>
                            <span className="text-two">Subscribe</span>
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* Big Column */}
              <div className="big-column col-lg-7 col-md-12 col-sm-12">
                <div className="footer-lists_outer">
                  <div className="row clearfix">
                    {/* Column */}
                    <div className="column col-lg-5 col-md-4 col-sm-6">
                      <h5 className="footer-title">Services</h5>
                      <ul className="footer-pages_list">
                        <li><Link href="#">AI-powered copywriting</Link></li>
                        <li><Link href="#">Blog post generation</Link></li>
                        <li><Link href="#">Social media content</Link></li>
                        <li><Link href="#">Product descriptions</Link></li>
                        <li><Link href="#">Email campaigns</Link></li>
                        <li><Link href="#">Copy writings</Link></li>
                        <li><Link href="#">SEO specialist</Link></li>
                      </ul>
                    </div>
                    {/* Column */}
                    <div className="column col-lg-3 col-md-4 col-sm-6">
                      <h5 className="footer-title">resources</h5>
                      <ul className="footer-pages_list">
                        <li><Link href="#">Blog</Link></li>
                        <li><Link href="#">FAQs</Link></li>
                        <li><Link href="#">Help center</Link></li>
                        <li><Link href="#">case studies</Link></li>
                        <li><Link href="#">whitepapers</Link></li>
                        <li><Link href="#">Services</Link></li>
                      </ul>
                    </div>
                    {/* Column */}
                    <div className="column col-lg-4 col-md-4 col-sm-6">
                      <h5 className="footer-title">about us</h5>
                      <ul className="footer-pages_list">
                        <li><Link href="#">Our story</Link></li>
                        <li><Link href="#">Team</Link></li>
                        <li><Link href="#">Careers</Link></li>
                        <li><Link href="#">Testimonials</Link></li>
                        <li><Link href="#">Error 404</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner-container d-flex justify-content-between align-items-center flex-wrap">
            <div className="footer-logo">
              <Link href="/">
                <Image src="/assets/images/logo.svg" alt="" title="" width={120} height={40} />
              </Link>
            </div>
            <div className="footer-copyright">
              &copy; 2024 <Link href="/">Braine.</Link> All rights reserved.
            </div>
            {/* Social Box */}
            <div className="footer-social_box">
              <Link href="https://facebook.com/"><i className="fa-brands fa-facebook-f"></i></Link>
              <Link href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></Link>
              <Link href="https://youtube.com/"><i className="fa-brands fa-youtube"></i></Link>
              <Link href="https://instagram.com/"><i className="fa-brands fa-instagram"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
