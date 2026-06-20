"use client";

export default function FilterPills({ active, onChange, filters }) {
    return (
        <div className="filter-pills">
            {filters.map((f) => (
                <button
                    key={f}
                    className={`filter-pill ${active === f ? "is-active" : ""}`}
                    onClick={() => onChange(f)}
                    type="button"
                >
                    {f}
                </button>
            ))}
        </div>
    );
}