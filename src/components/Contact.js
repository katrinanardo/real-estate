import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    return ( 
    <section className=" bg-gray-100 py-[100px] h-[full] flex justify-center items-center lg:pt-[100px]">
      <div className="flex flex-col lg:flex-row justify-center items-center text-center lg:text-left gap-12 max-w-[1200px] mx-auto w-full">
        {/* Left Content */}
        <div className="flex-1">
        <div className="mx-auto md:mx-auto lg:mx-0 h-[5px] w-[150px] bg-gradient-to-r from-blue-500 to-green-500 mb-10"></div>


          <h2 className="text-4xl text-gray-900 mb-4 font-[Georgia,serif]">
            Contact Us
          </h2>
          <p className="text-gray-700 mb-6 max-w-md">
            Experience peace of mind—talk to our expert team.
          </p>

          <div className="space-y-4 text-blue-800 font-medium">
            <div className="flex lg:justify-start justify-center items-center gap-2">
              <FaPhoneAlt />
              <a href="tel:(206)919-6886">(206) 919-6886</a>
            </div>
            <div className="flex lg:justify-start justify-center items-center gap-2">
              <FaWhatsapp />
              <a href="https://wa.me/14259412560">Message us on WhatsApp</a>
            </div>
          </div>

          <p className="text-gray-900 font-semibold mt-6 max-w-md">
          Office Hours
          </p>

          <p className="text-gray-700 text-sm my-2 max-w-md">
          Open daily         8:00 am - 7:00 pm
          </p>
          <p className="text-gray-700 text-sm my-2 max-w-md">
          Appointments outside office hours available upon request. Just call!
          </p>

          <p className="text-gray-900 font-semibold mt-6 max-w-md">
          Marci Metzger - THE RIDGE REALTY GROUP
          </p>

          <p className="text-gray-700 text-sm my-2 max-w-md">
          3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
          </p>          


          <div className="rounded-lg overflow-hidden shadow-md max-w-md">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.9206452019324!2d-115.99305298478743!3d36.21323558007747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c76c6cd4d55b45%3A0x9b1e7bc96a383ac3!2s3190%20NV-160%20%23F%2C%20Pahrump%2C%20NV%2089048%2C%20USA!5e0!3m2!1sen!2snz!4v1712382748393"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        </div>

        {/* Right Form Card */}
        <div className="flex-1 bg-white px-8 py-16 rounded-2xl shadow-xl">
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full bg-gray-50 p-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Phone"
                className="input input-bordered w-full bg-gray-50 p-2 rounded-md"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full bg-gray-50 p-2 rounded-md"
              />
             
            </div>

        

            <textarea
              rows="4"
              placeholder="Additional Information"
              className="textarea textarea-bordered w-full bg-gray-50 p-1 rounded-md"
            ></textarea>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded">
             Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;