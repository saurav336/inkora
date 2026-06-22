import StatsGrid from "./StatsGrid";
import FeatureList from "./FeatureList";
import { stats, features } from "@/app/data/why-us";

export default function WhyUsSection() {
    return (
        <section className="why-us-section">
            <div className="why-us-top">
                <div className="why-us-heading-block">
                    <div className="why-us-eyebrow">
                        <span className="why-us-eyebrow-line" />
                        WHY INKORA
                    </div>
                    <h2 className="why-us-heading font-syne font-bold">
                        Built on craft. <em>Driven</em>
                        <em> by results.</em>
                    </h2>
                </div>

                <p className="why-us-copy">
                    We combine international-standard creative thinking with deep
                    local production capability — so every project ships on time, on
                    brief, on brand.
                </p>
            </div>

            <div className="why-us-bottom">
                <StatsGrid stats={stats} />
                <FeatureList features={features} />
            </div>
        </section>
    );
}