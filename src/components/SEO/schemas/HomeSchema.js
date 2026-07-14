const HomeSchema = 
  {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.webibm.com/#organization",
      "name": "WebIBM",
      "url": "https://www.webibm.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.webibm.com/assets/images/logo.png"
      },
      "image": "https://www.webibm.com/assets/images/logo.png",
      "description": "WebIBM is a leading Digital Marketing Company in Delhi providing SEO, PPC, Website Designing, Web Development, Ecommerce Development, Mobile App Development, Web Hosting, and Digital Marketing Services.",
      "telephone": "+91-9971515539",
      "email": "info@webibm.com",
      "foundingLocation": {
        "@type": "Place",
        "name": "New Delhi, India"
      },
      "sameAs": [
        "https://www.facebook.com/",
        "https://www.instagram.com/",
        "https://www.linkedin.com/",
        "https://twitter.com/"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.webibm.com/#professionalservice",
      "name": "WebIBM",
      "url": "https://www.webibm.com/",
      "image": "https://www.webibm.com/assets/images/logo.png",
      "telephone": "+91-9971515539",
      "email": "info@webibm.com",
      "priceRange": "₹₹",
      "description": "WebIBM offers professional Digital Marketing, SEO, Website Designing, Web Development, Ecommerce Development, Mobile App Development, PPC, Social Media Marketing, and Web Hosting Services.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2/2 Block 2, Tilak Nagar Old Market",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110018",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.6365",
        "longitude": "77.0909"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "18:30"
        }
      ],
      "areaServed": [
        {
          "@type": "Country",
          "name": "India"
        }
      ],
      "serviceType": [
        "Digital Marketing Services",
        "SEO Services",
        "Website Designing",
        "Website Development",
        "Ecommerce Website Development",
        "Mobile App Development",
        "Google Ads Services",
        "Social Media Marketing",
        "Web Hosting Services"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.webibm.com/#website",
      "url": "https://www.webibm.com/",
      "name": "WebIBM",
      "description": "Best Digital Marketing Company in Delhi offering SEO, Website Designing, Web Development, PPC, Social Media Marketing, and Web Hosting Services.",
      "publisher": {
        "@id": "https://www.webibm.com/#organization"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.webibm.com/#webpage",
      "url": "https://www.webibm.com/",
      "name": "Best Digital Marketing Company in Delhi | WebIBM",
      "isPartOf": {
        "@id": "https://www.webibm.com/#website"
      },
      "about": {
        "@id": "https://www.webibm.com/#organization"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.webibm.com/assets/images/logo.png"
      },
      "datePublished": "2024-01-01",
      "dateModified": "2026-07-08",
      "inLanguage": "en-IN"
    }
  ]
}

export default HomeSchema;