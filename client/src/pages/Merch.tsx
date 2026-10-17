import { useState } from 'react';
import './Merch.css';
import './Routes.css';
import hmrLogo from '/hmr-logo.png';

type Product = {
  id: number;
  category: 'Shirts' | 'Stickers' | 'Patches';
  name: string;
  desc: string;
  price: string;
  badge?: 'new' | 'limited';
  img?: string;
  logoOnly?: boolean;
  variants?: string[];
  comingSoon?: boolean;
};

const products: Product[] = [
  {
    id: 1,
    category: 'Shirts',
    name: 'HMR Logo Tee',
    desc: 'Heavyweight 100% cotton. Distressed HMR logo printed on the chest. The kind of shirt that looks better after 200 miles.',
    price: '$34',
    badge: 'new',
    img: 'hmr-logo-tee.png',
    variants: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 2,
    category: 'Shirts',
    name: 'Earn Your Elevation Tee',
    desc: 'The tagline on your back. Faded mountain graphic on a washed black tee. Slim fit, pre-shrunk.',
    price: '$34',
    img: '/earn-your-elevation.png',
    variants: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 3,
    category: 'Shirts',
    name: 'Bigfoot Rucks Hoodie',
    desc: 'Midweight fleece pullover with the full HMR logo center chest. Built for camp nights when the temperature drops.',
    price: '$58',
    badge: 'limited',
    img: 'https://wildtribute.com/cdn/shop/products/legend-hood-nickel_3b2597d2-59da-45b6-bd37-c8ba43a2a30d.jpg?v=1713244404&width=2048',
    variants: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 4,
    category: 'Stickers',
    name: 'HMR Circle Logo Sticker',
    desc: 'Weatherproof vinyl. 3" die-cut. Goes on water bottles, packs, and car bumpers. UV-resistant ink that holds up on trail.',
    price: '$4',
    badge: 'new',
    logoOnly: true,
  },
  {
    id: 5,
    category: 'Stickers',
    name: 'Earn Your Elevation Sticker',
    desc: '4-pack of mixed HMR designs. Circle logo, mountain silhouette, wordmark, and Bigfoot graphic. All weatherproof vinyl.',
    price: '$4',
    img: '/earn-your-elevation-sticker.png',
    logoOnly: true,
  },
  {
    id: 8,
    category: 'Stickers',
    name: 'Beefcake Backpacking Sticker',
    desc: 'Weatherproof vinyl die-cut sticker. For the crew that carries more iron than sense.',
    price: '$4',
    img: '/beefcake-backpacking.png',
    logoOnly: true,
  },
  {
    id: 9,
    category: 'Stickers',
    name: 'HMR Death March 2026',
    desc: "Limited commemorative sticker from the 2026 Death March expedition. Weatherproof vinyl. Once these are gone, they're gone.",
    price: '$5',
    badge: 'limited',
    img: '/hmr-death-march-2026.png',
    logoOnly: true,
  },
  {
    id: 10,
    category: 'Stickers',
    name: 'Summit Bros Sticker',
    desc: 'Weatherproof vinyl die-cut sticker.',
    price: '$4',
    img: '/summit-bros.png',
    logoOnly: true,
  },
  {
    id: 6,
    category: 'Patches',
    name: 'HMR Embroidered Patch',
    desc: '3" embroidered iron-on patch. Full color HMR logo. Add it to your pack, hat, or jacket. Built to last.',
    price: '$8',
    badge: 'new',
    logoOnly: true,
  },
  {
    id: 7,
    category: 'Patches',
    name: 'Bigfoot Embroidered Patch',
    desc: 'Velcro-backed PVC morale patch. 2" x 3". The Bigfoot rucking silhouette. For your kit, pack strap, or plate carrier.',
    price: '$10',
    badge: 'limited',
    img: '/beefcake-backpacking.png',
    logoOnly: true,
  },
];

const filters = ['All', 'Shirts', 'Stickers', 'Patches'] as const;
type Filter = (typeof filters)[number];

export default function Merch() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All');

  const visible =
    activeFilter === 'All'
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <>
      <div className="merch-hero">
        <img
          src={hmrLogo}
          alt="High Mountain Rucking logo"
          className="merch-hero-logo"
        />
        <span className="section-label">High Mountain Rucking</span>
        <h1>Merch</h1>
        <p>
          Gear you actually wear on trail. Stickers, patches, and shirts built
          around the HMR logo.
        </p>
      </div>

      <div
        className="merch-filters"
        role="group"
        aria-label="Filter by category">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
            onClick={() => setActiveFilter(f)}
            aria-pressed={activeFilter === f}>
            {f}
          </button>
        ))}
      </div>

      <div className="merch-grid">
        {visible.map((product) => (
          <article className="product-card" key={product.id}>
            <div
              className={`product-img-wrap ${
                product.logoOnly ? 'logo-bg' : ''
              }`}>
              <img
                src={product.img ?? hmrLogo}
                alt={product.name}
                loading="lazy"
              />
              {product.badge && (
                <span className={`product-badge badge-${product.badge}`}>
                  {product.badge === 'new' ? 'New' : 'Limited'}
                </span>
              )}
            </div>
            <div className="product-body">
              <p className="product-category">{product.category}</p>
              <h2 className="product-name">{product.name}</h2>
              <p className="product-desc">{product.desc}</p>
              {product.variants && (
                <div className="product-variants" aria-label="Available sizes">
                  {product.variants.map((v) => (
                    <span className="variant-chip" key={v}>
                      {v}
                    </span>
                  ))}
                </div>
              )}
              <div className="product-footer">
                <span className="product-price">{product.price}</span>
                <button className="add-btn" disabled={product.comingSoon}>
                  {product.comingSoon ? 'Coming Soon' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
