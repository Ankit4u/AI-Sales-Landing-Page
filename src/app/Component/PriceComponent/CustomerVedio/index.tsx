'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaPlay } from 'react-icons/fa'; // Import play icon

const VideoSection = () => {
  return (
    <section className="video-one">
      <div className="video-one_image">
        <Image
          src="/assets/images/background/video-bg.jpg"
          alt=""
          width={1920}
          height={1080}
          layout="responsive"
        />
        <Link
          href="https://www.youtube.com/watch?v=kxPCFljwJws"
          className="lightbox-video video-one_play"
        >
          <span className="video-play-icon">
            <FaPlay />
            <i className="ripple"></i>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default VideoSection;
