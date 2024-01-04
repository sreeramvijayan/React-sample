import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:name" element={<Profile />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//     <h1>Hello World!</h1>
//   </div>
// );
// }
// export default App;

/////////////////////////////////////////////////////
// import React from 'react';
// import './App.css';

// class Car {
//   constructor(name) {
//     this.brand = name;
//   }
// }

// function App() {
//   const mycar = new Car("Ford");

//   return (
//     <div className="App">
//       <h1>Car is: {mycar.brand}</h1>
//     </div>
//   );
// }

// export default App;

/////////////////////////////////////////////////
// import React from 'react';
// import './App.css';
// class Car {
//   constructor(name) {
//     this.brand = name;
//   }
// present() {
//   return 'I have a ' + this.brand;
// }
// };


// function App() {
//   const mycar = new Car("Ford");

//   return (
//     <div className="App">
//       <h1>Car is: {mycar.present()}</h1>
//     </div>
//   );
// }

// export default App;


//////////////////////////////////////////
// import './App.css';
// class Car {
//   constructor(name) {
//     this.brand = name;
//   }
// present() {
//   return 'I have a ' + this.brand;
// }
// };
// class Model extends Car {
//   constructor(name, mod) {
//     super(name);
//     this.model = mod;
//   }  
//   show() {
//       return this.present() + ', it is a ' + this.model
//   }
// }

// function App() {
//   const mycar = new Model("Ford", "Mustang");

//   return (
//     <div className="App">
//       <h1>Car is: {mycar.show()}</h1>
//     </div>
//   );
// }

// export default App;


/////////////////////////////////////////////////
// import React from 'react';
// import './App.css';

// class Header {
//   constructor() {
//     this.color = "Red";
//     this.changeColor = this.changeColor.bind(this);
//   }

//   changeColor = () => {
//     document.getElementById("demo").innerHTML += this.color;
//   };
// }

// function App() {
//   const myheader = new Header();

//   window.addEventListener("load", myheader.changeColor);

//   document.getElementById("btn").addEventListener("click", myheader.changeColor);

//   return (
//     <div className="App">
//       <h1 id="demo">Color is: {myheader.color}</h1>
//       <button id="btn">Change Color</button>
//     </div>
//   );
// }

// export default App;
/////////////////////////////////////////////////
// import React, { useState } from 'react';
// import './App.css';

// class Header extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       color: "Red",
//     };
    
    // Bind the method to the class instance
    // this.changeColor = this.changeColor.bind(this); // use when normal function is used
  // }

  // changeColor = () => {
  //   this.setState({ color: "Blue" });
  // };

  //Regular function:
//   changeColor = function() {
//     this.setState({ color: "Blue" });
//   }

//   render() {
//     return (
//       <div>
//         <h1 id="demo">Color is: {this.state.color}</h1>
//         <button id="btn" onClick={this.changeColor}>Change Color</button>
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <Header />
//     </div>
//   );
// }

// export default App;

////////////////////////////////////

// import React from 'react';
// import ReactDOM from 'react-dom';

// const myArray = ['apple', 'banana', 'orange'];

// const myList = myArray.map((item, index) => <p key={index}>{item}</p>);

// const container = document.getElementById('root');

// const root = ReactDOM.createRoot(container);

// function App() {
//   return (
// root.render(
//   <React.StrictMode>
//     {myList}
//   </React.StrictMode>

// )
//   )
// }

// export default App;

///////////////////////////////////
// import React from 'react';
// import ReactDOM from 'react-dom';

// const myArray = ['apple', 'banana', 'orange'];

// const myList = myArray.map((item, index) => <p key={index}>{item}</p>);

// const container = document.getElementById('root');

// const root = ReactDOM.createRoot(container);

// function App() {
//   return (
//     <React.StrictMode>
//       {myList}
//     </React.StrictMode>
//   );
// }

// root.render(<App />);

// export default App;

////////////////////////////////////////
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Car from '../public/';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);


// import { useState } from 'react';
// import ReactDOM from 'react-dom/client';

// function MyForm() {
//   const [name, setName] = useState("");

//   return (
//     <form>
//       <label>Enter your name:
//         <input
//           type="text" 
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//     </form>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);



// import { useState } from 'react';
// import ReactDOM from 'react-dom/client';

// function MyForm() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(inputs);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//       <input 
//         type="text" 
//         name="username" 
//         value={inputs.username || ""} 
//         onChange={handleChange}
//       />
//       </label>
//       <label>Enter your age:
//         <input 
//           type="number" 
//           name="age" 
//           value={inputs.age || ""} 
//           onChange={handleChange}
//         />
//         </label>
//         <input type="submit" />
//     </form>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);