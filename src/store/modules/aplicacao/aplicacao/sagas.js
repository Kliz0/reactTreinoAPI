import { call } from 'redux-saga/effects';

import api from '../../../../services/api';

function* aplicacaoPeloId( {id} ) {
    const response = yield call(api.get, `/aplicacao/${id}`);
}