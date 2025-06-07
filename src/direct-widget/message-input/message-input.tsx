import s from './message-input.module.css';
import {SendButtons} from "../send-buttons/send-buttons.tsx"
import { useState} from "react"

export const MessageInput = () => {


  const [isInputFocused, setIsInputFocused] = useState<boolean>(false)

  return (
    <form onSubmit={() => {
    }} className={s.form}>
      <input
        type="text"
        onChange={(e) => (e.target.value)}
        placeholder="Type Message..."
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
        className={s.input}
      />

      <SendButtons isInputFocused={isInputFocused} />
    </form>

  );
};