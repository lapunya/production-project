import { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";
import { userReducer, userActions } from "./model/slice/userSlice";
import { User, UserShema } from "./model/types/user";
export {
    userReducer,
    userActions,
    UserShema,
    User,
    getUserAuthData
}