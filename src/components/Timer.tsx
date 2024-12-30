import Container from "./Container";

type TimerProps = {
  name: string;
  duration: number;
};

function Timer({ name, duration }: TimerProps) {
  return (
    <Container ComponentType="div">
      <p>{name}</p>
      <p>{duration}</p>
    </Container>
  );
}
export default Timer;
