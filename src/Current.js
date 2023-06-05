import "./Current.css";

function currentClients() {
  return (
    <div className="container-fluid">
      <div className="fromJen">
        <h3>From Jen's files</h3>
        <div className="row">
          <div className="col-lg text-center">
            <button type="button" className="accordion">
              My passion project{" "}
              <span className="fa-solid fa-hand-point-right" /> Tech Tips for
              Gen X and beyond
            </button>
            <div className="panel">
              <p>
                Matt Delac, the instructor at SheCodes, suggested early on in
                the program to find something you are good at and apply it to
                what you are learning about coding. Over the years, I've gained
                a lot of experience training entrepreneurs and small business
                owners how to establish themselves on social media, online and
                in print. I realized I enjoy assisting people that find digital
                technology overwhelming, to help them understand they are fully
                capable of learning. Modest Tech Tips is my passion project, and
                is currently in the beginning stages of development. I plan to
                post on YouTube, Twitter, TikTok and also offer a monthly
                membership on my website linked to a Discord Server where
                members can request custom how-to videos for things they would
                like to learn about their devices/programs/software they use.
              </p>
            </div>

            <button type="button" className="accordion">
              Client Spotlight <span className="fa-solid fa-hand-point-right" />
              EV Love Co.
            </button>
            <div className="panel">
              <p>
                This client came to me after leaving her corporate career to
                begin her entrepreneurial adventure. She is a well-established
                grant writer and potential clients were requesting her services,
                so she decided to brand her company and fully take the plunge.
                After our initial discovery call, we seemed to understand each
                other's work flow instantaneously. As we danced around COVID and
                other life challenges,{" "}
                <a
                  className="MDco"
                  href="https://www.evloveco.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  EV Love Co
                </a>{" "}
                was brought to life.{" "}
              </p>
            </div>

            <button type="button" className="accordion">
              My first app
              <span className="fa-solid fa-hand-point-right" />
              Weather Forecast
            </button>
            <div className="panel">
              <p>
                There were a number of fun projects we completed during the
                courses I took at SheCodes, but my favourite so far is this
                Weather Forecast app created using OpenWeather API. My brain
                practically exploded when I realized the capabilities APIs bring
                to developers.{" "}
                <a
                  className="MDco"
                  href="https://jovial-swan-984cd1.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check it out!
                </a>{" "}
                Who doesn't love a good weather update?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
var coll = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

export default currentClients;
