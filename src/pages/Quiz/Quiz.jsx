import { useState } from "react";
import Container from "../../components/shared/Container";
import { useEffect } from "react";
import { Link } from "react-router";
import bg from "../../assets/student.jpeg";
import QuizRules from "./QuizeComponent/QuizRules";
import { FaClock, FaQuestion } from "react-icons/fa";

const Quiz = () => {
  const [quizs, setQuizs] = useState([]);
  useEffect(() => {
    fetch("quize.json")
      .then((res) => res.json())
      .then((data) => setQuizs(data));
  }, []);
  console.log(quizs);

  return (
    <section>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.8)), url(${bg})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className="bg-pink-200"
      >
        <div className="py-32 w-11/12 lg:w-8/12 mx-auto text-center">
          <div className="flex flex-col lg:flex-row gap-2 mt-3 justify-center items-center">
            <label className="input flex items-center">
              <input
                type="number"
                name=""
                id=""
                min={1}
                max={100}
                className="rounded-sm border-none w-full"
                placeholder="Max limit 100"
              />
              <FaQuestion className="ml-2" />
            </label>
            <label className="input flex items-center">
              <input
                type="number"
                name=""
                id=""
                min={1}
                className="rounded-sm border-none w-full"
                placeholder="Set time in seconds"
              />
              <FaClock className="ml-2" />
            </label>
          </div>
          <Link to="/quiz">
            <button className="btn bg-[#DB4B86] mt-4 border-none">
              Start Quiz!
            </button>
          </Link>
        </div>
      </div>

      <Container>
        <QuizRules></QuizRules>
      </Container>
    </section>
  );
};

export default Quiz;
