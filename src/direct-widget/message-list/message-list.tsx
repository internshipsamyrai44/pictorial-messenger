import { useEffect, useRef } from 'react';

import s from './message-list.module.css';
import {MessageBubble} from "../message-bubble/message-bubble.tsx"
import type {Message} from "../direct-widget.tsx"


type MessageListProps = {
  messages: Message[];
}

export const MessageList = ({ messages }:MessageListProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={s.container}>
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

