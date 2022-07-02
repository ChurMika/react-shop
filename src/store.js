import { createStore, compose, combineReducers } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import itemsReducer from './Components/store/Main/reducer'
import profilesReducer from './Components/store/Login-Profile/reducer'
import ordersReducer from './Components/store/Cart/reducer'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    items: itemsReducer,
    profiles: profilesReducer,
    orders: ordersReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    persistedReducer
)

export const persistor = persistStore(store)