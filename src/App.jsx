import { Greetings } from "./components/Greetings/Greetings";
import { Car } from "./components/Car/Car";
import "./global.css"
export function App() {

    function hello(number) {
        alert("Hello de <App/>" + number);
    }
    return <>
        <div>
            Je suis {"<App/>"}
            <button onClick={hello}>ok</button>
            <Car onCarClick={hello}/>

        </div>
    </>
}