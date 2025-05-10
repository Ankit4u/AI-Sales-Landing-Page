'use client'; // Only if you're using Next.js 13+ app directory and want to use client-side features

import React from 'react';

const MapSection = () => {
  return (
    <section className="map-one">
      <div className="auto-container">
        <div className="map-one_map">
          <iframe
            width="820"
            height="560"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=636+5th+Ave%2C+New+York&t=&z=18&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
