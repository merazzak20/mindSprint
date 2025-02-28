import { FaCheckCircle } from "react-icons/fa";

const QuizRules = () => {
  return (
    <div className="max-w-10/12 mx-auto p-6 rounded-lg  ">
      <h2 className="text-2xl font-bold text-center mb-6">Quiz Rules</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
        <ul className="space-y-3">
          <li className="flex items-center">
            <FaCheckCircle className="text-[#DB4B86] mr-2" />
            Each quiz has a fixed number of questions.
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-[#DB4B86] mr-2" />
            You must answer each question within the set time limit.
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-[#DB4B86] mr-2" />
            Once an answer is selected, you cannot change it.
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-[#DB4B86] mr-2" />
            Correct answers earn points; incorrect answers do not.
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-[#DB4B86] mr-2" />
            The quiz ends when all questions are answered or time runs out.
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-[#DB4B86] mr-2" />
            Some quizzes may have negative marking for wrong answers.
          </li>
        </ul>
        <ul className="space-y-3">
          <li className="flex items-center">
            <FaCheckCircle className="text-[#DB4B86] mr-2" />
            Use the Next button to move to the next question.
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-[#DB4B86] mr-2" />
            Ensure a stable internet connection for a smooth experience.
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-[#DB4B86] mr-2" />
            Read the question carefully before answering.
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-[#DB4B86] mr-2" />
            Avoid distractions to maintain focus during the quiz.
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-[#DB4B86] mr-2" />
            Some quizzes may have bonus questions for extra points.
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-[#DB4B86] mr-2" />
            Review your answers before submitting the quiz.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuizRules;
