import React from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import List from "./List";

const Lists = React.memo(({ todoData, setTodoData, handleClick }) => {
  const handleEnd = (result) => {
    if (!result.destination) return;

    const newTodoData = [...todoData];

    const [reorderedItem] = newTodoData.splice(result.source.index, 1);

    newTodoData.splice(result.destination.index, 0, reorderedItem);
    setTodoData(newTodoData);
    localStorage.setItem("todoData", JSON.stringify(newTodoData));
  };

  return (
    <DragDropContext onDragEnd={handleEnd}>
      <Droppable droppableId="todo">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {todoData.map((data, index) => (
              <Draggable
                key={data.id}
                draggableId={data.id.toString()}
                index={index}
              >
                {(provided, snapshot) => (
                  <List
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    completed={data.completed}
                    todoData={todoData}
                    setTodoData={setTodoData}
                    provided={provided}
                    snapshot={snapshot}
                    handleClick={handleClick}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
});

export default Lists;
