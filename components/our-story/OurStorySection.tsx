import React from 'react';

const OurStorySection: React.FC = () => {
  return (
    <section className="c-split c-split--vcenter revealable c-split-1 c-split-odd revealed">
      <div className="c-split__col c-split__col--empty">
        <div className="c-split__col-inner">
          <div 
            className="c-split__image" 
            role="presentation" 
            style={{ 
              backgroundImage: 'url("https://images.getbento.com/accounts/3c10e657dc5f2aa01b55394e8376688a/media/images/748160279-From-the-Hip-Photo.JPG?w=1200&fit=max&auto=compress,format")',
              backgroundPosition: 'none'
            }} 
            aria-hidden="true" 
            tabIndex={-1} 
          ></div>
        </div>
      </div>

      <div className="c-split__col">
        <div className="c-split__col-inner">
          <div className="c-split__content content">
            <h2 className="h2 c-split__heading">Our Story</h2>
            <p>Our journey began in March 2021, born from a vision to create a space that wasn’t just a restaurant, but a celebration of brunch culture. Located in the vibrant McGregor Square, adjacent to the bustling energy of Coors Field, The OG has quickly become a cornerstone of Denver’s dining scene.</p>
            <p>Originally conceptualized as a 1950’s diner, we embraced the nostalgic charm of the era, serving up classic lunches and dinners alongside weekend brunches. While we cherished our roots, we soon realized the true calling of our establishment lay in the unique allure of brunch - a meal that symbolizes relaxation, indulgence, and togetherness.</p>
            <p>We embraced this calling wholeheartedly and transformed The OG into a brunch-only destination. This bold move was driven by a passion to innovate and a desire to serve our community better. The change was more than just altering our menu; it was about aligning with the heart and soul of our space, our people, and the vibrant energy of Denver.</p>
            <p>Today, The OG stands as a testament to culinary creativity and communal spirit. Brunch is not just a meal and we are not just a restaurant; we are a gathering place for friends, families, and food lovers. Our kitchen is a playground of flavors, where classic meets contemporary, and every dish tells a story.</p>
            <p>Join us at The OG, where every brunch is an experience, every dish is a delight, and every guest is family. This is our story, a story of passion, innovation, and community. This is The Original - The OG of brunch in Denver.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
