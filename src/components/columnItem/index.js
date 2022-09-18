import "./index.scss";
import CardItem from "../card";
import { mapOrder } from "../../utilities/sorts";
import { Container, Draggable } from "react-smooth-dnd";
import { AiOutlinePlus } from "react-icons/ai";

function Column(props) {
  const cards = mapOrder(props.column.cards, props.column.cardOrder, "id");

  return (
    <div className="columns">
      <header className="header">{props.column.title}</header>
      <div className="cards">
        <Container
          dragClass="card-ghost"
          onDrop={(dropResult) => props.onCardDrop(props.column.id, dropResult)}
          getChildPayload={(index) => props.column.cards[index]}
          groupName="col"
          dropClass="card-ghost-drop"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: "drop-preview",
          }}
          dropPlaceholderAnimationDuration={200}
        >
          {cards.map((card, index) => (
            <Draggable key={index}>
              <CardItem card={card} />
            </Draggable>
          ))}
        </Container>
      </div>
      <footer className="footer">
        <div className="footer-action">
          <AiOutlinePlus className="icon" /> Add another card
        </div>
      </footer>
    </div>
  );
}

export default Column;
