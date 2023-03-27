const initState = {
  isLoading: false,
};

type initStateType = typeof initState;
export const loadingReducer = (
  state = initState,
  action: actionTypes
): initStateType => {
  // fix any
  switch (action.type) {
    case "CHANGE_LOADING":
      return { isLoading: action.isLoading };

    default:
      return state;
  }
};
type actionTypes = ReturnType<typeof loadingAC>;
type LoadingActionType = {
  type: "CHANGE_LOADING";
  isLoading: boolean;
};

export const loadingAC = (isLoading: boolean): LoadingActionType =>
  ({
    type: "CHANGE_LOADING",
    isLoading,
  } as const);
