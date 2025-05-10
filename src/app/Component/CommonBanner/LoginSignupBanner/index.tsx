import React from 'react';

interface PageBannerProps {
  title: string;
  breadcrumb: { label: string; href?: string }[];
  iconOne?: string;
  iconTwo?: string;
  shadowOne?: string;
  shadowTwo?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({
  title,
  breadcrumb,
  iconOne = '/assets/images/icons/page-title_icon-1.png',
  iconTwo = '/assets/images/icons/page-title_icon-2.png',
  shadowOne = '/assets/images/background/page-title-1.png',
  shadowTwo = '/assets/images/background/page-title-2.png',
}) => {
  return (
    <section className="page-title">
      <div
        className="page-title-icon"
        style={{ backgroundImage: `url(${iconOne})` }}
      />
      <div
        className="page-title-icon-two"
        style={{ backgroundImage: `url(${iconTwo})` }}
      />
      <div
        className="page-title-shadow"
        style={{ backgroundImage: `url(${shadowOne})` }}
      />
      <div
        className="page-title-shadow_two"
        style={{ backgroundImage: `url(${shadowTwo})` }}
      />
      <div className="auto-container">
        <h2>{title}</h2>
        <ul className="bread-crumb clearfix">
          {breadcrumb.map((item, index) => (
            <li key={index}>
              {item.href ? <a href={item.href}>{item.label}</a> : item.label}
              {index < breadcrumb.length - 1 && (
                <span className="breadcrumb-separator"> &raquo; </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PageBanner;
