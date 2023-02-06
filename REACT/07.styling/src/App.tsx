import "./App.css";
import { AccountInfo } from "./components/AccountInfo";
import { AccountInfoContainer } from "./components/AccountInfo.styled";
import { BorderContainer } from "./components/BorderContainer/BorderContainer";

function App() {
  return (
    <div className="App">
      <BorderContainer>
        <p style={{ color: "red" }}>Sveiki</p>
      </BorderContainer>

      <AccountInfoContainer>
        <AccountInfo account={{ name: "Antanas", birthdate: new Date() }} />
      </AccountInfoContainer>
    </div>
  );
}

export default App;
