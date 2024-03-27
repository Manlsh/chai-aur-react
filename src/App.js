

function App() {

 
let counter = 5;

const addValue = () => {
  console.log('clicked', counter)
    return counter++;
}

  return (
    <>
    <h1>Hello, World</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={() => {addValue()}}>Add Value</button> 
    <button>Remove Value</button>
    </>
  );
}

export default App;
