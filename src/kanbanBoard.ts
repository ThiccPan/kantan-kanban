export default class KanbanBoard {
    element: HTMLDivElement
    constructor(
        public id: string,
        public title: string
    ) {
        this.element = this.renderBoard()
        // this.element.addEventListener()
    }

    private readonly renderBoard = () => {
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
            let dataId = ev.dataTransfer!.getData("text")
            let data = document.getElementById(dataId) as HTMLDivElement
            target.appendChild(data);
        }

        return element
    }
}