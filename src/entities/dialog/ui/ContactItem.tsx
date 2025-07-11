import s from './ContactItem.module.css'
import NoAvatar from '../../../shared/assets/images/noAvatar.png'
import clsx from 'clsx'
import type { LastMessages } from '../../../shared/api/messenger.type.ts'

type Props = {
  myId: number
  dialog: LastMessages
  onClick?: () => void
}

export const ContactItem = ({ myId, dialog, onClick }: Props) => {
  myId
  return (
    <div onClick={onClick} className={clsx(s.container, dialog.id === 1 && s.active)}>
      <div className={s.photo}>
        <img className={s.avatar} src={dialog.avatars[0].url || NoAvatar} alt={dialog.userName} />
      </div>
      <div className={s.main}>
        <div className={s.name}>
          <p>{dialog.userName}</p>
          <span>{dialog.createdAt}</span>
        </div>
        <div className={s.message}>{dialog.messageText}</div>
      </div>
    </div>
  )
}
