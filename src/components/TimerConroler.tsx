import { useTimerContext } from "../store/Timer-context";

import Buttton from "./Button";

function TimerControler() {
  const timersCtx = useTimerContext();
  return (
    <div>
      <Buttton
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
