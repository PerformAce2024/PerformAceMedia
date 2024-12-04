
const DigitalPresenceCTA = () => {
  return (
    <div className="w-full bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CTA Section */}
          <div className="col-span-1 px-8">
            <h2 className="text-[32px] leading-tight font-bold text-red-500 mb-4">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-gray-700">
              Explore our services and discover how PerformAce can help you achieve your digital marketing goals. Contact us today to schedule a consultation and take the first step towards digital success with PerformAce.
            </p>
          </div>

          {/* Contact Section */}
          <div className="col-span-1 flex justify-center pl-44">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-gray-700">+91 7404047474 (Sales)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700">+91 9958410026 (Support)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700">sales@performacemedia.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-span-1 px-8">
            <div className="flex justify-end">
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <div><a href="#" className="text-gray-700 hover:text-gray-900">About Us</a></div>
                  <div><a href="#" className="text-gray-700 hover:text-gray-900">Services</a></div>
                  <div><a href="#" className="text-gray-700 hover:text-gray-900">Contact Us</a></div>
                  <div><a href="#" className="text-gray-700 hover:text-gray-900">Portfolio</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-black">
          Copyright © 2024 PerformAce. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default DigitalPresenceCTA;