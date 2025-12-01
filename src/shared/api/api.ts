import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

// инстанс аксиоса
export const $api = axios.create({
    baseURL: __API__,
    // заголовок, который требуется для получения данных авторизованным пользователем
    headers: {
        // проверяется наличие самого заголовка
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
    }
})