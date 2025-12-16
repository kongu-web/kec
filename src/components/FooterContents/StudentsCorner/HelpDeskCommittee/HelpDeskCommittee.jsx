import React from 'react';
import './HelpDeskCommittee.css';
import Section from '../../../HomePage/Section/Section';
import Navbar from '../../../HomePage/navbar/Navbar';
import Footer from '../../../HomePage/Footer/Footer';
import ScrollToTopButton from '../../../ScrollToTopButton';
import '../../../../App.css';

const members = [
  {
    name: "Dr.P.N.Palanisamy",
    category: "All Services",
    mobile: "9488644390",
    email: "helpdesk@kongu.edu"
  },
  {
    name: "Dr.G.Murugesan",
    category: "Anti Ragging",
    mobile: "9865273774",
    email: "gmece@kongu.ac.in"
  },
  {
    name: "Dr.E.Gothai",
    category: "Grievances Redressal",
    mobile: "9842726627",
    email: "egothai@kongu.ac.in"
  },
  {
    name: "Dr.C.Duraisamy",
    category: "Grievances Redressal and Empowerment for SC/ST Students&Employees",
    mobile: "9715814284",
    email: "cd@kongu.ac.in"
  },
  {
    name: "Dr.R.Rajalaxmi",
    category: "Internal Complaints/Anti Sexual Harassment",
    mobile: "9486561199",
    email: "rrr@kongu.ac.in"
  },
  {
    name: "Dr.P.Vidhya Priya",
    category: "Students Counselling",
    mobile: "9787742193",
    email: "vidhyapriya@kongu.ac.in"
  },
  {
    name: "Dr.K.Kannan",
    category: "Anti-Drug/De-addiction",
    mobile: "9842823432",
    email: "kannank@kongu.ac.in"
  },
  {
    name: "Dr.R.Baskar",
    category: "Alumni Matters",
    mobile: "9842294264",
    email: "erbaskar@kongu.ac.in"
  },
  {
    name: "Dr.K.Kannan",
    category: "Hostel Matters",
    mobile: "9842823432",
    email: "kannank@kongu.ac.in"
  },
  {
    name: "Mr.R.Gokulakrishnan",
    category: "Admission Matters",
    mobile: "9443020583",
    email: "gokul@kongu.ac.in"
  },
  {
    name: "Dr.P.Natesan",
    category: "System and Website",
    mobile: "9443840665",
    email: "natesanp@kongu.ac.in"
  },
  {
    name: "Dr.A.R.Krishnaraja",
    category: "Campus Maintenance",
    mobile: "9843501835",
    email: "campusofficer@kongu.ac.in"
  },
  {
    name: "Mr.N.Subramanian",
    category: "Electrical Maintenance",
    mobile: "9842720471",
    email: "Ele_maintenance@kongu.ac.in"
  },
  {
    name: "Mr.K.Sakthivel",
    category: "Transport Maintenance",
    mobile: "9842720087",
    email: "transport@kongu.ac.in"
  },
  {
    name: "Mr.K.P.Murthy",
    category: "Security Services",
    mobile: "9842013680",
    email: "securityoffice@Kongu.ac.in"
  },
  {
    name: "Mr.N.Rajadurai",
    category: "Housekeeping",
    mobile: "9940987456",
    email: ""
  },
  {
    name: "Mr.M.Ponnarasan",
    category: "Gardening",
    mobile: "8012284714",
    email: ""
  }
];

const HelpDeskCommittee = () => {
  return (
    <>
      <Navbar />
      <Section />
      <div className="helpdesk-container">
        <h2 className='page-title'>Help Desk Committee</h2>
        <div className="table-wrapper">
          <table className="helpdesk-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Mobile</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={index}>
                  <td>{member.name}</td>
                  <td>{member.category}</td>
                  <td>{member.mobile}</td>
                  <td>{member.email || "—"}</td>
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

export default HelpDeskCommittee;
