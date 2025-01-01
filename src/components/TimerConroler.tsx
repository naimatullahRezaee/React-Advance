import { useTimerContext } from "../store/Timer-context";

import Buttton from "./Button";

function TimerControler() {
  const timersCtx = useTimerContext();
  return (
    <div className="flex justify-center m-3">
      <Buttton
        className="p-2 bg-slate-800 rounded-md text-slate-300 "
        onClick={
          timersCtx.isRunning ? timersCtx.stopTimers : timersCtx.startTimers
        }
      >
        {timersCtx.isRunning ? "Stop" : "Start"} Timers
      </Buttton>
    </div>
  );
}

export default TimerControler;
