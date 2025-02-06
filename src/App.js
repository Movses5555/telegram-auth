import './App.css';
import TelegramLoginButton from "./components/TelegramBotButton";
import TelegramLogin from "./components/TelBut";

function App() {

  let name = "okvpn_xbot";
  const handleBot = (user) => {
    console.log(user);
  };

  return (
    <div className="App">
      <TelegramLogin />
      <TelegramLoginButton
        botName={name}
        buttonSize="large"
        cornerRadius={3}
        usePic={false}
        dataOnauth={handleBot}
      />
    </div>
  );
}

export default App;
