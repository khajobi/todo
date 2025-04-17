import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useSWR from "swr";
import { fetcher } from "@/utils";
import { TodoTask } from "@/types/TodoTask";
import { selectTodoTaskList } from "@/store/selectors";
import { setAction } from "@/store/slices/todoTaskSlice";

const useTodoTaskList = () => {
    const todoTaskList = useSelector(selectTodoTaskList);
    const dispatch = useDispatch();

    const { data, error } = useSWR<TodoTask[]>("/TodoTask", fetcher);

    const loading = !error && !data;

    useEffect(() => {
        dispatch(setAction(!loading && data ? data : []));
    }, [dispatch, loading, data]);

    return {
        todoTaskList,
        loading,
        error,
    };
};

export default useTodoTaskList;
