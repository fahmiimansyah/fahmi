// components/ProjectCard.js
export default function ProjectCard({ title, desc }) {
  return (
    <div className="border p-4 rounded-lg shadow">
      <h2 className="font-bold">{title}</h2>
      <p>{desc}</p>
    </div>
  )
}