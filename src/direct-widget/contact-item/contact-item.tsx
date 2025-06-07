import s from './contact-item.module.css'
import type {Contact} from "../direct-widget.tsx"
import NoAvatar from '../../assets/images/noAvatar.png'
import clsx from "clsx"

type ContactItemProps = {
  contact: Contact
}

export const ContactItem = ({contact}: ContactItemProps) => {

  return (
    <div className={clsx( s.container, contact.id === '1' && s.active )}>
      <div className={s.photo}>
        <img className={s.avatar} src={contact.avatar || NoAvatar} alt={contact.name}/>
      </div>
      <div className={s.main}>
        <div className={s.name}>
          <p>{contact.name}</p>
          <span>{contact.timestamp}</span>
        </div>
        <div className={s.message}>
          {contact.lastMessage}
        </div>
      </div>
    </div>

  );
};
