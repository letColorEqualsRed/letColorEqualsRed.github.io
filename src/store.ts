import { createStore, Action, compose, applyMiddleware, combineReducers } from 'redux';
import {
    RouterState,
    connectRouter,
    routerMiddleware,
    CallHistoryMethodAction
} from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk,{ThunkDispatch as OldThunkDispatch} from 'redux-thunk';
import viewStoryReducer from './redux/ViewStory/reducers';
import { IViewStoryState } from './redux/ViewStory/state';

export type ThunkDispatch = OldThunkDispatch<IRootState, null, IRootAction>

export const history = createBrowserHistory();

export interface IRootState {
    viewStory: IViewStoryState,
    router: RouterState
}

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


type IRootAction = CallHistoryMethodAction
const rootReducer = combineReducers<IRootState>({
    viewStory: viewStoryReducer,
    router: connectRouter(history)
});

let store = createStore<IRootState, IRootAction, {}, {}>(
    rootReducer,
    composeEnhancers(
        applyMiddleware(routerMiddleware(history)),
        applyMiddleware(thunk)
    )
);

export default store