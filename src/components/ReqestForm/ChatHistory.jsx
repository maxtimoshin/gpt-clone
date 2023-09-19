const ChatHistory = ({ messages }) => {
  return (
    <div className="chat-history">
      <ul className="messages-list">
        {messages?.map((message, idx) => (
          <li key={idx} className="message-item">
            {message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatHistory;
