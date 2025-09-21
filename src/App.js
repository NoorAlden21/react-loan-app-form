import logo from "./logo.svg";
import "./App.css";
import LoanForm from "./LoanForm";

function App() {
  return (
    <div className="App">
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoanForm />
      </div>
    </div>
  );
}

export default App;
