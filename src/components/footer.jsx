import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="contact">
        <a
          className="email"
          href="mailto:claradelzell@gmail.com"
          target="_blank"
          title="Send me an email!"
        >
          <p>claradelzell@gmail.com</p>
        </a>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/claradelzell/"
            target="_blank"
            title="LinkedIn"
          >
            <img src="./public/assets/linkedin.svg" alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/cdelzell?tab=repositories"
            target="_blank"
            title="Github"
          >
            <img src="./public/assets/github.svg" alt="Github" />
          </a>
          <a
            href="https://claradelzellresume.tiiny.site/"
            target="_blank"
            title="Resume"
          >
            <img src="./public/assets/file.svg" alt="Resume" />
          </a>
          <a
            href="https://www.instagram.com/claradelzell/"
            target="_blank"
            title="Instagram"
          >
            <img src="./public/assets/instagram.svg" alt="Instagram" />
          </a>
        </div>

        <a className="phone" href="tel:6309454957">
          <p>630-945-4957</p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
