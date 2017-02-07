import {
  SELECT_USER,
  TOGGLE_BIOMODAL,
} from '../actions/types';

const INITIAL_STATE = {
  user: null,
  showModal: false,
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SELECT_USER:
      return { ...state, user: action.payload};
    case TOGGLE_BIOMODAL:
      return { ...state, showModal: !state.showModal };
    default:
      return state;
  }
}
