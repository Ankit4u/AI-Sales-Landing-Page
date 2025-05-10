// components/BlogPage.js

import {
    FaCalendar,
    FaCommentDots,
    FaFacebookF,
    FaTwitter,
    FaGoogle,
    FaDribbble,
    FaCheck,
    FaSearch,
    FaPlay,
  } from "react-icons/fa";
import Sidebar from "../BlodSidebar";
  
  export default function BlogFullInformation() {
    return (
      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Content Side */}
            <div className="content-side col-lg-8 col-md-12 col-sm-12">
              <div className="blog-detail">
                <div className="blog-detail_inner">
                  <div className="blog-detail_image">
                    <img src="assets/images/resource/news-19.jpg" alt="" />
                  </div>
                  <div className="blog-detail_content">
                    <h3 className="blog-detail_heading">Transforming industries and shaping the future</h3>
                    <div className="blog-detail_author-outer d-flex align-items-center flex-wrap">
                      <div className="blog-detail-author d-flex align-items-center flex-wrap">
                        <div className="blog-detail-author-image">
                          <img src="assets/images/resource/author-6.png" alt="" />
                        </div>
                        <i>By Ellena M.Rice</i>
                      </div>
                      <ul className="blog-detail-meta d-flex align-items-center flex-wrap">
                        <li><span className="icon"><FaCalendar /></span>20 Jan, 2024</li>
                        <li><span className="icon"><FaCommentDots /></span>03 Comments</li>
                      </ul>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa me...</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi...</p>
                    <blockquote>
                      <div className="blockquote_bg" style={{ backgroundImage: "url(assets/images/background/blockquote-bg.png)" }}></div>
                      <i className="icon-quote-1"></i>
                      The purpose of the patent system is to foster and encourage new inventions of usefulness.
                      <div className="text-right">
                        <span>Thomas Jefferson</span>
                      </div>
                    </blockquote>
                    <div className="video-box">
                      <img src="assets/images/resource/news-20.jpg" alt="" />
                      <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-video overlay-box">
                        <span className="fa-solid fa-play fa-fw"><FaPlay /><i className="ripple"></i></span>
                      </a>
                    </div>
                    <h3>Top transforming process</h3>
                    <p>We are a team of the dedicated patent professionals...</p>
                    <ul className="blog-detail_list">
                      <li><i className="fa-solid fa-check fa-fw"><FaCheck /></i>Expertise in Patent Protection</li>
                      <li><i className="fa-solid fa-check fa-fw"><FaCheck /></i>Commitment to Excellence</li>
                      <li><i className="fa-solid fa-check fa-fw"><FaCheck /></i>Collaborative Partnership</li>
                    </ul>
                    <p>We are a team of the dedicated patent professionals...</p>
                    <div className="post-share-options">
                      <div className="post-share-inner d-flex justify-content-between flex-wrap">
                        <div className="post-tags"><a href="#">DataAI</a> <a href="#">AIFuture</a> <a href="#">AIExperts</a></div>
                        <ul className="social-links">
                          <li><a href="#"><FaFacebookF /></a></li>
                          <li><a href="#"><FaTwitter /></a></li>
                          <li><a href="#"><FaGoogle /></a></li>
                          <li><a href="#"><FaDribbble /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="blog-author_box">
                      <div className="blog-author-box_inner">
                        <div className="blog-author-box_content">
                          <div className="blog-author-box_image">
                            <img src="assets/images/resource/author-7.png" alt="" />
                          </div>
                          <h5>Ellena M. Ricee</h5>
                          <div className="blog-author_box-designation">UI/UX Instructor</div>
                          <div className="blog-author_box-text">Lorem ipsum dolor sit amet consectetur adipiscing elit...</div>
                          <ul className="author-social_links">
                            <li><a href="#"><FaFacebookF /></a></li>
                            <li><a href="#"><FaTwitter /></a></li>
                            <li><a href="#"><FaGoogle /></a></li>
                            <li><a href="#"><FaDribbble /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="comment-form_outer">
                      <div className="group-title">
                        <h3>Leave a comment</h3>
                        <div className="form-text">Your email address will not be published. Required fields are marked *</div>
                      </div>
                      <div className="comment-form">
                        <form method="post" action="blog.html">
                          <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                              <label>Name*</label>
                              <input type="text" name="username" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                              <label>Email*</label>
                              <input type="text" name="username" />
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                              <label>Type Comment here*</label>
                              <textarea name="message"></textarea>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                              <button type="submit" className="template-btn btn-style-one">
                                <span className="btn-wrap">
                                  <span className="text-one">Submit now</span>
                                  <span className="text-two">Submit now</span>
                                </span>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Sidebar Side */}
            <Sidebar/>
          </div>
        </div>
      </div>
    );
  }
  