import heroImg from '../assets/images/luna_bistro_hero_1791405937676.jpg';
import aboutImg from '../assets/images/luna_about_story_1791405949424.jpg';
import burrataImg from '../assets/images/dish_burrata_tomatoes_1791405959269.jpg';
import pastaImg from '../assets/images/dish_truffle_pasta_1791405968588.jpg';
import seaBassImg from '../assets/images/dish_sea_bass_1791405979547.jpg';
import tiramisuImg from '../assets/images/dish_pistachio_tiramisu_1791405993226.jpg';
import spritzImg from '../assets/images/drink_citrus_spritz_1791406002368.jpg';
import interiorImg from '../assets/images/bistro_interior_table_1791406012817.jpg';

// Menu item photography
import whippedFetaImg from '../assets/images/dish_whipped_feta_1791406669564.jpg';
import calamariImg from '../assets/images/dish_crispy_calamari_1791406680644.jpg';
import orzoImg from '../assets/images/dish_lemon_herb_orzo_1791406691400.jpg';
import pappardelleImg from '../assets/images/dish_lamb_pappardelle_1791406700252.jpg';
import chickenImg from '../assets/images/dish_rosemary_chicken_1791406710514.jpg';
import lambChopsImg from '../assets/images/dish_crusted_lamb_chops_1791406720080.jpg';
import oliveCakeImg from '../assets/images/dish_olive_oil_cake_1791406729046.jpg';
import chocoTartImg from '../assets/images/dish_dark_chocolate_tart_1791406737324.jpg';
import lemonadeImg from '../assets/images/drink_house_lemonade_1791406746809.jpg';
import tonicImg from '../assets/images/drink_mediterranean_tonic_1791406758485.jpg';
import espressoImg from '../assets/images/drink_espresso_crema_1791406767828.jpg';
import cappuccinoImg from '../assets/images/drink_cappuccino_foam_1791406776755.jpg';

// Unique gallery photos
import guestsDiningImg from '../assets/images/guests_dining_warm_1791407244226.jpg';
import exteriorDuskImg from '../assets/images/restaurant_exterior_dusk_1791407255681.jpg';
import candlelitTableImg from '../assets/images/table_setting_candlelit_1791407265625.jpg';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'pasta' | 'mains' | 'desserts' | 'drinks';
  dietary?: string[];
  isChefSelection?: boolean;
  image: string;
  altText: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'food' | 'interior' | 'kitchen' | 'drinks' | 'lifestyle';
  imageUrl: string;
  caption: string;
  altText: string;
}

