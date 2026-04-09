import { useEffect } from "react";
import { getCalculator, CATEGORIES } from "@/lib/calculator-registry";

interface SEOHeadProps {
  title: string;
  description: string;
  slug?: string;
  type?: "calculator" | "category" | "home";
}

const DOMAIN = "https://calculator-hub-production.up.railway.app";

export default function SEOHead({
  title,
  description,
  slug,
  type = "calculator",
}: SEOHeadProps) {
  useEffect(() => {
    // Set document title
    document.title = `${title} | CalcHub - Free Online Calculators`;

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Set Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", `${title} | CalcHub`);
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:title");
      meta.content = `${title} | CalcHub`;
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:description");
      meta.content = description;
      document.head.appendChild(meta);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    const url = slug
      ? `${DOMAIN}/${slug}`
      : DOMAIN;
    if (ogUrl) {
      ogUrl.setAttribute("content", url);
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:url");
      meta.content = url;
      document.head.appendChild(meta);
    }

    const ogType = document.querySelector('meta[property="og:type"]');
    const ogTypeValue = type === "home" ? "website" : "article";
    if (ogType) {
      ogType.setAttribute("content", ogTypeValue);
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:type");
      meta.content = ogTypeValue;
      document.head.appendChild(meta);
    }

    // Set Twitter Card tags
    const twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (twitterCard) {
      twitterCard.setAttribute("content", "summary_large_image");
    } else {
      const meta = document.createElement("meta");
      meta.name = "twitter:card";
      meta.content = "summary_large_image";
      document.head.appendChild(meta);
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", `${title} | CalcHub`);
    } else {
      const meta = document.createElement("meta");
      meta.name = "twitter:title";
      meta.content = `${title} | CalcHub`;
      document.head.appendChild(meta);
    }

    const twitterDescription = document.querySelector(
      'meta[name="twitter:description"]'
    );
    if (twitterDescription) {
      twitterDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "twitter:description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Set canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", url);
    } else {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = url;
      document.head.appendChild(link);
    }

    // Remove previously injected JSON-LD scripts
    const previousScripts = document.querySelectorAll(
      'script[type="application/ld+json"][data-seo-jsonld="true"]'
    );
    previousScripts.forEach((script) => script.remove());

    // Inject JSON-LD structured data based on page type
    const jsonldScripts: string[] = [];

    if (type === "calculator" && slug) {
      // SoftwareApplication schema for calculator
      const softwareApplicationSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: title,
        description: description,
        url: url,
        applicationCategory: "UtilityApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      };
      jsonldScripts.push(JSON.stringify(softwareApplicationSchema));

      // BreadcrumbList schema for calculator
      const calculator = getCalculator(slug);
      if (calculator) {
        const category = CATEGORIES.find((c) => c.id === calculator.category);
        if (category) {
          const breadcrumbSchema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: DOMAIN,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: category.label,
                item: `${DOMAIN}/category/${category.id}`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: title,
              },
            ],
          };
          jsonldScripts.push(JSON.stringify(breadcrumbSchema));
        }
      }
    } else if (type === "category" && slug) {
      // Extract category ID from slug (e.g., "category/finance" -> "finance")
      const categoryId = slug.split("/").pop();

      // BreadcrumbList schema for category
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: DOMAIN,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: title,
          },
        ],
      };
      jsonldScripts.push(JSON.stringify(breadcrumbSchema));

      // CollectionPage schema for category
      const collectionPageSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: title,
        description: description,
        url: url,
      };
      jsonldScripts.push(JSON.stringify(collectionPageSchema));
    }

    // Create and append JSON-LD script tags
    jsonldScripts.forEach((schemaJson) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-jsonld", "true");
      script.textContent = schemaJson;
      document.head.appendChild(script);
    });

    // Cleanup function to remove injected scripts
    return () => {
      const scripts = document.querySelectorAll(
        'script[type="application/ld+json"][data-seo-jsonld="true"]'
      );
      scripts.forEach((script) => script.remove());
    };
  }, [title, description, slug, type]);

  return null;
}
