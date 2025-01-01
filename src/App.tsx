import TimersContextProvider from "./store/Timer-context";

import AddTimer from "./components/AddTimer";
import TimerControler from "./components/TimerConroler";
import TimerList from "./components/TimerList";
function App() {
  function handleSave(data: unknown) {
    const extractedData = data as { title: string; price: string };
    console.log(extractedData);
  }
  return (
    <TimersContextProvider>
      <div className="">
        <TimerControler></TimerControler>
        <AddTimer />
        <TimerList />
      </div>
    </TimersContextProvider>
  );
}

export default App;
