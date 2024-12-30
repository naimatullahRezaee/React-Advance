import Timer from "./Timer";

import { useTimerContext } from "../store/Timer-context";

function TimerList() {
  const { timers } = useTimerContext();

  return (
    <ul>
      {timers.map((item) => (
        <li key={item.name}>
          <Timer {...item} />
        </li>
      ))}
    </ul>
  );
}

export default TimerList;
