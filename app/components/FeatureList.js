import { iconMap } from "@/app/components/icons/FeatureIcons";

export default function FeatureList({ features }) {
    return (
        <div className="feature-list">
            {features.map((feature) => {
                const Icon = iconMap[feature.icon];
                return (
                    <div className="feature-card" key={feature.id}>
                        <div className="feature-icon">
                            <Icon />
                        </div>
                        <div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}