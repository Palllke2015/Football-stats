import { fetchMatchListStart, fetchMatchListSuccess } from '../actionCreators'

const table = (store) => (next) => (action) => {

  if (action.type === 'START_MATCH_LIST') {
    const serverInfo = {
      headers: {'X-Auth-Token': '863b82a484d741bfaa6e559f5b15731a'},
      dataType: 'json',
      type: 'GET'
    };
    const _apiBase = `https://api.football-data.org/v2/competitions/${action.payload}/matches`;
    next(fetchMatchListStart());
    fetch(`${_apiBase}`, serverInfo)
    // convert the response to json
      .then(async resp => await resp.json())
      .then( async json => {
        await next(fetchMatchListSuccess(json))
      })
      .catch( err => {
        console.log(err)
      });
    return false;
  }
  return next(action);
};


export default table;
