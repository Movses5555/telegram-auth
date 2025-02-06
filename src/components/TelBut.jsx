import { useEffect } from "react";

const TelegramLogin = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?7";
    script.async = true;
    script.setAttribute("data-telegram-login", "okvpn_xbot");
    script.setAttribute("data-size", "large");
    script.setAttribute("data-userpic", "true");
    script.setAttribute("data-onauth", "onTelegramAuth(user)");
    script.setAttribute("data-request-access", "write");
    document.getElementById("telegram-login-container")?.appendChild(script);
  }, []);

  return <div id="telegram-login-container"></div>;
};

export default TelegramLogin;
