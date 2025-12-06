import React from 'react';
import './Cards.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faRankingStar,
  faStar,
  faAward,
  faTowerCell,
  faNewspaper,
} from '@fortawesome/free-solid-svg-icons';

const CardData = [
  { logo: <FontAwesomeIcon icon={faBuilding} color="#e06563" />, title: 'Placements', path: '/placement' },
  { logo: <FontAwesomeIcon icon={faRankingStar} color="#e06563" />, title: 'Rankings', path: '/rankings' },
  { logo: <FontAwesomeIcon icon={faStar} color="#e06563" />, title: 'Achievements', path: '/achievements' },
  { logo: <FontAwesomeIcon icon={faAward} color="#e06563" />, title: 'Awards', path: '/awards' },
  { logo: <FontAwesomeIcon icon={faTowerCell} color="#e06563" />, title: 'Updates', path: '/updates' },
  { logo: <FontAwesomeIcon icon={faNewspaper} color="#e06563" />, title: 'News Clippings', path: '/news-clippings' },// /news-clippings
];

const Cards = () => {
  const navigate = useNavigate();

  return (
    <div className="kec-cards-container">
      {CardData.map((card, index) => (
        <div
          className="kec-card"
          key={index}
          onClick={() => navigate(card.path)}
          style={{ cursor: 'pointer' }}
        >
          <div className="kec-card-logo">{card.logo}</div>
          <div className="kec-card-title">{card.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
