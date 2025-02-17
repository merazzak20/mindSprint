import { FaClock, FaListOl, FaQuestionCircle, FaBolt } from "react-icons/fa";
import Container from "./shared/Container";

const featuresData = [
  {
    icon: <FaClock className="text-[#DB4B86] text-4xl" />,
    title: "Custom Timeline",
    description: "Set your own quiz timeline to manage sessions effectively.",
  },
  {
    icon: <FaListOl className="text-[#DB4B86] text-4xl" />,
    title: "Custom Quiz Number",
    description: "Choose the number of questions as per your preference.",
  },
  {
    icon: <FaQuestionCircle className="text-[#DB4B86] text-4xl" />,
    title: "Multiple Question Types",
    description: "Supports MCQs, True/False, and descriptive questions.",
  },
  {
    icon: <FaBolt className="text-[#DB4B86] text-4xl" />,
    title: "Instant Feedback",
    description: "Get real-time feedback after each question.",
  },
];

const Features = () => {
  return (
    <section className="py-16">
      <Container>
        <div className=" px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-none border border-[#f6f6f6]  border-b lg:border-none shadow-md flex flex-col items-center text-center"
              >
                {feature.icon}
                <h3 className="text-xl text-[#14000F] font-semibold mt-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
