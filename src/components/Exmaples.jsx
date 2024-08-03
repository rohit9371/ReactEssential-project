import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from './Section.jsx'
import TagButton from "./tagbutton";

export default function Examples(){

    console.log("app funtion");
  const [selectedTopic, setSelectedTopic] = useState("");
  function handleSelect(selectButton) {
    setSelectedTopic(selectButton);
    console.log(selectedTopic);

  }
    return(
        <Section id="examples">
          <h2>Example</h2>
          <menu>
            <TagButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TagButton>
            <TagButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TagButton>
            <TagButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              Jsx
            </TagButton>
            <TagButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TagButton>
          </menu>
          {!selectedTopic && <p>Please select the topic</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h2>{EXAMPLES[selectedTopic].title}</h2>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <p>{EXAMPLES[selectedTopic].code}</p>
            </div>
          )}
        </Section>
    )
}