export const RESTAURANT_INFO = {
  name: 'LUNA BISTRO',
  tagline: 'Where Every Dish Tells a Story.',
  eyebrow: 'MODERN MEDITERRANEAN BISTRO',
  shortBio: 'Modern Mediterranean cuisine crafted with seasonal ingredients and served with warmth.',
  address: '125 Olive Street, Downtown',
  phone: '(555) 123-4567',
  email: 'hello@lunabistro.example',
  hours: [
    { days: 'Monday – Thursday', time: '5:00 PM – 11:00 PM' },
    { days: 'Friday – Saturday', time: '5:00 PM – 12:00 AM' },
    { days: 'Sunday', time: '4:00 PM – 10:00 PM' },
  ],
  conceptDisclaimer: 'Fictional address and hours for concept presentation. Phone and email are placeholders.',
  socials: [
    { name: 'Instagram', handle: '@lunabistro', href: 'https://instagram.com' },
    { name: 'Facebook', handle: 'Luna Bistro Downtown', href: 'https://facebook.com' },
  ],
};

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 'starter-1',
    name: 'Whipped Feta & Charred Peppers',
    description: 'Creamy feta, roasted peppers, herbs, warm flatbread.',
    price: 12,
    category: 'starters',
    dietary: ['V'],
    image: whippedFetaImg,
    altText: 'Creamy whipped feta dip with charred roasted red peppers, olive oil, and warm artisan flatbread',
  },
  {
    id: 'starter-2',
    name: 'Burrata & Roasted Tomatoes',
    description: 'Creamy burrata, heirloom tomatoes, basil oil.',
    price: 14,
    category: 'starters',
    dietary: ['V', 'GF'],
    isChefSelection: true,
    image: burrataImg,
    altText: 'Burrata with heirloom tomatoes and basil oil on a ceramic plate',
  },
  {
    id: 'starter-3',
    name: 'Crispy Calamari',
    description: 'Lemon, parsley, smoked paprika aioli.',
    price: 15,
    category: 'starters',
    image: calamariImg,
    altText: 'Crispy calamari with grilled lemon wedges and smoked paprika aioli dip',
  },

  // Pasta & Grains
  {
    id: 'pasta-1',
    name: 'Truffle Mushroom Pasta',
    description: 'Fresh pasta, wild mushrooms, parmesan, truffle oil.',
    price: 22,
    category: 'pasta',
    dietary: ['V'],
    isChefSelection: true,
    image: pastaImg,
    altText: 'Handmade pasta with wild sautéed mushrooms, shaved parmesan, and fragrant black truffle oil',
  },
  {
    id: 'pasta-2',
    name: 'Lemon Herb Orzo',
    description: 'Orzo, seasonal vegetables, herbs, lemon, parmesan.',
    price: 18,
    category: 'pasta',
    dietary: ['V'],
    image: orzoImg,
    altText: 'Lemon herb orzo tossed with baby spinach, pine nuts, and grated aged parmesan',
  },
  {
    id: 'pasta-3',
    name: 'Spiced Lamb Pappardelle',
    description: 'Slow-cooked lamb, tomato, warm spices, aged cheese.',
    price: 24,
    category: 'pasta',
    image: pappardelleImg,
    altText: 'Wide ribbon pappardelle pasta with slow-cooked spiced lamb ragu and grated cheese',
  },

  // Mains
  {
    id: 'main-1',
    name: 'Grilled Mediterranean Sea Bass',
    description: 'Seasonal vegetables, lemon butter, herbs.',
    price: 28,
    category: 'mains',
    dietary: ['GF'],
    isChefSelection: true,
    image: seaBassImg,
    altText: 'Pan-seared Mediterranean sea bass fillet with crispy skin, lemon butter, and roasted seasonal vegetables',
  },
  {
    id: 'main-2',
    name: 'Rosemary Chicken',
    description: 'Roasted chicken, garlic potatoes, charred greens, jus.',
    price: 24,
    category: 'mains',
    dietary: ['GF'],
    image: chickenImg,
    altText: 'Roasted rosemary chicken supreme with golden crispy skin, garlic baby potatoes, and pan jus',
  },
  {
    id: 'main-3',
    name: 'Herb-Crusted Lamb Chops',
    description: 'Grilled lamb, olive tapenade, seasonal vegetables.',
    price: 31,
    category: 'mains',
    dietary: ['GF'],
    isChefSelection: true,
    image: lambChopsImg,
    altText: 'Grilled herb-crusted tender lamb cutlets with olive tapenade and roasted garden vegetables',
  },

  // Desserts
  {
    id: 'dessert-1',
    name: 'Pistachio Tiramisu',
    description: 'Classic tiramisu with pistachio cream.',
    price: 11,
    category: 'desserts',
    dietary: ['V'],
    isChefSelection: true,
    image: tiramisuImg,
    altText: 'Layered pistachio tiramisu dessert with mascarpone and roasted pistachios',
  },
  {
    id: 'dessert-2',
    name: 'Olive Oil Cake',
    description: 'Citrus, whipped mascarpone, toasted almonds.',
    price: 10,
    category: 'desserts',
    dietary: ['V'],
    image: oliveCakeImg,
    altText: 'Slice of Mediterranean citrus olive oil cake topped with whipped mascarpone and toasted almonds',
  },
  {
    id: 'dessert-3',
    name: 'Dark Chocolate Tart',
    description: 'Bittersweet chocolate, sea salt, vanilla cream.',
    price: 11,
    category: 'desserts',
    dietary: ['V'],
    image: chocoTartImg,
    altText: 'Dark chocolate ganache tart dusted with sea salt flakes and Madagascar vanilla cream',
  },

  // Drinks
  {
    id: 'drink-1',
    name: 'House Lemonade',
    description: 'Fresh citrus and herbs.',
    price: 6,
    category: 'drinks',
    dietary: ['VG'],
    image: lemonadeImg,
    altText: 'Sparkling house lemonade garnished with fresh mint sprigs and lemon wheels',
  },
  {
    id: 'drink-2',
    name: 'Sparkling Citrus Spritz',
    description: 'Citrus, bubbles, botanical notes.',
    price: 9,
    category: 'drinks',
    image: spritzImg,
    altText: 'Sparkling citrus spritz cocktail in crystal stem glass with blood orange',
  },
  {
    id: 'drink-3',
    name: 'Mediterranean Tonic',
    description: 'Herbal tonic with citrus.',
    price: 8,
    category: 'drinks',
    dietary: ['VG'],
    image: tonicImg,
    altText: 'Highball botanical Mediterranean tonic with rosemary sprig, cucumber ribbon, and citrus',
  },
  {
    id: 'drink-4',
    name: 'Espresso',
    description: 'Freshly pulled espresso.',
    price: 4,
    category: 'drinks',
    dietary: ['VG'],
    image: espressoImg,
    altText: 'Double espresso shot with thick golden crema in ceramic demitasse cup',
  },
  {
    id: 'drink-5',
    name: 'Cappuccino',
    description: 'Espresso with steamed milk.',
    price: 5,
    category: 'drinks',
    dietary: ['V'],
    image: cappuccinoImg,
    altText: 'Artisanal cappuccino with velvety microfoam and latte art in ceramic cup',
  },
];

