import "./index.scss";

function BoardContent() {
  return (
    <div className="board-content">
      <div className="columns">
        <header className="header">Title</header>
        <ul className="cards">
          <li className="card-item">How are u today?</li>
          <li className="card-item">How are u today?</li>
          <li className="card-item">How are u today?</li>
          <li className="card-item">How are u today?</li>
          <li className="card-item">How are u today?</li>
        </ul>
        <footer className="footer">Add another card</footer>
      </div>
    </div>
  );
}

export default BoardContent;
