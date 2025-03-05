import { useState } from "react";
import Container from "../../components/shared/Container";
import { useEffect } from "react";
// import { Link } from "react-router";
import bg from "../../assets/student1.jpg";
import QuizRules from "./QuizeComponent/QuizRules";
// import { FaClock, FaQuestion } from "react-icons/fa";
import { useNavigate } from "react-router";
import { MdOutlineQuiz, MdOutlineTimer } from "react-icons/md";

const Quiz = () => {
  const [quizs, setQuizs] = useState([]);
  const [formData, setFormData] = useState({ question: "", time: "" });
  const navigate = useNavigate();

  useEffect(() => {
    fetch("quize.json")
      .then((res) => res.json())
      .then((data) => setQuizs(data));
  }, []);
  // console.log(quizs);

  const handleQuiz = (e) => {
    e.preventDefault();
    // navigate(`/quiz?questions=${formData.question}&time=${formData.time}`);
    navigate(
      `/quizPage?questions=${formData.question}&time=${formData.time * 60}`
    );
  };

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
          <form onSubmit={handleQuiz}>
            <div className="flex flex-col lg:flex-row gap-2 mt-3 justify-center items-center">
              <label className="input flex items-center">
                <input
                  type="number"
                  name="maxLimit"
                  id="maxLimit"
                  min={1}
                  max={100}
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, question: e.target.value })
                  }
                  className="rounded-sm border-none w-full"
                  placeholder="Max limit 100"
                />
                <MdOutlineQuiz className="ml-2 text-xl" />
              </label>
              <label className="input flex items-center">
                <input
                  type="number"
                  name="setTime"
                  id="setTime"
                  min={1}
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  className="rounded-sm border-none w-full"
                  placeholder="Set time in minutes"
                />
                <MdOutlineTimer className="ml-2 text-xl" />
              </label>
            </div>
            <button
              type="submit"
              className="btn bg-[#DB4B86] mt-4 border-none text-white shadow-none"
            >
              Start Quiz!
            </button>
          </form>
        </div>
      </div>

      <Container>
        <QuizRules></QuizRules>
      </Container>
    </section>
  );
};

export default Quiz;
