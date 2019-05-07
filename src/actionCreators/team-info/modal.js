import store from '../../store'


export const MODAL = (link, team, teamName) => {
  return (dispatch) => {
    dispatch(fetchModalStart());
    const serverInfo = {
      headers: {'X-Auth-Token': store.getState().apiVerified.XAuthToken},
      dataType: 'json',
      type: 'GET'
    };
    const _apiBase = `https://api.football-data.org/v2/teams/${link}/matches`;
    fetch(`${_apiBase}`, serverInfo)
      .then(resp => resp.json())
      .then(json => {
        dispatch(fetchModalSuccess(team, teamName, json));
      })
      .catch(err => {
        dispatch(fetchModalError(err.message));
      });
  }
};

const fetchModalStart = () => ({
  type: 'FETCH_MODAL_START'
});

const fetchModalSuccess = (team, teamName, payload) => ({
  type: 'FETCH_MODAL_SUCCESS',
  team,
  teamName,
  payload
});

const fetchModalError = (error) => ({
  type: 'FETCH_MODAL_ERROR',
  error
});


export const closeModal = () => ({type: 'CLOSE_MODAL'});
