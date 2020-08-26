import { createActions, createReducer } from 'reduxsauce';

export const { Creators, Types } = createActions({
  requestColorGroups: [],
  requestColorGroupsSuccess: ['payload', 'isLoading'],
  requestColorGroupsFail: ['error', 'isLoading'],
});

const INITIAL_STATE = {
  isLoading: false,
  colorGroups: {},
};

const requestColorGroups = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: true,
});

const requestColorGroupsSuccess = (state, { data }) => ({
  ...state,
  isLoading: false,
  data: data,
});

const requestColorGroupsFail = (state, error) => ({
  ...state,
  isLoading: false,
  error,
});

export default createReducer(INITIAL_STATE, {
  [Types.REQUEST_COLOR_GROUPS]: requestColorGroups,
  [Types.REQUEST_COLOR_GROUPS_SUCCESS]: requestColorGroupsSuccess,
  [Types.REQUEST_COLOR_GROUPS_FAIL]: requestColorGroupsFail,
});
