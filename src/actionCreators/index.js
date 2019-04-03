export const SHOW_MATCH_LIST = () => ({ type: 'SHOW_MATCH_LIST' });

export const SHOW_LAST_MATCHES = () => ({ type: 'SHOW_LAST_MATCHES' });

export const DISPATCH_ACTION = (info,type, id) => ({
  type: 'FETCH',
  meta: {
    type
  },
  payload: info,
  id
});



