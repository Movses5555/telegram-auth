import React, { useRef, useEffect } from "react";

const TelegramLoginButton = ({
  wrapperProps,
  dataAuthUrl,
  usePic = false,
  botName,
  className,
  buttonSize = "large",
  dataOnauth,
  cornerRadius,
  requestAccess = true,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || ref.current === null) return;

    if (
      typeof dataOnauth === "undefined" &&
      typeof dataAuthUrl === "undefined"
    ) {
      throw new Error(
        "One of these props should be defined: dataAuthUrl (redirect URL), dataOnauth (callback fn)."
      );
    }

    if (typeof dataOnauth === "function") {
      window.TelegramLoginWidget = {
        dataOnauth: (user) => dataOnauth(user),
      };
    }

//     <script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-login="smdev0" data-size="large" data-onauth="onTelegramAuth(user)"></script>
// <script type="text/javascript">
//   function onTelegramAuth(user) {
//     alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');
//   }
// </script>
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22"; // src="https://telegram.org/js/telegram-widget.js?22"
    script.setAttribute("data-telegram-login", 'smdev0'); // data-telegram-login="smdev0"
    script.setAttribute("data-size", "large"); // data-size="large"

    // if (cornerRadius !== undefined) {
    //   script.setAttribute("data-radius", cornerRadius.toString());
    // }

    if (requestAccess) {
      script.setAttribute("data-request-access", "write");
    }

    // script.setAttribute("data-userpic", usePic.toString());

    if (typeof dataAuthUrl === "string") {
      script.setAttribute("data-auth-url", dataAuthUrl); // data-onauth="onTelegramAuth(user)
    } else {
      script.setAttribute(
        "data-onauth",
        "TelegramLoginWidget.dataOnauth(user)"
      );
    }

    script.async = true;
    ref.current.appendChild(script);
  }, [
    botName,
    buttonSize,
    cornerRadius,
    dataOnauth,
    requestAccess,
    className,
    usePic,
    ref,
    dataAuthUrl,
  ]);

  return (
    <div
      ref={ref}
      className={className}
      {...wrapperProps}
    />
  );
};

export default TelegramLoginButton;