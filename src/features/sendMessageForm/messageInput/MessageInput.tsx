import s from './MessageInput.module.css'

type Props = {
  setIsInputFocused: (isFocused: boolean) => void
}

export const MessageInput = ({ setIsInputFocused }: Props) => {
  return (
    <input
      type='text'
      onChange={e => e.target.value}
      placeholder='Type Message...'
      onFocus={() => setIsInputFocused(true)}
      onBlur={() => setIsInputFocused(false)}
      className={s.input}
    />
  )
}
