import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import type { FAQItem } from "./SEOHead";

interface FAQSectionProps {
  faqs: FAQItem[];
  /** Optional heading override (default "Frequently Asked Questions") */
  heading?: string;
}

export default function FAQSection({
  faqs,
  heading = "Frequently Asked Questions",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (faqs.length === 0) return null;

  return (
    <section className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle size={24} className="text-primary-600" />
        <h2 className="text-2xl font-bold text-gray-900">{heading}</h2>
      </div>
      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between gap-4 p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                aria-expanded={isOpen}
              >
                <h3
                  className="text-base font-semibold text-gray-900"
                  itemProp="name"
                >
                  {faq.question}
                </h3>
                {isOpen ? (
                  <ChevronUp size={20} className="flex-shrink-0 text-gray-500" />
                ) : (
                  <ChevronDown size={20} className="flex-shrink-0 text-gray-500" />
                )}
              </button>
              {isOpen && (
                <div
                  className="p-4 bg-white border-t border-gray-200"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div
                    className="text-gray-700 leading-relaxed prose prose-sm max-w-none"
                    itemProp="text"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
