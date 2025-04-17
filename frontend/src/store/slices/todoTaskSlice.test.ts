import reducer, {
    setAction,
    addAction,
    editAction,
    removeAction,
} from "@/store/slices/todoTaskSlice";
import { Status } from "@/types/Status";

describe("todoTaskSlice", () => {
    it("should set", () => {
        const initialState = { todoTaskList: [] };
        const todoTaskList = [
            { id: 1, name: "A", priority: 1, status: Status.NotStarted },
        ];
        const nextState = reducer(initialState, setAction(todoTaskList));

        expect(nextState.todoTaskList).toEqual(todoTaskList);
    });

    it("should add", () => {
        const initialState = { todoTaskList: [] };
        const todoTask = {
            id: 1,
            name: "A",
            priority: 1,
            status: Status.NotStarted,
        };
        const nextState = reducer(initialState, addAction(todoTask));
        expect(nextState.todoTaskList).toHaveLength(1);
        expect(nextState.todoTaskList).toContainEqual(todoTask);
    });

    it("should edit", () => {
        const initialState = {
            todoTaskList: [
                { id: 1, name: "A", priority: 1, status: Status.NotStarted },
            ],
        };
        const todoTask = {
            id: 1,
            name: "New A",
            priority: 3,
            status: Status.InProgress,
        };
        const nextState = reducer(initialState, editAction(todoTask));
        expect(nextState.todoTaskList).toHaveLength(1);
        expect(nextState.todoTaskList).toEqual([todoTask]);
    });

    it("should remove", () => {
        const todoTask = {
            id: 1,
            name: "A",
            priority: 1,
            status: Status.NotStarted,
        };
        const initialState = { todoTaskList: [todoTask] };
        const nextState = reducer(initialState, removeAction(todoTask));
        expect(nextState.todoTaskList).toHaveLength(0);
    });
});
