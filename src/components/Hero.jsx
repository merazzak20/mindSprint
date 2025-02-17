import Container from "./shared/Container";
import heroImage from "../assets/Online test-pana.svg";

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
            <button className="btn bg-[#DB4B86] mt-4">Satrt Quiz!</button>
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
