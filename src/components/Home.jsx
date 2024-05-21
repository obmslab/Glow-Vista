import { motion } from "framer-motion";
import biomedicalhealthcare from "../assets/biomedicalhealthcare.jpg";

const products = [
  {
    id: 1,
    image: biomedicalhealthcare,
    name: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    image: biomedicalhealthcare,
    name: "Product 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    image: biomedicalhealthcare,
    name: "Product 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    image: biomedicalhealthcare,
    name: "Product 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    image: biomedicalhealthcare,
    name: "Product 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    image: biomedicalhealthcare,
    name: "Product 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Home = () => {
  return (
    <div className="bg-[#F5EFED] py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Welcome to Biomedical Instrumentation Solutions
        </h1>
        <div className="w-5/6 m-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-xl font-semibold mb-4">Our Services</h2>
            <ul className="list-disc pl-5">
              <li>Medical Device Development</li>
              <li>Biomedical Equipment Maintenance</li>
              <li>Healthcare Technology Consulting</li>
              <li>Biomedical Research Support</li>
            </ul>
          </motion.div>
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="mb-4">
              We specialize in providing cutting-edge solutions for biomedical
              instrumentation, ensuring the highest standards of quality and
              reliability.
            </p>
            <button className="bg-blue-950 hover:bg-blue-900 text-white py-2 px-4 rounded-lg">
              Learn More
            </button>
          </motion.div>
        </div>
        {/* Featured Products Section */}
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-4/5 m-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md p-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto rounded-md mb-4 mx-auto"
                />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p>{product.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
