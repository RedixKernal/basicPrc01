
import { Provider } from "react-redux";
import store from "./cakeRedux/store";
import Cakecontainer from "./components/cakecontainer";
import Hookcake from "./components/hookCake";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Cakecontainer/>
     <Hookcake/>
    </div>
    </Provider>
  );
}

export default App;
