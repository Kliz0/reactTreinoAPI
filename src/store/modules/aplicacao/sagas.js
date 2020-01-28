import { call, put, all, takeLatest} from 'redux-saga/effects';

import { connect } from 'react-redux';
import api from '../../../services/api';

import { addAplicacaoSucess } from './actions'

function* addAplicacao( {id, nome} ) {
    if(nome !== this.state.aplicacoes.nome) {
    const response = yield call(api.post, `/aplicacao/${id}`);

    yield put(addAplicacaoSucess(response.data)); 
    } else {
        return Error; // placeholder
    }
}

const mapStateToProps = state => ({
  aplicacoes: state.aplicacoes,
  aplicacao: state.aplicacao
});
export default connect(mapStateToProps)(all)([
    takeLatest('@aplicacoes/ADD_REQUEST', addAplicacao),
    takeLatest('@aplicacoes/ADD_SUCESS', addAplicacaoSucess)
]);