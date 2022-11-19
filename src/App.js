import Carousel from "./components/Carousel/Carousel";
import alert from "./components/ConfirmAlert/alert";
import "./App.scss";
import Button from "./components/Button/Button";
import ObserverTest from "./components/Observer/ObserverTest";
import HeaderHideAndAppear from "./Functions/HeaderHideAndAppear";
import ScrollIntoView from "./Functions/ScrollIntoView";
import LoadingTaskbar from "./components/LoadingTaskbar/LoadingTaskbar";

function App() {
  return (
    <>
      <LoadingTaskbar />
      <div className="App" style={{ padding: 40 }}>
        {/* <Carousel /> */}
        {/* <Button /> */}
        {/* <button onClick={() => alert()}>Alert</button> */}

        <ScrollIntoView />
        <HeaderHideAndAppear />
        <ObserverTest />
      </div>
    </>
  );
}

export default App;
