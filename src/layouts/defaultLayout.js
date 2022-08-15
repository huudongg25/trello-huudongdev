import "./defaultLayout.scss";
import AppBar from "../components/appBar/index";
import BoardBar from "../components/boardBar/index";
import BoardContent from "../components/boardContent/index";

function DefaultLayout() {
  return (
    <div className="wrapper">
      <div className="nav">
        <AppBar />
      </div>
      <div className="board">
        <BoardBar />
      </div>
      <div className="content">
        <BoardContent />
      </div>
    </div>
  );
}

export default DefaultLayout;
