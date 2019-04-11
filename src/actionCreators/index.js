export const SHOW_LAST_MATCHES = () => ({ type: 'SHOW_LAST_MATCHES' });

export const DISPATCH_ACTION = (info,type, name) => ({
  type: 'FETCH',
  meta: {
    type
  },
  payload: info,
  name
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



export const fetchModalStart = (link, team, payload) => ({
  type: "FETCH_MODAL_INFO",
  link,
  team,
  payload
});

export const modalHomeTeamName = (payload) => ({
  type: "FETCH_MODAL_HOME_NAME",
  payload
});

export const modalAwayTeamName = (payload) => ({
  type: "FETCH_MODAL_AWAY_NAME",
  payload
});

export const lol = ( team ,payload ) => ({
  type: "2",
  payload,
  team
});

export const fetchModalSuccess = () => ({
  type: "FETCH_MODAL_SUCCESS"
});

export const fetchModalFail = error => ({
  type: "FETCH_MODAL_FAIL",
  payload:  error
});
