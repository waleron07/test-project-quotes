import { useSelector } from 'react-redux';
import { store } from '@/store';

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export const useAppSelector = useSelector.withTypes<RootState>();
export type { AppDispatch };
