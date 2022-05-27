import Sunny from '../icons/sunny.svelte'
import PartlyCloudy from '../icons/partlyCloudy.svelte'
import Cloudy from '../icons/cloudy.svelte'
import CloudDrizzle from '../icons/cloud-drizzle.svelte'
import CloudFog from '../icons/cloud-fog.svelte'
import CloudHail from '../icons/cloud-hail.svelte'
import CloudLightning from '../icons/cloud-lightning.svelte'
import CloudLightningRain from '../icons/cloud-lightning-rain.svelte'
import CloudMoon from '../icons/cloud-moon.svelte'
import CloudRainHeavy from '../icons/cloud-rain-heavy.svelte'
import CloudRain from '../icons/cloud-rain.svelte'
import CloudSleet from '../icons/cloud-sleet.svelte'
import CloudSnow from '../icons/cloud-snow.svelte'
import MoonStars from '../icons/moon-stars.svelte'
import Moon from '../icons/moon.svelte'
import Snow from '../icons/snow.svelte'
import Sunrise from '../icons/sunrise.svelte'
import Sunset from '../icons/sunset.svelte'
import Umbrella from '../icons/umbrella.svelte'
import Water from '../icons/water.svelte'
import Wind from '../icons/wind.svelte'


export const kinds = ({
  day: {
    'Sunny': Sunny,
    'Partly Cloudy': PartlyCloudy,
    'Cloudy': Cloudy,
    'Patchy rain possible': CloudDrizzle,
    'Blizzard': CloudFog,
    'Light rain': CloudHail,
    'Heavy rain': CloudLightning,
    'Light rain shower': CloudLightningRain,
    Fog: CloudFog,
    cloudy: Cloudy,
    cloudDrizzle: CloudDrizzle,
    cloudFog: CloudFog,
    cloudHail: CloudHail,
    cloudLightning: CloudLightning,
    cloudLightningRain: CloudLightningRain,
    cloudMoon: CloudMoon,
    cloudRainHeavy: CloudRainHeavy,
    cloudRain: CloudRain,
    cloudSleet: CloudSleet,
    cloudSnow: CloudSnow,
    snow: Snow,
    sunrise: Sunrise,
    sunset: Sunset,
    umbrella: Umbrella,
    water: Water,
    wind: Wind,
    partlyCloudy: PartlyCloudy,
    default: Sunny
  },
  night: {
    'Clear': MoonStars,
    'Partly Cloudy': PartlyCloudy,
    'Patchy rain possible': CloudDrizzle,
    'Blizzard': CloudFog,
    'Light rain': CloudHail,
    'Heavy rain': CloudLightning,
    'Light rain shower': CloudLightningRain,
    Fog: CloudFog,
    moonStars: MoonStars,
    moon: Moon,
    'Cloudy': Cloudy,
    cloudDrizzle: CloudDrizzle,
    cloudFog: CloudFog,
    cloudHail: CloudHail,
    cloudLightning: CloudLightning,
    cloudLightningRain: CloudLightningRain,
    cloudMoon: CloudMoon,
    cloudRainHeavy: CloudRainHeavy,
    cloudRain: CloudRain,
    cloudSleet: CloudSleet,
    cloudSnow: CloudSnow,
    snow: Snow,
    umbrella: Umbrella,
    water: Water,
    wind: Wind,
    default: Moon
  }
})

export const findKind = (kind, isDay) => {
  const time = isDay ? 'day' : 'night'
  console.log(kind, time)
  return kinds[time][kind] ? kinds[time][kind] : kinds[time].default
}