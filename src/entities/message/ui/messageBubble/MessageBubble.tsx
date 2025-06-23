import s from './MessageBubble.module.css'
import clsx from 'clsx'
import { MessageStatus, type Messages } from '../../../../shared/api/messenger.type.ts'
import Checked from '../../../../shared/assets/icons/Checked.tsx'

type MessageBubbleProps = {
  message: Messages
  avatarUrl: string
}

export const MessageBubble = ({ message, avatarUrl }: MessageBubbleProps) => {
  const formatTime = (date: string) => {
    const dateObj = new Date(date)
    return dateObj.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
  }
  const isRead = message.status === MessageStatus.READ
  const isOwn = true

  return (
    <div className={clsx(s.wrapper, isOwn ? s.wrapperOwn : s.wrapperOther)}>
      {!isOwn && <img src={avatarUrl} alt='Avatar' className={s.avatar} />}

      <div className={clsx(s.container, isOwn ? s.containerOwn : s.containerOther)}>
        <div className={clsx(s.bubble, isOwn ? s.bubbleOwn : s.bubbleOther)}>
          <p className={s.content}>{message.messageText}</p>
          <p className={clsx(s.timestamp, isOwn ? s.timestampOwn : s.timestampOther)}>
            {formatTime(message.createdAt)}
            {isRead && isOwn && <Checked />}
          </p>
        </div>
      </div>
    </div>
  )
}
