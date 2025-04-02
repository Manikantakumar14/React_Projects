import reactImg from "../../assets/react-core-concepts.png";
import './Header.css'

const descriptions = ["Core", "Crucial", "Fundamental"]

function getRandom(max) {
    return Math.floor(Math.random() * (max + 1));
}

export function Header() {
    return (
        <header>
            <img src={reactImg} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {descriptions[getRandom(2)]} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    )
}