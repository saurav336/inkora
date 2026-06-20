"use client";

import { useState, useMemo } from "react";
import FilterPills from "./FilterPills";
import ProjectCard from "./ProjectCard";
import { projects, filters } from "../data/projects";

export default function ProjectGallery() {
    const [activeFilter, setActiveFilter] = useState("All Work");

    const filteredProjects = useMemo(() => {
        if (activeFilter === "All Work") return projects;
        return projects.filter((p) => p.filter === activeFilter);
    }, [activeFilter]);

    const largeProjects = filteredProjects.filter((p) => p.size === "large");
    const smallProjects = filteredProjects.filter((p) => p.size === "small");

    return (
        <section className="gallery-section">
            <div className="gallery-header">
                <div>
                    <h1 className="gallery-heading font-syne">
                        Selected projects,
                        <br />
                        <em>crafted with intent.</em>
                    </h1>
                </div>
                <p className="gallery-subcopy">
                    A curated look at the brands, products, and campaigns we've helped
                    bring to life — across Nepal and globally.
                </p>
            </div>

            <FilterPills
                active={activeFilter}
                onChange={setActiveFilter}
                filters={filters}
            />

            {filteredProjects.length === 0 ? (
                <p className="gallery-empty">No projects in this category yet.</p>
            ) : (
                <>
                    {largeProjects.length > 0 && (
                        <div className="gallery-grid gallery-grid--large">
                            {largeProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    )}

                    {smallProjects.length > 0 && (
                        <div className="gallery-grid gallery-grid--small">
                            {smallProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    )}
                </>
            )}
        </section>
    );
}