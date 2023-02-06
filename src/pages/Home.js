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
              <i>PetCareExchange</i> - a community of pet lovers who understand
              the importance of trust and reliability when it comes to taking
              care of our furry friends. Our platform allows members to exchange
              pet sitting services, allowing you to earn "PawHearts" every time
              you offer your services to another member. And when you need a
              sitter for your own pet, you can use your PawHearts to secure a
              trusted and loving pet sitter for free.
            </p>
            <p>
              At PetCareExchange, we believe in paying it forward and fostering
              a community of pet owners who truly care for each other's animals.
              So why not join us today and start earning your PawHearts? Your
              pet will be grateful for the love and care you provide.
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
