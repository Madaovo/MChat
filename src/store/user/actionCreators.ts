import * as actionTypes from "./constants";
import { fromJS } from "immutable"; // 将 JS 对象转换成 immutable 对象

export const changeUser = (payload: any) => ({
  type: actionTypes.CHANGE_USER,
  payload: fromJS(payload),
});
