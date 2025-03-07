import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router";
import Container from "../../../components/shared/Container";
import { FaClock } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";

const QuizPage = () => {
  const location = useLocation();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const questionCount = parseInt(queryParams.get("questions"), 10);
    const time = parseInt(queryParams.get("time"), 10);

    fetch("quize.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.length < questionCount) {
          console.error("Not enough questions available");
          return;
        }

        // Generate unique random indices
        const indices = new Set();
        while (indices.size < questionCount) {
          indices.add(Math.floor(Math.random() * data.length));
        }

        // Select unique questions
        const selectedQuestions = Array.from(indices).map(
          (index) => data[index]
        );

        setQuestions(selectedQuestions);
        setTimeLeft(time);
      });
  }, [location.search]);

  useEffect(() => {
    if (timeLeft > 0 && !quizCompleted) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      if (modalRef.current) {
        modalRef.current.showModal();
      }
    }
  }, [timeLeft, quizCompleted]);

  const handleNextQuestion = () => {
    if (
      selectedOption ===
      questions[currentQuestionIndex].options[
        questions[currentQuestionIndex].correct
      ]
    ) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex + 1 >= questions.length) {
      setQuizCompleted(true);
      if (modalRef.current) {
        modalRef.current.showModal();
      }
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(null); // Reset selected option for the next question
    }
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleShowCorrectAnswers = () => {
    document.getElementById("questions").classList.add("hidden");
    setShowCorrectAnswers(true);
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  if (currentQuestionIndex >= questions.length) {
    return <div>Quiz Completed! Your score is {score}</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-page pt-32">
      <Container>
        <div
          id="questions"
          className="flex flex-col items-center justify-between py-4"
        >
          <div className="question mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {currentQuestion.question}
            </h2>
            <div className="options grid grid-cols-1 md:grid-cols-2 gap-4 px-4 justify-items-start">
              {currentQuestion.options.map((option, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionChange(option)}
                    className="form-radio h-5 w-5 text-indigo-600"
                  />
                  <span className="text-lg">{option}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="mx-auto text-center">
            <div className="flex justify-between gap-10">
              <div className="timer text-xl mb-4 flex items-center gap-2">
                <MdOutlineTimer className="text-[#DB4B86]" /> {timeLeft} seconds
              </div>
              <div className="question-counter text-lg mb-4 font-semibold">
                Question:{" "}
                <span className="text-[#DB4B86]">
                  {currentQuestionIndex + 1}
                </span>{" "}
                / {questions.length}
              </div>
            </div>
            <button
              onClick={handleNextQuestion}
              disabled={!selectedOption}
              className="btn bg-[#DB4B86] text-white px-6 py-2 rounded-md"
            >
              Next Question
            </button>
          </div>
        </div>
      </Container>

      <dialog ref={modalRef} id="my_modal_1" className="modal">
        <div className="modal-box">
          {quizCompleted? <h3 className="font-bold text-lg">Complete</h3>: <h3 className="font-bold text-lg">Time's up!</h3>}
          <p className="py-4 text-[#DB4B86] text-2xl font-bold">
            Your score is {score}
          </p>
          <div className="modal-action">
            <button className="btn" onClick={handleShowCorrectAnswers}>
              Show Correct Answers
            </button>
          </div>
        </div>
      </dialog>

      {showCorrectAnswers && (
        <div className=" p-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#DB4B86] mb-4 text-center">
            Correct Answers
          </h2>
          <div className="space-y-1">
            {questions.map((question, index) => (
              <div
                key={index}
                className="border border-pink-100/50 p-4 rounded-sm "
              >
                <div className="flex items-start gap-2">
                  <span className="text-lg font-semibold ">{index + 1}.</span>
                  <h3 className="text-lg font-medium ">{question.question}</h3>
                </div>
                <p className="mt-2 ">
                  <span className="font-semibold ">Answer:</span>{" "}
                  <span className="font-bold text-[#DB4B86]">
                    {question.options[question.correct]}
                  </span>
                </p>
              </div>
            ))}
          </div>
          <Link to="/quiz" className="mt-5">
            <button className="btn bg-[#DB4B86] mt-4 border-none text-white">
              Try Again!
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
