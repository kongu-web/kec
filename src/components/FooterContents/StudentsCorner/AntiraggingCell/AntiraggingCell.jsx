import React from 'react';
import './AntiraggingCell.css';
import Section from "../../../HomePage/Section/Section";
import Navbar from "../../../HomePage/navbar/Navbar";
import ScrollToTopButton from "../../../ScrollToTopButton";
import Footer from "../../../HomePage/Footer/Footer";
import '../../../../App.css';

const antiraggingData = [
  { name: 'Dr. R. Parameshwaran (Principal)', category: 'Chairman', phone: '9942820583' },
  { name: 'Dr. G. Murugesan (ECE)', category: 'Member', phone: '9865273774' },
  { name: 'Dr. S.Shanthi (CSE)', category: 'Member', phone: '9942911551' },
  { name: 'Dr. P.N. Palanisamy (Chemistry)', category: 'Member', phone: '9715508383' },
  { name: 'Inspector of Police, Perundurai', category: 'Police Department', phone: '4294220548' },
  { name: 'Tahsildar, Perundurai', category: 'Taluk Office', phone: '4294220577' },
  { name: 'Ms. G. Priya Naveen', category: 'Official of NGO', phone: '9047036969' },
  { name: 'Mr. P. Ravichandran, Dhinamani', category: 'Member from Print Media', phone: '9842914895' },
  { name: 'Mr. K. Sakthivel', category: 'Parent representative', phone: '9842720087' },
  { name: 'Mr. V. Thangavelu', category: 'Non Teaching representative', phone: '9698770597' },
  { name: 'Mr. V. Kathirvel, 22CER036', category: 'Student representative', phone: '9965004018' },
  { name: 'Ms. Dhiyabharathi Balan, 23ECR052', category: 'Student representative', phone: '9047531785' },
];

const AntiraggingCell = () => {
  return (
    <>
      <Section />
      <Navbar />
      <div className="antiragging-container">
        <h1 className="page-title">Anti-Ragging Cell</h1>
        <p className="antiragging-info">Students may contact the following committee in case of any ragging activity:</p>
        <div className="antiragging-table-wrapper">
          <table className="antiragging-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Mobile Number</th>
              </tr>
            </thead>
            <tbody>
              {antiraggingData.map((person, index) => (
                <tr key={index}>
                  <td>{person.name}</td>
                  <td>{person.category}</td>
                  <td>{person.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default AntiraggingCell;
