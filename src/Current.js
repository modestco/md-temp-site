function currentClients() {
  return (
    <div className="container">
      <div className="row">
        <div className="-sm-3">
          <button className="accordion">
            Project spotlight: <span className="fa-solid fa-hand-point-right" />{" "}
            Graphic Design
          </button>
          <div className="panel">
            <p>Lorem ipsum...</p>
          </div>

          <button className="accordion">Section 2</button>
          <div className="panel">
            <p>Lorem ipsum...</p>
          </div>

          <button className="accordion">Section 3</button>
          <div className="panel">
            <p>Lorem ipsum...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default currentClients;
