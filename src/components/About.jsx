import { motion } from "framer-motion";
import lab5 from "../assets/lab5.jpg";
import Earu from "../assets/Earu.jpg";
import Bala from "../assets/Bala.jpeg";
import PKJ from "../assets/PKJ.jpeg";

const About = () => {
  const teamMembers = [
    { name: "Dr. Earu Banoth", role: "Founder", image: Earu },
    { name: "Dr. Bala Chakravarthy Neelapu", role: "Co-Founder", image: Bala },
    { name: "Dr. Puneet Kumar Jain", role: "Co-Founder", image: PKJ },
    { name: "Dr. Prasoon Kumar", role: "Co-Founder", image: lab5 },
    { name: "Mrs. Monitha", role: "Co-Founder", image: lab5 },
    { name: "Mr. Ahmed Saidulu", role: "", image: lab5 },
    { name: "Mrs. Oindrela Banik", role: "", image: lab5 },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>
        <div className="w-5/6 m-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-4">
              At Biomedical Instrumentation Solutions, our mission is to
              revolutionize healthcare by developing innovative biomedical
              instruments and providing top-notch maintenance services. We aim
              to enhance patient care and improve healthcare outcomes through
              cutting-edge technology and expert consulting.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              suscipit ligula ac libero aliquet, eget fermentum arcu molestie.
              In hac habitasse platea dictumst. Duis vehicula ante nec orci
              fringilla, ut vulputate lectus molestie.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-xl font-semibold mb-4">Our Vision</h2>
            <p className="mb-4">
              Our vision is to be a global leader in biomedical technology,
              known for our innovative solutions and exceptional service. We
              strive to create a healthier world by pushing the boundaries of
              medical science and technology, making advanced healthcare
              accessible to all.
            </p>
            <p>
              Phasellus ut est nisl. Suspendisse vitae risus risus. Nam nec erat
              ut justo mattis semper. Nullam tincidunt sapien quis magna
              lacinia, et viverra velit aliquet. Cras bibendum eros at turpis
              consectetur, nec laoreet dolor eleifend.
            </p>
          </motion.div>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-3xl font-semibold mb-2">Our Team</h2>
          <p>
            Meet the talented individuals who drive our mission forward and make
            Biomedical Instrumentation Solutions a trusted name in healthcare
            technology.
          </p>
          <h2 className="text-2xl underline italic font-semibold my-4">
            Founder&apos;s Team
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-4/5 h-full m-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center"
          >
            {teamMembers.map((members) => (
              <div key={members.id} className="pb-4">
                <img
                  src={members.image}
                  alt={members.name}
                  className="w-[100%] h-[300px] object-contain object-top mb-4 mx-auto"
                />
                <h3 className="text-lg font-semibold mb-2">{members.name}</h3>
                <p>{members.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
