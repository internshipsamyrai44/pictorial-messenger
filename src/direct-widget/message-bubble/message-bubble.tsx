import React from 'react';
import s from './message-bubble.module.css'
import type {Message} from "../direct-widget.tsx"

type MessageBubbleProps =  {
  message: Message;
}

 export  const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
    const formatTime = (date: Date) => {
      return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
    };
  return (
    <div className={`${s.container} ${message.isOwn ? s.containerOwn : s.containerOther}`}>
      <div className={`${s.bubble} ${message.isOwn ? s.bubbleOwn : s.bubbleOther}`}>
        <p className={s.content}>{message.content}</p>
        <p className={`${s.timestamp} ${message.isOwn ? s.timestampOwn : s.timestampOther}`}>
          {formatTime(message.timestamp)}
        </p>
      </div>
    </div>
  );
};

