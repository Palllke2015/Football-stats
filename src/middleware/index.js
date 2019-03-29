import { DISPATCH_ACTION } from '../actionCreators'

const apiMiddleware = (store) => next => action => {

  if (action.type !== 'DISPATCH_ACTION') {
    return next(action);
  } else {
    const serverInfo = {
      headers: {'X-Auth-Token': '863b82a484d741bfaa6e559f5b15731a'},
      dataType: 'json',
      type: 'GET'
    };
    const _apiBase = 'https://api.football-data.org/v2/teams/65/matches?status=FINISHED';

    fetch(_apiBase, serverInfo)
      // convert the response to json
        .then(resp => resp.json())
        .then( json => {
          console.log(json);
          next(DISPATCH_ACTION(json))
        })
        .catch( err => console.log(err))

  }
}


export default apiMiddleware;
