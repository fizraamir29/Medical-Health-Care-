import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#f5faff] w-full py-10 mt-8">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Name */}
        <p className="text-gray-700 font-semibold text-lg mb-6">© 2024 Fizra Amir</p>
        
        {/* Social Media Links */}
        <div className="flex gap-6 justify-center">
          <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="text-gray-700 hover:text-primary text-2xl" />
          </a>
          <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-gray-700 hover:text-primary text-2xl" />
          </a>
          <a href="https://instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-gray-700 hover:text-primary text-2xl" />
          </a>
          <a href="https://facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="text-gray-700 hover:text-primary text-2xl" />
          </a>
          <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp className="text-gray-700 hover:text-primary text-2xl" />
          </a>
          <a href="tel:+your-phone-number" target="_blank" rel="noopener noreferrer" aria-label="Call">
            <FaPhone className="text-gray-700 hover:text-primary text-2xl" />
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
