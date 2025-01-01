import Container from "./Container";
import { useTimerContext } from "../store/Timer-context";
import { useState, useEffect, useRef } from "react";
type TimerProps = {
  name: string;
  duration: number;
};

function Timer({ name, duration }: TimerProps) {
  const { isRunning } = useTimerContext();

  const interval = useRef<number | null>(null);
  const [remainingTime, setRemainingTime] = useState(duration * 1000);

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = setInterval(function () {
        setRemainingTime((prevTime) => prevTime - 30);
      }, 30);
      interval.current = timer;
    } else if (interval.current) {
      clearInterval(interval.current);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formatedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container
      ComponentType="div"
      className=" p-2 max-w-24 text-center text-slate-200 m-4 rounded-md bg-slate-800"
    >
      <p>{name}</p>
      <p>{formatedRemainingTime}</p>
    </Container>
  );
}
export default Timer;
