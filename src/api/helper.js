import { getMatch, getChampion, getItem, getPerk, getPerkPath, getSummonerSpell } from "../api";

export const getSummonerSpellNames = (spellIDS) => {
  try {
    let spellNames = spellIDS.map(async (id) => {
      const result = await getSummonerSpellById(id);
      const spellName = result.data.name;
      return spellName;
    });

    return Promise.all(spellNames);
  } catch (e) {
    console.log(e);
  }
};

export const getItemNames = (itemIDS) => {
  try {
    let itemNames = itemIDS.map(async (id) => {
      const result = await getItemById(id);
      const itemName = result.data.name;
      return itemName;
    });

    return Promise.all(itemNames);
  } catch (e) {
    console.log(e);
  }
};

export const getPerkNames = (perkIDS) => {
  try {
    let perkNames = perkIDS.map(async (id) => {
      const result = await getPerkById(id);
      const perkName = result.data[0].name;
      return perkName;
    });
    return Promise.all(perkNames);
  } catch (e) {
    console.log(e);
  }
};

export const getMatchById = (gameID) => {
  return getMatch(gameID);
};

export const getChampionById = async (champID) => {
  try {
    return await getChampion(champID);
  } catch (e) {
    console.log(e);
  }
};

export const getPerkPathById = (pathID) => {
  return getPerkPath(pathID);
};

export const getItemById = (itemID) => {
  return getItem(itemID);
};

export const getPerkById = (perkID) => {
  return getPerk(perkID);
};

export const getSummonerSpellById = (spellID) => {
  return getSummonerSpell(spellID);
};
