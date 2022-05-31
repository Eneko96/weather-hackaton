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
"A mudslide can carry rocks, trees, vehicles and entire buildings!",

"The coldest temperature ever officially recorded was -89.2°C. Brrrr!",

"Mild autumn weather often means bigger spiders in our homes.",

"A heatwave can make train tracks bend!",

"About 2,000 thunderstorms rain down on Earth every minute.",
"A 2003 heatwave turned grapes to raisins before they were picked from the vine!",

"Lightning often follows a volcanic eruption.",

"Raindrops can be the size of a housefly and fall at more than 30kmph.",

"Cape Farewell in Greenland is the windiest place on the planet.",

"Hurricanes can push more than 6m of water ashore.",

"In July 2001 the rainfall in Kerala, India, was blood red!",

" Blizzards can make snowflakes feel like pellets hitting your face.",

"A hurricane in Florida, USA, caused 900 captive pythons to escape.",

"Worms wriggle up from underground when a flood is coming.",

"A thunderstorm can produce 160kmph winds!",

"In Antarctica, snow can fall so hard you can’t see your hand in front of your face.",

"A whiteout or heavy snowfall that makes it difficult to see, can make you feel sick.",

"Wildfires sometimes create tornadoes made of fire called fire whirls.",

"You can actually install the application!"
]