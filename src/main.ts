import KanbanBoard from "./kanbanBoard";
import KanbanCard from "./kanbanCard";
import KanbanStore from "./store"

let board = document.querySelector("#board-container") as HTMLDivElement
let taskInput = document.querySelector("#task-input") as HTMLInputElement
let submitBtnInput = document.querySelector("#task-submit-btn") as HTMLButtonElement

export const kanbanStore = new KanbanStore()

let backlogBoard = new KanbanBoard("board-1", "backlog");
let doingBoard = new KanbanBoard("board-2", "doing");

backlogBoard.render(board)
doingBoard.render(board)

submitBtnInput.onclick = (ev) => {
    console.log(taskInput.value)
    let task1 = new KanbanCard(taskInput.value, backlogBoard.id)
    task1.render(backlogBoard)
}