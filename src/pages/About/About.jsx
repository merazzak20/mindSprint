import Container from "../../components/shared/Container";
import about from "../../assets/About us page-rafiki.svg";
import Mission from "./AboutComponent/Mission";
import WeOffer from "./AboutComponent/WeOffer";

const About = () => {
  return (
    <div>
      <section className="container mx-auto px-6 py-6 mt-14">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {/* Left Column - Image */}
            <div>
              <img
                src={about}
                alt="Quiz Illustration"
                className="w-[70%] mx-auto"
              />
            </div>

            {/* Right Column - Text */}
            <div>
              <p className="text-lg mb-4">
                <span className="text-[#DB4B86] font-semibold text-justify">
                  MindSprint
                </span>{" "}
                is an interactive quiz platform designed to challenge your
                knowledge and boost your learning experience. Whether you're a
                trivia enthusiast, a student preparing for exams, or just
                someone who loves a good challenge, MindSprint has something for
                you!
              </p>
            </div>
          </div>
        </Container>
      </section>
      <Mission></Mission>
      <WeOffer></WeOffer>
    </div>
  );
};

export default About;
