import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-slate-200 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className=" md:mb-0">
          <h3 className="text-lg font-semibold">EventEase</h3>
          <p className="text-sm text-slate-400">Simple event management for everyone</p>
        </div>

        <div className="flex items-center space-x-6">
          <nav className="flex space-x-4">
            <a href="/" className="text-sm hover:text-white">Home</a>
            <a href="/about" className="text-sm hover:text-white">About</a>
            <a href="/contact" className="text-sm hover:text-white">Contact</a>
          </nav>

          <div className="flex space-x-3">
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22 5.92c-.64.28-1.33.47-2.05.55.74-.44 1.3-1.14 1.57-1.98-.69.41-1.45.71-2.26.87A3.64 3.64 0 0015.5 4c-2.02 0-3.66 1.66-3.66 3.71 0 .29.03.57.09.84-3.04-.15-5.73-1.65-7.53-3.92-.31.56-.49 1.21-.49 1.9 0 1.31.66 2.46 1.66 3.14-.61-.02-1.18-.18-1.67-.46v.05c0 1.83 1.28 3.36 2.98 3.71-.31.09-.64.14-.97.14-.24 0-.48-.02-.71-.06.48 1.5 1.87 2.6 3.52 2.63A7.3 7.3 0 012 19.54a10.35 10.35 0 005.6 1.64c6.72 0 10.4-5.94 10.4-11.09l-.01-.51A7.72 7.72 0 0022 5.92z" />
              </svg>
            </a>

            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.92v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34v7.03C18.34 21.2 22 17.06 22 12.07z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-4 border-t border-slate-700 pt-4">
        <div className="container mx-auto px-4 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} EventEase. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

