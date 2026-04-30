import { CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';

const copyByTitle = {
  'Author Guidelines': [
    'Prepare manuscripts with clear title, author details, abstract, keywords, references and figures where applicable.',
    'Authors should submit original work and respond to editorial or reviewer comments during the publication process.',
    'Accepted article formats include research articles, review articles, case reports, clinical images and editorials.',
  ],
  'Join As A Reviewer': [
    'Reviewers support the peer-review process by evaluating scientific accuracy, novelty and relevance.',
    'Editorial participation helps maintain publication quality across MedDocs journals.',
    'Interested reviewers can share their area of expertise and contact information with the editorial office.',
  ],
  'Open Access': [
    'Open access allows readers to access scientific work without paid subscription barriers.',
    'This model supports global dissemination of medical and scientific research.',
    'Published work can be read and shared by researchers, physicians and students worldwide.',
  ],
  'Peer Review': [
    'Peer review helps uphold the quality and validity of published articles.',
    'Manuscripts are assigned based on academic expertise and evaluated before publication.',
    'The review process supports transparency, accuracy and editorial integrity.',
  ],
  Plagiarism: [
    'MedDocs checks submitted articles to ensure originality and proper attribution.',
    'Plagiarism includes using another author’s words, ideas or production without credit.',
    'Originality review protects authors, readers and the reputation of the journals.',
  ],
  'Publication Fee': [
    'Open access publishing follows an author-pay model after editorial acceptance.',
    'Fees support peer review management, publication workflow, hosting and permanent availability.',
    'Authors can contact the editorial office for current fee information and journal-specific details.',
  ],
};

export default function InfoPage({ eyebrow, title }) {
  const lines = copyByTitle[title] || ['MedDocs Publishers information page for authors, reviewers and readers.'];

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title}>
        MedDocs Publishers information page for authors, reviewers and readers.
      </PageHero>
      <section className="mx-auto max-w-[1052px] px-4 py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {lines.map((line) => (
            <div className="border border-slate-200 bg-white p-6 shadow-sm" key={line}>
              <CheckCircle2 className="text-teal-700" size={30} />
              <h2 className="mt-5 text-lg font-black text-[#11496c]">{title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{line}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
