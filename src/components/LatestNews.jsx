import "./style.css";
import newsImage1 from "../assets/news1.jpg";
import newsImage2 from "../assets/news1.jpg";
import newsImage3 from "../assets/news1.jpg";

const newsItems = [
  {
    id: 1,
    title: "Glowvista Launches AI-Enabled Malaria Screening Device",
    date: "May 20, 2024",
    image: newsImage1,
    content:
      "Glowvista Instruments Pvt. Ltd. has officially launched its groundbreaking AI-enabled handheld malaria screening device. This innovative technology promises to revolutionize malaria diagnostics with its high accuracy and ease of use, aiming to improve health outcomes globally.",
  },
  {
    id: 2,
    title: "Glowvista Receives Government Grant for Biomedical Research",
    date: "April 15, 2024",
    image: newsImage2,
    content:
      "The government has awarded Glowvista a significant grant to further their research and development in biomedical technology. This funding will support the creation of more innovative healthcare solutions designed to enhance patient care and diagnostic accuracy.",
  },
  {
    id: 3,
    title: "Glowvista Expands Operations to Southeast Asia",
    date: "March 10, 2024",
    image: newsImage3,
    content:
      "As part of its mission to make advanced healthcare accessible to all, Glowvista Instruments Pvt. Ltd. is expanding its operations to Southeast Asia. This strategic move will help the company reach more healthcare providers and patients, bringing their cutting-edge technologies to new markets.",
  },
];

const LatestNews = () => {
  return (
    <div className="lg:w-4/5 m-auto bg-transparent text-[#2596be] lg:p-10 p-2">
      <div className="container mx-auto px-4">
        <h1 className="lg:text-4xl text-2xl font-bold text-center mb-8">
          Latest News
        </h1>
        <section className="mb-8 flex flex-col items-center">
          <h2 className="lg:text-3xl text-2xl font-semibold mb-4">
            Stay Updated
          </h2>
          <p className="lg:text-lg text-sm text-gray-50 text-justify">
            Keep up with the latest developments and achievements at Glowvista
            Instruments Pvt. Ltd. Our news section provides updates on product
            launches, research advancements, and other significant milestones.
          </p>
        </section>

        <div className="lg:space-y-12 space-y-4">
          {newsItems.map((newsItem) => (
            <div
              key={newsItem.id}
              className="border-2 border-[#2596be] p-6 rounded-lg shadow-md"
            >
              <img
                src={newsItem.image}
                alt={newsItem.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="md:flex md:justify-between">
                <div className="md:w-2/3">
                  <h3 className="lg:text-2xl text-lg font-semibold mb-2">
                    {newsItem.title}
                  </h3>
                  <p className="text-gray-50 text-sm mb-4">{newsItem.date}</p>
                  <p className="lg:text-lg text-sm text-justify text-gray-50">
                    {newsItem.content}
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

export default LatestNews;
