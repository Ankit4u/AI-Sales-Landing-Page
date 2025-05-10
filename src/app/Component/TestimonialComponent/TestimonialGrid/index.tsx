'use client';
import { FaStar } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

const testimonials = [
  {
    image: '/assets/images/resource/author-2.png',
    name: 'Larry K. Lund',
    role: 'Social Media Manger',
  },
  {
    image: '/assets/images/resource/author-3.png',
    name: 'Marian R. Vieira',
    role: 'Social Media Manger',
  },
  {
    image: '/assets/images/resource/author-4.png',
    name: 'Bob E. Wiggins',
    role: 'Social Media Manger',
  },
  {
    image: '/assets/images/resource/author-8.png',
    name: 'Cameron Williamson',
    role: 'Web Designer',
  },
  {
    image: '/assets/images/resource/author-9.png',
    name: 'Ralph Edwards',
    role: 'Nursing Assistant',
  },
  {
    image: '/assets/images/resource/author-10.png',
    name: 'Brooklyn Simmons',
    role: 'Medical Assistant',
  },
  {
    image: '/assets/images/resource/author-11.png',
    name: 'Kristin Watson',
    role: 'Dog Trainer',
  },
  {
    image: '/assets/images/resource/author-12.png',
    name: 'Cody Fisher',
    role: 'President of Sales',
  },
  {
    image: '/assets/images/resource/author-13.png',
    name: 'Dianne Russell',
    role: 'Marketing Coordinator',
  },
];

export default function AllTestimonial() {
  return (
    <section className="testimonial-four">
      <div className="auto-container">
        <div className="row clearfix">
          {testimonials.map((testimonial, index) => (
            <div
              className="testimonial-block_one col-lg-4 col-md-6 col-sm-12"
              key={index}
            >
              <div className="testimonial-block_one-inner">
                <div className="testimonial-block_one-rating">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} className="fa fa-star" />
                    ))}
                </div>
                <div className="testimonial-block_one-text">
                  Lorem ipsum amet consectetur adipiscing elit Ut et massa mi.
                  Aliquam in hendrerit <span>Pellentesque sit amet</span>{' '}
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                </div>
                <div className="testimonial-block_one-author_box">
                  <div className="testimonial-block_one-author-image">
                    <img src={testimonial.image} alt="" />
                  </div>
                  {testimonial.name} <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Styled Pagination */}
        <ul className="styled-pagination text-center">
          <li>
            <a href="#" className="active">
              1
            </a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li className="next">
            <a href="#">
              <FaAngleRight className="fa-solid fa-angle-right fa-fw" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
