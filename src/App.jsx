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
    </>
}