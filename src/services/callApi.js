
export default class CallApi {
  serverInfo = {
    headers: {'X-Auth-Token': '863b82a484d741bfaa6e559f5b15731a'},
    dataType: 'json',
    type: 'GET'
  };

  _apiBase = 'https://api.football-data.org/v2/';


  getInfo = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`, this.serverInfo);

    return await res.json()
  };

  getCompetitions = async (url) => {
    return await this.getInfo(`competitions/${url}`);
  };

  getMatchList = async (url) => {
    return await this.getInfo(`competitions/${url}/matches`);
  }
  getTeamFinishedMatchList = async (url) => {
    return await this.getInfo(`teams/${url}/matches?status=FINISHED`);
  }
}
