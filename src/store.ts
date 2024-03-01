import KanbanCard from "./kanbanCard"

interface boardStorage {
    tasks: KanbanCard[]
}

export default class KanbanStore {
    add(boardId: string, data: KanbanCard): boolean {
        let fetched = localStorage.getItem(boardId)
        let parsedData: boardStorage = { 
            tasks: [] 
        }
        if (fetched) {
            parsedData = JSON.parse(fetched)
        }

        parsedData.tasks.push(data)
        localStorage.setItem(boardId, JSON.stringify(parsedData))
        return true
    }

    update(oldBoardId: string, data: { task: KanbanCard, newBoardId: string }) {
        console.log(`old board: ${oldBoardId} -> new board: ${data.newBoardId}`)
        let fetched = localStorage.getItem(oldBoardId)
        let parsedData: boardStorage = {
            tasks: []
        }
        if (fetched) {
            parsedData = JSON.parse(fetched)
        }

        console.log("before: ", parsedData.tasks)
        console.log(data.task.id)
        parsedData.tasks = parsedData.tasks.filter((task) => task.id !== data.task.id)
        console.log("after: ", parsedData.tasks)
        localStorage.setItem(oldBoardId, JSON.stringify(parsedData))

        let newFetched = localStorage.getItem(data.newBoardId)
        let newparsedData: boardStorage = {
            tasks: []
        }

        if (newFetched) {
            newparsedData = JSON.parse(newFetched)
        }

        newparsedData.tasks.push(data.task)
        localStorage.setItem(data.newBoardId, JSON.stringify(newparsedData))
        return true
    }
}