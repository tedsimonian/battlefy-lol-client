import axios from "../config/axios";

// all of our front end routes to call our backend server to retrieve specific data based on the route path

export const getSummoner = (name) => {
  return axios.get(`/summoner/${name}`);
};
export const getMatches = (accountID) => {
  return axios.get(`/matches/${accountID}`);
};
export const getMatch = (matchID) => {
  return axios.get(`/match/${matchID}`);
};

export const getChampion = (champID) => {
  return axios.get(`/match/champ/${champID}`);
};
export const getItem = (itemID) => {
  return axios.get(`/match/item/${itemID}`);
};
export const getPerk = (perkID) => {
  return axios.get(`/match/perk/${perkID}`);
};
export const getPerkPath = (pathID) => {
  return axios.get(`/match/perkpath/${pathID}`);
};
export const getSummonerSpell = (spellID) => {
  return axios.get(`/match/spell/${spellID}`);
};
