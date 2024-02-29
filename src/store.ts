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
}