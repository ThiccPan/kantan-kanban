import Component from "./component";

export default class KanbanCard extends Component {
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
            ev.dataTransfer?.clearData();
            let target = ev.currentTarget!
            // Set the drag's format and data.
            // Use the event target's id for the data
            ev.dataTransfer?.setData("text/plain", element.id);
            console.log(element.id)
            console.log(ev.dataTransfer)
        }
        return element
    }
}