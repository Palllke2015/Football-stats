import store from '../../store'


export const TABLE = () => {
  return (dispatch) => {
    dispatch(fetchTableStart());
    const serverInfo = {
      headers: {'X-Auth-Token': store.getState().apiVerified.XAuthToken},
      dataType: 'json',
      type: 'GET'
    };

    const _apiBase = `https://api.football-data.org/v2/competitions/${store.getState().league.data.competition.id}/standings`;
    fetch(`${_apiBase}`, serverInfo)
      .then(resp => resp.json())
      .then(json => {
         dispatch(fetchTableSuccess(json));
      })
      .catch(err => {
        dispatch(fetchTableError(err.message));
      });
    return false;
  }
};

const fetchTableStart = () => ({
  type: 'FETCH_TABLE_START'
});

const fetchTableSuccess = (payload) =>({
  type: 'FETCH_TABLE_SUCCESS',
  payload
});

const fetchTableError = (error) =>({
  type: 'FETCH_TABLE_ERROR',
  error
});
