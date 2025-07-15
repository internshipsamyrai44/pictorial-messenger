import { Provider } from 'react-redux'
import './index.css'
import { MessengerWidget } from './widgets/messengerWidget/MessengerWidget.tsx'
import { messengerStore } from './store.ts'

type Props = {
  user: {
    userId: number
    userName: string
    email: string
    isBlocked: boolean
  }
}

export const App = ({ user }: Props) => {
  return (
    <Provider store={messengerStore}>
      <MessengerWidget user={user} />
    </Provider>
  )
}
