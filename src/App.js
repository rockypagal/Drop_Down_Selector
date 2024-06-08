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
        ]}
        dropDownTitle={"US Stats"}
        animateDropDownTitle={true}
        customSetter={setValue}
      />
    </div>
  );
}

export default App;
