// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// import Footer from './components/Footer';

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/study" element={<Study />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
