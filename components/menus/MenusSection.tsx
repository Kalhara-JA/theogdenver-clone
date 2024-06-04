"use client"

import { useState } from 'react';
import Carousel from '../common/Carousel';
import ScrollToSection from '@/hooks/scrollToSection';

interface MenuItem {
  name: string;
  description: string;
  price: number;
  dietaryInfo?: string;
}

const MenusSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('brunch-052023');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const foodMenuItems: MenuItem[] = [
    {
      name: 'SUGAR DUSTED CHURRO BITES',
      description: 'Cinnamon Sugar-Dusted Churros, Crème Anglaise, Chocolate Ganache',
      price: 9,
      dietaryInfo: 'vegetarian',
    },
    {
      name: 'BREAKFAST SAUSAGE CORN DOGS',
      description: 'Pancake-Battered Breakfast Sausage, Corn Flake Crust, Maple Syrup',
      price: 12,
    },
    {
      name: 'BILLIONAIRE BACON',
      description: 'Thicc-Cut Pork Belly, Bourbon-Maple Glaze',
      price: 14,
    },
    {
      name: 'CHILA-DILLAS*',
      description: 'Chilaquiles-Quesadilla; Fried Cheese Quesadilla, Pork Green Chili, Crema, Over EZ Egg, Pico de Gallo',
      price: 15,
    },
    {
      name: 'PIMENTO DEVILED EGGS',
      description: 'Hard Boiled Eggs, Pimento Filling, Potato Chips, Chive',
      price: 12,
      dietaryInfo: 'vegetarian',
    },
    {
      name: 'DELUXE PARFAIT',
      description: 'Vanilla Honey Yogurt, Granola, Seasonal House Compote, Berries',
      price: 11,
      dietaryInfo: 'vegetarian',
    },
  ];

  const brunchEntrees: MenuItem[] = [
    {
      name: 'The OG Breakfast*',
      description: 'Two Eggs, Breakfast Potatoes | Choice of Toast: White, Wheat, Rye, Sourdough, Gluten Free | Choice of Protein: Sausage, Bacon, Avocado',
      price: 14,
      dietaryInfo: 'gluten free, vegetarian',
    },
    {
      name: 'Mushroom Frittata',
      description: 'Mushroom, Arugula, Tomato, Onion, Garlic, Swiss, Kale Salad, Green Goddess',
      price: 17,
      dietaryInfo: 'gluten free, vegetarian',
    },
    {
      name: 'Denver Frittata',
      description: 'Smoked Ham, Bell Pepper, Onion, Cheddar, Kale Salad, Green Goddess',
      price: 17,
      dietaryInfo: 'gluten free',
    },
    {
      name: 'Pulled Pork Benedict*',
      description: 'Pulled Pork, Tomatillo, Avocado, Poached Egg, Biscuit, Black Beans, Potatoes',
      price: 18,
      dietaryInfo: 'egg, wheat',
    },
    {
      name: 'Classic Ham Benedict*',
      description: 'Smoked Ham, Tomato, Poached Egg, Hollandaise, English Muffin, Potatoes',
      price: 17,
      dietaryInfo: 'egg, wheat',
    },
    {
      name: 'Veggie Benedict*',
      description: 'Avocado, Tomato, Poached Egg, Hollandaise, English Muffin, Potatoes',
      price: 17,
      dietaryInfo: 'vegetarian',
    },
    {
      name: 'Buttermilk Pancakes',
      description: 'Stack of 3, Maple Syrup, Powdered Sugar | Add: Chocolate Chips or Blueberries +2',
      price: 14,
      dietaryInfo: 'vegetarian',
    },
    {
      name: 'CRÈME DE LA CRÈME TOAST',
      description: 'Brioche French Toast, Crème Brûlée Batter, Crème Anglaise, Maple Syrup',
      price: 16,
      dietaryInfo: 'vegetarian',
    },
    {
      name: 'FRIED FRENCH TOAST',
      description: 'Crispy Brioche, Strawberry Compote, Crème Anglaise, Maple Syrup',
      price: 16,
      dietaryInfo: 'dairy, egg, wheat, vegetarian',
    },
    {
      name: 'CHICKEN & BISCUITS*',
      description: 'Fried Chicken, Hot Honey Glaze, Sausage Gravy, Buttered Biscuit, Two Eggs Sunny',
      price: 18,
    },
    {
      name: 'AVOCADO TOAST*',
      description: 'Avocado, Sun-dried Tomato, Kale, Green Goddess, Two Eggs Sunny, Sourdough',
      price: 16,
      dietaryInfo: 'vegetarian',
    },
    {
      name: 'SANTA FE TOAST*',
      description: 'Pulled Pork, Avocado, Tomatillo, Sriracha Aioli, Kale, Two Eggs Sunny, Sourdough',
      price: 18,
    },
    {
      name: 'STEAK & EGG RANCHERO*',
      description: '8oz Skirt Steak, Chimichurri Butter, Pickled Onion, Potatoes, Two Eggs Sunny',
      price: 25,
      dietaryInfo: 'gluten free',
    },
    {
      name: 'SMOTHERED BURRITO',
      description: 'Scrambled Eggs, Potatoes, Black Beans, Tomatillo Crema, Cheese, Pork Green Chili',
      price: 18,
    },
    {
      name: 'BREAKFAST TACOS',
      description: 'Three Tacos; Cheesy Eggs, Bacon, Salsa Verde, Tomatillo Crema, Cilantro',
      price: 15,
    },
    {
      name: 'COUNTRY FRIED STEAK*',
      description: 'Fried Steak, Sausage Gravy, Potatoes, Two Eggs Sunny',
      price: 21,
    },
    {
      name: 'CHORIZO HASH*',
      description: 'Chorizo, Corn & Black Bean Relish, Crema, Peppers, Potatoes, Cotija, Two Eggs',
      price: 19,
    },
  ];

  const sandwiches: MenuItem[] = [
    {
      name: 'HANGOVER BURGER*',
      description: 'Double Smash Patty, Caramelized Onions, Pickles, Bacon, American Cheese, Over EZ Egg, Spicy Aioli, Bun',
      price: 18,
    },
    {
      name: 'BACON, EGG & CHEESE*',
      description: 'Bacon, Fried Egg, Cheese, Everything Bagel, Spicy Aioli | Add: Double Bacon +2',
      price: 14,
    },
    {
      name: 'HOT HONEY CHICKEN SANDWICH',
      description: 'Fried Chicken, Hot Honey Glaze, Whipped Pimento, Tomato, Pickles, Bun',
      price: 17,
    },
    {
      name: 'CHICKEN SALAD CLUB',
      description: 'Roasted Chicken Salad, Ham, Swiss, Lettuce, Tomato, Garlic Aioli, Toasted Sourdough',
      price: 16,
    },
    {
      name: 'CUBANO',
      description: 'Pulled Pork, Ham, Swiss, Caramelized Onions, Pickles, Dijonnaise, Pressed Baguette',
      price: 17,
    },
    {
      name: 'TURKEY PESTO PANINI',
      description: 'Turkey Breast, Swiss, Basil Pesto, Sun-dried Tomatoes, Garlic Aioli, Pressed Baguette',
      price: 17,
      dietaryInfo: 'tree nut',
    },
  ];

  const salads: MenuItem[] = [
    {
      name: 'SUNRISE SALAD*',
      description: 'Greens, Candied Pecan, Garbanzo, Bacon Lardon, Pickled Onion, Sunny Side Egg, Bacon-Fat Vinaigrette',
      price: 17,
    },
    {
      name: 'SOUTHWEST SALAD',
      description: 'Greens, Black Beans, Corn, Bell Peppers, Pickled Onion, Cherry Tomatoes, Cotija, Tortilla Strips, Lime Vinaigrette',
      price: 18,
      dietaryInfo: 'vegetarian',
    },
  ];

  const sidesAndMore: MenuItem[] = [
    {
      name: 'Bacon',
      description: '',
      price: 4,
    },
    {
      name: 'Pork Sausages',
      description: '',
      price: 4,
    },
    {
      name: 'Chicken Patties',
      description: '',
      price: 5,
    },
    {
      name: 'Ground Chorizo',
      description: '',
      price: 5,
    },
    {
      name: 'Ground Soyrizo',
      description: '',
      price: 5,
    },
    {
      name: 'Sausage Gravy',
      description: '',
      price: 5,
    },
    {
      name: 'Pork Green Chili',
      description: '',
      price: 5,
    },
    {
      name: '1/2 Avocado',
      description: '',
      price: 5,
    },
    {
      name: 'One Egg*',
      description: '',
      price: 3,
    },
    {
      name: 'Two Eggs*',
      description: '',
      price: 6,
    },
    {
      name: 'Single Buttermilk Pancake',
      description: '',
      price: 5,
      dietaryInfo: 'vegetarian',
    },
    {
      name: 'Side French Toast',
      description: '',
      price: 5,
      dietaryInfo: 'vegetarian',
    },
    {
      name: 'Breakfast Potatoes',
      description: '',
      price: 5,
    },
    {
      name: 'Crinkle Cut Fries',
      description: '',
      price: 5,
    },
    {
      name: 'Bagel',
      description: 'Everything or Plain | Cream Cheese +1',
      price: 4,
    },
    {
      name: 'Toast',
      description: 'White, Wheat, Rye, Sourdough, Gluten Free',
      price: 4,
    },
    {
      name: 'Biscuit',
      description: '',
      price: 5,
    },
    {
      name: 'English Muffin',
      description: '',
      price: 4,
    },
    {
      name: 'Fruit Cup',
      description: '',
      price: 5,
      dietaryInfo: 'vegan',
    },
  ];

  const drinkMenuItems: MenuItem[] = [
    {
      name: 'THE OG BLOODY MARY',
      description: 'Family Jones Vodka, OG Bloody Mix, Pickled Vegetables, Celery, Bacon, Salt Rim',
      price: 14,
    },
    {
      name: 'HAIR OF THE BULLDOG',
      description: 'Family Jones Gin, OG Bloody Mix, Celery, Pickled Vegetables, Celery Salt Rim',
      price: 14,
    },
    {
      name: 'TÍA MARIA',
      description: 'Tanteo Habanero Infused Tequila, Green Tomatillo Bloody Mix, Celery, Lime, Tajín Salt Rim',
      price: 14,
    },
    {
      name: 'PIG & PONY SHOW',
      description: 'Bacon-Washed Whiskey, OG Bloody Mix, Bacon, Bacon, Bacon, Miller High Life Pony Beer Back',
      price: 16,
    },
    {
      name: 'MICHELADA',
      description: 'Modelo Especial, OG Bloody Mix, Lime, Tajín Salt Rim',
      price: 10,
    },
    {
      name: 'PRODUCTIVE SUNDAY',
      description: 'Seedlip Garden 108 (spirit free), OG Bloody Mix, Lemon, Celery, Salt Rim',
      price: 12,
    },
  ];

  const mimosaMenuItems: MenuItem[] = [
    {
      name: 'CLASSIC MIMOSA',
      description: 'Choice of: Orange, Grapefruit, Cranberry',
      price: 10,
    },
    {
      name: 'BUBBLE W/OUT THE TROUBLE',
      description: 'Grüvi Dry Secco (spirit free) Choice of: Orange, Grapefruit, Cranberry',
      price: 9,
    },
    {
      name: 'RESTING SPRITZ FACE',
      description: 'Blueberry Infused Select Aperitivo, Lemon, Odell Sippin’ Pretty Fruit Sour',
      price: 12,
    },
    {
      name: 'YOU HAD ME AT “CELLO”',
      description: 'Pallini Limoncello, Lemon, Cava',
      price: 12,
    },
    {
      name: 'DRUNK IN LOVE',
      description: 'Chinola Passionfruit Liqueur, Lemon, Cava',
      price: 12,
    },
    {
      name: 'HEAD OVER PEELS',
      description: 'Solerno Blood Orange Liqueur, Lemon, Cava, Peychaud’s Bitters',
      price: 12,
    },
    {
      name: 'MIMOSA BY THE BOTTLE',
      description: 'Bottle of House Bubbles & Carafes of Juice',
      price: 32,
    },
  ];

  const sparklingWineMenuItems: MenuItem[] = [
    {
      name: 'CRÉMANT D’ALSACE',
      description: 'Pierre Sparr, Loire Valley, France | Helene Georges - Winemaker',
      price: 14,
    },
    {
      name: 'SPARKLING ROSÉ',
      description: 'Ca’ dei Frati, Lombardy, Italy | Santa Rosa Dal Cero - Owner',
      price: 15,
    },
    {
      name: 'PROSECCO',
      description: 'Nino Franco, Veneto, Italy | Silvia Franco - Cellar Master',
      price: 16,
    },
    {
      name: 'DRY SECCO (275ml)',
      description: 'Grüvi, Denver, CO, (spirit free) | Anika Sawni - Co-Founder',
      price: 11,
    },
  ];

  const draftBeers: MenuItem[] = [
    {
      name: 'MILE HIGH JINKS',
      description: 'Lager, Colorado Native, CO',
      price: 7,
    },
    {
      name: 'COORS LIGHT',
      description: 'Light Lager, Coors Brewing, CO',
      price: 6,
    },
    {
      name: 'BLUE MOON',
      description: 'Belgian White, Blue Moon, CO',
      price: 8,
    },
    {
      name: 'SIPPIN’ PRETTY',
      description: 'Fruited Sour, Odell Brewing, CO',
      price: 8,
    },
    {
      name: 'MODELO',
      description: 'Mexican Lager, Modelo, MX',
      price: 7,
    },
    {
      name: 'VOODOO RANGER HAZY',
      description: 'Hazy IPA, New Belgium, CO',
      price: 8,
    },
    {
      name: 'ODELL IPA',
      description: 'IPA, Odell Brewing, CO',
      price: 8,
    },
  ];

  const sodaFountain: MenuItem[] = [
    {
      name: 'SODA',
      description: 'Coke, Diet Coke, Coke Zero, Sprite, Dr. Pepper, Fanta, Minute Maid Lemonade, Seagram’s Ginger Ale',
      price: 4,
    },
    {
      name: 'ROOT BEER FLOAT',
      description: 'Vanilla Ice Cream, Root Beer',
      price: 6,
    },
    {
      name: 'MILKSHAKE',
      description: 'Vanilla, Chocolate or Caramel',
      price: 8,
    },
    {
      name: 'STICKY BUN SHAKE',
      description: 'Whiskey, Vanilla Ice Cream, Graham Cracker, Cinnamon, Honey Bun',
      price: 12,
    },
    {
      name: 'CHEESECAKE SHAKE',
      description: 'Vodka, Vanilla Ice Cream, Cherry Compote, Cheesecake',
      price: 12,
    },
  ];

  const cannedAndBottledBeer: MenuItem[] = [
    {
      name: 'HIGH LIFE (7oz.)',
      description: 'Lager, Miller-Brewing, WI',
      price: 4,
    },
    {
      name: 'COORS BANQUET',
      description: 'Lager, Coors Brewing, CO',
      price: 6,
    },
    {
      name: 'PRINCESS YUM YUM',
      description: 'Raspberry Kölsch, Denver Beer Co., CO',
      price: 8,
    },
    {
      name: 'DOMINGA',
      description: 'Mimosa Sour, New Belgium, CO',
      price: 7,
    },
    {
      name: 'GRAHAM CRACKER PORTER',
      description: 'Porter, Denver Beer Co., CO',
      price: 8,
    },
    {
      name: 'STEM CIDERS',
      description: 'Assorted Flavors, Stem Ciders, CO',
      price: 9,
    },
    {
      name: 'HIGH NOON SELTZER',
      description: 'Assorted Flavors',
      price: 8,
    },
  ];

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item, index) => (
      <li key={index} className="menu-item">
        <p className="menu-item__heading menu-item__heading--name" role="heading" aria-level={3}>
          {item.name}
        </p>
        <p className="menu-item__details--description">{item.description}</p>
        <p className="menu-item__details menu-item__details--price">
          <strong><span className="menu-item__currency">$</span>{item.price}</strong>
        </p>
        {item.dietaryInfo && (
          <p className="menu-item__details menu-item__details--info">
            <small>{item.dietaryInfo}</small>
          </p>
        )}
      </li>
    ));
  };

  const images = [
    'images/44830237-From-the-Hip-Photo11d2.jpg',
    'images/226340073-From-the-Hip-Photo_111d2.jpg',
    'images/44830237-From-the-Hip-Photo11d2.jpg',
  ];

  return (
    <div className="site-content">
      <div className="site-header-spacer-desktop" aria-hidden="true" style={{ height: '108.275px' }}></div>
      <div className="site-header-spacer-mobile" aria-hidden="true" style={{ height: '75.475px' }}></div>

      <main className="site-content__main page-id--27523">
        <span id="main-content" className="sr-only">Main content starts here, tab to start navigating</span>

        <section id="hero" aria-label="hero-section" className="hero hero--no-content hero--gallery hero--scrollable revealable revealed" style={{ height: '0px' }}>
          <button type="button" className="hero__scroll-btn arrow-btn arrow-btn--down" onClick={() => ScrollToSection('menus')} >
            <span className="sr-only">Scroll Down to Content</span>
          </button>

          <div className="gallery gallery--fit gallery--dimmed" role="region" aria-label="carousel">
            <span className="sr-only">The image gallery carousel displays a single slide at a time. Use the next and previous button to browse 5 slides. The following carousel hides non-visible slides from screen reader users. Use of next and previous buttons is necessary to see all slides.</span>
            <Carousel images={images} />
          </div>
        </section>
        <section id="menus" aria-label="menus-section" className="content revealable revealed">
          <div className="tabs">
            <ul className="tabs-nav" role="tablist">
              <li role="presentation">
                <a
                  id="tab-brunch-052023"
                  className={`btn btn-tabs ${activeTab === 'brunch-052023' ? 'active' : ''}`}
                  href="#brunch-052023"
                  role="tab"
                  aria-controls="brunch-052023"
                  aria-selected={activeTab === 'brunch-052023'}
                  onClick={() => handleTabClick('brunch-052023')}
                >
                  Food Menu
                </a>
              </li>
              <li role="presentation">
                <a
                  id="tab-drinks"
                  className={`btn btn-tabs ${activeTab === 'drinks' ? 'active' : ''}`}
                  href="#drinks"
                  role="tab"
                  aria-controls="drinks"
                  aria-selected={activeTab === 'drinks'}
                  onClick={() => handleTabClick('drinks')}
                >
                  Drink Menu
                </a>
              </li>
            </ul>

            <div className="tabs-content">
              {activeTab === 'brunch-052023' && (
                <section id="brunch-052023" className="tabs-panel tabs-panel--active tabs-panel--show" role="tabpanel" aria-labelledby="tab-brunch-052023">
                  <div className="menu-description container-sm">
                    <p>Available <strong role="heading" aria-level={2}>EVERY DAY OF THE WEEK</strong> 7am - 3pm</p>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <section className="menu-section">
                          <div className="menu-section__header">
                            <h2 role="heading" aria-level={3}>SHAREABLES</h2>
                          </div>
                          <ul>{renderMenuItems(foodMenuItems)}</ul>
                        </section>
                        <section className="menu-section">
                          <div className="menu-section__header">
                            <h2 role="heading" aria-level={3}>Brunch Entrées</h2>
                          </div>
                          <ul>{renderMenuItems(brunchEntrees)}</ul>
                        </section>
                      </div>
                      <div className="col-md-6">
                        <section className="menu-section">
                          <div className="menu-section__header">
                            <h2 role="heading" aria-level={3}>SANDWICHES</h2>
                            all sandwiches come with a choice of: crinkle cut fries, breakfast potatoes, side salad, or fruit cup
                          </div>
                          <ul>{renderMenuItems(sandwiches)}</ul>
                        </section>
                        <section className="menu-section">
                          <div className="menu-section__header">
                            <h2 role="heading" aria-level={3}>SALADS</h2>
                            add fried or grilled chicken +7
                          </div>
                          <ul>{renderMenuItems(salads)}</ul>
                        </section>
                        <section className="menu-section">
                          <div className="menu-section__header">
                            <h2 role="heading" aria-level={3}>SIDES & MORE</h2>
                          </div>
                          <ul>{renderMenuItems(sidesAndMore)}</ul>
                        </section>
                        <section className="menu-section menu-section--text">
                          <p>*Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions.&nbsp;</p>
                        </section>
                      </div>
                    </div>
                  </div>
                </section>
              )}
              {activeTab === 'drinks' && (
                <section id="drinks" className="tabs-panel tabs-panel--active tabs-panel--show" role="tabpanel" aria-labelledby="tab-drinks">
                  <div className="menu-description container-sm">
                    <p>It's not Drinking - It's Brunch!</p>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <section className="menu-section">
                          <div className="menu-section__header">
                            <h2 role="heading" aria-level={2}>THE ORIGINAL BLOODY MARYS</h2>
                          </div>
                          <ul>{renderMenuItems(drinkMenuItems)}</ul>
                        </section>
                        <section className="menu-section">
                          <div className="menu-section__header">
                            <h2 role="heading" aria-level={2}>MIMOSAS & SPRITZES</h2>
                          </div>
                          <ul>{renderMenuItems(mimosaMenuItems)}</ul>
                        </section>
                        <section className="menu-section">
                          <div className="menu-section__header">
                            <h2 role="heading" aria-level={2}>SPARKLING WINE</h2>
                            all of these wines feature female winemakers, owners, and/or cellar masters a.k.a. HBICs
                          </div>
                          <ul>{renderMenuItems(sparklingWineMenuItems)}</ul>
                        </section>
                      </div>
                      <div className="col-md-6">
                        <section className="menu-section">
                          <div className="menu-section__header">
                            <h2 role="heading" aria-level={2}>DRAFT BEERS</h2>
                          </div>
                          <ul>{renderMenuItems(draftBeers)}</ul>
                        </section>
                        <section className="menu-section">
                          <div className="menu-section__header">
                            <h2 role="heading" aria-level={2}>THE SODA FOUNTAIN</h2>
                          </div>
                          <ul>{renderMenuItems(sodaFountain)}</ul>
                        </section>
                        <section className="menu-section">
                          <div className="menu-section__header">
                            <h2 role="heading" aria-level={2}>CANNED & BOTTLED BEER</h2>
                          </div>
                          <ul>{renderMenuItems(cannedAndBottledBeer)}</ul>
                        </section>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </div>
          </div>
        </section>
      </main>

      <aside className="hospitality revealable revealed">
        <ul className="hospitality__list" role="presentation">
          <li className="hospitality__item">
            <a href="https://www.sagehospitality.com/restaurant-concepts/" target="_blank" rel="noopener" aria-describedby="audioeye_new_window_message">
              <img
                src="https://images.getbento.com/accounts/3c10e657dc5f2aa01b55394e8376688a/media/images/22322Hosp_logo.png?w=1200&fit=max&auto=compress,format|resize(786)"
                className="False"
                loading="lazy"
                alt="logo"
                style={{ objectPosition: 'none' }}
              />
            </a>
          </li>
        </ul>
      </aside>

      {/* <aside className="mobi-footer mobi-footer--sticky">
        <ul className="mobi-footer__list" role="presentation">
          <li className="mobi-footer__item">
            <button
              type="button"
              className="btn btn-brand btn-block"
              data-popup="inline"
              data-popup-src="#popup-reservations-form"
              tabIndex={0}
              data-bb-track="button"
              data-bb-track-on="click"
              data-bb-track-category="Reservations Trigger Button"
              data-bb-track-action="Click"
              data-bb-track-label="Callout, Footer"
            >
              Reservations
            </button>
          </li>
        </ul>
      </aside> */}
    </div>
  );
};

export default MenusSection;
