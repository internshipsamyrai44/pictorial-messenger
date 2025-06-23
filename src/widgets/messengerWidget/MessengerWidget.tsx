import s from './MessengerWidget.module.css'
import { Sidebar } from './sidebar/Sidebar.tsx'
import { useGetLastMessagesQuery } from '../../shared/api/messagesApi.ts'
import { Chat } from './chat/Chat.tsx'
import { useState } from 'react'

// export type Contact = {
//   id: string
//   name: string
//   avatar?: string
//   lastMessage: string
//   timestamp: string
// }

// export type Message = {
//   id: string
//   senderId: string
//   content: string
//   timestamp: Date
//   isOwn: boolean
// }

// const contacts: Contact[] = [
//   {
//     id: '1',
//     name: 'Ekaterina Ivanova',
//     avatar: 'public/images/ivanova.png',
//     lastMessage: 'Yes, absolutely, just looking...',
//     timestamp: '17:33',
//   },
//   {
//     id: '2',
//     name: 'Ivan Petrov',
//     avatar: 'public/images/petr.png',
//     lastMessage: 'Hi! how are you?',
//     timestamp: 'Tue',
//   },
//   {
//     id: '3',
//     name: 'Dmitriy Ivanov',
//     avatar: undefined,
//     lastMessage: "don't worry",
//     timestamp: 'Mon',
//   },
//   {
//     id: '4',
//     name: 'Petr Sergeenko',
//     avatar: 'public/images/sergeenko.png',
//     lastMessage: 'Sure!',
//     timestamp: '4 oct',
//   },
//   {
//     id: '5',
//     name: 'Valeryla Ivanova',
//     avatar: 'public/images/valeryia.png',
//     lastMessage: 'You: Awesome',
//     timestamp: '28 sep',
//   },
//   {
//     id: '6',
//     name: 'Elizaveta Petrova',
//     avatar: 'public/images/petrova.png',
//     lastMessage: 'You: OOO',
//     timestamp: '31 aug',
//   },
//   {
//     id: '7',
//     name: 'Mariya Ivanova',
//     avatar: 'public/images/mari.png',
//     lastMessage: "You: I've just been you!",
//     timestamp: '14 jul',
//   },
//   {
//     id: '8',
//     name: 'Natalya Shnur',
//     avatar: 'public/images/shnur.png',
//     lastMessage: '',
//     timestamp: '17:33',
//   },
// ]

// const Messages: Message[] = [
//   {
//     id: '1',
//     senderId: '1',
//     content: 'Hi! How are you??',
//     timestamp: new Date('2024-01-15T10:30:00'),
//     isOwn: false,
//   },
//   {
//     id: '2',
//     senderId: 'me',
//     content: 'Hi! I’m fine!      Did you go into space yesterday? :',
//     timestamp: new Date('2024-01-15T10:32:00'),
//     isOwn: true,
//   },
//   {
//     id: '3',
//     senderId: '1',
//     content: 'Ahahahahaha, just kidding! Im still just learning to fly and code :D',
//     timestamp: new Date('2024-01-15T10:35:00'),
//     isOwn: false,
//   },
// ]

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
