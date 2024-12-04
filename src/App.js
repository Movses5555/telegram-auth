import logo from './logo.svg';
import './App.css';
import TelegramLoginButton from "./components/TelegramBotButton";

function App() {

  let name = "ReactAuth123456789_bot"; // Это имя бота который вы ранее создавали в BotFather
  const handleBot = (user) => {
    console.log(user);
  };

  return (
    <div className="App">
      <TelegramLoginButton
        botName={name}
        buttonSize="large" // "large" | "medium" | "small"
        cornerRadius={3} // 0 - 20
        usePic={false} // true | false
        dataOnauth={handleBot}
      />
    </div>
  );
}

export default App;
