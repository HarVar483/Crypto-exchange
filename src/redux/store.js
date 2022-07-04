import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import  {encryptTransform}  from 'redux-persist-transform-encrypt';

const reducers = combineReducers({

});

const persistConfig = {
	key: 'root',
	storage,
	transforms: [
		encryptTransform({
			secretKey: 'my-super-secret-keyForMeta@Prop@$S',
			onError: function (error) {
				console.warn(error);
			}
		})
	]
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedReducer
});

export default store;
