import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import  from './slot3/DemoProps';


function App() {
  const userList = [
    { id: 1, name: "John", age: 20, address: "Ha Noi" },
    { id: 2, name: "Loan", age: 22, address: "Da Nang" }
  ];

  function handleClick() {
    alert("Button được chọn!");
  }

  return (
    <div className="App p-3 container">
      <DemoState1 />
      <DemoState />
      <DemoClass />
      <User users={userList} onClick={handleClick} />
      <DemoState2 users={userList} onclick={handleClick} />

      <hr className="my-5" />

      {/* Hiển thị Exercise 9 */}
      <Exercise9 />

      <hr className="my-5" />

      {/* 2. Hiển thị Exercise 10 */}
      <h2 className="fw-bold text-center mb-4 text-success">Exercise 10: Demo React-Bootstrap</h2>
      <Exercise10 />
    </div>
  );
}
export default App;
