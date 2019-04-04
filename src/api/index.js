import axios from "../config/axios";

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
  return axios.get(`/player/champ/${champID}`);
};
export const getItem = (itemID) => {
  return axios.get(`/player/item/${itemID}`);
};
export const getPerk = (perkID) => {
  return axios.get(`/player/perk/${perkID}`);
};
export const getPerkPath = (pathID) => {
  return axios.get(`/player/perkpath/${pathID}`);
};
export const getSummonerSpell = (spellID) => {
  return axios.get(`/player/spell/${spellID}`);
};
