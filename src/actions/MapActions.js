import { Actions } from 'react-native-router-flux';
import {
  SELECT_USER,
  TOGGLE_BIOMODAL
} from './types';

export const selectUser = (user) => {
  return {
    type: SELECT_USER,
    payload: user,
  };
};

export const toggleBiomodal = () => {
  return {
    type: TOGGLE_BIOMODAL
  };
};
