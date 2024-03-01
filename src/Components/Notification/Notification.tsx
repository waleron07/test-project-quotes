import { Snackbar } from '@material-ui/core/';

type PropsType = {
  message: string;
  open: boolean;
};

const Notification = ({ message, open }: PropsType) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      autoHideDuration={1200}
      message={message}
    />
  );
};

export default Notification;
