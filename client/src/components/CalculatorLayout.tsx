import { ReactNode, useState } from "react";
import { Code, Share2, BookOpen, ChevronDown, ChevronUp } from "lucide-react";

interface Props {
  title: string;
  description: string;
  children: ReactNode;
  results?: ReactNode;
  chart?: ReactNode;
  educational?: ReactNode;
  slug: string;
}

export default function CalculatorLayout({ title, description, children, results, chart, educational, slug }: Props) {
  const [showEmbed, setShowEmbed] = useState(false);
  const [showEducational, setShowEducational] = useState(true);
  const [copied, setCopied] = useState(false);

  const siteUrl = typeof window !== "undefined" ? window.location.origin : "";
  const embedCode = `<iframe src="${siteUrl}/embed/${slug}" width="100%" height="500" frameborder="0" style="border:1px solid #e5e7eb;border-radius:8px;max-width:600px;"></iframe>\n<p style="font-size:12px;color:#6b7280;margin-top:4px;">Powered by <a href="${siteUrl}/${slug}" target="_blank" rel="noopener" style="color:#2563eb;">CalcHub</a></p>`;

  const copyEmbed = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            {children}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setShowEmbed(!showEmbed)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Code size={16} />
              Embed
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(`${siteUrl}/${slug}`);
              }}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Share2 size={16} />
              Share
            </button>
          </div>

          {showEmbed && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Embed this calculator on your website</h3>
              <pre className="bg-gray-900 text-green-400 text-xs p-3 rounded-lg overflow-x-auto mb-3 whitespace-pre-wrap">
                {embedCode}
              </pre>
              <button
                onClick={copyEmbed}
                className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
              >
                {copied ? "Copied!" : "Copy Code"}
              </button>
            </div>
          )}
        </div>

        <div className="lg:col-span-3 space-y-6">
          {results && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Results</h2>
              {results}
            </div>
          )}
          {chart && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              {chart}
            </div>
          )}
        </div>
      </div>

      {educational && (
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200">
          <button
            onClick={() => setShowEducational(!showEducational)}
            className="w-full flex items-center justify-between p-6 text-left"
          >
            <div className="flex items-center gap-2">
              <BookOpen size={20} className="text-primary-600" />
              <h2 className="text-xl font-semibold text-gray-900">Learn More</h2>
            </div>
            {showEducational ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
          </button>
          {showEducational && (
            <div className="px-6 pb-6 prose prose-gray max-w-none">
              {educational}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
