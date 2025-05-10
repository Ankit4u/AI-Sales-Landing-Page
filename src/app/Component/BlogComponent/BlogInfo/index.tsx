'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaUser, FaComment, FaAngleRight } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import blogpost from '../../../../../public/assets/images/resource/post-thumb-1.png';
import Sidebar from '../BlodSidebar';

const BlogContent = () => {
  return (
    <div className="sidebar-page-container">
      <div className="auto-container">
        <div className="row clearfix">
          {/* Content Side */}
          <div className="content-side col-lg-8 col-md-12 col-sm-12">
            <div className="blog-classic">
              {/* News Blocks */}
              {[16, 17, 18].map((num, idx) => (
                <div className="news-block_three" key={idx}>
                  <div className="news-block_three-inner">
                    <div className="news-block_three-image">
                      <Link href="/blogdetail">
                        <Image
                          src={`/assets/images/resource/news-${num}.jpg`}
                          alt={`news-${num}`}
                          width={730}
                          height={450}
                        />
                      </Link>
                    </div>
                    <div className="news-block_three-content">
                      <ul className="news-block_three-meta">
                        <li><FaUser /> Morens Otem</li>
                        <li><FaComment /> 03 Comments</li>
                      </ul>
                      <h3 className="news-block_three-title">
                        <Link href="/blogdetail">
                          {idx === 0
                            ? 'Transforming industries and shaping the future'
                            : idx === 1
                            ? 'Exploring the cutting-edge of artificial intelligence'
                            : 'Understanding the basics of artificial intelligence'}
                        </Link>
                      </h3>
                      <div className="news-block_three-text">
                        We are a team of dedicated patent professionals, united by our commitment to excellence in patent protection. With years of collective experience.
                      </div>
                      <div className="news-block_three-button">
                        <Link href="/blogdetail" className="template-btn btn-style-one">
                          <span className="btn-wrap">
                            <span className="text-one">Read more</span>
                            <span className="text-two">Read more</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              <ul className="styled-pagination text-center">
                <li><a href="#" className="active">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li className="next"><a href="#"><FaAngleRight /></a></li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <Sidebar />  {/* Use Sidebar component */}

        </div>
      </div>
    </div>
  );
};

export default BlogContent;
