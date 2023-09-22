import Button from "../button";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <section className="contact__services">
        <h3 className="contact__services__title">Services</h3>
        <p>payment and security</p>
        <p>shipping</p>
        <p>locate a store</p>
      </section>
      <section className="contact__info">
        <h3 className="contact__info__title">Contact</h3>
        <p>customerservice@wp.hr</p>
        <p>+85 (0)1 55 33 55 63</p>
        <Button text="Contact us" color="yellow"></Button>
      </section>
    </div>
  );
};

export default Contact;
