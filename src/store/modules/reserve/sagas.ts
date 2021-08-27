import { call,put,all, takeLatest} from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import api from '../../../services/api';
import { addReserveSuccess } from './actions';


function* addToReserve(id:Number): Generator<any,void,AxiosResponse<Trip>>{

    const response = yield call(api.get, `trips/${id}`);

    yield put(addReserveSuccess(response.data));

}

export default all([
    takeLatest("ADD_RESERVE_REQUEST", addToReserve),
]);