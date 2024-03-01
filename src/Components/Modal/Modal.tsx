import { Modal, Typography, Box } from '@material-ui/core/';

type PropsTypes = {
  handleClose: (parm: boolean) => void;
  content: string;
  title: string;
  open: boolean;
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const WrapperModal = ({ handleClose, content, title, open }: PropsTypes) => {
  if (!open) {
    return null;
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Box
          id="modal-modal-description"
          sx={{ display: 'inline-block', mt: 2, whiteSpace: 'pre-line' }}>
          {content}
        </Box>
      </Box>
    </Modal>
  );
};

export default WrapperModal;
