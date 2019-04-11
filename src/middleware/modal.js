import { fetchModalStart, fetchModalSuccess  } from '../actionCreators'

const modal = (store) => (next) => (action) => {


  if (action.type === 'FETCH_MODAL_INFO') {
    console.log(action.link)
    const serverInfo = {
      headers: {'X-Auth-Token': '863b82a484d741bfaa6e559f5b15731a'},
      dataType: 'json',
      type: 'GET'
    };
    const _apiBase = `https://api.football-data.org/v2/teams/${action.link}/matches`;
    fetch(`${_apiBase}`, serverInfo)
    // convert the response to json
      .then(async resp => await resp.json())
      .then( async json => {
        await next(fetchModalStart( null, action.team, json));
        await fetchModalSuccess()
      })
      .catch( err => {
        console.log(err)
      });
    return false;
  }
  return next(action);
};


export default modal;
