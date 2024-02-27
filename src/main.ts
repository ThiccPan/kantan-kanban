import './main.css'
import { KanbanCard } from "./kanbanCard.ts";

const BOARD_BACKLOG_ID = 'kanban-board-1';
const BOARD_DOING_ID = 'kanban-board-2';
const BOARD_REVIEW_ID = 'kanban-board-3';
const BOARD_DONE_ID = 'kanban-board-4';

interface TasksItem {
  backlogTasks: string[]
  doingTasks: string[]
  reviewTasks: string[]
  doneTasks: string[]
}

let tasksItem: TasksItem = {
  backlogTasks: [],
  doingTasks: [],
  reviewTasks: [],
  doneTasks: [],
};

export let dragged: KanbanCard;

export const setDragged = (card: KanbanCard) => {
  dragged = card
}

window.onload = (eLoad) => {
  let tasks = JSON.parse(window.localStorage.getItem("tasks")!)
  console.log(tasks);
  tasksItem.backlogTasks = tasks.backlogTasks
  // set todo string to card
  // append card to the correct board
  console.log("backlog: ", tasksItem.backlogTasks);

  tasksItem.backlogTasks.forEach(task => {
    let backlogCard = new KanbanCard(task)
    backlogBoard.append(backlogCard.getElement);
  });
}

const kanbanBoards = Array.from(document.getElementsByClassName('kanban-board'));

const setAsDropZone = (kanbanBoard: HTMLDivElement) => {
  kanbanBoard.ondragover = (eDragOver) => {
    eDragOver.preventDefault();
    console.log("board dragover");
  }

  kanbanBoard.ondrop = (eDrop) => {
    eDrop.preventDefault();
    let target = eDrop.target as HTMLDivElement;

    //  prevent card to be inside another card
    if (target.classList.contains(`kanban-board`)) {
      target.appendChild(dragged.getElement);
      switch (target.id) {
        case BOARD_BACKLOG_ID:
          console.log('new backlog card');
          tasksItem.backlogTasks
          break;

        case BOARD_DOING_ID:
          console.log('dropped on doing');
          // add task to doing
          tasksItem.doingTasks.push(dragged.getElement.innerText)
          break;

        case BOARD_REVIEW_ID:
          console.log('dropped on review')
          break;

        case BOARD_DONE_ID:
          console.log('dropped on done')
          break;

        default:
          break;
      }
      console.log("board drop: ", dragged);
    }
  }
}

kanbanBoards.forEach((board) => {
  setAsDropZone(board as HTMLDivElement);
})

const submitBtn = document.getElementsByName('add-task')[0] as HTMLButtonElement;
const newTaskInput = document.getElementsByName('new-task')[0] as HTMLInputElement;
const backlogBoard = document.getElementById(BOARD_BACKLOG_ID) as HTMLDivElement;
submitBtn.onclick = (eClick) => {
  eClick.preventDefault();
  console.log(newTaskInput.value);

  tasksItem.backlogTasks = [...tasksItem.backlogTasks, newTaskInput.value]
  let newTodoCard = new KanbanCard(newTaskInput.value);
  backlogBoard.append(newTodoCard.getElement);
}

const saveBtn = document.getElementsByName('save')[0] as HTMLButtonElement

saveBtn.onclick = (eClick) => {
  console.log('clicked')
  window.localStorage.setItem("tasks", JSON.stringify(tasksItem))
  console.log(JSON.parse(window.localStorage.getItem("tasks")!))
}

const clearBtn = document.getElementsByName("clear")[0] as HTMLButtonElement

clearBtn.onclick = () => {
  const isConfirmed = window.confirm("clear tasks list?");
  if (isConfirmed) {
    window.localStorage.clear();
  }
}