# New Avatar — Kelela Shopify Theme

A custom Shopify Online Store 2.0 theme built for Kelela's **New Avatar** era. The design channels blue-green Afrofuturism — luminous gradients, cosmic geometry, neon accents, and bold typography — optimized for fan engagement and conversions.

## What's Included


| Section                  | Purpose                                                          |
| ------------------------ | ---------------------------------------------------------------- |
| **Pre-Order Album**      | Full-viewport hero with album art, release date, and primary CTA |
| **Stream "Point Blank"** | Embedded video player + Spotify/YouTube links                    |
| **Tour Dates**           | Filterable show list with ticket links                           |
| **Merch**                | Featured product grid connected to Shopify collections           |
| **Follow Kelela**        | Social icons + newsletter signup                                 |


Additional templates: product pages, collection (full store), cart, tour page, and generic pages.

---

## Quick Start

### Prerequisites

- A [Shopify store](https://www.shopify.com/) (or free [development store](https://shopify.dev/docs/apps/tools/development-stores))
- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli/install) installed

```bash
# Install Shopify CLI (macOS)
brew tap shopify/shopify
brew install shopify-cli
```

### 1. Upload the Theme

**Option A — Shopify CLI (recommended for development)**

```bash
cd kelela-new-avatar-theme
shopify theme dev --store YOUR-STORE.myshopify.com
```

This starts a local preview with hot reload. Press `p` to open the preview in your browser.

**Option B — Manual upload**

1. Zip the `kelela-new-avatar-theme` folder contents (not the folder itself)
2. In Shopify Admin → **Online Store → Themes → Add theme → Upload zip file**
3. Click **Publish** when ready

**Option C — GitHub integration**

Push this folder to a GitHub repo and connect it via **Online Store → Themes → Add theme → Connect from GitHub**.

### 2. Publish the Theme

In Shopify Admin → **Online Store → Themes**, find "New Avatar" and click **Publish**.

---

## Store Setup Checklist

### Products & Collections

**Fastest path:** import the included `products.csv` — in Shopify Admin go to **Products → Import**, upload the file, and all 7 products (vinyl variants, CD, digital, tee, hoodie with sizes) are created instantly. The merch section automatically shows all store products, so they appear on the homepage as soon as the import finishes.

Or create them manually in **Products → Add product**:


| Product                     | Tags                     | Notes                  |
| --------------------------- | ------------------------ | ---------------------- |
| New Avatar — Standard Vinyl | `pre-order`              | Link from hero section |
| New Avatar — Colored Vinyl  | `pre-order`, `limited`   | Shows "Limited" badge  |
| New Avatar — Deluxe Edition | `pre-order`, `exclusive` | Bundle with extras     |
| New Avatar — CD             | `pre-order`              |                        |
| New Avatar — Digital Album  |                          | Instant delivery       |
| Point Blank Tee             |                          |                        |
| New Avatar Hoodie           |                          |                        |


Then create a **Merch** collection and add all products.

### Connect Theme Sections

Open **Online Store → Themes → Customize**:

1. **Hero — Pre-Order**
  - Upload album artwork and background image
  - Select the pre-order product under "Pre-order product"
  - Set release date: `Out July 10, 2026`
2. **Stream — Point Blank**
  - Paste the YouTube video URL (e.g. `https://www.youtube.com/watch?v=VIDEO_ID`)
  - Add Spotify and YouTube links for the CTA buttons
3. **Tour Dates**
  - Add/edit tour date blocks with city, venue, region, and ticket URLs
  - Regions enable filtering (e.g. "North America", "Europe")
4. **Featured Merch**
  - Select your Merch collection
  - Or use manual product blocks until products are live
5. **Follow Kelela**
  - Newsletter uses Shopify's built-in customer form
  - Social links are set in **Theme settings → Social media**

### Theme Settings

Go to **Theme settings** (gear icon in the customizer):

- **Colors** — Adjust the black/mint/blue palette if needed
- **Typography** — Default: Playfair Display (headings) + Questrial (body)
- **Social media** — Add Instagram, Spotify, TikTok, YouTube, Twitter URLs
- **Conversion** — Edit the trust badge text

### Tour Page (Optional)

Create a page in **Online Store → Pages**:

1. Title: `Tour`
2. Under **Theme template**, select `page.tour`
3. Add to navigation if desired

---

## Design System

### Color Palette


