import { useDispatch, useSelector } from 'react-redux';
import { store } from '@/store';

export type AppDispatchType = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = useDispatch.withTypes<AppDispatchType>();
export const useAppSelector = useSelector.withTypes<RootState>();
// export const useAppDispatch = useDispatch<AppDispatchType>();
// export const useAppDispatch: () => AppDispatchType = useDispatch;
