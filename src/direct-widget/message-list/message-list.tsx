import s from './message-list.module.css';
import {MessageBubble} from "../message-bubble/message-bubble.tsx"
import type {Contact, Message} from "../direct-widget.tsx"


type MessageListProps = {
  messages: Message[];
  contact: Contact;
}

export const MessageList = ({ messages, contact }:MessageListProps) => {

  return (
    <div className={s.container}>
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} contact={contact} />
      ))}
    </div>
  );
};

