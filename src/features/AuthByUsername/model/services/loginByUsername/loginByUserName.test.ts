import { loginByUsername } from "./loginByUserName";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

describe('loginByUserName', () => {
    // мокаем dispatch и getState для передачи их в action
    // let dispatch: Dispatch;
    // let getState: () => StateShema;

    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // })
    // функцию делаем асинхронной, потому что это асинхронный экшн
    test('Success login', async() => {
        const userValue = {username: '123', id: '1'}
        // createAsyncThunk это action creator, то есть возвращает action
        // который нужно передать в dispatch и нам возвращаются какие-то данные
        // const action = loginByUsername({username: '123', password: '123'})
        // const result = await action(dispatch, getState, undefined);

        // создаем экземпляр класса
        const thunk = new TestAsyncThunk(loginByUsername);
        // мокаем тут, указываем, что возвращается промис
        thunk.api.post.mockReturnValue(Promise.resolve({data: userValue}));
        const result = await thunk.callThunk({username: '123', password: '123'})
        // теперь в зависимости от того, что мы получили в result, можем запускать различные test cases

        // проверяем был ли вызван dispatch
        // проверяем не сам факт вызова, а то с каким аргументом был вызов
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        
        // проверяем, что dispatch был вызван 3 раза
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);

        // проверяем был ли вызван метод post
        expect(thunk.api.post).toHaveBeenCalled();
        // проверяем, что asyncThunk сработал без ошибок
        expect(result.meta.requestStatus).toEqual('fulfilled');
    });
    test('Error login', async() => {
        // сценарий, когда сервер вернул статус 403, то есть запрос сработал с ошибкой
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk({username: '123', password: '123'})

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        // проверяем, что asyncThunk сработал с ошибкой
        expect(result.meta.requestStatus).toBe('rejected');
    })
})