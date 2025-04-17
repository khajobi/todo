import { selectTodoTaskList } from "@/store/selectors";
import { Status } from "@/types/Status";
import { RootState } from "../store";

test("selectTodoTasks returns the list of tasks", () => {
    const task1 = {
        id: 1,
        name: "Task 1",
        priority: 1,
        status: Status.NotStarted,
    };
    const task2 = {
        id: 2,
        name: "Task 2",
        priority: 2,
        status: Status.InProgress,
    };

    const mockState = {
        todoTask: {
            todoTaskList: [task1, task2],
        },
    };

    const result = selectTodoTaskList(mockState as RootState);
    expect(result).toHaveLength(2);
    expect(result[0]).toEqual(task1);
    expect(result[1]).toEqual(task2);
});
