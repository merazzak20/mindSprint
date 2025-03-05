import Container from "./shared/Container";
import heroImage from "../assets/Online test-pana.svg";
import { FaClock } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useState } from "react";
import { MdOutlineQuiz, MdOutlineTimer } from "react-icons/md";

const Hero = () => {
  const [formData, setFormData] = useState({ question: "", time: "" });
  const navigate = useNavigate();
  const handleQuiz = (e) => {
    e.preventDefault();
    // navigate(`/quiz?questions=${formData.question}&time=${formData.time}`);
    navigate(
      `/quizPage?questions=${formData.question}&time=${formData.time * 60}`
    );
  };
  return (
    <div className="h-[80vh] flex items-center justify-center pt-72 pb-40 md:pt-32 md:pb-0 px-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center text-center md:text-left gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-2xl md:text-5xl font-bold">
              Boost Your Knowledge with{" "}
              <span className="text-[#DB4B86]">MindSprint!</span>
            </h1>
            <p className="mt-4">
              Challenge yourself with engaging quizzes and put your knowledge to
              the test! Set custom timers, choose your question limit, and
              sprint through exciting trivia.
            </p>
            <div>
              <form
                onSubmit={handleQuiz}
                className="flex flex-col lg:flex-row gap-2 mt-3 items-stretch"
              >
                <label className="input">
                  <input
                    type="number"
                    name=""
                    id=""
                    min={1}
                    max={100}
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, question: e.target.value })
                    }
                    className="rounded-sm border-none w-full"
                    placeholder="Max limit 100"
                  />
                  <MdOutlineQuiz className="text-xl" />
                </label>
                <label className="input">
                  <input
                    type="number"
                    name=""
                    id=""
                    min={1}
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                    className="rounded-sm border-none w-full"
                    placeholder="Set time in second "
                  />
                  <MdOutlineTimer className="text-xl" />
                </label>
                <button type="submit" className="btn bg-[#DB4B86] text-white">
                  Satrt Quiz!
                </button>
              </form>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              className="w-[60%] md:w-[100%] max-w-md mx-auto"
              src={heroImage}
              alt="Hero Image"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
