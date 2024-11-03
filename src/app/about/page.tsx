import React from 'react';
import Image from 'next/image';
import CTAButton from '../components/CTAButton';

const About = () => {
  return (
    <div
      id="about"
      className="w-full mx-auto py-20 max-w-[1440px] bg-white text-center"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <Image
            src="/assets/images/leading_img.jpg"
            alt="Leading Health Care Provider"
            className="w-full"
            width={500} // Add appropriate width
            height={300} // Add appropriate height
          />
        </div>
        <div className="flex-1 text-start md:ml-10">
          <h4 className="capitalize font-bold text-2xl md:text-3xl leading-10 py-2">
            Leading Health Care Provider
          </h4>
          <p className="text-gray-400 leading-7 tracking-wide py-3">
            Our services provide high-quality medical healthcare, ensuring
            compassionate and comprehensive care for all your health needs.
          </p>
        </div>
      </div>
      {/* Pass the link prop to the CTAButton */}
      <CTAButton text="Discover More" link="/discoverMore" />
    </div>
  );
};

export default About;
