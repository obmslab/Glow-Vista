const Contact = () => {
  return (
    <div className="lg:w-4/5 m-auto bg-transparent text-[#2596be] lg:p-10 p-2">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-[#2596be] rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Location</h2>
            <p className="mb-4 text-slate-100">
              123 Main Street,
              <br />
              City, State, ZIP Code
              <br />
              Country
            </p>
          </div>
          <div className="border-2 border-[#2596be] rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-4 text-slate-100">
              Phone: +1 123-456-7890
              <br />
              Email: info@example.com
            </p>
            <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
            <p className="mb-4 text-slate-100">
              Monday - Friday: 9:00 AM - 5:00 PM
              <br />
              Saturday: 10:00 AM - 2:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-slate-100 text-sm font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border-2 border-[#2596be] p-2 rounded-md"
                style={{ backgroundColor: "transparent" }}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-slate-100 text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border-2 border-[#2596be] rounded-md"
                style={{ backgroundColor: "transparent" }}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-slate-100 text-sm font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full p-2 border-2 border-[#2596be] rounded-md"
                style={{ backgroundColor: "transparent" }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#2596be] hover:bg-[#5dc6ec] text-white py-4 px-[105px] rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
