import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import HomeLayout from "../layout/HomeLayout";
import Quiz from "../pages/Quiz/Quiz";
import QuizPage from "../pages/Quiz/QuizeComponent/QuizePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "quiz",
        element: <Quiz></Quiz>,
      },
      {
        path: "quizPage", // Add the new route for QuizPage
        element: <QuizPage></QuizPage>,
      },
    ],
  },
]);

export default router;