export const CHEF_RECOMMENDATION = {
  dish: 'Herb-Crusted Lamb Chops',
  price: 31,
  description: 'Grilled lamb, olive tapenade, seasonal vegetables.',
  tag: "CHEF'S PICK",
  image: lambChopsImg,
  altText: 'Grilled herb-crusted tender lamb cutlets with olive tapenade and roasted garden vegetables',
};

export const SIGNATURE_DISHES = [
  {
    id: 'sig-1',
    name: 'Burrata & Roasted Tomatoes',
    description: 'Creamy burrata, heirloom tomatoes, basil oil.',
    price: 14,
    tag: 'Starter',
    image: burrataImg,
    altText: 'Burrata with heirloom tomatoes and basil oil on a ceramic plate',
  },
  {
    id: 'sig-2',
    name: 'Truffle Mushroom Pasta',
    description: 'Fresh pasta, wild mushrooms, parmesan, truffle oil.',
    price: 22,
    tag: 'Handmade Pasta',
    image: pastaImg,
    altText: 'Handmade pasta with wild sautéed mushrooms, shaved parmesan, and fragrant black truffle oil',
  },
  {
    id: 'sig-3',
    name: 'Grilled Mediterranean Sea Bass',
    description: 'Seasonal vegetables, lemon butter, herbs.',
    price: 28,
    tag: 'Fresh Catch',
    image: seaBassImg,
    altText: 'Pan-seared Mediterranean sea bass fillet with crispy skin, lemon butter, and roasted seasonal vegetables',
  },
  {
    id: 'sig-4',
    name: 'Pistachio Tiramisu',
    description: 'Classic tiramisu with pistachio cream.',
    price: 11,
    tag: 'Signature Dessert',
    image: tiramisuImg,
    altText: 'Layered pistachio tiramisu dessert with mascarpone and roasted pistachios',
  },
];

