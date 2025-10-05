// описываем состояние для стейта, который отвечает за форму авторизации
export interface LoginShema {
    username: string;
    password: string;
    isLoading: boolean;
    error?: string;
}