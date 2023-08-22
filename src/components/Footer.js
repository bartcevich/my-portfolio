import SocialIcons from "./SocialIcons";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer>
      <SocialIcons />
      {/* <p> ✨ Built by </p> */}
      <p>&copy; {currentYear}</p>
    </footer>
  );
};

export default Footer;
