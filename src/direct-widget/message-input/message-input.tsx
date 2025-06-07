import s from './message-input.module.css';
import {Button, Input} from "@internshipsamyrai44-ui-kit/components-lib"

export const MessageInput = () => {


  return (
    <form onSubmit={() => {
    }} className={s.form}>
      <Input
        type="text"
        value={'message'}
        onChange={(e) => (e.target.value)}
        placeholder="Type Message..."
        className={s.input}
      />


      <Button
        variant="ghost"
        type="submit"
        className={s.button}
      >
        Send Message
      </Button>
    </form>

  );
};