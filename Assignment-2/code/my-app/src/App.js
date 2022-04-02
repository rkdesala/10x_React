import logo from "./logo.svg";
import "./App.css";

function App(props) {
  const { employee } = props;

  return (
    <div className="container">
      <div className="main_container">
        <img src={employee.profileImg} id="prof_image" />
        <h1>{employee.name}</h1>
        <label>Location</label>
        <h3>{employee.location}</h3>
        <label>Blood group</label>
        <h3>{employee.bloodGroup}</h3>
        <label>Age</label>
        <h3>{employee.age}</h3>
      </div>
    </div>
  );
}

export default App;
