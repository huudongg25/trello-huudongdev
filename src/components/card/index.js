import "./index.scss";

function CardItem(props) {
  return (
    <div className="card-item">
      {props.card.cover && (
        <img
          draggable="false"
          src={props.card.cover}
          className="card-cover"
          alt="img"
        />
      )}
      {props.card.title}
    </div>
  );
}

export default CardItem;
