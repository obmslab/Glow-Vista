import "./style.css";

const Career = () => {
  return (
    <div className="lg:w-4/5 m-auto bg-transparent text-[#2596be] lg:p-10 p-2">
      <div className="container mx-auto px-4">
        <h1 className="lg:text-4xl text-xl font-bold text-center mb-8">
          Join Our Team
        </h1>

        <section className="lg:mb-12 mb-6">
          <h2 className="lg:text-3xl text-lg font-semibold mb-4">
            Why Work with Us?
          </h2>
          <p className="lg:text-lg text-sm text-gray-100">
            At Glowvista Instruments Pvt. Ltd., we are passionate about
            revolutionizing healthcare with innovative biomedical technologies.
            Our team is dedicated to creating cutting-edge solutions that
            enhance diagnostic accuracy and improve global health outcomes. If
            you are driven by a desire to make a positive impact in the world,
            we invite you to join us on this exciting journey.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="lg:text-3xl text-lg font-semibold mb-4">
            Current Openings
          </h2>
          <div className="space-y-8">
            <div className="border-2 border-[#2596be] p-6 rounded-lg shadow-md">
              <h3 className="lg:text-2xl text-xl font-semibold mb-2">
                Software Engineer
              </h3>
              <p className="lg:text-lg text-sm text-gray-100">
                We are looking for a skilled Software Engineer to join our
                development team. You will be responsible for designing,
                implementing, and maintaining software solutions that drive our
                innovative biomedical devices.
              </p>
              <button className="bg-[#32a2ac] hover:bg-teal-100 text-white py-2 px-4 rounded-lg mt-4">
                Apply Now
              </button>
            </div>
            <div className="border-2 border-[#2596be] p-6 rounded-lg shadow-md">
              <h3 className="lg:text-2xl text-xl font-semibold mb-2">
                Biomedical Engineer
              </h3>
              <p className="lg:text-lg text-sm text-gray-100">
                Join our team as a Biomedical Engineer and contribute to the
                development of our advanced diagnostic devices. Your expertise
                will help us create innovative solutions that improve patient
                care.
              </p>
              <button className="bg-[#32a2ac] hover:bg-teal-100 text-white py-2 px-4 rounded-lg mt-4">
                Apply Now
              </button>
            </div>
            <div className="border-2 border-[#2596be] p-6 rounded-lg shadow-md">
              <h3 className="lg:text-2xl text-xl font-semibold mb-2">
                Marketing Specialist
              </h3>
              <p className="lg:text-lg text-sm text-gray-100">
                We are seeking a Marketing Specialist to help us promote our
                products and build our brand. You will create and execute
                marketing strategies that showcase our innovative technologies
                to a global audience.
              </p>
              <button className="bg-[#32a2ac] hover:bg-teal-100 text-white py-2 px-4 rounded-lg mt-4">
                Apply Now
              </button>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="lg:text-2xl text-xl font-semibold mb-2">
            Our Culture
          </h2>
          <p className="lg:text-lg text-sm text-gray-100">
            At Glowvista, we foster a culture of innovation, collaboration, and
            continuous learning. Our team members are encouraged to share ideas,
            take on new challenges, and grow both personally and professionally.
            We believe that a supportive and inclusive environment is key to
            achieving our mission of improving healthcare outcomes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="lg:text-2xl text-xl font-semibold mb-2">Benefits</h2>
          <ul className="list-disc pl-6 lg:text-lg text-sm text-gray-100">
            <li>Competitive salary and benefits package</li>
            <li>Health and wellness programs</li>
            <li>Professional development opportunities</li>
            <li>Flexible work arrangements</li>
            <li>Collaborative and inclusive work environment</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Career;
