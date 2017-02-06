import { Actions } from 'react-native-router-flux';
import {
  SELECT_USER,
} from './types';

export const selectUser = (user) => {
  return {
    type: SELECT_USER,
    payload: user,
  };
};
