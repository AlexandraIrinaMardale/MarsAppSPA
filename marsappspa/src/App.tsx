import React, {useEffect, useState, useContext} from 'react';
// import logo from './logo.svg';
import logoNasa from './NASA_seal.svg.png';
import './App.css';

interface Count {
    count: number,
    setCount: (val: number) => void
};

const defaultState = {
    count: 0,
    setCount: () => 0
};

const CountContext = React.createContext<Count>(defaultState);


function App() {

  return (
        <div className="App">
          <header className="App-header">
          <Template
              title = "Nasa"
              para1 = "The National Aeronautics and Space Administration (NASA /ˈnæsə/) is an independent agency of the U.S. federal government responsible for the civil space program, aeronautics research, and space research"
              para2 = "NASA was established in 1958, succeeding the National Advisory Committee for Aeronautics (NACA), to give the US space development effort a distinctly civilian orientation, emphasizing peaceful applications in space science."
              logo = {logoNasa}
              />

              <Comp1 />


            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
  );
}


function Template(props: { title: string; para1: string; para2: string; logo: string}) {
  return (
      <div>
        <h1>{props.title}</h1>
        <p>{props.para1}</p>
        <p>{props.para2}</p>
        <img src={props.logo} className="App-logo" alt="logo" />
      </div>
  );
}

//PART 3
function Comp1 () {
    const [count, setCount] = useState(() => {
        const saved = localStorage.getItem("count");
        if (saved) {
            return JSON.parse(saved);

        }
        else {
            return 0;
        }
    });

    useEffect(() => {
       const dataFromLocalStorage = localStorage.getItem("count")
       if (dataFromLocalStorage) {
           setCount(JSON.parse(dataFromLocalStorage));
       }
   }, [])

    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count))
    }, [count])


    return (
        <CountContext.Provider value = {{
            count, setCount}}>
            <div>
                <Comp2 />
                <Comp3 />
            </div>
        </CountContext.Provider>
    )
}

function Comp2 () {
    const count = useContext(CountContext);

    return (
        <div>
            <button onClick={() => count.setCount(count.count + 1)}>
                Click me
            </button>

        </div>

    );
}

function Comp3 () {

    const count = useContext(CountContext);

    return (
        <div>
            <Comp4 />
            <p>Message</p>
        </div>
    )
}

function Comp4 () {
    const count = useContext(CountContext);

    return (
        <p>You clicked {count.count} times</p>
    )
}




//PART 2

//
// function Counter() {
//     // Declare a new state variable, which we'll call "count"
//
//     const [count, setCount] = useState(() => {
//         const saved = localStorage.getItem("count");
//         if (saved) {
//             const initValue = JSON.parse(saved);
//             return initValue;
//
//         }
//         else {
//             const initValue = 0;
//             return initValue;
//         }
//     });
//
//
//     useEffect(() => {
//        const dataFromLocalStorage = localStorage.getItem("count")
//        if (dataFromLocalStorage) {
//            setCount(JSON.parse(dataFromLocalStorage));
//        }
//    }, [])
//
//     useEffect(() => {
//         localStorage.setItem("count", JSON.stringify(count))
//     }, [count])
//
//
//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//             </button>
//
//         </div>
//
//     );
// }





export default App;


