import "./index.scss";
import { initialData } from "../../actions/initialData";
import Column from "../columnItem";
import { mapOrder } from "../../utilities/sorts";
import { applyDrag } from "../../utilities/dragDrop";
import { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import { Container, Draggable } from "react-smooth-dnd";
import { AiOutlinePlus } from "react-icons/ai";

function BoardContent() {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const boardFromDB = initialData.boards.find(
      (board) => board.id === "board-1"
    );

    if (boardFromDB) {
      setBoard(boardFromDB);

      //sort column from DB
      // boardFromDB.columns.sort((a, b) => {
      //   return (
      //     boardFromDB.columnOrder.indexOf(a.id) -
      //     boardFromDB.columnOrder.indexOf(b.id)
      //   );
      // });

      setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, "id"));
    }
  }, []);

  if (isEmpty(board)) {
    return <div className="not-found">Board not found</div>;
  }

  const onColumnDrop = (dropResult) => {
    let newColumns = [...columns];
    newColumns = applyDrag(newColumns, dropResult);

    let newBoard = { ...board };
    newBoard.columnOrder = newColumns.map((col) => col.id);
    newBoard.columns = newColumns;

    setColumns(newColumns);
    setBoard(newBoard);
  };

  const onCardDrop = (columnId, dropResult) => {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      let newCol = [...columns];
      let curCol = newCol.find((c) => c.id === columnId);
      curCol.cards = applyDrag(curCol.cards, dropResult);
      curCol.cardOrder = curCol.cards.map((i) => i.id);
      setColumns(newCol);
    }
  };

  return (
    <div className="board-content">
      <Container
        orientation="horizontal"
        onDrop={onColumnDrop}
        dragHandleSelector=".header"
        getChildPayload={(index) => columns[index]}
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: "col-drop-preview",
        }}
      >
        {columns.map((column, index) => (
          <Draggable key={index}>
            <Column column={column} onCardDrop={onCardDrop} />
          </Draggable>
        ))}
        <div className="add-new-col">
          <AiOutlinePlus className="icon" /> Add another column
        </div>
      </Container>
    </div>
  );
}

export default BoardContent;
