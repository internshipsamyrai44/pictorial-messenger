import type { Messages } from '../../../shared/api/messenger.type.ts'
import s from './MessageList.module.css'
import { MessageBubble } from './messageBubble/MessageBubble.tsx'

type MessageListProps = {
  messages?: Messages[]
  avatarUrl?: string
}

export const MessageList = ({ messages, avatarUrl }: MessageListProps) => {
  return (
    <div className={s.container}>
      {messages?.map(message => (
        <MessageBubble key={message.id} message={message} avatarUrl={avatarUrl ?? ""} />
      ))}
    </div>
  )
}
