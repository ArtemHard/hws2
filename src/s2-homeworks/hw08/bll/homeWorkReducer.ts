import { UserType } from "../HW8";

type ActionType =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };

export const homeWorkReducer = (
  state: UserType[] = [],
  action: ActionType
): UserType[] => {
  // need to fix any
  switch (action.type) {
    case "sort": {
      // by name

      return sortName(state, action.payload); // need to fix
    }
    case "check": {
      //   debugger;
      const newState = state.filter((person) => person.age > action.payload);
      return [...newState]; // need to fix
    }
    default:
      return state;
  }
};

const sortName = (state: UserType[], payload: "up" | "down"): UserType[] => {
  const newState = [...state];

  if (payload === "up") {
    newState.sort((a, b) => {
      if (a.name > b.name) return 1;
      else return -1;
    });
    return newState;
  } else {
    newState.sort((a, b) => {
      if (a.name > b.name) return -1;
      else return 1;
    });
    return newState;
  }
};
