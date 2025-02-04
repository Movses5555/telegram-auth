import './App.css';
import TelegramLoginButton from "./components/TelegramBotButton";

function App() {

  let name = "ReactAuth123456789_bot";
  const handleBot = (user) => {
    console.log(user);
  };

  return (
    <div className="App">
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
