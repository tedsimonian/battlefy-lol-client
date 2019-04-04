// helper function to intialize our default object state
const intiDataStruct = () => {
  let data = {
    outcome: "", // (victory or defeat)
    gameDuration: "",
    summonerSpells: [], // array of spell ids
    summonerPerks: [], // array of perk ids
    championId: "",
    kills: 0,
    deaths: 0,
    assists: 0,
    items: [], // array of item ids
    champLevel: 0,
    minionKills: {
      totalMinionsKilled: 0,
      neutralMinionsKilled: 0,
      neutralMinionsKilledTeamJungle: 0,
      neutralMinionsKilledEnemyJungle: 0
    },
    cpm: 0 // creep score per minute (total creeps divided by game duration)
  };

  return data;
};

// helper function to extract the info we want from match details
export const getExtractedMatchDetails = (matchDetails, player) => {
  // init our datastruct
  let data = intiDataStruct();

  // deconstruct our matchDetails obj into more more variables for cleaner code
  const { gameDuration, participants, participantIdentities } = matchDetails;

  // we only care for the summoner stats, no one elses on the match
  const participantId = getParticipant(participantIdentities, player);

  // loop through all the participants in the match and get only our players details
  Object.keys(participants).forEach((key) => {
    if (participants[key].participantId === participantId) {
      // deconstruct the participants stats so we can have cleaner code
      const {
        win,
        item0,
        item1,
        item2,
        item3,
        item4,
        item5,
        item6,
        kills,
        deaths,
        assists,
        champLevel,
        perk0,
        perk1,
        perk2,
        perk3,
        perk4,
        perk5,
        totalMinionsKilled,
        neutralMinionsKilled,
        neutralMinionsKilledTeamJungle,
        neutralMinionsKilledEnemyJungle
      } = participants[key].stats;

      // Start assigning our data from the participant stats to our data struct

      data.outcome = win ? "Victory" : "Defeat"; // we want a string depending if the win condition is true or false
      data.championId = participants[key].championId;
      data.summonerSpells.push(participants[key].spell1Id, participants[key].spell2Id);
      data.summonerPerks.push(perk0, perk1, perk2, perk3, perk4, perk5);
      data.kills = kills;
      data.deaths = deaths;
      data.assists = assists;
      data.items.push(item0, item1, item2, item3, item4, item5, item6);
      data.champLevel = champLevel;
      data.minionKills.totalMinionsKilled = totalMinionsKilled;
      data.minionKills.neutralMinionsKilled = neutralMinionsKilled;
      data.minionKills.neutralMinionsKilledTeamJungle = neutralMinionsKilledTeamJungle;
      data.minionKills.neutralMinionsKilledEnemyJungle = neutralMinionsKilledEnemyJungle;
      data.totalCreepScore =
        totalMinionsKilled + neutralMinionsKilled + neutralMinionsKilledTeamJungle + neutralMinionsKilledEnemyJungle; // the sum of all our minion kills
      data.cpm = data.totalCreepScore / (gameDuration / 60); // our creep score per minute
    }
  });
  // we need to format the duration. The duration is originally the total amount of seconds the game took.
  data.gameDuration = formatSecondsIntoMinutes(gameDuration);

  return data;
};

// helper function to format the total seconds into minutes / seconds
const formatSecondsIntoMinutes = (s) => {
  //format the seconds into the form "##m ##s"
  return (s - (s %= 60)) / 60 + "m " + s + "s";
};

// helper function to get the participant id based on the player we passed in.
const getParticipant = (participantIdentities, player) => {
  let participantId = 0;

  // since we only care for the player we are searching, we need to loop through
  // all the participants in the match and find the playerIdentity that matches our
  // player accountId
  Object.keys(participantIdentities).forEach((key, index) => {
    if (participantIdentities[key].player.accountId === player.accountId) {
      participantId = participantIdentities[key].participantId;
    }
  });

  return participantId;
};
