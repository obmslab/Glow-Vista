import "./style.css";
import malariaDevice from "../assets/malariaDevice.jpg";
import GlucoseMonitor from "../assets/GlucoseMonitor.jpg";
import ECGmonitor from "../assets/ECGmonitor.png";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "AI-Enabled Malaria Screening Device",
      image: malariaDevice,
      description:
        "Our AI-enabled handheld device for malaria screening provides rapid and accurate detection. Utilizing advanced optics, optomechanics, microfluidics, and artificial intelligence, this device offers a cost-effective and user-friendly solution for healthcare professionals.",
      features: [
        "High diagnostic accuracy",
        "Portable and easy to use",
        "Rapid results within minutes",
        "Cost-effective point-of-care device",
      ],
    },
    {
      id: 2,
      name: "Portable Blood Glucose Monitor",
      image: GlucoseMonitor,
      description:
        "A compact and reliable blood glucose monitoring device that ensures accurate readings on the go. Ideal for managing diabetes with ease and precision.",
      features: [
        "Accurate and consistent readings",
        "User-friendly interface",
        "Portable and lightweight design",
        "Long battery life",
      ],
    },
    {
      id: 3,
      name: "Wireless ECG Monitor",
      image: ECGmonitor,
      description:
        "Our wireless ECG monitor provides continuous cardiac monitoring, offering real-time data for better heart health management. It's designed for both clinical and home use.",
      features: [
        "Continuous monitoring",
        "Real-time data transmission",
        "Comfortable and easy to wear",
        "Compatible with mobile devices",
      ],
    },
  ];

  return (
    <div className="lg:w-4/5 m-auto bg-transparent text-[#2596be] lg:p-10 p-2">
      <div className="container mx-auto px-4">
        <h1 className="lg:text-4xl text-2xl font-bold text-center mb-8">
          Featured Products
        </h1>

        <section className="mb-12">
          <p className="lg:text-lg text-gray-50">
            Discover our range of innovative biomedical devices designed to
            enhance diagnostic accuracy and improve healthcare outcomes. Each
            product is crafted with precision and advanced technology to meet
            the needs of healthcare professionals and patients.
          </p>
        </section>

        <div className="space-y-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="border-2 border-[#2596be] p-6 rounded-lg shadow-md"
            >
              <div className="md:flex md:items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full md:w-1/3 h-auto object-cover rounded-lg md:mr-6 mb-4 md:mb-0"
                />
                <div className="md:w-2/3">
                  <h3 className="lg:text-2xl text-xl font-semibold mb-2">
                    {product.name}
                  </h3>
                  <p className="lg:text-lg text-gray-50 mb-4">
                    {product.description}
                  </p>
                  <ul className="list-disc pl-6 lg:text-lg text-gray-50 mb-4">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <button className="bg-[#32a2ac] hover:bg-teal-700 text-white py-2 px-4 rounded-lg mt-4">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
