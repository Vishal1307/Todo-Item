import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./app/appReducer";
import { AuthREducer } from "./auth/authReducer";
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const rootReducer=combineReducers({
    todos:todoReducer,
    auth:AuthREducer
})


export const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))