const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
       
        <div className="text-center mb-12">
          <h4 className="text-blue-600 font-semibold uppercase tracking-widest">
            Contact
          </h4>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Get In Touch
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to
            contact me by filling out the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800">Email</h4>
                <p className="text-gray-600">
                  m.nawaz.0211@gmail.com
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800">Phone</h4>
                <p className="text-gray-600">
                  +92 3324539572
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800">
                  Location
                </h4>
                <p className="text-gray-600">
                  Karachi, Pakistan
                </p>
              </div>
            </div>
          </div>

          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-700 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700 font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700 font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700 font-medium">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;