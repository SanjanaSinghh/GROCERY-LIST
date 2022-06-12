import { useState } from "react";
import List from "./showgrocery";

export default function Inp() {
  const [task, setask] = useState(" ");
  const [all, addtask] = useState([]);
  const add = () => {
    addtask([...all, task]);
    console.log(all);
  };
  const remove = (i) => {
    const san = [...all];
    san.splice(i, 1);
    addtask(san);
  };

  return (
    <>
      <input type="text" onChange={(e) => setask(e.target.value)} />
      <button onClick={add}> Add_item</button>
      <div>
        {all.map((x, i) => (
          <>
            <List item={x} index={i} />
            <button onClick={remove(i)}> remove</button>
          </>
        ))}
      </div>
    </>
  );
}
