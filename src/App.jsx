import { Greetings } from "./Greetings";

export function App() {
    return (
    <>
        <h1>Hello to the react world</h1>
        <Greetings 
        firstName={"Rachel"}
        age={50}
        car={{color: "red", vitess: 300}}
        doSomething={function() {
            console.log("Hello");
        }}
        isSunny
        >
        <img src="https://cdn.pixabay.com/photo/2018/01/21/01/46/architecture-3095716_960_720.jpg"/>
        </Greetings>
    </>
    );
}