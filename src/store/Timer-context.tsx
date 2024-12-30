import { createContext, useContext, useReducer, type ReactNode } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimersState = {
  isRunning: true,
  timers: [],
};

type TimersContextValue = TimersState & {
  addTimers: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimerContext() {
  const timerCxt = useContext(TimersContext);
  if (timerCxt === null) {
    throw new Error("TimersContext is null");
  }
  return timerCxt;
}

type TimersContextProviderProps = {
  children: ReactNode;
};

type StartTimersAction = {
  type: "START_TIMERS";
};
type StopTimersAction = {
  type: "STOP_TIMERS";
};

type AddTimersAction = {
  type: "ADD_TIMERS";
  payload: Timer;
};

type Action = StartTimersAction | StopTimersAction | AddTimersAction;

function TimerReducer(state: TimersState, action: Action): TimersState {
  if (action.type === "START_TIMERS") {
    return {
      ...state,
      isRunning: true,
    };
  }
  if (action.type === "STOP_TIMERS") {
    return {
      ...state,
      isRunning: false,
    };
  }

  if (action.type === "ADD_TIMERS") {
    return {
      ...state,
      timers: [
        ...state.timers,
        {
          name: action.payload.name,
          duration: action.payload.duration,
        },
      ],
    };
  }

  return state;
}

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  const [timerState, dispatch] = useReducer(TimerReducer, initialState);

  const ContextValue: TimersContextValue = {
    timers: timerState.timers,
    isRunning: timerState.isRunning,
    addTimers(timerData) {
      dispatch({ type: "ADD_TIMERS", payload: timerData });
    },
    startTimers() {
      dispatch({ type: "START_TIMERS" });
    },
    stopTimers() {
      dispatch({ type: "STOP_TIMERS" });
    },
  };

  return (
    <TimersContext.Provider value={ContextValue}>
      {children}
    </TimersContext.Provider>
  );
}
