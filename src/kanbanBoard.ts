import Component from "./component"
import KanbanCard from "./kanbanCard"

export default class KanbanBoard extends Component {
    element: HTMLDivElement
    constructor(
        public id: string,
        public title: string
    ) {
        super()
        this.element = this.createBoard()
    }

    private readonly createBoard = () => {
        let element = document.createElement("div")
        element.id = this.id
        element.classList.add(
            "kanban-board",
            "size-96",
            "border-2",
            "border-black",
            "min-w-96",
            "min-h-48"
        )

        element.ondrop = (ev) => {
            ev.preventDefault
            console.log("dropped")
        }

        element.ondragover = (ev) => {
            ev.preventDefault();
            console.log("board dragover");
        }

        element.ondrop = (ev) => {
            ev.preventDefault()
            console.log("dropped")

            let target = ev.target as HTMLDivElement;
            target.appendChild(KanbanCard.dragged.element);
            KanbanCard.dragged.save(this.id)
        }

        return element
    }
}