import Image from 'next/image';
import Link from 'next/link';
import { BiSolidConversation } from "react-icons/bi";
import { MdMemory } from "react-icons/md";
import { MdOutlinePermDeviceInformation } from "react-icons/md";
import { LuWorkflow } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";
export default function ServicesSection() {
  const services = [
    {
      icon: <BiSolidConversation />,
      title: 'Multi-Agent Routing: Intelligent Conversation Management',
      description:
        'Our platform employs a multi-agent routing system that dynamically directs conversations based on lead behavior and intent.',
      delay: 'fadeInLeft',
      number: '01',
    },
    {
      icon: <MdMemory />,
      title: 'Memory Architecture: Contextual and Personalized Engagements',
      description:
        'To maintain meaningful and context-rich conversations, our solution integrates',
      delay: 'fadeInUp',
      number: '02',
    },
    {
      icon: <MdOutlinePermDeviceInformation />,
      title: 'Hybrid & Retrieval Engines: Accurate and Context-Aware Responses  ',
      description:
        'Our chatbot combines the strengths of fixed templates and dynamic knowledge base retrieval to deliver.',
      delay: 'fadeInRight',
      number: '03',
    },
    {
      icon: <LuWorkflow />,
      title: ' Integration Capabilities: Seamless Workflow Incorporation',
      description:
        'Our solution is designed to integrate effortlessly with your existing systems, including',
      delay: 'fadeInLeft',
      number: '04',
    },
    {
      icon: <MdOutlineSecurity />,
      title: 'Security & Compliance: Protecting Data and Ensuring Trust',
      description:
        'We prioritize data security and compliance, implementing measures to safeguard user information',
      delay: 'fadeInUp',
      number: '05',
    },
  ];

  return (
    <section className="services-one">
      <div className="auto-container">
        <div className="sec-title centered">
          <div className="sec-title_title">Our Feature</div>
          <h2 className="sec-title_heading">
            Our AI-powered Lead Nurturing Chatbot adapts to your business needs, delivering personalized interactions that turn leads into loyal customers.
          </h2>
        </div>

        <div className="row clearfix">
          {services.map(({ icon, title, description, delay, number }, i) => (
            <div className="service-block_one col-lg-4 col-md-6 col-sm-12" key={i}>
              <div className={`service-block_one-inner wow ${delay}`} data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="service-block_one-icon react-icon">
                  {icon}
                </div>
                <h5 className="service-block_one-heading">
                  <Link href="/productdetail">{title}</Link>
                </h5>
                <div className="service-block_one-text">{description}</div>
                <div className="lower-box d-flex justify-content-between align-items-center flex-wrap">
                  <div className="service-block_one-number">{number}</div>
                  <Link className="service-block_one-join" href="/service-detail">
                    Join now <i className="fa-solid fa-plus fa-fw"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
