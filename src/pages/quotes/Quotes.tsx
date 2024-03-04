import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Tab, Tabs, Typography, Box } from '@material-ui/core';
import { fetchTableData } from '@/rtk_qwery/slices';
import { useAppSelector, AppDispatch } from '@/hook';
import { Notification, Table, Modal } from '@/Components';

type PropsTypes = {
  value: number;
  index: number;
  children: React.ReactNode;
};

type TimerType = null | NodeJS.Timeout;

function TabPanel(props: PropsTypes) {
  const { children, value, index } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const defaultValue = 0;
const Quotes = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tableData } = useAppSelector((state) => state);
  const [value, setValue] = useState(defaultValue);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [contentModal, setContentModal] = useState('');

  const { error, data } = tableData;

  const handleChange = (_: any, newValue: number) => {
    setValue(newValue);
  };

  const handleDataColumn = (content: string): void => {
    setContentModal(content);
    setOpenModal(true);
  };

  useEffect(() => {
    if (error) {
      setNotificationMessage(error);
    }
    setNotificationOpen(!!error);
  }, [error]);

  const wrapperFetchTableData = useCallback(async () => {
    try {
      await dispatch(fetchTableData());
    } catch (err) {
      console.error(err);
    } finally {
      if (visible) {
        setVisible(false);
      }
    }
  }, []);

  useEffect(() => {
    let timerId: TimerType = null;
    if (!openModal) {
      timerId = setInterval(wrapperFetchTableData, 5000);
    } else {
      clearTimeout(timerId);
    }
    return () => clearTimeout(timerId);
  }, [wrapperFetchTableData, notificationOpen, openModal]);

  return (
    <div>
      <Modal
        open={openModal}
        handleClose={() => setOpenModal(false)}
        content={contentModal}
        title="Статичные данные"
      />
      <h2>Kотировки</h2>
      <Notification message={notificationMessage} open={notificationOpen} />
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example">
        <Tab label="Котировки А"></Tab>
        <Tab label="Котировки Б"></Tab>
      </Tabs>
      <TabPanel value={value} index={0}>
        <Table
          data={data.quotesA}
          visible={visible}
          handleDataColumn={handleDataColumn}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Table
          data={data.quotesB}
          visible={visible}
          handleDataColumn={handleDataColumn}
        />
      </TabPanel>
    </div>
  );
};
export default Quotes;
