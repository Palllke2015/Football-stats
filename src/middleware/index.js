import { DISPATCH_ACTION } from '../actionCreators'

const apiMiddleware = (store) => next => action => {

  if (action.type !== 'FETCH') {
    return next(action);
  } else {
    const serverInfo = {
      headers: {'X-Auth-Token': '863b82a484d741bfaa6e559f5b15731a'},
      dataType: 'json',
      type: 'GET'
    };
    const _apiBase = 'https://api.football-data.org/v2/';

     fetch(`${_apiBase}${action.payload}`, serverInfo)
      // convert the response to json
        .then(resp => resp.json())
        .then( async json => {
          await next(DISPATCH_ACTION(json, action.meta.type, action.id))
        })
        .catch( err => {
          console.log(err)
        })

  }
};


export default apiMiddleware;
