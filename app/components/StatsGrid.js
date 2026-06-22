export default function StatsGrid({ stats }) {
    return (
        <div className="stats-grid">
            {stats.map((stat) => (
                <div className="stat-cell" key={stat.label}>
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                </div>
            ))}
        </div>
    );
}