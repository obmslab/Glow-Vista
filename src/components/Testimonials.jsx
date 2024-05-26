import "./style.css";
import customer1 from "../assets/customer1.avif";
import customer2 from "../assets/customer1.avif";
import customer3 from "../assets/customer1.avif";

const testimonials = [
  {
    id: 1,
    name: "Dr. Anita Sharma",
    role: "Chief Medical Officer",
    image: customer1,
    quote:
      "Glowvista's AI-enabled malaria screening device has revolutionized our diagnostic process. The accuracy and ease of use are unparalleled. Our patients and staff are extremely satisfied with the results.",
  },
  {
    id: 2,
    name: "Mr. Rajesh Kumar",
    role: "Biomedical Engineer",
    image: customer2,
    quote:
      "The portable blood glucose monitor from Glowvista is a game-changer. It's incredibly user-friendly and provides precise readings every time. I highly recommend it to anyone in need of reliable glucose monitoring.",
  },
  {
    id: 3,
    name: "Dr. Sunita Patel",
    role: "Cardiologist",
    image: customer3,
    quote:
      "The wireless ECG monitor has significantly improved patient care in our clinic. The real-time data transmission and continuous monitoring capabilities are fantastic. Glowvista has truly outdone itself with this product.",
  },
];

const Testimonials = () => {
  return (
    <div className="lg:w-4/5 m-auto bg-transparent text-[#2596be] lg:p-10 p-2">
      <div className="container mx-auto px-4">
        <h1 className="lg:text-4xl text-2xl font-bold text-center mb-8">
          Testimonials
        </h1>

        <section className="mb-12">
          <h2 className="lg:text-3xl text-xl font-semibold mb-4">
            What Our Clients Say
          </h2>
          <p className="lg:text-lg text-sm text-gray-50">
            We are proud to share the positive experiences of our clients and
            partners who have benefited from our innovative biomedical
            technologies. Their feedback drives us to continue pushing the
            boundaries of healthcare innovation.
          </p>
        </section>

        <div className="space-y-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="border-2 border-[#2596be] p-6 rounded-lg shadow-md"
            >
              <div className="md:flex md:items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-32 h-32 object-cover rounded-full md:mr-6 mb-4 md:mb-0"
                />
                <div className="md:w-auto">
                  <p className="lg:text-lg text-justify italic text-gray-50 mb-4">
                    {testimonial.quote}
                  </p>
                  <h3 className="lg:text-2xl text-xl font-semibold mb-2">
                    {testimonial.name}
                  </h3>
                  <p className="lg:text-lg text-sm text-gray-50">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
