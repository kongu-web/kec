import React,{useEffect} from 'react'
import './NewsClippings.css';

// Basic component definitions
// const Section = () => <section className="section"></section>;
// const Navbar = () => <nav className="navbar"></nav>;
// const Footer = () => <footer className="footer"></footer>;


const NewsClippings = () => {
  
    useEffect(() => {
          window.location.href = "http://kongu.ac.in/kongu.ac.in/newspaper.php";
        }, []);

  return (
    <div>
        {/* <PageUnderDevelopement/> */}
        
    </div>
  )
};

export default NewsClippings;
