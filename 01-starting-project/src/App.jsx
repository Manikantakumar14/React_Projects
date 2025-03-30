import {useState} from 'react'

import {CORE_CONCEPTS, EXAMPLES} from "./data";
import {Header} from "./components/Header/Header.jsx";
import {CoreConcept} from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton";


function App() {
    const [selectedTopic, setSelectedTopic] = useState(null)

    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton)
        console.log(selectedTopic)
    }

    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Time to get started!</h2>
                    <ul>
                        {CORE_CONCEPTS.map((item) => <CoreConcept key={item.title} {...item}/>)}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton isSelected={selectedTopic === 'components'}
                                   onClick={() => handleClick("components")}>Components</TabButton>
                        <TabButton isSelected={selectedTopic === 'jsx'}
                                   onClick={() => handleClick("jsx")}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === 'props'}
                                   onClick={() => handleClick("props")}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === 'state'}
                                   onClick={() => handleClick("state")}>State</TabButton>
                    </menu>
                    {!selectedTopic ? (<p>Please select a topic.</p>) : (<div id="tab-content">

                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>
                              {EXAMPLES[selectedTopic].code}
                            </code>
                        </pre>
                    </div>)}

                </section>
            </main>
        </div>
    );
}

export default App;
