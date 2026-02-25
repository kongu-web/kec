import "./RecruitingPartners.css";
import { companyImages } from "../../../utils/companyImages";

export default function RecruitingPartners() {
  const coreEngineering = companyImages["Core Engineering"];
  const itSoftware = companyImages["IT & Software"];
  const management = companyImages["Management"];

  return (
    <section className="partners">
      <span className="pill">100+ Top-Notch Companies @ KEC</span>
      <h2>Our Recruiting Partners</h2>
      <p>
        Distinguished global and national companies partner with KEC year after year, drawn by the proven capabilities and professional caliber of our graduates
      </p>

      <div className="scroll-wrapper">
        {/* Row 1 – Core Engineering */}
        <div className="scroll-row scroll-right">
          {[...coreEngineering, ...coreEngineering].map((img, i) => (
            <div className="logo-card" key={`core-${i}`}>
              <img src={img} alt="Core Engineering Company" />
            </div>
          ))}
        </div>

        {/* Row 2 – IT & Software */}
        <div className="scroll-row scroll-left">
          {[...itSoftware, ...itSoftware].map((img, i) => (
            <div className="logo-card" key={`it-${i}`}>
              <img src={img} alt="IT & Software Company" />
            </div>
          ))}
        </div>

        {/* Row 3 – Management */}
        <div className="scroll-row scroll-right">
          {[...management, ...management].map((img, i) => (
            <div className="logo-card" key={`mgmt-${i}`}>
              <img src={img} alt="Management Company" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
