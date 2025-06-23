import s from './MessengerWidget.module.css'
import { Sidebar } from './sidebar/Sidebar.tsx'
import { useGetLastMessagesQuery } from '../../shared/api/messagesApi.ts'
import { Chat } from './chat/Chat.tsx'
import { useState } from 'react'

export const MessengerWidget = () => {
  const { data: messages } = useGetLastMessagesQuery()
  const [selectedDialogId, setSelectedDialogId] = useState<number | null>(null)

  const selectedDialog = messages?.items.find(item => item.ownerId === selectedDialogId)

  return (
    <div className={s.container}>
      {messages && messages.items.length > 0 && (
        <>
          <Sidebar dialogs={messages.items} onSelectDialog={setSelectedDialogId} />
          {selectedDialog && (
            <Chat
              ownerId={selectedDialog.ownerId}
              userName={selectedDialog.userName}
              avatarUrl={selectedDialog.avatars[0].url}
            />
          )}
        </>
      )}
    </div>
  )
}
