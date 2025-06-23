import s from './Chat.module.css'
import NoAvatar from '../../../shared/assets/images/noAvatar.png'
import { MessageList } from '../../../entities/message/ui/MessageList'
import { SendMessageForm } from '../../../features/sendMessageForm/SendMessageForm'
import { useGetMessagesbyIdQuery } from '../../../shared/api/messagesApi'

type ChatProps = {
  ownerId: number
  userName: string
  avatarUrl: string
}

export const Chat = ({ ownerId, userName, avatarUrl }: ChatProps) => {
  const { data: messages } = useGetMessagesbyIdQuery({ ownerId })

  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.photo}>
          <img className={s.avatar} src={avatarUrl || NoAvatar} alt={userName} />
        </div>
        <div className={s.name}>{userName}</div>
      </div>
      {messages && <MessageList messages={messages.items} avatarUrl={avatarUrl} />}
      {/* <MessageList messages={messages} contact={contact} /> */}
      <SendMessageForm />
    </div>
  )
}
