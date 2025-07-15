import s from './Sidebar.module.css'
import { Input } from '@internshipsamyrai44-ui-kit/components-lib'
import { ContactItem } from '../../../entities/dialog/ui/ContactItem.tsx'
import type { LastMessages } from '../../../shared/api/messenger.type.ts'

type Props = {
  myId: number
  dialogs?: LastMessages[]
  onSelectDialog: (ownerId: number) => void
}

export const Sidebar = ({ myId, dialogs, onSelectDialog }: Props) => {
  return (
    <div className={s.container}>
      <div className={s.search}>
        <Input type={'search'} placeholder={'Input search...'} />
      </div>
      {dialogs?.map(dialog => (
        <ContactItem dialog={dialog} onClick={() => onSelectDialog(dialog.ownerId)} myId={myId} />
      ))}
    </div>
  )
}
