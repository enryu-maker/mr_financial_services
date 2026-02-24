import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "Best Loan & Financial Consultant in Nashik | M.R. Financial Services",
  description: "M.R. Financial Services in Nashik provides expert consultancy for Home Loans, Business Loans, Mortgage Loans, Real Estate, and Tax Compliance. Trusted by 2000+ happy clients.",
  keywords: ["Loan Consultant Nashik", "Home Loan Nashik", "Business Loan Nashik", "Financial Services Nashik", "Real Estate Nashik", "Tax Consultant Nashik", "Mortgage Loan Nashik", "M.R. Financial Services", "mrfinancialservice.com", "Instagram: mrfinancialservice"],
  authors: [{ name: "M.R. Financial Services" }],
  creator: "NerdTech",
  publisher: "M.R. Financial Services",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "M.R. Financial Services | Best Loan Consultant in Nashik",
    description: "Expert consultancy for Home Loans, Business Loans, and Real Estate in Nashik.",
    url: "https://mrfinancialservice.com", // official domain
    siteName: "M.R. Financial Services",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M.R. Financial Services Nashik",
    description: "Your trusted partner for all financial and property solutions in Nashik.",
    site: "@mrfinancialservice",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "M.R. Financial Services",
    "image": "https://mrfinancialservice.com/assets/MR_LOGO.png", // official domain image
    "description": "Leading financial and loan consultancy in Nashik, Maharashtra.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chandreshwari Society Shop No. 1, Opp. Maruti Mandir, Sanjiv Nagar, Ambad",
      "addressLocality": "Nashik",
      "addressRegion": "Maharashtra",
      "postalCode": "422010",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.9691",
      "longitude": "73.7252"
    },
    "url": "https://mrfinancialservice.com",
    "telephone": "+919326447847",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "$$"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
