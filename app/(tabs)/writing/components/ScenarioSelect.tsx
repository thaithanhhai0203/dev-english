import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { useWritingStore } from "../../../../store/useWritingStore";
import { writingScenarios } from "../../../../data/writing/writingScenarios";

export default function ScenarioSelect() {
  const { scenario, setScenario } = useWritingStore();

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(writingScenarios);

  return (
    <DropDownPicker
      open={open}
      value={scenario}
      items={items}
      setOpen={setOpen}
      setValue={(callback) => {
        const value = callback(scenario);
        setScenario(value);
      }}
      setItems={setItems}
      placeholder="Chọn kịch bản"
      style={{
        borderColor: "#ddd",
        borderRadius: 10,
        backgroundColor: "#F7F7F7",
      }}
      dropDownContainerStyle={{
        borderColor: "#ddd",
      }}
    />
  );
}