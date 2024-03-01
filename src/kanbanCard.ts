import Component from "./component";
import { kanbanStore } from "./main";
import { v4 as uuidv4 } from 'uuid';

export default class KanbanCard extends Component {
    static dragged: KanbanCard
    element: HTMLDivElement;
    task: string;
    id: string;
    currBoardId: string

    constructor(task: string, boardId: string) {
        super()
        this.task = task
        this.id = uuidv4()
        this.currBoardId = boardId

        this.element = this.createElement()
        console.log("TASK created: ")
        kanbanStore.add(boardId, this)
    }

    private readonly createElement = () => {
        let element = document.createElement("div")
        // outer element
        element.draggable = true
        element.classList.value = "kanban__item max-w-20 bg-red-500"
        element.id = "task11"

        // editable element
        let input = document.createElement("div")
        input.contentEditable = "true"
        input.textContent = this.task
        input.classList.value = "kanban__item-input"
        element.append(input)

        // element behaviour
        element.ondragstart = (ev) => {
            // ev.preventDefault()
            KanbanCard.dragged = this
            console.log(KanbanCard.dragged)
            console.log(element.id)
            console.log(ev.dataTransfer)
        }
        return element
    }

    update = (boardId: string) => {
        kanbanStore.update(this.currBoardId, {task: this, newBoardId: boardId})
    }
}