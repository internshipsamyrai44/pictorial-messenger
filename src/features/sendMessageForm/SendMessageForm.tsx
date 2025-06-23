import s from './SendMessageForm.module.css'
import { SendButtons } from './sendButttons/SendButtons'
import { MessageInput } from './messageInput/MessageInput'
import { useState } from 'react'

export const SendMessageForm = () => {
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false)

  return (
    <form onSubmit={() => {}} className={s.form}>
      <MessageInput setIsInputFocused={setIsInputFocused} />
      <SendButtons isInputFocused={isInputFocused} />
    </form>
  )
}
