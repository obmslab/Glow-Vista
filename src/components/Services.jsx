const Services = () => {
  return (
    <div className="lg:w-4/5 m-auto bg-transparent text-[#2596be] lg:p-10">
      <div className="container mx-auto px-4">
        <h1 className="lg:text-3xl text-2xl font-bold text-center mb-8">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-[#2596be] rounded-lg shadow-md p-6">
            <h2 className="lg:text-xl font-semibold mb-4">
              Medical Device Development
            </h2>
            <p className="mb-4 text-sm text-slate-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              suscipit ligula ac libero aliquet, eget fermentum arcu molestie.
              In hac habitasse platea dictumst. Duis vehicula ante nec orci
              fringilla, ut vulputate lectus molestie.
            </p>
            <ul className="list-disc text-sm pl-5 text-slate-100">
              <li>Prototype Design and Testing</li>
              <li>Regulatory Compliance Assistance</li>
              <li>Product Validation and Verification</li>
              <li>Market Research and Analysis</li>
            </ul>
          </div>
          <div className="border-2 border-[#2596be] rounded-lg shadow-md p-6">
            <h2 className="lg:text-xl font-semibold mb-4">
              Biomedical Equipment Maintenance
            </h2>
            <p className="mb-4 text-sm text-slate-100">
              Our team of experts ensures that your biomedical equipment
              operates at peak performance, minimizing downtime and optimizing
              reliability. We offer comprehensive maintenance services tailored
              to your specific needs.
            </p>
            <ul className="list-disc text-sm pl-5 text-slate-100">
              <li>Preventive Maintenance Programs</li>
              <li>Equipment Calibration and Testing</li>
              <li>Emergency Repairs and Troubleshooting</li>
              <li>Asset Management Solutions</li>
            </ul>
          </div>
        </div>
        <div className="my-8 pl-4">
          <h2 className="lg:text-2xl text-xl font-semibold mb-4">
            Healthcare Technology Consulting
          </h2>
          <p className="mb-4 text-sm text-slate-100">
            Our consulting services help healthcare organizations navigate
            technological challenges and leverage the latest innovations to
            improve patient care and operational efficiency. We provide
            strategic guidance and customized solutions.
          </p>
          <ul className="list-disc text-sm pl-5 text-slate-100">
            <li>IT Infrastructure Optimization</li>
            <li>Telemedicine and Remote Patient Monitoring</li>
            <li>Data Analytics and Insights</li>
            <li>Compliance and Security Solutions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
