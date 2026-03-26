import { skills } from "../data";
import { SectionHeader } from "./About";
import { Pill } from "./Experience";

const SLATE_200 = "#e2e8f0";

export default function Skills() {
  return (
    <div>
      <SectionHeader>Tech Stack</SectionHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "32px", marginTop: "24px" }}>
        {skills.map((category, i) => (
          <div key={i}>
            <h3 style={{ fontSize: "1rem", fontWeight: 600, color: SLATE_200, marginBottom: "16px", letterSpacing: "0.025em" }}>
              {category.title}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {category.items.map(item => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
