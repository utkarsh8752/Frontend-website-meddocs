import { BookOpen, FileText, Send } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';

const ebookItems = [
  ["Alzheimer's Disease and Treatment", "alzheimer's-disease-and-treatment.jpg"],
  ['An eBook on Pharmaceutical Chemistry', 'an-ebook-on-pharmaceutical-chemistry.jpg'],
  ['An eBook on Vascular Diseases', 'an-ebook-on-vascular-diseases.jpg'],
  ['Importance & Applications of Nanotechnology', 'importance-applications-of-nanotechnology.jpg'],
  ['Principles of Modern Chemistry', 'principles-of-modern-chemistry.jpg'],
  ['Recent Trends in Biotechnology', 'recent-trends-in-biotechnology.jpg'],
  ['Research Trends of Microbiology', 'research-trends-of-microbiology.jpg'],
  ['Transfusion Medicine', 'transfusion-medicine.jpg'],
];

export default function Ebooks({ onNavigate }) {
  return (
    <>
      <PageHero eyebrow="MedDocs Publishers" title="eBooks">
        Academic e-books and chapter collections for medical, scientific and technology readers.
      </PageHero>
      <section className="mx-auto max-w-[1052px] px-4 py-12">
        <div className="mb-8 flex flex-wrap gap-3">
          <a className="inline-flex items-center gap-2 bg-[#118bd7] px-4 py-2 text-sm font-bold uppercase text-white" href="/author-guidelines.html" onClick={(event) => onNavigate(event, '/author-guidelines.html')}>
            <FileText size={16} />
            Author Guidelines
          </a>
          <a className="inline-flex items-center gap-2 bg-[#082f49] px-4 py-2 text-sm font-bold uppercase text-white" href="/submit-manuscript.php" onClick={(event) => onNavigate(event, '/submit-manuscript.php')}>
            <Send size={16} />
            Submit Chapter
          </a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ebookItems.map(([title, image]) => (
            <article className="group border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-xl" key={title}>
              <img className="h-[260px] w-full object-cover" src={`https://meddocsonline.org/img/books/${image}`} alt={title} />
              <h2 className="mt-4 min-h-[44px] text-[15px] font-black leading-5 text-[#11496c]">{title}</h2>
              <a className="mt-3 inline-flex items-center gap-2 bg-[#118bd7] px-3 py-2 text-[12px] font-bold uppercase text-white" href="/e-books.html" onClick={(event) => onNavigate(event, '/e-books.html')}>
                <BookOpen size={14} />
                View More
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
