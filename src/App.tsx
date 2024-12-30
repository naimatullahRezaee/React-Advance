import AddTimer from "./components/AddTimer";

function App() {
  function handleSave(data: unknown) {
    const extractedData = data as { title: string; price: string };
    console.log(extractedData);
  }
  return (
    <div>
      <AddTimer />
    </div>
  );
}

export default App;
