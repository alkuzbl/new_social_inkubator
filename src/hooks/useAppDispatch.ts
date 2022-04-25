import { useDispatch } from 'react-redux';

import { AppDispatch } from 'bll/store';

export const useAppDispatch: any = () => useDispatch<AppDispatch>();
