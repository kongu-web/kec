import "./CampusLife.css";
import { Link } from "react-router-dom";

import sports from "../../../assets/images/HomePage/sports.webp";
import itpark from "../../../assets/images/itpark.webp";
import clubs from "../../../assets/images/HomePage/clubs.webp";
import cultural from "../../../assets/images/HomePage/cultural.webp";
import music from "../../../assets/images/HomePage/music.webp";
import healthcare from "../../../assets/images/HomePage/healthcare.webp";
import gym from "../../../assets/images/HomePage/gym.webp";
import learning from "../../../assets/images/HomePage/learning.webp";
import hostel from "../../../assets/images/HomePage/hostel.webp";
import transport from "../../../assets/images/bus.webp";

const items = [
  {
    title: "Sports & Athletics",
    desc: "State-level facilities",
    img: sports,
    size: "small",
    path: "/facilities/physicaldept",
  },
  {
    title: "Cultural Events",
    desc: "Annual tech fest & symposiums",
    img: cultural,
    size: "small",
    path: "https://enthusia.kongu.edu/",
  },
  {
    title: "Learning Spaces",
    desc: "24/7 library access",
    img: learning,
    size: "small",
    path: "/facilities/library",
  },
  {
    title: "Student Clubs",
    desc: "50+ active clubs",
    img: clubs,
    size: "small",
    path: "/student-centric-activities",
  },
  {
    title: "World-Class Hostel Facilities",
    desc: "Separate hostels for boys & girls with modern amenities, Wi-Fi, and 24/7 security",
    img: hostel,
    size: "wide",
    path: "/facilities/hostelsandaccomodation",
  },
  {
    title: "Transport Facilities",
    desc: "Extensive bus network for easy commute",
    img: transport,
    size: "small",
    path: "/facilities/transport",
  },

  {
    title: "Music & Arts",
    desc: "Creative expression",
    img: music,
    size: "small",
    path: "https://enthusia.kongu.edu/",
  },
  {
    title: "Fitness Center",
    desc: "Modern gym facilities",
    img: gym,
    size: "small",
    path: "/facilities/physicaldept",
  },
  {
    title: "IT & Innovation Hub",
    desc: "State-of-the-art tech ecosystem",
    img: itpark,
    size: "small",
    path: "/coe",
  },
  {
    title: "Health Care",
    desc: "24/7 medical support",
    img: healthcare,
    size: "small",
    path: "/facilities/dispensary",
  },
];

export default function CampusLife() {
  return (
    <section className="campus-life">
      <span className="pill">Campus Life - Fun, Thrive & Learn @ KEC</span>
      <h2>Where energy ignites excellence and every moment fuels your future</h2>
      <p className="subtitle">
        Kongu Engineering College is a vibrant academic community where rigorous scholarship, innovation, and holistic development come together to shape future-ready professionals
      </p>

      <div className="gallery">
        {items.map((item, i) => (
          <Link
            to={item.path}
            key={i}
            className={`card ${item.size}`}
            style={{ backgroundImage: `url(${item.img})`, textDecoration: 'none' }}
          >
            <div className="overlay_home">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
