import { LOCAL_STORAGE_THEME_KEY } from "app/providers/ThemeProvider/lib/ThemeContext";
import axios from "axios";

// инстанс аксиоса
export const $api = axios.create({
    baseURL: __API__,
    // заголовок, который требуется для получения данных авторизованным пользователем
    headers: {
        // проверяется наличие самого заголовка
        authorization: localStorage.getItem(LOCAL_STORAGE_THEME_KEY)
    }
})