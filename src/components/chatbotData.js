const chatbotData = {
  start: {
    message: "👋 Welcome to WEBIBM!\nHow can we help you today?",
    options: [
      {
        label: "🌐 Website Development",
        next: "website",
      },
      {
        label: "📱 Mobile App Development",
        next: "mobile",
      },
      {
        label: "📈 Digital Marketing",
        next: "marketing",
      },
      {
        label: "💰 Pricing",
        next: "pricing",
      },
      {
        label: "📞 Contact Us",
        next: "contact",
      },
    ],
  },

  website: {
    message: "What do you want to know?",
    options: [
      {
        label: "Technologies",
        next: "technology",
      },
      {
        label: "Timeline",
        next: "timeline",
      },
      {
        label: "Cost",
        next: "cost",
      },
      {
        label: "⬅ Back",
        next: "start",
      },
    ],
  },

  technology: {
    message:
      "We use React, Laravel, PHP, Node.js, MongoDB, MySQL, WordPress, Shopify and Tailwind CSS.",
    options: [
      {
        label: "⬅ Back",
        next: "website",
      },
    ],
  },

  timeline: {
    message:
      "Landing Page: 3-5 Days\nBusiness Website: 1-2 Weeks\nE-commerce Website: 3-6 Weeks",
    options: [
      {
        label: "⬅ Back",
        next: "website",
      },
    ],
  },

  cost: {
    message:
      "Every project is different.\nClick below to request a quotation.",
    options: [
      {
        label: "📩 Get Quote",
        action: "quote",
      },
      {
        label: "⬅ Back",
        next: "website",
      },
    ],
  },

  mobile: {
    message:
      "We develop Android, iOS and Cross-platform mobile applications.",
    options: [
      {
        label: "⬅ Main Menu",
        next: "start",
      },
    ],
  },

  marketing: {
    message:
      "We provide SEO, Google Ads, Social Media Marketing and Branding.",
    options: [
      {
        label: "⬅ Main Menu",
        next: "start",
      },
    ],
  },

  pricing: {
    message:
      "Pricing depends on project requirements.\nClick below for a free estimate.",
    options: [
      {
        label: "📩 Request Pricing",
        action: "pricing",
      },
      {
        label: "⬅ Main Menu",
        next: "start",
      },
    ],
  },

  contact: {
    message:
      "📧 info@webibm.com\n📞 +91-9876543210",
    options: [
      {
        label: "🌐 Visit Website",
        action: "website",
      },
      {
        label: "⬅ Main Menu",
        next: "start",
      },
    ],
  },
};

export default chatbotData;