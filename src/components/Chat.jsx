import React, { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const newSocket = io("/api/sockets/quiz");
    setSocket(newSocket);

    newSocket.on("receive-message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      newSocket.close();
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (socket && inputMessage.trim() !== "") {
      socket.emit("send-message", inputMessage.trim());
      setInputMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h2 className="text-xl font-semibold mb-4">Chat</h2>
      <div className="overflow-y-auto h-64 mb-4">
        <ul>
          {messages.map((message, index) => (
            <li key={index} className="mb-2">
              <span className="font-semibold text-indigo-600 mr-2">User:</span>
              {message}
            </li>
          ))}
        </ul>
        <div ref={messagesEndRef}></div>
      </div>
      <div className="flex">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          className="border border-gray-300 rounded-l px-4 py-2 w-full focus:outline-none focus:border-indigo-300"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-r hover:bg-indigo-700 focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;