| Token            | Default   | Usage                         |
| ---------------- | --------- | ----------------------------- |
| Primary (teal)   | `#00E5C0` | CTAs, accents, links          |
| Secondary (blue) | `#00B4FF` | Gradients, highlights         |
| Gold             | `#D4AF37` | Release dates, limited badges |
| Background       | `#0A0E14` | Page background               |
| Surface          | `#121820` | Cards, sections               |


### Typography

- **Headings:** Playfair Display — high-contrast editorial serif
- **Body:** Questrial — minimal geometric sans-serif

### Conversion Principles Built In

- **One primary CTA per section** — hero has a single "Pre-Order Album" button; stream uses secondary styling
- **Trust badges** — "Ships July 10" near pre-order; shipping info near merch
- **Quick add-to-cart** — single-variant products are buyable straight from the grid
- **Mobile-first** — full-width buttons, collapsible nav, responsive grids
- **Scroll animations** — sections fade in on scroll for engagement without distraction
- **Guest checkout** — enable in **Settings → Checkout** for lowest friction

---

## File Structure

```
kelela-new-avatar-theme/
├── assets/
│   ├── base.css              # Global styles
│   ├── global.js             # Header, scroll, animations
│   └── cosmic-pattern.svg    # Decorative asset
├── config/
│   ├── settings_schema.json  # Theme settings
│   └── settings_data.json    # Default values
├── layout/
│   └── theme.liquid          # Main layout wrapper
├── locales/
│   └── en.default.json       # Translations
├── sections/
│   ├── header.liquid
│   ├── hero-preorder.liquid      # PRE-ORDER ALBUM
│   ├── stream-point-blank.liquid # STREAM "POINT BLANK"
│   ├── tour-dates.liquid         # TOUR DATES
│   ├── featured-merch.liquid     # MERCH
│   ├── follow-kelela.liquid      # FOLLOW KELELA
│   ├── footer.liquid
│   ├── main-product.liquid
│   ├── main-collection.liquid
│   ├── main-cart.liquid
│   └── main-page.liquid
├── snippets/
│   ├── css-variables.liquid
│   ├── icon.liquid
│   ├── meta-tags.liquid
│   └── product-card.liquid
├── templates/
│   ├── index.json            # Homepage
│   ├── product.json
│   ├── collection.json
│   ├── cart.json
│   ├── page.json
│   └── page.tour.json        # Dedicated tour page
└── README.md
```

---

## Customization Tips

### Adding Album Art & Images

Upload high-resolution images (1200px+ wide) via the theme customizer. Shopify's CDN handles optimization automatically. Use WebP-friendly JPGs or PNGs for album art with transparent backgrounds.

### Pre-Order Workflow

1. Create products with the `pre-order` tag
2. Set inventory tracking if quantities are limited
3. Use Shopify's **pre-order apps** (e.g. Pre-Order Manager) for advanced ship-date messaging
4. Link the hero section's "Pre-order product" setting to your main vinyl SKU

### Spotify Embed Alternative

Instead of YouTube, paste a Spotify embed iframe in **Stream → Custom embed code**:

```html
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/TRACK_ID?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
```

### Analytics & CRO

After launch, monitor in **Analytics → Reports**:

- Click-through on Pre-Order CTA (use UTM parameters)
- Add-to-cart rate on merch
- Newsletter signup conversion
- Mobile vs desktop bounce rate

A/B test hero CTA copy ("Pre-Order Now" vs "Pre-Order Album") and trust badge messaging.

---

## Development Commands

```bash
# Start dev server with hot reload
shopify theme dev

# Push theme to store
shopify theme push

# Pull remote changes
shopify theme pull

# Check for Liquid errors
shopify theme check
```

---

## Recommended Shopify Apps


| App                              | Purpose                                    |
| -------------------------------- | ------------------------------------------ |
| **Pre-Order Manager**            | Ship-date messaging, pre-order badges      |
| **Klaviyo** or **Shopify Email** | Newsletter automation beyond built-in form |
| **Instafeed**                    | Live Instagram grid in Follow section      |
| **SEAL Subscriptions**           | Recurring merch drops                      |


---

## Support & Credits

Theme built for the **New Avatar** album campaign. Design direction inspired by Kelela's Afrofuturist visual identity — blue-green neon, cosmic motifs, and surrealist portraiture.

For Shopify theme documentation: [shopify.dev/docs/themes](https://shopify.dev/docs/themes)