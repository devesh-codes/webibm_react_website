import { useState } from "react";
import chatbotData from "./chatbotData";

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      node: "start",
      text: chatbotData.start.message,
    },
  ]);

  const handleClick = (option) => {
    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: option.label,
      },
    ]);

    if (option.action) {
      if (option.action === "website") {
        window.open("https://webibm.com", "_blank");
      }

      if (option.action === "quote") {
        alert("Open Quote Form");
      }

      if (option.action === "pricing") {
        alert("Open Pricing Form");
      }

      return;
    }

    const next = chatbotData[option.next];

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          node: option.next,
          text: next.message,
        },
      ]);
    }, 400);
  };

  const lastBot = [...messages]
    .reverse()
    .find((msg) => msg.sender === "bot" && msg.node);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-blue-600 text-white shadow-lg"
      >
        💬
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 w-96 rounded-xl bg-white shadow-2xl border overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 font-bold">
            WEBIBM Assistant
          </div>

          {/* Chat */}
          <div className="h-[450px] overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-xl px-4 py-2 whitespace-pre-line ${
                    msg.sender === "bot"
                      ? "bg-gray-100"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Options */}
          <div className="border-t p-3 flex flex-wrap gap-2">
            {lastBot?.node &&
              chatbotData[lastBot.node].options.map((option) => (
                <button
                  key={option.label}
                  onClick={() => handleClick(option)}
                  className="rounded-full border px-4 py-2 text-sm hover:bg-blue-600 hover:text-white transition"
                >
                  {option.label}
                </button>
              ))}
          </div>
        </div>
      )}
    </>
  );
}