import React from 'react';
import { Link } from 'react-router-dom';

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