import s from './MessengerWidget.module.css'
import { Provider } from 'react-redux'

import { Sidebar } from './sidebar/Sidebar.tsx'
import { useGetLastMessagesQuery } from '../../shared/api/messagesApi.ts'
import { Chat } from './chat/Chat.tsx'
import { useState } from 'react'
import { store } from '../../store.ts'

type Props = {
  user: {
    userId: number
    userName: string
    email: string
    isBlocked: boolean
  }
}

export const MessengerWidget = ({ user }: Props) => {
  const { data: messages } = useGetLastMessagesQuery()
  console.log(messages, messages)

  const [selectedDialogId, setSelectedDialogId] = useState<number | null>(null)

  const selectedDialog = messages?.items.find(item => item.ownerId === selectedDialogId)

  return (
    <Provider store={store}>
      <div className={s.container}>
        <Sidebar dialogs={messages?.items} onSelectDialog={setSelectedDialogId} myId={user.userId} />
        <Chat
          ownerId={selectedDialog?.ownerId}
          userName={selectedDialog?.userName}
          avatarUrl={selectedDialog?.avatars[0].url}
        />
      </div>
    </Provider>
  )
}
