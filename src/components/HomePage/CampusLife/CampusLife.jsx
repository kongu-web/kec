import "./CampusLife.css";

import sports from "../../../assets/images/HomePage/sports.jpg";
import recreation from "../../../assets/images/HomePage/recreation.jpg";
import clubs from "../../../assets/images/HomePage/clubs.jpg";
import dining from "../../../assets/images/HomePage/dining.png";
import cultural from "../../../assets/images/HomePage/cultural.jpg";
import music from "../../../assets/images/HomePage/music.jpg";
import healthcare from "../../../assets/images/HomePage/healthcare.png";
import gym from "../../../assets/images/HomePage/gym.jpg";
import learning from "../../../assets/images/HomePage/learning.png";
import hostel from "../../../assets/images/HomePage/hostel.jpg";

const items = [
  {
    title: "Sports & Athletics",
    desc: "State-level facilities",
    img: sports,
    size: "small",
  },
  {
    title: "Cultural Events",
    desc: "Annual tech fest & symposiums",
    img: cultural,
    size: "small",
  },
  {
    title: "Learning Spaces",
    desc: "24/7 library access",
    img: learning,
    size: "small",
  },
  {
    title: "Student Clubs",
    desc: "50+ active clubs",
    img: clubs,
    size: "small",
  },
  {
    title: "World-Class Hostel Facilities",
    desc: "Separate hostels for boys & girls with modern amenities, Wi-Fi, and 24/7 security",
    img: hostel,
    size: "wide",
  },
  {
    title: "Food & Dining",
    desc: "Multiple cafeterias with diverse cuisines",
    img: dining,
    size: "small",
  },

  {
    title: "Music & Arts",
    desc: "Creative expression",
    img: music,
    size: "small",
  },
  {
    title: "Fitness Center",
    desc: "Modern gym facilities",
    img: gym,
    size: "small",
  },
  {
    title: "Recreation",
    desc: "Green open spaces",
    img: recreation,
    size: "small",
  },
  {
    title: "Health Care",
    desc: "24/7 medical support",
    img: healthcare,
    size: "small",
  },
];

export default function CampusLife() {
  return (
    <section className="campus-life">
      <span className="pill">Campus Life - Fun, Thrive & Learn @ KEC</span>
      <h2>Where Learning Meets Living</h2>
      <p className="subtitle">
        Always buzzing with energy and enthusiasm, Kongu Engineering College is
        a dynamic hub of activity...
      </p>

      <div className="gallery">
        {items.map((item, i) => (
          <div
            key={i}
            className={`card ${item.size}`}
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="overlay">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
