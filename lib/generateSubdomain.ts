export const adjectives = [
  "ajar",
  "rare",
  "wry",
  "bad",
  "big",
  "wide",
  "good",
  "ill",
  "near",
  "silly",
  "mad",
  "weak",
  "six",
  "low",
  "luxe",
  "bent",
  "one",
  "meek",
  "glib",
  "even",
  "hard",
  "sad",
  "rich",
  "hot",
  "keen",
  "drab",
  "soft",
  "rude",
  "huge",
  "mute",
  "used",
  "open",
  "fair",
  "two",
  "icy",
  "five",
  "high",
  "cool",
  "half",
  "ten",
  "real",
  "able",
  "flat",
  "random",
  "sassy",
  "artsy",
  "nine",
  "new",
  "sick",
  "dry",
];
export const nouns = [
  "cub",
  "cave",
  "cows",
  "crown",
  "cable",
  "crate",
  "cough",
  "ratio",
  "power",
  "music",
  "salad",
  "bread",
  "night",
  "cheek",
  "river",
  "drama",
  "bonus",
  "honey",
  "virus",
  "shirt",
  "phone",
  "dresser",
  "buyer",
  "topic",
  "owner",
  "uncle",
  "tooth",
  "video",
  "event",
  "basis",
  "entry",
  "brood",
  "media",
  "truth",
  "pizza",
  "fox",
  "heart",
  "story",
  "actor",
  "queen",
  "depth",
  "movie",
  "guest",
  "world",
  "child",
  "thing",
  "paper",
];

export function generateNewFeedName(list: string[]) {
  let possibleName = `${
    adjectives[Math.floor(Math.random() * adjectives.length)]
  }-${nouns[Math.floor(Math.random() * nouns.length)]}`;
  if (!list.includes(possibleName)) {
    return possibleName;
  } else {
    generateNewFeedName(list);
  }
}