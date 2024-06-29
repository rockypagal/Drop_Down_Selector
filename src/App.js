import { useState } from "react";
import "./App.css";
import DropDownBox from "./components/dropdown";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <DropDownBox
        options={[
          { label: "New York", value: "new_york" },
          { label: "California", value: "california" },
          { label: "Ohio", value: "ohio" },
          { label: "New York", value: "new_york" },
          { label: "California", value: "california" },
          { label: "Ohio", value: "ohio" },
          { label: "New York", value: "new_york" },
          { label: "California", value: "california" },
          { label: "Ohio", value: "ohio" },
          { label: "New York", value: "new_york" },
          { label: "California", value: "california" },
          { label: "Ohio", value: "ohio" },
        ]}
        dropDownTitle={"US Stats"}
        animateDropDownTitle={true}
        customSetter={setValue}
<<<<<<< HEAD
        showSearchBar={true}
=======
        showSearchBar
        resetButton
>>>>>>> 1b54d22681afe73934305b116d123c7bdc41de98
      />
    </div>
  );
}

export default App;
