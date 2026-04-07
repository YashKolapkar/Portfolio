import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gray-800 text-white py-10 px-6 text-center w-full flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="mb-4">Feel free to reach out to me through the following platforms:</p>
      <div className="flex justify-center space-x-8">
        <a href="https://github.com/YashKolapkar" target="_blank" rel="noopener noreferrer" className="text-blue-400 flex items-center space-x-2">
          <FaGithub className="text-2xl" />
          <span>GitHub</span>
        </a>
        <a href="https://linkedin.com/in/yash-kolapkar" target="_blank" rel="noopener noreferrer" className="text-blue-400 flex items-center space-x-2">
          <FaLinkedin className="text-2xl" />
          <span>LinkedIn</span>
        </a>
        <a href="mailto:yashkolapkar7@gmail.com" className="text-blue-400 flex items-center space-x-2">
          <FaEnvelope className="text-2xl" />
          <span>Email</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;