import { Greetings } from "./components/Greetings/Greetings";
import { Car } from "./components/Car/Car";
import "./global.css"
export function App() {
    const a = true;
    return <>
    <div 
    style={{
        backgroundColor: "red", 
        height: a ? 100 : 200, 
        width: 100,
        border: "3px solid blue"
        }}
        ></div>
    <div>
        <Car />
        <Greetings />
    </div>
    </>
}