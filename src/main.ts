import KanbanBoard from "./kanbanBoard";
import KanbanStore from "./store"

let board = document.querySelector("#board-container") as HTMLDivElement
let item = document.querySelector(".kanban__item") as HTMLDivElement
item.ondragstart = (ev) => {
    // ev.preventDefault()
    ev.dataTransfer?.clearData();
    let target = ev.currentTarget!
    // Set the drag's format and data.
    // Use the event target's id for the data
    ev.dataTransfer?.setData("text/plain", item.id);
    console.log(item.id)
    console.log(ev.dataTransfer)
}

const kanbanStore = new KanbanStore()

let backlogBoard = new KanbanBoard("board-1", "backlog");
let doingBoard = new KanbanBoard("board-2", "doing");

board.appendChild(backlogBoard.element)
board.appendChild(doingBoard.element)

kanbanStore.add("1")