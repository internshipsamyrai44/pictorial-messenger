import Micro from '../../../shared/assets/icons/Micro'
import Picture from '../../../shared/assets/icons/Picture'
import s from './SendButtons.module.css'
import { Button } from '@internshipsamyrai44-ui-kit/components-lib'

type SendButtonsTypes = {
  isInputFocused?: boolean
}

export const SendButtons = ({ isInputFocused = false }: SendButtonsTypes) => {
  return (
    <div className={s.container}>
      {isInputFocused ? (
        <Button variant={'ghost'} className={s.button}>
          Send message
        </Button>
      ) : (
        <div className={s.attach}>
          <Button variant={'ghost'} className={s.iconButton}>
            <Micro />
          </Button>

          <Button variant={'ghost'} className={s.iconButton}>
            <Picture />
          </Button>
        </div>
      )}
    </div>
  )
}
