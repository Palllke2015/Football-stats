export const SHOW_MATCH_LIST = () => ({ type: 'SHOW_MATCH_LIST' });
export const SHOW_LAST_MATCHES = () => ({ type: 'SHOW_LAST_MATCHES' });
export const SHOW_MATCH_INFO = (id) => ({ type: 'SHOW_MATCH_INFO', payload: id });
export const DISPATCH_ACTION = (info,type) => ({
  type: 'FETCH',
  meta: {
    type
  },
  payload: info
});



