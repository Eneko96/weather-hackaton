export function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

export const themes = ['default', 'wero']

export const funFacts = [
  "Sandstorms can swallow up entire cities.",
"Dirt mixed with wind can make dust storms called black blizzards.",
"Did you know that we have a FREE downloadable weather primary resource? Great for teachers, homeschoolers and parents alike!",
"A mudslide can carry rocks, trees, vehicles and entire buildings!",

"The coldest temperature ever officially recorded was -89.2°C. Brrrr!",

"Mild autumn weather often means bigger spiders in our homes.",

"A heatwave can make train tracks bend!",

"About 2,000 thunderstorms rain down on Earth every minute.",
"A 2003 heatwave turned grapes to raisins before they were picked from the vine!",

"Lightning often follows a volcanic eruption.",

"Raindrops can be the size of a housefly and fall at more than 30kmph.",

"Cape Farewell in Greenland is the windiest place on the planet.",

// 13) Hurricanes can push more than 6m of water ashore.

// 14) In July 2001 the rainfall in Kerala, India, was blood red!

// Weather facts

// 15) Blizzards can make snowflakes feel like pellets hitting your face.

// 16) A hurricane in Florida, USA, caused 900 captive pythons to escape.

// 17) Worms wriggle up from underground when a flood is coming.

// 18) A thunderstorm can produce 160kmph winds!

// 19) In Antarctica, snow can fall so hard you can’t see your hand in front of your face.

// 20) A whiteout or heavy snowfall that makes it difficult to see, can make you feel sick.

// 21) Wildfires sometimes create tornadoes made of fire called fire whirls.

// Weather facts

// 22) In 1972, a blizzard dumped 8m of snowfall on Iran, burying 200 villages.

// 23) Some tornadoes can be faster than formula one racing cars!

// 24) Black ice, a transparent coating of ice on a surface, can make pavements super-slippery.

// 25) Some frogs get noisier just before it rains.

// 26) In 525 BC a sandstorm buried hundreds of soldiers in an Egyptian desert.

// 27) Waterspouts, or rotating columns of air over water, can make sea creatures rain down from the sky.

// Weather facts

// 28) The most damage ever caused by a thunderstorm was in 1995, when hailstones bigger than cricket balls fell in Texas, USA.

// 29) In 1684, it was so cold that the River Thames froze solid for two months.

// 30) Cats and dogs have been known to sense when a tornado is approaching.
]