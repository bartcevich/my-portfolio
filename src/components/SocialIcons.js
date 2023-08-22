const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://t.me/elektrikcss">
        <i className="fa-brands fa-github" aria-hidden="true" title="Andrei Bartsevich, Telegram"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/андрей-барцевич-935588260">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Andrei Bartsevich, LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://wa.me/375295779080">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Andrei Bartsevich, WhatApp"></i>
      </a>
      {/* <a className="icon" style={styles.icon} href="https://twitter.com/mdyeates"> */}
        {/* <i className="fa-brands fa-twitter" aria-hidden="true" title="Andrei Bartsevich, Twitter Profile"></i> */}
      {/* </a> */}
    </div>
  );
};

export default SocialIcons;
