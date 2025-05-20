'use client';
import { FaStar } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

const testimonials = [
  {
    image: '/assets/images/resource/author-2.png',
    name: 'Larry K. Lund',
    role: 'AI Solutions Consultant',
    content:
      'The AI-powered lead scoring tool has transformed how we identify high-intent prospects. We’re closing deals 40% faster now!',
  },
  {
    image: '/assets/images/resource/author-3.png',
    name: 'Marian R. Vieira',
    role: 'Sales Strategy Analyst',
    content:
      'Our team used to waste hours on low-conversion leads. Thanks to the predictive AI engine, we now focus only on quality prospects.',
  },
  {
    image: '/assets/images/resource/author-4.png',
    name: 'Bob E. Wiggins',
    role: 'CRM Automation Specialist',
    content:
      'Integrating AI into our CRM streamlined the sales pipeline. Follow-ups, reminders, and customer insights — all automated and smart!',
  },
  {
    image: '/assets/images/resource/author-4.png',
    name: 'Cameron Williamson',
    role: 'Sales Enablement Manager',
    content:
      'The AI chatbot doesn’t just answer queries — it qualifies leads 24/7. Our inbound conversion rate increased by 60% in just 3 weeks.',
  },
  {
    image: '/assets/images/resource/author-4.png',
    name: 'Ralph Edwards',
    role: 'AI Sales Coach',
    content:
      'With real-time analytics and speech-to-text coaching, our reps get actionable feedback after every call. Training time reduced by half!',
  },
  {
    image: '/assets/images/resource/author-4.png',
    name: 'Brooklyn Simmons',
    role: 'Account Executive',
    content:
      'Every proposal I send now uses AI-generated personalization. Clients notice the detail — and we’ve seen more callbacks than ever!',
  },
  {
    image: '/assets/images/resource/author-4.png',
    name: 'Kristin Watson',
    role: 'Enterprise Sales Lead',
    content:
      'Our AI-powered pipeline forecast has been over 90% accurate. It’s a game-changer for setting realistic monthly targets.',
  },
  {
    image: '/assets/images/resource/author-4.png',
    name: 'Cody Fisher',
    role: 'VP of Sales Operations',
    content:
      'From prospecting to closing, AI has removed guesswork from our process. We’ve cut costs and increased sales velocity at the same time.',
  },
  {
    image: '/assets/images/resource/author-4.png',
    name: 'Dianne Russell',
    role: 'Marketing & Sales Integrator',
    content:
      'The synergy between our AI-driven marketing and sales tools means leads are nurtured smarter and converted quicker.',
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
                  {testimonial.content}
                </div>
                <div className="testimonial-block_one-author_box">
                  <div className="testimonial-block_one-author-image">
                    <img src={testimonial.image} alt={testimonial.name} />
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
