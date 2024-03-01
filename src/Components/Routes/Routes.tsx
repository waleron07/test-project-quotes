import { Link, Outlet } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import classes from './Routes.module.scss';

const Routes = () => {
  return (
    <div>
      <Link to={'/'}>
        <Button className={classes.active}>О приложении</Button>
      </Link>
      <br />
      <Link to={'/quotes'}>
        <Button>Котировки</Button>
      </Link>
      <Outlet />
    </div>
  );
};

export default Routes;
