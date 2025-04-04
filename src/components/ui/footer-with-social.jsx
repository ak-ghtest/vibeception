import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Music } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white shadow-inner mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start space-x-6">
            <Link to="/" className="text-primary-600 hover:text-primary-700">
              Home
            </Link>
            <Link to="/about" className="text-primary-600 hover:text-primary-700">
              About
            </Link>
            <Link to="/contact" className="text-primary-600 hover:text-primary-700">
              Contact
            </Link>
          </div>
          
          {/* Social Media Links */}
          <div className="mt-6 md:mt-0 flex justify-center space-x-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary-600 hover:text-primary-700 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary-600 hover:text-primary-700 transition-colors"
              aria-label="TikTok"
            >
              <Music size={24} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary-600 hover:text-primary-700 transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
          </div>

          <div className="mt-8 md:mt-0">
            <p className="text-center text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Vibeception. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}