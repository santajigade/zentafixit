export interface Subcategory { slug: string; name: string }
export interface Category { slug: string; name: string; description: string; subcategories: Subcategory[] }

const s = (name: string): Subcategory => ({
  name,
  slug: name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
});

export const CATEGORIES: Category[] = [
  { slug: 'electrical', name: 'Electrical', description: 'Breakers, outlets, switches, wiring and generators for US homes.',
    subcategories: ['Breakers & Panels', 'Outlets & GFCI', 'Switches & Dimmers', 'Lighting & Ceiling Fans', 'Wiring Basics', 'Generators & Transfer Switches', 'Surge Protection', 'Electrical Codes'].map(s) },
  { slug: 'smart-home', name: 'Smart Home', description: 'Set up and fix smart speakers, thermostats, cameras, locks and automations.',
    subcategories: ['Smart Speakers', 'Smart Thermostats', 'Cameras & Doorbells', 'Smart Locks', 'Smart Lighting & Plugs', 'Automation', 'Smart Home Troubleshooting'].map(s) },
  { slug: 'networking', name: 'Home Networking', description: 'Routers, mesh Wi-Fi, slow internet fixes and network security.',
    subcategories: ['Routers & Modems', 'Mesh Wi-Fi', 'Slow Internet Fixes', 'Ethernet & Powerline', 'Network Security', 'ISP Guides'].map(s) },
  { slug: 'solar-power', name: 'Solar & Power', description: 'Home solar, battery backup, power stations and cutting your electric bill.',
    subcategories: ['Home Solar', 'Battery Backup', 'Portable Power Stations', 'UPS', 'Energy Saving', 'Electric Bill Reduction'].map(s) },
  { slug: 'ev-charging', name: 'EV Charging', description: 'Home EV chargers, installation, costs and troubleshooting.',
    subcategories: ['Level 1 & Level 2 Chargers', 'Charger Installation', 'Charging Costs', 'Charger Troubleshooting', 'EV-Ready Wiring'].map(s) },
  { slug: 'hvac', name: 'HVAC', description: 'Air conditioners, heat pumps, furnaces, thermostats and error codes.',
    subcategories: ['Air Conditioners', 'Heat Pumps', 'Furnaces', 'Thermostat Wiring', 'Air Filters & Air Quality', 'HVAC Error Codes', 'Seasonal Maintenance'].map(s) },
  { slug: 'appliances', name: 'Appliances', description: 'Fix washers, dryers, fridges, dishwashers, ovens and water heaters.',
    subcategories: ['Washers & Dryers', 'Refrigerators', 'Dishwashers', 'Ovens & Microwaves', 'Water Heaters', 'Appliance Error Codes'].map(s) },
  { slug: 'plumbing', name: 'Plumbing', description: 'Leaks, clogs, toilets, sump pumps and water pressure basics.',
    subcategories: ['Leaks & Drips', 'Clogged Drains', 'Toilets', 'Sump Pumps', 'Water Pressure', 'Water Filters & Softeners'].map(s) },
  { slug: 'pc-laptops', name: 'PC & Laptops', description: 'Windows and Mac problems, slow PCs, batteries, drivers and upgrades.',
    subcategories: ['Windows Problems', 'Mac Problems', 'Laptop Battery & Charging', 'Slow PC Fixes', 'Drivers & Updates', 'Upgrades'].map(s) },
  { slug: 'gadgets', name: 'Gadgets', description: 'Monitors, keyboards, mice, mics, webcams, printers and controllers.',
    subcategories: ['Monitors & Displays', 'Keyboards & Mice', 'Mic, Webcam & Audio', 'Printers & Scanners', 'External Drives & USB', 'Gaming Controllers'].map(s) },
  { slug: 'phones-tablets', name: 'Phones & Tablets', description: 'iPhone and Android fixes, charging, battery and Bluetooth.',
    subcategories: ['iPhone Problems', 'Android Problems', 'Charging & Battery', 'Bluetooth & Pairing'].map(s) },
  { slug: 'tv-audio', name: 'TV & Audio', description: 'Smart TVs, streaming devices, soundbars, HDMI and home theater.',
    subcategories: ['Smart TVs', 'Soundbars & Speakers', 'HDMI & Connectivity', 'Streaming Problems', 'Home Theater Setup'].map(s) },
  { slug: 'tools', name: 'Tools & Testing', description: 'Multimeters, testers and power tools: what to buy and how to use them.',
    subcategories: ['Multimeters & Testers', 'Power Tools', 'Tool Buying Guides', 'How-to-Use Guides'].map(s) },
  { slug: 'home-safety', name: 'Home Safety', description: 'Smoke and CO detectors, electrical and fire safety, outage prep.',
    subcategories: ['Smoke & CO Detectors', 'Electrical Safety', 'Fire Safety', 'Storm & Outage Prep'].map(s) },
];

export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
export const getSubcategory = (cat: string, sub: string) => getCategory(cat)?.subcategories.find((x) => x.slug === sub);
