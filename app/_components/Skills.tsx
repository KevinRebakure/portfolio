const skills = [
  { label: "Languages", value: "Java, TypeScript, JavaScript, Python" },
  { label: "Frameworks", value: "Spring Boot, Next.js, React, Express.js" },
  { label: "Focus", value: "System design" },
];

export default function Skills() {
  return (
    <div className="flex flex-col gap-5 leading-[1.4]">
      {skills.map((skill) => (
        <div
          key={skill.label}
          className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,140px),1fr))] gap-x-6 gap-y-1"
        >
          <div className="text-lg leading-[1.4] font-medium">{skill.label}</div>
          <div className="col-span-3">{skill.value}</div>
        </div>
      ))}
    </div>
  );
}
