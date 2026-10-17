import './Gear.css';
import './Routes.css';

type GearItem = {
  name: string;
  brand: string;
  weight?: string;
  note?: string;
};

type GearCategory = {
  icon: string;
  title: string;
  items: GearItem[];
};

const gearCategories: GearCategory[] = [
  {
    icon: '',
    title: 'Sleep & Shelter',
    items: [
      {
        name: 'X-Mid Pro 1 Tent',
        brand: 'Durston',
        weight: '15.5 oz',
        note: 'The ideal tent for the ultralight backpacker',
      },
      {
        name: 'Ultralight Quilt',
        brand: 'Zenbivy',
        weight: '17 oz',
        note: 'Down to 25°F when sleeping in a bivy liner.',
      },
      {
        name: 'AeroCloud Sleeping Pad UL',
        brand: 'Kilos Gear',
        weight: '17.3 oz',
        note: '4" cushion, baffled chambers',
      },
    ],
  },
  {
    icon: '',
    title: 'Packs & Poles',
    items: [
      {
        name: 'Kakwa 40 Pack',
        brand: 'Durston',
        weight: '28 oz',
        note: 'Primary pack for trips under 7 days.',
      },
      {
        name: 'Iceline Trekking Poles',
        brand: 'Durston',
        weight: '4.7 oz',
        note: "the world's lightest three piece adjustable poles",
      },
      {
        name: 'Baltoro 75 Pack',
        brand: 'Gregory',
        weight: '5 lbs 3 oz',
        note: 'Max. carry weight 65 lbs.',
      },
    ],
  },
  {
    icon: '',
    title: 'Footwear',
    items: [
      {
        name: 'Targhee IV Waterproof Hiking Shoe',
        brand: 'Keen',
        weight: '18.7 oz each',
        note: 'For scrambly terrain and off-trail.',
      },
      {
        name: "Men's Moab 3 Mid Waterproof Hiking Shoe",
        brand: 'Merrell',
        weight: '16.4 oz each',
        note: 'Provide great support for ankle and feet, a lot of traction on rocks and dirt.',
      },
      {
        name: 'Ultralight Camp Shoes',
        brand: 'Zpacks',
        weight: '2.3 oz',
        note: 'Non-negotiable for camp comfort after 20-mile days.',
      },
    ],
  },
  {
    icon: '',
    title: 'Navigation',
    items: [
      {
        name: 'inReach Mini 2',
        brand: 'Garmin',
        weight: '3.5 oz',
        note: 'Always on. Two-way messaging, SOS, tracking.',
      },
      // { name: 'Oregon 750t', brand: 'Garmin', weight: '7.6 oz', note: 'Offline topo maps, GPX tracks.' },
      // { name: 'CalTopo + Gaia GPS', brand: 'App combo', note: 'Trip planning and offline maps on phone as backup.' },
    ],
  },
  {
    icon: '',
    title: 'Kitchen & Water',
    items: [
      {
        name: 'PocketRocket 2 Mini Stove Kit',
        brand: 'MSR',
        weight: '9.9 oz',
        note: 'Cook, eat, and boil in one vessel.',
      },
      {
        name: 'Gravity BeFree Water Filtration System - 3 Liters',
        brand: 'Katadyn',
        weight: '6.8 oz',
        note: 'You can drink directly from the reservoir or easily fill a bottle or another reservoir.',
      },
      {
        name: 'BeFree Replacement Filter',
        brand: 'Katadyn',
        weight: '3.4 oz',
        note: 'Filters up to 2 liters of water per minute, pair with 1L Smartwater bottle for fast filtering.',
      },
      {
        name: 'Freeze-Dried Meals',
        brand: 'Gastro Gnome',
        weight: '0.7 oz to 7.5 oz',
        note: 'Broad selection of breakfast, lunch, dinner and desserts.',
      },
    ],
  },
];

export default function Gear() {
  return (
    <>
      <div className="page-hero">
        <span className="section-label">High Mountain Rucking</span>
        <h1>Gear &amp; Packing Lists</h1>
        <p>What's actually in our packs, tested across hundreds of miles.</p>
      </div>

      <div className="gear-content">
        <p className="gear-note-banner">
          These are the items our group has personally used and tested on
          multi-day backcountry trips. Weights listed are manufacturer specs
          unless noted. Gear evolves — we update this list after each season.
        </p>

        {gearCategories.map((cat) => (
          <div className="gear-section" key={cat.title}>
            <h2 className="gear-section-title">
              <span aria-hidden="true">{cat.icon}</span>
              {cat.title}
            </h2>
            <ul className="gear-list">
              {cat.items.map((item) => (
                <li className="gear-item" key={item.name}>
                  <div className="gear-item-info">
                    <span className="gear-item-name">{item.name}</span>
                    <span className="gear-item-brand">{item.brand}</span>
                    {item.note && (
                      <span className="gear-item-note">{item.note}</span>
                    )}
                  </div>
                  {item.weight && (
                    <span className="gear-item-weight">{item.weight}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
