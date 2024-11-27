import React from "react";

const ContactMe = () => {
  return (
    <section id="contactme" className="p-10 bg-gray-100 text-black">
      <div className="p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto mt-10">
        <div className="space-y-6">
          <hr />
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <div>
            <h3 className="text-sm font-bold uppercase text-gray-700">Email</h3>
            <p className="text-gray-600">
              <a href="mailto:atsigupta@gmail.com" className="hover:underline">
                atsigupta@gmail.com
                <br />
                atsig2@illinois.edu
              </a>
            </p>
          </div>
          <hr />
          {/* Social */}
          <div>
            <h3 className="text-sm font-bold uppercase text-gray-700">Social</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/atsi-gupta-711b81200/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:scale-110 transition"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a
                href="https://github.com/AtsiGupta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:scale-110 transition"
              >
                <i className="fab fa-github fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
