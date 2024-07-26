import "./style.css";
import bgimg from "../assets/bg.svg";
import GST_Certificate from "../assets/GST_Certificate.pdf";
import UdyamRegistrationCertificate from "../assets/Print_UdyamRegistrationCertificate.pdf";

const Home = () => {
  const stopMarquee = () => {
    const marquee = document.getElementById("noticeMarquee");
    if (marquee) {
      marquee.stop();
    }
  };

  const startMarquee = () => {
    const marquee = document.getElementById("noticeMarquee");
    if (marquee) {
      marquee.start();
    }
  };

  return (
    <div>
      <div className="main_div flex flex-col-reverse lg:flex-row lg:justify-evenly items-center lg:p-8">
        <div id="text_sec">
          <section className="text-xl lg:text-5xl text-[#45d5e2]">
            <h3>
              <b>
                Empowering <u>Better Health</u>
              </b>
            </h3>
          </section>
          <section className="sec2 text-md lg:text-3xl font-semibold text-gray-200 mt-4">
            <h4>
              <i>Inspiring Wellness, One Step at a Time</i>
            </h4>
          </section>
          <section className="sec3 text-sm lg:text-xl mt-4">
            <p>
              Glowvista Instruments Pvt. Ltd. develops innovative smart
              biomedical technologies, focusing on cost-effective point-of-care
              devices. Led by Dr. Earu Banoth, with Dr. Bala Chakravarthy and
              Dr. Puneet Jain as co-founders, our flagship project is an
              AI-enabled handheld malaria screening device. We aim to enhance
              diagnostic accuracy and improve global health outcomes.
            </p>
          </section>
          <button className="bg-[#32a2ac] hover:bg-[#49bbc5] text-white py-4 lg:px-6 px-[88px] rounded-lg mt-4">
            Download Catalog
          </button>
        </div>

        <div id="pic_sec" className="mt-5 lg:mt-0">
          <img
            src={bgimg}
            alt="Glowvista AI Device"
            className="lg:w-full w-1/2 m-auto"
          />
        </div>
      </div>

      <div id="meta_data">
        <div id="notice" className="text-center">
          <p>
            <marquee id="noticeMarquee">
              | NOTICE 1 |
              <a
                href="https://forms.gle/V3DBC39MtqNHfUVt8"
                target="_blank"
                className="underline text-teal-600"
                onMouseOver={stopMarquee}
                onMouseOut={startMarquee}
              >
                Internship Openings
              </a>
              Interested People can apply for internship in Glowvista. | NOTICE
              2 |
              <a
                href="https://forms.gle/V3DBC39MtqNHfUVt8"
                target="_blank"
                className="underline text-teal-600"
                onMouseOver={stopMarquee}
                onMouseOut={startMarquee}
              >
                Job Openings
              </a>
              Interested People can apply for Job in Glowvista.
            </marquee>
          </p>
        </div>
      </div>

      {/* certifications */}

      <div className="text-center my-8">
        <h1 className="text-3xl text-white pb-8">Certification</h1>
        <a
          href={GST_Certificate}
          download="GST_Certificate.pdf"
          className="bg-[#32a2ac] hover:bg-[#49bbc5] text-white py-4 lg:px-6 px-[88px] rounded-lg m-4 inline-block"
        >
          Download GST Certification
        </a>
        <a
          href={UdyamRegistrationCertificate}
          download="UdyamRegistrationCertificate.pdf"
          className="bg-[#32a2ac] hover:bg-[#49bbc5] text-white py-4 lg:px-6 px-[88px] rounded-lg m-4 inline-block"
        >
          Download UDYAM REGISTRATION CERTIFICATE
        </a>
      </div>
    </div>
  );
};

export default Home;
