import * as actionType from "./constants";
import { fromJS } from "immutable";
import { getUser } from '../../utilies/storage/user'

// const defaultState = fromJS({
//   username: "",
//   password: "",
//   userId: "",
//   isRemember: false,
//   avatarUrl: "",
//   friends: "",
//   authority: "",
//   nickname: ""
// });

// export default (
//   state = defaultState,
//   action: { type: string; payload: any }
// ) => {
//   switch (action.type) {
//     case actionType.SET_USERNAME:
//       return state.set("username", action.payload);
//     case actionType.SET_PASSWORD:
//       return state.set("password", action.payload);
//     case actionType.SET_USERID:
//       return state.set("userId", action.payload);
//     case actionType.SET_ISREMEMBER:
//       return state.set("isRemember", action.payload);
//     default:
//       return state;
//   }
// };


const defaultState = fromJS({
  user: getUser(),
});

export default (
  state = defaultState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case actionType.CHANGE_USER:
      return state.set("user", action.payload);
    default:
      return state;
  }
};