import { FileText, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import PageHero from '../components/PageHero.jsx';

const journalCategories = [
  'Biotechnology',
  'Clinical Nutrition',
  'Addiction and Recovery',
  'Community Medicine',
  'Gastroenterology and Digestive System',
  'Neurology and Neurological Sciences',
];

export default function SubmitManuscript() {
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const required = ['author', 'email', 'journal', 'type', 'message'];
    const missing = required.some((field) => !String(form.get(field) || '').trim());
    setStatus(missing ? 'Please complete all manuscript details.' : 'Manuscript details captured successfully.');
  };

  return (
    <>
      <PageHero eyebrow="Quick Links" title="Submit Manuscript">
        Select your journal and send your manuscript details for editorial screening and peer review.
      </PageHero>
      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-[1052px] gap-8 px-4 lg:grid-cols-[1fr_330px]">
          <form className="grid gap-4 border border-slate-200 bg-slate-50 p-5 sm:grid-cols-2" onSubmit={handleSubmit}>
            <input name="author" className="h-12 rounded-md border border-slate-200 bg-white px-4 font-semibold outline-none focus:border-teal-500" placeholder="Author name" />
            <input name="email" className="h-12 rounded-md border border-slate-200 bg-white px-4 font-semibold outline-none focus:border-teal-500" placeholder="Email address" type="email" />
            <select name="journal" className="h-12 rounded-md border border-slate-200 bg-white px-4 font-semibold text-slate-600 outline-none focus:border-teal-500">
              <option value="">Select journal</option>
              {journalCategories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
            <select name="type" className="h-12 rounded-md border border-slate-200 bg-white px-4 font-semibold text-slate-600 outline-none focus:border-teal-500">
              <option value="">Manuscript type</option>
              <option>Research Article</option>
              <option>Review Article</option>
              <option>Case Report</option>
              <option>Clinical Image</option>
              <option>Editorial</option>
            </select>
            <textarea name="message" className="min-h-32 rounded-md border border-slate-200 bg-white p-4 font-semibold outline-none focus:border-teal-500 sm:col-span-2" placeholder="Manuscript title or message" />
            {status && <p className="font-bold text-[#11496c] sm:col-span-2">{status}</p>}
            <button className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-teal-700 font-black text-white hover:bg-teal-800" type="submit">
              Submit
              <Send size={18} />
            </button>
          </form>
          <aside className="space-y-4">
            <div className="bg-[#0b456d] p-5 text-white">
              <Mail size={24} />
              <h2 className="mt-4 text-xl font-black">Submission Options</h2>
              <p className="mt-3 text-sm leading-6 text-white/85">Submit online, email your manuscript with cover letter, or use the journal-specific contact listed on each journal page.</p>
            </div>
            <div className="bg-[#f3f7f9] p-5">
              <FileText className="text-[#118bd7]" size={24} />
              <h2 className="mt-4 text-xl font-black text-[#11496c]">Accepted Manuscripts</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">Research articles, reviews, case reports, case series, clinical images, commentaries, letters, presentations and editorials.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
