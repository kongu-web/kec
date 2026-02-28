import React from 'react';
import './MediaCell.css';
import Section from '../../../HomePage/Section/Section';
import Navbar from '../../../HomePage/navbar/Navbar';
import Footer from '../../../HomePage/Footer/Footer';

const mediaMembers = [
  { name: 'Dr. P. Natesan', category: 'Chief Coordinator' },
  { name: 'Dr.P. C. Murugan', category: 'Member' },
  { name: 'Dr. T. Abirami', category: 'Member' },
  { name: 'Ms. V. Priyanka', category: 'Member' }
];

const MediaCell = () => {
  return (
    <>
      <Navbar />
      <Section />
      <div className="media-container">
        <h2> Media Cell</h2>
        <div className="table-wrapper">
          <table className="media-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {mediaMembers.map((member, index) => (
                <tr key={index}>
                  <td>{member.name}</td>
                  <td>{member.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MediaCell;
