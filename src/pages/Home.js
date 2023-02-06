import "./Home.css";
import { BiCopyright } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
const Home = () => {
  return (
    <div>
      <section className="home-page">
        <h1>Welcome to the PetCareExchange!</h1>
        <div className="home-main">
          <div className="home-page-text">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
            </p>
          </div>
          <div className="home-page-img">
            <img
              src={require("../assets/photo-1472491235688-bdc81a63246e.jpeg")}
              // src={require("../assets/IMG_5995.jpeg")}
              alt="pet-cat"
            />
          </div>
        </div>
      </section>
      <footer className="footer">
        <h2>Do you have any questions? Contact us:</h2>
        <nav>
          <ul class="social-media-link">
            <li>
              <a href="https://www.linkedin.com/in/viktoriiazolotova/">
                <AiFillLinkedin size="30px"></AiFillLinkedin>LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:viktoriiazolotova@gmail.com">
                <AiOutlineMail size="30px"></AiOutlineMail>Send a mail
              </a>
            </li>
          </ul>
          <p>
            <BiCopyright size="20px" />
            Design and built by Viktoriia Zolotova 2023
          </p>
        </nav>
      </footer>
    </div>
  );
};

export default Home;
