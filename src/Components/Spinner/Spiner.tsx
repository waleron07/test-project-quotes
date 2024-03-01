import { CircularProgress, Box } from '@material-ui/core';

type PropsTypes = {
  visible: boolean;
};

const Spinner = ({ visible }: PropsTypes) => {
  if (!visible) {
    return null;
  }
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
