import { useState } from "react";
import Container from "../../components/shared/container";
import { useEffect } from "react";
import { Link } from "react-router";
import bg from "../../assets/student.jpeg";
import QuizRules from "./QuizeComponent/QuizRules";

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
        <div className="py-32 w-8/12 mx-auto text-center ">
          <div className="flex flex-col lg:flex-row gap-2 mt-3">
            <input
              type="number"
              name=""
              id=""
              className="rounded-sm px-3 py-2 text-white bg-[#14000f] border-none w-full"
              placeholder="Question limit 100"
            />
            <input
              type="number"
              name=""
              id=""
              className="rounded-sm px-3 py-2 text-white bg-[#14000f] border-none w-full"
              placeholder="Set time in second "
            />
          </div>
          <Link to="/quiz">
            <button className="btn bg-[#DB4B86] mt-4 border-none">
              Satrt Quiz!
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
