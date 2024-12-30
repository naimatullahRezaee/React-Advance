import Form from "./Form";
import Buttton from "./Button";
import Input from "./Input";

import { useTimerContext } from "../store/Timer-context";

function AddTimer() {
  const { addTimers } = useTimerContext();

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; duration: string };
    addTimers({ name: extractedData.name, duration: +extractedData.duration });
  }
  return (
    <div>
      <Form
        onSave={handleSave}
        className="flex flex-col gap-5 max-w-xl p-8 mx-auto bg-slate-800 rounded-md"
      >
        <Input
          id="name"
          placeholder="Name"
          type="text"
          className="p-2 bg-slate-600 outline-none rounded-md w-full"
        />
        <Input
          id="duration"
          placeholder="Duration"
          type="text"
          className="p-2 bg-slate-600 outline-none rounded-md w-full"
        />
        <Buttton className="p-2 bg-slate-900 text-slate-100 rounded-md">
          Add Product
        </Buttton>
      </Form>
    </div>
  );
}

export default AddTimer;
