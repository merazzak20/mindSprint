import logo from "../../assets/mindSprint logo1.png";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-[#14000F] mt-10">
      <Container>
        <footer className="footer footer-center bg-[#14000F] text-zinc-50 p-10">
          <aside>
            <a href="/">
              <img className="w-56" src={logo} alt="" />
            </a>
            <p className="font-bold -mt-4">
              <span className="text-base">A self knowledge test platform.</span>
              <br />
            </p>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved{" "}
              <a href="" className="text-[#db4b86] font-semibold">
                Abdur Razzak
              </a>
            </p>
          </aside>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
