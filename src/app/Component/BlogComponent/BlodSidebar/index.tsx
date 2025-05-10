'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaSearch, FaCalendar } from 'react-icons/fa';
import blogpost from '../../../../../public/assets/images/resource/post-thumb-1.png';

const Sidebar = () => {
  return (
    <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
      <aside className="sidebar">
        <div className="sidebar-inner">

          {/* Search Widget */}
          <div className="sidebar-widget search-box">
            <div className="widget-content">
              <h5 className="sidebar-widget_title">Search here</h5>
              <form method="post" action="/contact">
                <div className="form-group">
                  <input type="search" name="search-field" placeholder="Search..." required />
                  <button type="submit"><FaSearch /></button>
                </div>
              </form>
            </div>
          </div>

          {/* Latest Posts */}
          <div className="sidebar-widget post-widget">
            <div className="widget-content">
              <h5 className="sidebar-widget_title">Latest post</h5>

              {[1, 2, 3].map((thumb, i) => (
                <div className="post" key={i}>
                  <div className="thumb">
                    <Link href="/blog-detail">
                      <Image
                        src={blogpost}
                        alt={`post-thumb-${thumb}`}
                        width={60}
                        height={60}
                      />
                    </Link>
                  </div>
                  <h6>
                    <Link href="/blog-detail">
                      {i === 0
                        ? 'Redefining tomorrow adventures in ai and technology'
                        : i === 1
                        ? 'Beyond binary navigating the ai landscape'
                        : 'Algorithmic horizons a glimpse into our ai world'}
                    </Link>
                  </h6>
                  <div className="post-date"><FaCalendar /> Mar 18, 2028</div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="sidebar-widget category-widget">
            <div className="widget-content">
              <h5 className="sidebar-widget_title">Categories</h5>
              <ul className="service-list">
                {[
                  ['TechLeadership', 3],
                  ['TechTalks', 4],
                  ['TechTrends', 2],
                  ['Innovate', 5],
                  ['MLTech', 2]
                ].map(([cat, count], i) => (
                  <li key={i}>
                    <a href="#">{cat} <span>({count})</span></a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tags */}
          <div className="sidebar-widget popular-tags">
            <div className="widget-content">
              <h5 className="sidebar-widget_title">Popular tags</h5>
              {['DigitalAI', 'TechInnovate', 'FutureAI', 'TechBlog', 'CodingAI'].map((tag, i) => (
                <a href="#" key={i}>{tag}</a>
              ))}
            </div>
          </div>

        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
