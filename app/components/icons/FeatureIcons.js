export function BoltIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
                d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"
                fill="currentColor"
            />
        </svg>
    );
}

export function GemIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
                d="M6 3h12l3 5-9 13L3 8l3-5z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
            />
            <path d="M3 8h18M9 3l3 5-3 13M15 3l-3 5 3 13" stroke="currentColor" strokeWidth="1.4" />
        </svg>
    );
}

export function BulbIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
                d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.8 1 .8 1.6h5.4c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function MountainIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
                d="M3 19l6-10 4 6 2-3 6 7H3z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
            />
            <circle cx="17" cy="6" r="1.5" fill="currentColor" />
        </svg>
    );
}

export const iconMap = {
    bolt: BoltIcon,
    gem: GemIcon,
    bulb: BulbIcon,
    mountain: MountainIcon,
};