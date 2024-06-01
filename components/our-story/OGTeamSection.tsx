import React from 'react';

const OGTeamSection: React.FC = () => {
  return (
    <section className="content container">
      <div className="revealable">
        <h2 className="h1 card-listing-heading">Our OG Crew</h2>
      </div>
      <ul className="card-listing row">
        <li className="card col-md-6 col-lg-4 card--cols-three revealable">
          <a className="card__btn" data-popup="team" href="/team-member/edward-de-decker/">
            <h3 className="h2 card__heading" role="heading" aria-level={2}>Edward de Decker</h3>
            <div className="h4 card__subheading" role="presentation">General Manager</div>
          </a>
        </li>
        <li className="card col-md-6 col-lg-4 card--cols-three revealable">
          <a className="card__btn" data-popup="team" href="/team-member/stephen-greer/">
            <h3 className="h2 card__heading" role="heading" aria-level={2}>Stephen Greer</h3>
            <div className="h4 card__subheading" role="presentation">Executive Chef</div>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default OGTeamSection;
