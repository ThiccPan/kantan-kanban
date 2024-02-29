import Component from "./component";
import { kanbanStore } from "./main";

export default class KanbanCard extends Component {
    static dragged: KanbanCard
    element: HTMLDivElement;
    task: string;

    constructor(task: string) {
        super()
        this.task = task
        this.element = this.createElement()
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
        input.classList.value = "kanban__item-input"
        element.append(input)

        // element behaviour
        element.ondragstart = (ev) => {
            // ev.preventDefault()
            let target = ev.currentTarget!
            KanbanCard.dragged = this
            console.log(KanbanCard.dragged)
            console.log(element.id)
            console.log(ev.dataTransfer)
        }
        return element
    }

    save = (boardId: string) => {
        kanbanStore.add(boardId, this)
    }
}