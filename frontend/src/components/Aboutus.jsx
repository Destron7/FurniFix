// src/components/AboutUs.js
import React from 'react';
import '../../public/css/about.css'; // Import the external CSS file
import img1 from  '../../public/image/About/aboutimg1.jpeg';
import img2 from  '../../public/image/About/aboutimg2.jpg';

function AboutUs() {
  return (
    <div className="custom-container"> {/* Parent class to prevent style clashes */}
      <div className="container">
        <section className="heroSection">
          <div className="overlay"></div>
          <h1 className="heroTitle">About Us</h1>
          <p className="heroSubtitle">Bringing Your Furniture Back to Life</p>
        </section>

        <section className="gridSection">
          <div className="gridItem">
            <h2 className="sectionTitle">Our Story</h2>
            <p className="sectionText">
              We are a team of passionate furniture repair experts with over 20 years of experience. Our mission is to breathe new life into your cherished pieces, restoring them to their former glory.
            </p>
          </div>
          <div className='img-div'>
            <img src={img1} alt="Our Story" className='img-section'/>
          </div>
          <div className='img-div'>
            <img src={img2} alt="Our Expertise" className='img-section'/>
          </div>
          <div className="gridItem">
            <h2 className="sectionTitle">Our Expertise</h2>
            <p className="sectionText">
              Whether it’s antique restorations or modern repairs, our craftsmen handle every project with precision and care, ensuring high-quality results every time.
            </p>
          </div>
        </section>

        <section className="featuresSection">
          <h2 className="sectionTitleCenter">Why Choose Us</h2>
          <div className="featuresGrid">
            <div className="featureItem">
              <img src="./../public/image/About/experience.png" alt="Experience" className="featureIcon" />
              <p>Experienced Craftsmen</p>
            </div>
            <div className="featureItem">
              <img src="../../public/image/About/material.png" alt="Materials" className="featureIcon" />
              <p>High-Quality Materials</p>
            </div>
            <div className="featureItem">
              <img src="../../public/image/About/service.png" alt="Service" className="featureIcon" />
              <p>Reliable Service</p>
            </div>
            <div className="featureItem">
              <img src="../../public/image/About/affordable.png" alt="Affordable" className="featureIcon" />
              <p>Affordable Pricing</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
