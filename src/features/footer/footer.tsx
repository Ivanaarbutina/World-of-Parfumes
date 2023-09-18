import Contact from "./contact";

const Footer = () => {
  return (
    <div className="footer">
      <Contact />
      <div className="footer__link">
        Images by{" "}
        <a
          href="https://www.freepik.com/free-vector/gradient-black-backgrounds-with-golden-frames_19852263.htm#from_view=detail_serie"
          className="footer__link__item"
        >
          Freepik
        </a>
      </div>
    </div>
  );
};

export default Footer;
