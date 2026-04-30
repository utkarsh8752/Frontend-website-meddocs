import { BookOpenCheck, ClipboardCheck, FileText, Send } from 'lucide-react';
import { useMemo, useState } from 'react';
import PageHero from '../components/PageHero.jsx';

const journalCategories = [
  'Biotechnology',
  'Clinical Nutrition',
  'Addiction and Recovery',
  'Community Medicine',
  'Gastroenterology and Digestive System',
  'Neurology and Neurological Sciences',
];

const journalList = [
  'Annals of Anesthesia and Pain Medicine',
  'Annals of Bariatrics & Metabolic Surgery',
  'Annals of Biotechnology',
  'Annals of Breast Cancer',
  'Annals of Cardiology and Vascular Medicine',
  'Annals of Clinical Nutrition',
  'Annals of Dentistry and Oral Health',
  'Annals of Epidemiology and Public Health',
  'Annals of Gastroenterology and the Digestive System',
  'Annals of Gynecologic Cancer',
  'Annals of Infectious Diseases & Preventive Medicine',
  'Annals of Nursing and Health Care',
  'Annals of Obstetrics and Gynecology',
  'Annals of Ophthalmology and Visual Sciences',
  'Annals of Pediatrics',
  'Journal of Addiction & Recovery',
  'Journal of Case Reports and Medical Images',
  'Journal of Clinical Images',
  'Journal of Community Medicine',
  'Journal of Nanomedicine',
  'Journal of Nephrology and Hypertension',
  'Journal of Orthopedics and Muscular System',
  'Journal of Psychiatry and Behavioral Sciences',
  'Journal of Radiology and Medical Imaging',
  'Journal of Tuberculosis',
  'Neurology and Neurological Sciences: Open Access',
  'Nursing Research and Practice: Open Access',
  'Nanoscience and Nanotechnology: Open Access',
];

export default function Journals({ onNavigate }) {
  const [query, setQuery] = useState('');
  const filteredJournals = useMemo(
    () => journalList.filter((journal) => journal.toLowerCase().includes(query.trim().toLowerCase())),
    [query],
  );

  return (
    <>
      <PageHero eyebrow="Open Access Peer Reviewed Journals" title="Journals">
        Informative journals covering science, medicine and latest technology with peer-reviewed academic publishing.
      </PageHero>
      <section className="mx-auto max-w-[1052px] px-4 py-12">
        <div className="mb-6 flex flex-wrap gap-3">
          <a className="inline-flex items-center gap-2 bg-[#118bd7] px-4 py-2 text-sm font-bold uppercase text-white" href="/author-guidelines.html" onClick={(event) => onNavigate(event, '/author-guidelines.html')}>
            <FileText size={16} />
            Author Guidelines
          </a>
          <a className="inline-flex items-center gap-2 bg-[#082f49] px-4 py-2 text-sm font-bold uppercase text-white" href="/submit-manuscript.php" onClick={(event) => onNavigate(event, '/submit-manuscript.php')}>
            <Send size={16} />
            Submit Manuscript
          </a>
        </div>
        <p className="text-[14px] leading-7 text-slate-600">
          We are dedicated to publishing informative journals covering science, medicine and latest technology. All published journals are peer-reviewed academic and scholarly articles based on novel achievements and research findings in various fields.
        </p>
        <p className="mt-3 text-[14px] leading-7 text-slate-600">
          Articles are free to access without restrictions, supporting unrestricted distribution of scholarly findings and knowledge for researchers around the world.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_290px]">
          <div>
            <div className="flex flex-col gap-4 border-b border-slate-200 pb-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-2xl font-black text-[#11496c]">A to Z Journals</h2>
              <label className="w-full sm:max-w-xs">
                <span className="sr-only">Search journals</span>
                <input
                  className="h-11 w-full border border-slate-200 px-3 text-sm outline-none focus:border-[#118bd7]"
                  placeholder="Search journals..."
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </label>
            </div>
            <div className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {filteredJournals.map((journal) => (
                <a className="flex items-start gap-2 text-sm font-semibold text-slate-700 hover:text-[#118bd7]" href="/journals.html" key={journal}>
                  <BookOpenCheck className="mt-0.5 shrink-0 text-[#118bd7]" size={16} />
                  {journal}
                </a>
              ))}
            </div>
            {filteredJournals.length === 0 && <p className="mt-5 bg-slate-50 p-4 text-sm font-semibold text-slate-600">No journals found for “{query}”.</p>}
          </div>
          <aside className="space-y-4">
            <div className="bg-[#f3f7f9] p-5">
              <h3 className="text-lg font-black text-[#11496c]">Featured Areas</h3>
              <div className="mt-4 space-y-2">
                {journalCategories.map((category) => (
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-600" key={category}>
                    <ClipboardCheck size={15} className="text-[#118bd7]" />
                    {category}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0b456d] p-5 text-white">
              <h3 className="font-black">Open Access Publishing</h3>
              <p className="mt-3 text-sm leading-6 text-white/85">Free reader access, editorial review, quality control and permanent article availability.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
