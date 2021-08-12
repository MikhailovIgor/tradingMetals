export type Slide = {
  id: string
  title: string
  description: string
  image: NodeRequire
}

export const slides: Slide[] = [
  {
    id: '1',
    title: 'Spot Price',
    description:
      'Need to keep track of gold, silver and platinum price movements? Our up to the minute live price chart gives you daily, weekly, monthly and yearly spot prices.',
    image: require('./images/Onboarding0.png'),
  },
  {
    id: '2',
    title: 'Gold, Silver,\nPlatinum &\nPalladium',
    description: 'GoldX is the fastest, easier and most cost effective way to buy gold, silver and platinum.',
    image: require('./images/Onboarding1.png'),
  },
  {
    id: '3',
    title: 'Metal Investing',
    description:
      'Unique precious metals digital platform powered by trusted leaders in precious metals APMEX & Sprott. Giving you a quick, cost-effective way of building a precious\nmetals portfolio.',
    image: require('./images/Onboarding2.png'),
  },
  {
    id: '4',
    title: 'Portfolio\nManagement',
    description:
      'Watching your portfolio increase in value is exciting. Check in daily to see your precious metals investments grow.',
    image: require('./images/Onboarding3.png'),
  },
  {
    id: '5',
    title: 'Auto Buy',
    description:
      'Run your precious metals investment goals on autopilot. Choose frequency, ounces or dollar amount you prefer. Then sit back and watch your riches grow.',
    image: require('./images/Onboarding4.png'),
  },
  {
    id: '6',
    title: 'Redeem',
    description:
      "Time to bring your metal home? Choose from 100's of product, get best tier pricing and our parent company APMEX will QuickShip direct to your home.",
    image: require('./images/Onboarding5.png'),
  },
]
