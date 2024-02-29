export default class KanbanStore {
    add(boardId: string): boolean {
        localStorage.setItem(boardId, "123")
        return true
    }
}