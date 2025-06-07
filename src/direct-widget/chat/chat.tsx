import s from './chat.module.css'
import NoAvatar from "../../assets/images/noAvatar.png"
import type {Contact, Message} from "../direct-widget.tsx"
import {MessageInput} from "../message-input/message-input.tsx"
import {MessageList} from "../message-list/message-list.tsx"

type ChatProps = {
  contact: Contact
  messages: Message[]
}

export const Chat = ({contact, messages}: ChatProps) => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.photo}>
          <img className={s.avatar} src={contact.avatar || NoAvatar} alt={contact.name}/>
        </div>
        <div className={s.name}>
          {contact.name}
        </div>
      </div>
      <MessageList messages={messages}/>
      <MessageInput />
    </div>
  );
};

