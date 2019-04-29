import { fetchModalInfo,fetchModalStart  } from '../actionCreators'

const modal = (store) => (next) => (action) => {


  if (action.type === 'FETCH_MODAL_INFO') {
    const serverInfo = {
      headers: {'X-Auth-Token': store.getState().apiVerified.XAuthToken},
      dataType: 'json',
      type: 'GET'
    };
    const _apiBase = `https://api.football-data.org/v2/teams/${action.link}/matches`;
    next(fetchModalStart());
    fetch(`${_apiBase}`, serverInfo)
    // convert the response to json
      .then(async resp => await resp.json())
      .then( async json => {
        await next(fetchModalInfo( null, action.team, json));
      })
      .catch( err => {
        console.log(err)
      });
    return false;
  }
  return next(action);
};


export default modal;
