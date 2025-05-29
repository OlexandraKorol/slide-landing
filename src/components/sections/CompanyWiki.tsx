import React, { useState } from "react";
import "./CompanyWiki.css";
import laptopImg from "../../assets/company_wiki.png";

const sidebarItems = [
  "Wiki",
  "Projects",
  "Processes",
  "Onboarding",
  "Meetings",
  "Team updates",
  "1:1s",
  "User research",
  "More →"
];

export const CompanyWiki = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="company-wiki">
      <p className="company-wiki__title">A home for all of your knowledge.</p>
      <p className="company-wiki__subtitle">
        Project, knowledge base, process – bring all your work to life in Docs.
      </p>
      <div className="company-wiki__content">
        <aside className="company-wiki__sidebar">
          <ul className="company-wiki__sidebar-list">
            {sidebarItems.map((item, idx) => (
              <li key={item}>
                <button
                  className={
                    "company-wiki__sidebar-btn" +
                    (active === idx ? " company-wiki__sidebar-btn--active" : "")
                  }
                  onClick={() => setActive(idx)}
                  type="button"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <div className="company-wiki__mockup">
          <div className="company-wiki__laptop">
            <img
              src={laptopImg}
              alt="Laptop mockup"
              className="company-wiki__laptop-frame"
            />
          </div>
        </div>
      </div>
    </section>
  );
};