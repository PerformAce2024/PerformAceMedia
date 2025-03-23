import React from "react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-primary py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-1">
            <h2 className="font-bold text-accent text-2xl md:text-3xl mb-4">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="mb-6">
              Explore our services and discover how PerformAce can help you
              achieve your digital marketing goals. Contact us today to schedule
              a consultation and take the first step towards digital success
              with PerformAce.
            </p>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-1">
            <h3 className="font-extrabold text-xl mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="font-normal">+91 7404047474 (Sales)</li>
              <li className="font-normal">+91 7404047474 (Support)</li>
              <li className="font-normal">sales@performacemedia.com</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-extrabold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="font-normal hover:text-accent transition-colors">
                <a href="#">About Us</a>
              </li>
              <li className="font-normal hover:text-accent transition-colors">
                <a href="#">Services</a>
              </li>
              <li className="font-normal hover:text-accent transition-colors">
                <a href="#">Contact Us</a>
              </li>
              <li className="font-normal hover:text-accent transition-colors">
                <a href="#">Portfolio</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>
            © {new Date().getFullYear()} PerformAce Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
