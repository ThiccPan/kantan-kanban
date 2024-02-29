import KanbanBoard from "./kanbanBoard";
import KanbanCard from "./kanbanCard";
import KanbanStore from "./store"

let board = document.querySelector("#board-container") as HTMLDivElement

const kanbanStore = new KanbanStore()

let backlogBoard = new KanbanBoard("board-1", "backlog");
let doingBoard = new KanbanBoard("board-2", "doing");

backlogBoard.render(board)
doingBoard.render(board)

let task1 = new KanbanCard("task 1")
task1.render(backlogBoard)

kanbanStore.add("1", "asdf")