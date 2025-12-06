import React,{useEffect,useState} from "react";
import "./OnlinePayment.css";
import Section from "../../HomePage/Section/Section";
import Navbar from "../../HomePage/navbar/Navbar";
import ScrollToTopButton from "../../ScrollToTopButton";
import Footer from "../../HomePage/Footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faBus } from '@fortawesome/free-solid-svg-icons';
import Spinner from "../../Spinner";

const OnlinePayment = () => {
  const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
      }, []);
    
    
      return loading ? <Spinner /> : (
    <>
      <Section />
      <Navbar />
      <div className="online-payment-container">
        <h2 className="online-payment-title">Online Payments</h2>
        <div className="online-payment-content">
          <p>
            This online payment system is provided by Kongu Engineering College. Kongu Engineering College may update these terms from time to time and any changes will be effective immediately on being set out here. Please ensure you are aware of the current terms. The country of domicile for Kongu Engineering College is India.
          </p>
          <div className="payment-buttons">
            <a
                href="https://payments.billdesk.com/bdcollect/pay?p1=526&p2=17"
                target="_blank"
                rel="noopener noreferrer"
                className="payment-btn"
            >
                <FontAwesomeIcon icon={faUniversity} className="btn-icon" />
                &nbsp;Pay College Fees
            </a>
            {/* <a
                href="https://payments.billdesk.com/bdcollect/bd/koec/12312"
                target="_blank"
                rel="noopener noreferrer"
                className="payment-btn"
            >
                <FontAwesomeIcon icon={faBus} className="btn-icon" />
                &nbsp;Pay Bus Fees
            </a> */}
           </div>


          <h3>Terms & Conditions</h3>
          <p>
            Please read these terms carefully before using the online payment facility. Using the online payment facility on this website indicates that you accept these terms. If you do not accept these terms do not use this facility.
          </p>
          <p>All payments are subject to the following conditions:-</p>
          <ul>
            <li>The description of services of match making are specific to your need, when you log in with your unique password. Normally payment is required in advance (i.e. before you commence your activity).</li>
            <li>All Fees quoted are in Indian Rupees. The Kongu Engineering College reserves the right to change the fees at any time.</li>
            <li>Your payment will normally reach the Kongu Engineering College account to which you are making a payment within two working days.</li>
            <li>We cannot accept liability for a payment not reaching the correct Kongu Engineering College account due to you quoting an incorrect account number or incorrect personal details. Neither can we accept liability if payment is refused or declined by the credit/debit card supplier for any reason.</li>
            <li>If the card supplier declines payment the Kongu Engineering College is under no obligation to bring this fact to your attention. You should check with your bank/credit/debit card supplier that payment has been deducted from your account.</li>
            <li>In no event will the Kongu Engineering College be liable for any damages whatsoever arising out of the use, inability to use, or the results of use of this site, any websites linked to this site, or the materials or information contained at any or all such sites, whether based on warranty, contract, tort or any other legal theory and whether or not advised of the possibility of such damages.</li>
          </ul>

          <h3>Refund Policy</h3>
          <p>
            If the Customer leaves the Kongu Engineering College before they complete their service period, there shall be no entitlement to a refund of paid service fees.
          </p>
          <p>
            Refunds, if applicable, at the discretion of the Management, will only be made to the debit/credit card used for the original transaction. For the avoidance of doubt nothing in this Policy shall require the Kongu Engineering College to refund the Fees (or part thereof) unless such Fees (or part thereof) have previously been paid.
          </p>

          <h3>Privacy Policy</h3>
          <p>
            This Privacy Policy applies to all of the products, services and websites offered by Kongu Engineering College. Sometimes, we may post product specific privacy notices or Help Centre materials to explain our products in more detail.
          </p>
          <p>
            If you have any questions about this Privacy Policy, please feel free to contact us through our website or write to us
          </p>
          <p>Information we collect and how we use it for our Kongu Engineering College.</p>

          <h3>Changes to our Privacy Policy</h3>
          <p>
            Kongu Engineering College reserves the entire right to modify/amend/remove this privacy statement anytime and without any reason. Nothing contained herein creates or is intended to create a contract/agreement between Kongu Engineering College and any user visiting the Kongu Engineering College website or providing identifying information of any kind.
          </p>

          <h3>DND Policy</h3>
          <p>
            If you wish to stop any further sms/email alerts/contacts from our side, all you need to do is to send an email: <strong>registrar@kongu.ac.in</strong> with your mobile numbers and you will be excluded from the alerts list.
          </p>

          <h3>Contact</h3>
          <p>Email: mmurali@kongu.ac.in</p>
        </div>
     

      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default OnlinePayment;
