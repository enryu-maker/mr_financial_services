import Link from "next/link";

export default function Button({
    children,
    href,
    variant = "primary",
    className = "",
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors duration-200";

    const variants = {
        primary: "bg-primary text-white hover:bg-opacity-90",
        secondary: "bg-secondary text-white hover:bg-opacity-90",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        ghost: "text-primary hover:bg-surface-cool",
        white: "bg-white text-primary hover:bg-gray-100"
    };

    const combinedClassName = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClassName} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
}
