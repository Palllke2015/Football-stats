import { fetchTableStart, fetchTableSuccess } from '../actionCreators'

const table = (store) => (next) => (action) => {

  if (action.type === 'FETCH_TABLE_START') {

   const serverInfo = {
      headers: {'X-Auth-Token': '863b82a484d741bfaa6e559f5b15731a'},
      dataType: 'json',
      type: 'GET'
    };
    const _apiBase = 'https://api.football-data.org/v2/competitions/2021/standings';
    next(fetchTableStart());
    fetch(`${_apiBase}`, serverInfo)
    // convert the response to json
      .then(async resp => await resp.json())
      .then( async json => {
        await next(fetchTableSuccess(json))
      })
      .catch( err => {
        console.log(err)
      });
    return false;
  }
  return next(action);
};


export default table;
