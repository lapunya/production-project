import { AppDispatch } from "app/providers/StoreProvider";
import { useDispatch } from "react-redux";
// типизировали хук useDispatch, чтобы ts смог подхватывать типы по всему проекту
export const useAppDispatch = () => useDispatch<AppDispatch>()