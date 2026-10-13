import Blueprint from "./Blueprint";

const skills = [
  { label: "Languages", value: "Java, TypeScript, JavaScript, Python" },
  { label: "Frameworks", value: "Spring Boot, Next.js, React, Express.js" },
  { label: "Focus", value: "System design" },
];

export default function Skills() {
  return (
    <Blueprint className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
      {skills.map((skill) => (
        <div key={skill.label} className="px-6 py-5 leading-normal">
          <div className="mb-1 text-[13px] text-accent-700">{skill.label}</div>
          {skill.value}
        </div>
      ))}
    </Blueprint>
  );
}
