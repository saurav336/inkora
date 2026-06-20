import Link from "next/link";

export default function ProjectCard({ project }) {
    return (
        <Link
            href={`/work/${project.id}`}
            className={`project-card project-card--${project.size}`}
        >
            <div className="project-card-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-card-overlay" />
            </div>

            {project.size === "large" && (
                <div className="project-card-info">
          <span className="project-card-eyebrow">
            {project.category.toUpperCase()}
          </span>
                    <h3 className="project-card-title">{project.title}</h3>
                    <span className="project-card-arrow" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
            </svg>
          </span>
                </div>
            )}
        </Link>
    );
}