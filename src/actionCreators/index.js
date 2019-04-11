export const SHOW_LAST_MATCHES = () => ({ type: 'SHOW_LAST_MATCHES' });

export const DISPATCH_ACTION = (info,type, id) => ({
  type: 'FETCH',
  meta: {
    type
  },
  payload: info,
  id
});

export const fetchTableStart = () => ({
  type: "FETCH_TABLE_START"
});

export const fetchTableSuccess = payload => ({
  type: "FETCH_TABLE_SUCCESS",
  payload
});

export const fetchTableFail = error => ({
  type: "FETCH_TABLE_FAIL",
  payload:  error
});

export const fetchMatchList = link => ({
  type: "START_MATCH_LIST",
  payload: link
});

export const fetchMatchListStart = () => ({
  type: "FETCH_MATCH_LIST_START"
});

export const fetchMatchListSuccess = payload => ({
  type: "FETCH_MATCH_LIST_SUCCESS",
  payload
});

export const fetchMatchListFail = error => ({
  type: "FETCH_MATCH_LIST_FAIL",
  payload:  error
});

export const matchListShow = () => ({
  type: "MATCH_LIST_SHOW"
});



