import { getMatch, getChampion, getItem, getPerk, getPerkPath, getSummonerSpell } from "../api";

// helper function to convert our spell ids into spell names by using Static Data Dragon API
export const getSummonerSpellNames = (spellIDS) => {
  try {
    // go through our array of ids
    let spellNames = spellIDS.map(async (id) => {
      // make a call to the API to retrieve its data
      const result = await getSummonerSpellById(id);
      // store the name from the data object
      const spellName = result.data.name;
      return spellName;
    });
    // resolve all of our promises caused through our async await calls
    return Promise.all(spellNames);
  } catch (e) {
    console.log(e);
  }
};

// helper function to convert our item ids into item names by using Static Data Dragon API
export const getItemNames = (itemIDS) => {
  try {
    // go through our array of ids
    let itemNames = itemIDS.map(async (id) => {
      // make a call to the API to retrieve its data
      const result = await getItemById(id);
      // store the name from the data object
      const itemName = result.data.name;
      return itemName;
    });
    // resolve all of our promises caused through our async await calls
    return Promise.all(itemNames);
  } catch (e) {
    console.log(e);
  }
};
// helper function to convert our perk (mastery) ids into perk names by using Static Data Dragon API
export const getPerkNames = (perkIDS) => {
  try {
    // go through our array of ids
    let perkNames = perkIDS.map(async (id) => {
      // make a call to the API to retrieve its data
      const result = await getPerkById(id);
      // store the name from the data object
      const perkName = result.data[0].name;
      return perkName;
    });
    // resolve all of our promises caused through our async await calls
    return Promise.all(perkNames);
  } catch (e) {
    console.log(e);
  }
};
// get a match based on gameID
export const getMatchById = (gameID) => {
  return getMatch(gameID);
};
// get champion data based on champID
export const getChampionById = (champID) => {
  return getChampion(champID);
};
// get perk (mastery) path data baned on pathID
export const getPerkPathById = (pathID) => {
  return getPerkPath(pathID);
};

// get item data based on itemID
export const getItemById = (itemID) => {
  return getItem(itemID);
};

// get perk (mastery) based on perkID
export const getPerkById = (perkID) => {
  return getPerk(perkID);
};

// get summoner data based on spellID
export const getSummonerSpellById = (spellID) => {
  return getSummonerSpell(spellID);
};
