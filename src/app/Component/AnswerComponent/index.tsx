// components/AnswerOneSection.jsx
import Image from 'next/image';
import Link from 'next/link';

const AnswerSection = () => {
  return (
    <section className="answer-one">
      <div className="auto-container">
        <div className="row clearfix">

          {/* Tab Column */}
          <div className="answer-one_title-column col-lg-5 col-md-12 col-sm-12">
            <div className="answer-one_title-outer">
              {/* Sec Title */}
              <div className="sec-title title-anim">
                <div className="sec-title_title">AI ANSWERS</div>
                <h2 className="sec-title_heading">
                  Gain <span>full control</span> of your information docs and many more
                </h2>
              </div>
              <ul className="answer-one_list">
                <li><i className="fa-solid fa-check fa-fw"></i>Create a personalized knowledge base on your own Braine library</li>
                <li><i className="fa-solid fa-check fa-fw"></i>Use your trusted sources to find the answers you need</li>
                <li><i className="fa-solid fa-check fa-fw"></i>Stay in the know with AI Q&amp;A and semantic search</li>
              </ul>
              <div className="answer-one_button">
                <Link href="/about.html" className="template-btn btn-style-one">
                  <span className="btn-wrap">
                    <span className="text-one">Know more</span>
                    <span className="text-two">Know more</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Tab Column */}
          <div className="answer-one_content-column col-lg-7 col-md-12 col-sm-12">
            <div className="answer-one_content-outer">
              <div
                className="answer-one_pattern"
                style={{ backgroundImage: "url(/assets/images/background/faq-shadow.png)" }}
              ></div>
              <div className="answer-one_image">
                <Image
                  src="/assets/images/resource/faq.png"
                  alt=""
                  width={700} // You can adjust these values
                  height={500}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AnswerSection;
