import s from './direct-widget.module.css';
import {Sidebar} from "./sidebar/sidebar.tsx"
import {Chat} from "./chat/chat.tsx"


export type  Contact = {
  id: string;
  name: string;
  avatar?: string;
  lastMessage: string;
  timestamp: string;
}

export type Message = {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
  isOwn: boolean;
}

const contacts: Contact[] = [
  {
    id: '1',
    name: 'Ekaterina Ivanova',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    lastMessage: 'Yes, absolutely, just looking...',
    timestamp: '17:33',
  },
  {
    id: '2',
    name: 'Ivan Petrov',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    lastMessage: 'Hi! how are you?',
    timestamp: 'Tue',
  },
  {
    id: '3',
    name: 'Dmitriy Ivanov',
    avatar: undefined,
    lastMessage: "don't worry",
    timestamp: 'Mon',
  },
  {
    id: '4',
    name: 'Petr Sergeenko',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    lastMessage: 'Sure!',
    timestamp: '4 oct',
  },
  {
    id: '5',
    name: 'Valeryla Ivanova',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    lastMessage: 'You: Awesome',
    timestamp: '28 sep',
  },
  {
    id: '6',
    name: 'Elizaveta Petrova',
    avatar: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    lastMessage: 'You: OOO',
    timestamp: '31 aug',
  },
  {
    id: '7',
    name: 'Mariya Ivanova',
    avatar: 'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    lastMessage: 'You: I\'ve just been you!',
    timestamp: '14 jul',
  },
  {
    id: '8',
    name: 'Natalya Shnur',
    avatar: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    lastMessage: '',
    timestamp: '17:33',
  },
];

const Messages: Message[] = [
  {
    id: '1',
    senderId: '1',
    content: 'Hi! How are you??',
    timestamp: new Date('2024-01-15T10:30:00'),
    isOwn: false,
  },
  {
    id: '2',
    senderId: 'me',
    content: 'Hi! I’m fine!      Did you go into space yesterday? :',
    timestamp: new Date('2024-01-15T10:32:00'),
    isOwn: true,
  },
  {
    id: '3',
    senderId: '1',
    content: 'Ahahahahaha, just kidding! Im still just learning to fly and code :D',
    timestamp: new Date('2024-01-15T10:35:00'),
    isOwn: false,
  },
];


export const DirectWidget = () => {

  return (
    <div className={s.container}>
      <Sidebar contacts={contacts}/>
      <Chat contact={contacts[0]} messages={Messages}/>
    </div>
  );
};

