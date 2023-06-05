import JenHeadshot from "./JenHeadshot.png";
import ModestBoard1 from "./1.jpg";
import ModestBoard2 from "./2.jpg";
import VScode from "./svgVS.svg";
import ModestCo from "./ModestCo";
import "./App.css";

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function introparts() {
  return (
    <div className="container text-left intro-parts">
      <div className="row">
        <div className="col-md-6">
          <div>
            <img
              src={JenHeadshot}
              className="Jen-headshot img-fluid"
              alt="JenLuchka-headshot"
            />
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="heading">Jen Luchka</h2>
          <h2 className="sub">Front-End Developer</h2>
          <h3 className="pair">Pairs well with:</h3>
          <div className="container-fluid">
            <div className="row">
              <div className="col-3">
                <div className="fa-brands fa-react"></div>
                <h6> React </h6>
              </div>
              <div className="col-3">
                <div className="fa-brands fa-bootstrap"></div>
                <h6> Bootstrap </h6>
              </div>
              <div className="col-3">
                <div className="fa-brands fa-apple"></div>
                <h6>Mac OS</h6>
              </div>
              <div className="col-3">
                <img src={VScode} className="svgVS" alt="" />
                <h6>VS Code</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="leftHeading">A brief history;</h3>
      <h5>
        Jen is a passionate designer with 15 years of experience spanning across
        multiple industries. Her corporate employment history is focused on
        Marketing and Graphic Design, with a diploma in Business from Sheridan
        College. Check out{" "}
        <a
          className="MDco"
          href="https://www.linkedin.com/in/jenluchka/"
          target="_blank"
          rel="noopener noreferrer"
        >
          her LinkedIn profile
        </a>{" "}
        for her corporate resume. <br />
        Aside from working corporate positions, Jen has thoroughly enjoyed
        assisting small businesses and independent contractors with brand
        itentities, logos, social media support, and a wide range of digital and
        print collatoral over the years. She has her own brand{" "}
        <a
          className="MDco"
          href="https://www.instagram.com/creativelymodest/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Modest Design Co <div className="fa-brands fa-instagram"></div>
        </a>{" "}
        she has been building outside of her 9-5 since 2012. She recently
        rebranded MD.co to showcase how far her design skills have come, while
        bringing the brand into 2023 and beyond.
        <br />
        <button type="button" className="collapsible">
          <h2 className="subheading">
            Check out her rebrand and recent clients
          </h2>
        </button>
        <br />
        <div className="content">
          <div className="container-fluid">
            <img src={ModestBoard1} className="img-fluid" alt="" />
            <img src={ModestBoard2} className="img-fluid" alt="" />
          </div>
          <ModestCo />
        </div>
        <br />
        Jen's passion{" "}
        <em>
          <strong>read: obsession</strong>
        </em>{" "}
        with pixels and UI design lead her to{" "}
        <a
          className="MDco"
          href="https://www.shecodes.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          SheCodes
        </a>
        ; an educational platform dedicated to encouraging more women to enter
        STEM fields and learn how to read and write basic coding languages. She
        recently completed all courses to successfully graduate with her
        Front-End Developer certificate. Check her out on the{" "}
        <a
          className="MDco"
          href="https://www.shecodes.io/hall-of-fame?q=Jen+Luchka"
          target="_blank"
          rel="noopener noreferrer"
        >
          SheCodes Hall Of Fame
        </a>
        , or her{" "}
        <a
          className="MDco"
          href="https://www.shecodes.io/graduates/64786-jen-luchka"
          target="_blank"
          rel="noopener noreferrer"
        >
          SheCodes Profile
        </a>{" "}
        to see her progression through the program.
      </h5>
    </div>
  );
}

export default introparts;
