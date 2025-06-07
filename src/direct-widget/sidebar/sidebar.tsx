import s from './sidebar.module.css'
import {Input} from "@internshipsamyrai44-ui-kit/components-lib"
import {ContactItem} from "../contact-item/contact-item.tsx"
import type {Contact} from "../direct-widget.tsx"
 type SidebarProps = {
  contacts: Contact[]
 }

export const Sidebar = ({contacts}:SidebarProps) => {
  return (
    <div className={s.container}>
      <div className={s.search}>
        <Input type={'search'} placeholder={'Input search...'}/>
      </div>
      {contacts.map((contact: Contact) => <ContactItem contact={contact}/>
      )}
    </div>
  )
}