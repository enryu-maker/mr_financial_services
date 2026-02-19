export default function SectionHeading({
    title,
    highlight,
    subtitle,
    align = "center",
    className = ""
}) {
    const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

    return (
        <div className={`flex flex-col gap-4 mb-12 ${alignment} ${className}`}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 tracking-tight">
                {title} <span className="text-primary italic">{highlight}</span>
            </h2>
            {subtitle && (
                <p className="max-w-2xl text-lg text-gray-600 leading-relaxed text-center mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
