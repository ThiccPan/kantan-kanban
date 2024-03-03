import KanbanBoard from "./kanbanBoard";
import KanbanCard from "./kanbanCard";
import KanbanStore from "./store"

let boardContainer = document.querySelector("#board-container") as HTMLDivElement
let taskInput = document.querySelector("#task-input") as HTMLInputElement
let submitBtnInput = document.querySelector("#task-submit-btn") as HTMLButtonElement
let clearBtn = document.querySelector('#clear-task') as HTMLButtonElement

export const kanbanStore = new KanbanStore()

let boards: Map<string, KanbanBoard> = new Map()
boards.set("board-1", new KanbanBoard("board-1", "backlog"))
boards.set("board-2", new KanbanBoard("board-2", "doing"))
boards.set("board-3", new KanbanBoard("board-3", "done"))

boards.forEach(board => {
    board.render(boardContainer)
});

submitBtnInput.onclick = (ev) => {
    console.log(taskInput.value)
    let task1 = new KanbanCard({ task: taskInput.value, boardId: boards.get("board-1")!.id })
    task1.render(boards.get(task1.currBoardId)!)
    task1.add(task1.currBoardId)
}

clearBtn.onclick = (ev) => {
    localStorage.clear()
    location.reload()
}

window.onload = () => {
    boards.forEach(board => {
        let backlogTask = kanbanStore.getAll(board.id)
        console.log(backlogTask)
        backlogTask.tasks.forEach((card) => {
            new KanbanCard({
                id: card.id,
                task: card.task,
                boardId: board.id
            }).render(board.element)
        })
    });
}