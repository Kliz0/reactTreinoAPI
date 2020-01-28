import { call, put, all, takeLatest} from 'redux-saga/effects';

import api from '../../../services/api';

import { addAplicacaoSucess } from './actions'

function* addAplicacao( {id} ) {
    const response = yield call(api.post, `/aplicacao/${id}`);

    yield put(addAplicacaoSucess(response.data));
}

export default all([
    takeLatest('@aplicacoes/ADD_REQUEST', addAplicacao),
]);