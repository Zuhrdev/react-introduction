export function Car(props) {
    function onClick() {
        props.onCarClick(2)
    }
    return <div>Je suis {"<Car/>"} //
    <button onClick={onClick}>click</button></div> // props représente la rédérence de la fonctionn hello 
}