// 8 UNIQUE Gallery Items as requested in Change 4:
// 1. dish close-up: Burrata
// 2. restaurant interior: Interior dining room
// 3. chef preparing food: Chef at the pass
// 4. dining table / place setting: Candlelit seaside table setting
// 5. cocktail: Citrus spritz ("A SPRITZ AT SUNSET")
// 6. dessert: Pistachio tiramisu ("A LITTLE SOMETHING SWEET")
// 7. guests enjoying the space: Dinner with friends
// 8. exterior / entrance: Entrance at dusk
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-dish',
    title: 'Burrata & Roasted Tomatoes',
    category: 'food',
    imageUrl: burrataImg,
    caption: 'FRESH HEIRLOOM BURRATA',
    altText: 'Burrata with heirloom tomatoes and basil oil on a ceramic plate',
  },
  {
    id: 'gal-interior',
    title: 'Atmosphere & Dining Room',
    category: 'interior',
    imageUrl: interiorImg,
    caption: 'WARM EVENING AMBIENCE',
    altText: 'Warm interior dining room of Luna Bistro with candlelight and wooden tables',
  },
  {
    id: 'gal-chef',
    title: 'Craft at the Pass',
    category: 'kitchen',
    imageUrl: aboutImg,
    caption: 'CRAFT AT THE PASS',
    altText: 'Chef preparing and plating fresh Mediterranean pasta in the open kitchen',
  },
  {
    id: 'gal-table',
    title: 'Intimate Table Setting',
    category: 'interior',
    imageUrl: candlelitTableImg,
    caption: 'A TABLE MADE FOR MEMORIES',
    altText: 'Intimate candlelit dining table place setting with wine glasses and olive sprig',
  },
  {
    id: 'gal-cocktail',
    title: 'Sparkling Citrus Spritz',
    category: 'drinks',
    imageUrl: spritzImg,
    caption: 'A SPRITZ AT SUNSET',
    altText: 'Sparkling citrus spritz cocktail in crystal stem glass with blood orange',
  },
  {
    id: 'gal-dessert',
    title: 'Pistachio Tiramisu',
    category: 'food',
    imageUrl: tiramisuImg,
    caption: 'A LITTLE SOMETHING SWEET',
    altText: 'Layered pistachio tiramisu dessert with mascarpone and roasted pistachios',
  },
  {
    id: 'gal-guests',
    title: 'Evenings with Friends',
    category: 'lifestyle',
    imageUrl: guestsDiningImg,
    caption: 'GATHERED AROUND THE TABLE',
    altText: 'Guests enjoying a Mediterranean dinner under warm ambient light',
  },
  {
    id: 'gal-exterior',
    title: 'Luna Bistro Entrance',
    category: 'interior',
    imageUrl: exteriorDuskImg,
    caption: 'EVENING AT LUNA',
    altText: 'Warmly lit exterior entrance of Luna Bistro at dusk with lanterns and olive trees',
  },
];

// Home page 2 preview images (unique, not duplicated on home page)
export const HOME_GALLERY_PREVIEW = [
  {
    id: 'home-gal-1',
    title: 'Luna Bistro Entrance at Dusk',
    caption: 'EVENING AT LUNA',
    imageUrl: exteriorDuskImg,
    altText: 'Charming exterior entrance of Luna Bistro at dusk with lanterns and olive trees',
  },
  {
    id: 'home-gal-2',
    title: 'Evenings with Friends',
    caption: 'GATHERED AROUND THE TABLE',
    imageUrl: guestsDiningImg,
    altText: 'Guests laughing and sharing a Mediterranean dinner under warm ambient light',
  },
];

export const TESTIMONIALS = [
  {
    id: 'test-1',
    quote: 'An incredible dining experience from start to finish.',
    author: 'Sarah M.',
    occasion: 'Anniversary Dinner',
  },
  {
    id: 'test-2',
    quote: 'Beautiful atmosphere, amazing food, and genuinely warm service.',
    author: 'Daniel R.',
    occasion: 'Celebration with Friends',
  },
  {
    id: 'test-3',
    quote: 'Luna Bistro has quickly become our favorite dinner spot.',
    author: 'Emma R.',
    occasion: 'Weekly Dining',
  },
];

export const ASSET_IMAGES = {
  hero: heroImg,
  about: aboutImg,
  burrata: burrataImg,
  pasta: pastaImg,
  seaBass: seaBassImg,
  tiramisu: tiramisuImg,
  spritz: spritzImg,
  interior: interiorImg,
  guests: guestsDiningImg,
  exterior: exteriorDuskImg,
  candlelitTable: candlelitTableImg,
};
