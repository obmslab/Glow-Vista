const Services = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">
              Medical Device Development
            </h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              suscipit ligula ac libero aliquet, eget fermentum arcu molestie.
              In hac habitasse platea dictumst. Duis vehicula ante nec orci
              fringilla, ut vulputate lectus molestie.
            </p>
            <ul className="list-disc pl-5">
              <li>Prototype Design and Testing</li>
              <li>Regulatory Compliance Assistance</li>
              <li>Product Validation and Verification</li>
              <li>Market Research and Analysis</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">
              Biomedical Equipment Maintenance
            </h2>
            <p className="mb-4">
              Our team of experts ensures that your biomedical equipment
              operates at peak performance, minimizing downtime and optimizing
              reliability. We offer comprehensive maintenance services tailored
              to your specific needs.
            </p>
            <ul className="list-disc pl-5">
              <li>Preventive Maintenance Programs</li>
              <li>Equipment Calibration and Testing</li>
              <li>Emergency Repairs and Troubleshooting</li>
              <li>Asset Management Solutions</li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            Healthcare Technology Consulting
          </h2>
          <p className="mb-4">
            Our consulting services help healthcare organizations navigate
            technological challenges and leverage the latest innovations to
            improve patient care and operational efficiency. We provide
            strategic guidance and customized solutions.
          </p>
          <ul className="list-disc pl-5">
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
