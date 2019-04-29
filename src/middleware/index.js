import { DISPATCH_ACTION } from '../actionCreators'

const apiMiddleware = (store) => next => action => {

  if (action.type !== 'FETCH') {
    return next(action);
  } else {
    const serverInfo = {
      headers: {'X-Auth-Token': store.getState().apiVerified.XAuthToken},
      dataType: 'json',
      type: 'GET'
    };
    const _apiBase = 'https://api.football-data.org/v2/';

     fetch(`${_apiBase}${action.payload}`, serverInfo)
      // convert the response to json
        .then(resp => resp.json())
        .then( async json => {
          await next(DISPATCH_ACTION(json, action.meta.type, action.name))
        })
        .catch( err => {
          console.log(err)
        })

  }
};


export default apiMiddleware;
