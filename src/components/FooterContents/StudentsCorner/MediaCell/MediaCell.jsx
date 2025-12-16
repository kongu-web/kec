import React from 'react';
import './MediaCell.css';
import Section from '../../../HomePage/Section/Section';
import Navbar from '../../../HomePage/navbar/Navbar';
import Footer from '../../../HomePage/Footer/Footer';
import ScrollToTopButton from '../../../ScrollToTopButton';
import '../../../../App.css';

const mediaMembers = [
  { name: 'Dr. G. Murugesan', category: 'Chief Coordinator' },
  { name: 'Dr. R. Mouleeshwaraprabu', category: 'Coordinator' },
  { name: 'Mr. T. S. Mukesh', category: 'Coordinator' },
  { name: 'Mr. K. Sampathkumar', category: 'Coordinator' }
];

const MediaCell = () => {
  return (
    <>
      <Navbar />
      <Section />
      <div className="media-container">
        <h2 className="page-title">Media Cell</h2>
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
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default MediaCell;
