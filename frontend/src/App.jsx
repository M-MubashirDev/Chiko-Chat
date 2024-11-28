import Left from "./home/left/left";
import Logout from "./home/left/Left1/Logut";
import Right from "./home/right/right";

function App() {
  return (
    <div className="flex h-screen">
      <Logout />
      <Left></Left>
      <Right></Right>
    </div>
  );
}

export default App;
