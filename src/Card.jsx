import Button from "./Button";

function Card({ image, title, description, price, specs }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card__image" />

      <div className="card__content">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="card__specs">
          {specs.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <Button className="card__price">{price} TL</Button>
      </div>
    </div>
  );
}

export default Card;