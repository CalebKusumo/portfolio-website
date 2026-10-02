import Link from 'next/link';

export default function PortfolioPdfPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-36 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-8">
          <div>
            <p className="font-mono text-xs tracking-[0.45em] uppercase text-blue-500 mb-4">
              Portfolio // Complete Edition
            </p>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Full Site <span className="text-outline italic text-white">PDF</span>
            </h1>
            <p className="font-mono text-xs tracking-widest uppercase text-gray-500 mt-5">
              Projects, experience, skills & contact // One continuous document
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/portfolio.pdf"
              download="Caleb-Kusumo-Portfolio.pdf"
              className="inline-flex items-center justify-center border border-blue-500 bg-blue-600 px-6 py-4 font-mono text-xs tracking-[0.25em] uppercase text-white hover:bg-blue-500 transition-colors"
            >
              Download PDF
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center border border-white/20 px-6 py-4 font-mono text-xs tracking-[0.25em] uppercase text-gray-300 hover:border-white hover:text-white transition-colors"
            >
              Back to site
            </Link>
          </div>
        </div>

        <div className="border border-white/15 bg-white/[0.03] p-2 md:p-3">
          <iframe
            src="/portfolio.pdf#view=FitH"
            title="Caleb Kusumo complete portfolio PDF"
            className="block h-[72vh] min-h-[560px] w-full bg-white md:h-[78vh]"
          />
        </div>
        <p className="font-mono text-[10px] tracking-widest text-gray-500 uppercase mt-4">
          If the document preview is unavailable, use Download PDF above.
        </p>
      </div>
    </main>
  );
}
