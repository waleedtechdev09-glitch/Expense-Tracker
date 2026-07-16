import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-[#071B3B] mt-10 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Side */}
          <div>
            <h2 className="text-white text-4xl md:text-5xl font-bold">
              Get in Touch
            </h2>

            <p className="text-gray-300 mt-5 text-base md:text-lg leading-8 max-w-xl">
              Have questions about Expense Tracker? We'd love to hear from you.
              Fill out the form below, and our team will get back to you as soon
              as possible.
            </p>

            <form className="mt-10 space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Full Name <span className="text-red-400">*</span>
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full h-12 rounded-md bg-white/10 border border-white/5 px-4 text-white placeholder:text-gray-400 outline-none focus:border-[#6C63FF] transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Email Address <span className="text-red-400">*</span>
                </label>

                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full h-12 rounded-md bg-white/10 border border-white/5 px-4 text-white placeholder:text-gray-400 outline-none focus:border-[#6C63FF]"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter Subject"
                  className="w-full h-12 rounded-md bg-white/10 border border-white/5 px-4 text-white placeholder:text-gray-400 outline-none focus:border-[#6C63FF]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Enter your message..."
                  className="w-full rounded-md bg-white/10 border border-white/5 p-4 text-white placeholder:text-gray-400 outline-none resize-none focus:border-[#6C63FF]"
                />
              </div>

              <button
                type="submit"
                className="bg-[#6C63FF] hover:bg-[#5d54ff] text-white px-10 py-3 rounded-full font-medium transition-all duration-300"
              >
                Send
              </button>
            </form>
          </div>

          {/* Right Side */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/assets/illustration.png"
              alt="Contact Illustration"
              className="w-full max-w-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
