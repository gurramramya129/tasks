import React, { useState, useEffect } from "react";
import { auth, db } from "./firebase";

function Chat() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = db.collection("messages").orderBy("timestamp").onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    if (message.trim() !== "") {
      db.collection("messages").add({
        text: message,
        username: user.displayName,
        timestamp: new Date(),
      });

      setMessage("");
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.displayName}!</h2>
          <form onSubmit={sendMessage}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
            />
            <button type="submit">Send</button>
          </form>
          <div>
            {messages.map((msg, index) => (
              <p key={index}>{msg.username}: {msg.text}</p>
            ))}
          </div>
        </div>
      ) : (
        <h2>You need to sign in to use the chat.</h2>
      )}
    </div>
  );
}

export default Chat;


