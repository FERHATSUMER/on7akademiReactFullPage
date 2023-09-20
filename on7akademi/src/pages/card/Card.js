import "./card.css";

const Card = ({ name, img, job, about, id }) => {
  return (
    <div className="card-container">
      <div key={id} className="container">
        <div className="card">
          <img src={img} alt="resim" className="photo" />
          <div className="intro">
            <h1>{name}</h1>
            <h3>{job}</h3>
            <h4>{about}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;