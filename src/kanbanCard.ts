import { setDragged } from "./main";

const BACKLOG = "backlog"

export class KanbanCard {
    private element: HTMLDivElement;
    private status: string

    constructor(task: string) {
        this.element = document.createElement("div");
        this.status = BACKLOG

        this.element.innerText = task;
        console.log(this.element.innerText)
        this.element.draggable = true
        this.element.className = `kanban-card size-24 border-2 border-yellow-700`

        this.element.ondragstart = (eDragStart) => {
            console.log(eDragStart.target);
            console.log("card is dragged");
            setDragged(this);
        }

        this.element.ondragend = (eDragEnd) => {
            console.log("card is dropped");
        }
    }


    public get getElement(): HTMLDivElement {
        return this.element;
    }

    public set setStatus(status: string) {
        this.status = status
    }

}