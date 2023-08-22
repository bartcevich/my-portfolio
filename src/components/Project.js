import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import closeModal from "../images/close.svg";

const Project = ({ technologies, title, image, color, id, github, deployed, description }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const variants = {
    hidden: { x: id % 2 === 0 ? "10vw" : "-10vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  Modal.setAppElement("#root");

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <motion.div
      ref={ref}
      className="col-sm-12 col-lg-6"
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div
        style={{ backgroundColor: color }}
        className="projectCard d-flex align-items-center justify-content-center p-5"
        onClick={handleOpenModal}
      >
        <div className="textWrap col-6 d-flex flex-column justify-content-center align-items-center m-5">
          {/* <p className="tech">
            <em>{technologies}</em>
          </p> */}
          <h3 className="projectTitle">{title}</h3>
          <span className="viewWork">View Work &#8594;</span>
        </div>
        <div className="imageContainer col-6 d-flex align-items-center justify-content-center">
          <img src={image} alt="Starting page project" />
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        style={{
          content: {
            backgroundColor: "#131a22",
            color: "#9f9f9f",
            padding: "60px",
            display: "flex",
            flexDirection: "column",
          },
          overlay: {
            zIndex: "9999",
            overflow: "hidden",
            backgroundColor: "#131a22",
            width: "clamp(30%, 100vw, 100%)",
            marginRight: "0",
            height: "min(100%, 100vh)",
            margin: "auto",
          },
        }}
      >
        <div className="container modal">
          <img src={closeModal} className="closeMenu closeModal" onClick={handleCloseModal} alt="Close"></img>

          <h3 className="modalTitle">{title}</h3>

          <div className="tech">
            {technologies.map((technology) => (
              <span className="technology" key={id}>
                {technology + " "}
              </span>
            ))}
          </div>

          <div className="projectDescription">
            {description.split("\n").map((paragraph, i) => (
              <p key={{ i }}>
                {paragraph}
                <br />
                <br />
              </p>
            ))}
          </div>

          <div className="modalBtns">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              className="btn"
              onClick={() => (window.location.href = github)}
            >
              GitHub
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              className="btn"
              onClick={() => (window.location.href = deployed)}
            >
              Live
            </motion.button>
          </div>
        </div>
      </Modal>
    </motion.div>
  );
};

export default Project;
// {
  // "title": "News",
  // "image": "./projectImages/P1.png",
  // "description": "Hey there, revheads! Say hello to P1, your one-stop virtual hangout for all things F1. We've got the freshest scoop, live standings – you name it. But guess what? There's more! Brace yourself for the coolest card game in town, where being an F1 guru is your golden ticket to winning big.\nBy the way, I'm the styling and animation wizard behind the scenes, conjuring up that sleek and eye-catching look you're loving. And don't forget the news section – that's my baby too. So while you dive into the F1 universe and master the card game, know that I've got you covered with style, animations, and the latest hot-off-the-track updates. 🏎️ 🎉",
  // "technologies": ["React", "Framer Motion", "Bootstrap", "HTML", "CSS"],
  // "github": "https://github.com/Jake-W95/P1",
  // "deployed": "https://p1-heroes.netlify.app/",
  // "bgcolor": "#ffcc33",
  // "id": "1"
// },

// {
  // "title": "Planner",
  // "image": "./projectImages/planner.png",
  // "technologies": ["JavaScript", "Moment", "Bootstrap", "HTML", "CSS"],
  // "description": "Get ready to seize the day with the Daily Planner App – your trusty sidekick for making every hour count. No more forgetting those important appointments or meetings. This app's got your back with a simple and efficient way to track your schedule, especially when you're grinding it out from 9 to 5!\nAnd guess what? The magic doesn't stop there. This app knows the importance of mood lighting – it changes colours based on the time of day. Talk about setting the right vibes, huh? Oh, and here's the kicker – your todos? Yeah, they're not going anywhere. They're safe and sound, ready for you whenever you need 'em. Time to conquer your day! 📝 ✅",
  // "github": "https://github.com/mdyeates/daily-planner",
  // "deployed": "https://mdyeates.github.io/daily-planner/",
  // "bgcolor": "#3e67ff",
  // "id": "6"
// }