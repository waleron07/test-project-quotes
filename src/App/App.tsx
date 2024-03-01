import { Provider } from 'react-redux';
import { Routes, Header } from '@/Components';
import classes from './App.module.scss';
import { store } from '@/store';

export const App = () => {
  return (
    <Provider store={store}>
      <div className={classes.App}>
        <Header />
        <Routes />
      </div>
    </Provider>
  );
};
