import { TodoTaskList } from "@/pages";
import { store } from "@/store";
import { Provider } from "react-redux";

const App = () => {
    return (
        <Provider store={store}>
            <TodoTaskList />
        </Provider>
    );
};

export default App;
