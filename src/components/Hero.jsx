import Container from "./shared/Container";
import heroImage from "../assets/Online test-pana.svg";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center pt-72 pb-40 md:pt-32 md:pb-0 px-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center text-center md:text-left gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-2xl md:text-5xl font-bold">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              pariatur debitis fuga illum temporibus provident non facilis vitae
              voluptatibus fugiat!
            </p>
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
              <button className="btn bg-[#DB4B86] text-white mt-4">
                Satrt Quiz!
              </button>
            </Link>
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
