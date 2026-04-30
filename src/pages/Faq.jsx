import { ChevronDown, FileQuestion } from 'lucide-react';
import { useState } from 'react';
import PageHero from '../components/PageHero.jsx';

const faqs = [
  ['About MedDocs International', 'MedDocs International publishes informative medical journals and services in science and medicine through quality content and innovative information services.'],
  ['What is Open Access?', 'Open Access allows readers to read and share content without registration or paid subscription. Internet access is enough to access the published content.'],
  ['Are your journals peer reviewed?', 'MedDocs follows peer review to uphold article quality. New manuscripts are assigned to editorial board members and external reviewers through a double-blind review method.'],
  ['Why publish with MedDocs Publishers?', 'Submissions are peer reviewed, handled transparently, promoted through academic networks, archived permanently and supported with regular author communication.'],
  ['Where can I see the list of journals?', 'The journals directory is available on the Journals route and contains MedDocs A-Z journal titles.'],
  ['What kind of manuscripts are accepted?', 'Research articles, review articles, case reports, case series, clinical images, commentary, letters, presentations and editorials are accepted.'],
  ['What is the page limit?', 'There is no page limit or word limit for articles.'],
  ['How can I submit the manuscript?', 'Authors can submit by email, through the online manuscript submission route, or through the unique journal email address listed on journal pages.'],
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <PageHero eyebrow="FAQ's" title="Frequently Asked Questions" />
      <section className="mx-auto max-w-[1052px] px-4 py-12">
        <div className="space-y-3">
          {faqs.map(([q, a], index) => (
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm" key={q}>
              <button
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                aria-expanded={openIndex === index}
              >
                <span className="flex items-center gap-3 font-black text-[#11496c]">
                  <FileQuestion className="shrink-0 text-teal-700" size={23} />
                  {q}
                </span>
                <ChevronDown className={`shrink-0 text-[#118bd7] transition ${openIndex === index ? 'rotate-180' : ''}`} size={20} />
              </button>
              {openIndex === index && <p className="border-t border-slate-100 px-5 pb-5 pt-4 leading-7 text-slate-600">{a}</p>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
