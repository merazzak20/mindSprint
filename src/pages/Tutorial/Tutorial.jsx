import { useEffect, useState } from "react";
import Container from "../../components/shared/Container";

// const tutorialData = [
//   {
//     id: 1,
//     title: "Understanding Geography: Capitals of the World",
//     content:
//       "The capital of France is Paris. Paris is known for its rich history, culture, and landmarks such as the Eiffel Tower and Louvre Museum.",
//     category: "Geography",
//   },
//   {
//     id: 2,
//     title: "Basic Chemistry: Elements and Symbols",
//     content:
//       "Oxygen is a chemical element with the symbol 'O'. It is essential for respiration in most living organisms and is a key component of water (H2O).",
//     category: "Science",
//   },
//   {
//     id: 3,
//     title: "Football World Cup History",
//     content:
//       "The FIFA World Cup is the most prestigious football tournament in the world, held every four years and featuring top national teams.",
//     category: "Sports",
//   },
//   // Add more tutorial data here
// ];

// const categories = [
//   "All",
//   ...new Set(tutorialData.map((item) => item.category)),
// ];

const Tutorial = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("quize.json")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  }, []);
  console.log(questions);
  const categories = [
    "All",
    ...new Set(questions.map((item) => item.category)),
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTutorials =
    selectedCategory === "All"
      ? questions
      : questions.filter((item) => item.category === selectedCategory);

  return (
    <div className="p-4 mx-auto my-28">
      <Container>
        <h1 className="text-3xl font-bold text-center mb-10 text-[#DB4B86]">
          Tutorials & Study Guide
        </h1>

        <div className="mb-10">
          <label className="font-semibold"> Category: </label>
          <select
            className="ml-2 p-2  border rounded-none"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <span className="ml-5">Questions: {filteredTutorials.length}</span>
        </div>

        {filteredTutorials.map((item) => (
          <div key={item?.id} className="mb-6 border-b border-gray-200 pb-4">
            <h2 className="text-xl font-semibold mb-2">{item?.question}</h2>
            <p className="">
              Answer:{" "}
              <span className="text-[#DB4B86] font-semibold">
                {item?.options[item?.correct]}
              </span>
            </p>
            {/* <span className="text-sm ">Category: {item?.category}</span> */}
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Tutorial;
