import store from '../../store'

export const LEAGUE = (link) => {
  return (dispatch) => {
    dispatch(fetchLeagueStart());
    const serverInfo = {
      headers: {'X-Auth-Token': store.getState().apiVerified.XAuthToken},
      dataType: 'json',
      type: 'GET'
    };
    const _apiBase = `https://api.football-data.org/v2/competitions/${link}/matches`;
    fetch(`${_apiBase}`, serverInfo)
    // convert the response to json
      .then(async resp => await resp.json())
      .then( async json => {
        await dispatch(fetchMatchListSuccess(json))
      })
      .catch( err => {
        dispatch(fetchMatchListError(err.message));
      });
  }
};


const fetchLeagueStart = () => ({
  type: 'FETCH_LEAGUE_START'
});

const fetchMatchListSuccess = payload => ({
  type: "FETCH_MATCH_LIST_SUCCESS",
  payload
});

const fetchMatchListError = error => ({
  type: "FETCH_MATCH_LIST_ERROR",
  error
});


export const matchListShow = () => ({
  type: "MATCH_LIST_SHOW"
});
