import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import { MessengerWidget } from './widgets/messengerWidget/MessengerWidget.tsx'
import { store } from './store.ts'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <MessengerWidget />
  </Provider>
)
