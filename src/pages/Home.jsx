import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const articles = [
  {
    title:
      'Effects of SGLT2 Inhibitor on Neurohormonal Activity and Electrolyte Management in an Elderly Patient with Type 2 Diabetes Mellitus and Acute Heart Failure: A Case Report',
    author: 'Hajime Kataoka',
    journal: 'Annals of Cardiology and Vascular Medicine',
    issn: '2639-4383',
    abstract:
      'This case report highlights clinical observations around SGLT2 inhibitor therapy, neurohormonal activity, electrolyte management, type 2 diabetes mellitus, and acute heart failure in an elderly patient.',
  },
  {
    title: 'A Review of the Gastrointestinal Effects Associated with COVID-19 Infections',
    author: 'Bailey Reid; Allyson L Spence; Cassandra Stroup',
    journal: 'Annals of Gastroenterology and the Digestive System',
    issn: '2637-4501',
    abstract:
      'This review summarizes gastrointestinal effects associated with COVID-19 infections and presents clinically relevant discussion for physicians, researchers, and digestive system specialists.',
  },
  {
    title: 'Nanoparticles Mitigate Retinal Pigment Epithelium Death Using APRE19 Cell Model',
    author: 'Eric Dahl; Nikolaos E Efstathiou; Amit K Roy',
    journal: 'Journal of Nanomedicine',
    issn: '2578-8760',
    abstract:
      'This article explores nanoparticle-mediated protection using an APRE19 retinal pigment epithelium cell model, with attention to cell-death mitigation and nanomedicine applications.',
  },
];

const journals = [
  ['Biotechnology', 'biotechnology', 'The term biotechnology is said as a technological application that modifies the products or processes for specific use.'],
  ['Clinical Nutrition', 'clinical-nutrition', 'Clinical nutrition simply aims to maintain healthy energy balance in patients and provide nutrition support.'],
  ['Addiction and Recovery', 'addiction', 'Addiction is one of the major issues across the globe. There are several factors which lead to addiction.'],
  ['Community Medicine', 'community', 'Community medicine is a discipline of medicine which deals with health issues of a community.'],
  ['Gastroenterology and Digestive System', 'gastroenterology', 'Gastroenterology majorly focuses on the digestive system of humans and related disorders.'],
  ['Neurology and Neurological Sciences', 'neurology', 'Neurology is a medical discipline which teaches about investigations and treatment of nervous system disorders.'],
];

const books = [
  "alzheimer's-disease-and-treatment.jpg",
  'an-ebook-on-pharmaceutical-chemistry.jpg',
  'an-ebook-on-vascular-diseases.jpg',
  'importance-applications-of-nanotechnology.jpg',
  'principles-of-modern-chemistry.jpg',
  'recent-trends-in-biotechnology.jpg',
  'research-trends-of-microbiology.jpg',
  'transfusion-medicine.jpg',
];

export default function Home({ onNavigate }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <>
      <section className="bg-[#0b456d] pt-[44px] text-white">
        <div className="mx-auto grid max-w-[1052px] gap-7 px-4 py-7 md:grid-cols-[315px_1fr]">
          <div className="relative h-[321px] overflow-hidden bg-white">
            <img className="h-full w-full object-cover" src="https://meddocsonline.org/img/md-journals.jpg" alt="MedDocs International Open Access Journals" />
            <a
              className="absolute bottom-5 left-3 bg-[#1d7fc7] px-3 py-2 text-[12px] uppercase text-white hover:bg-[#086aa8]"
              href="/journals.html"
              onClick={(event) => onNavigate(event, '/journals.html')}
            >
              MedDocs Publishers - Journals
            </a>
          </div>

          <div className="min-w-0">
            <h1 className="mb-4 text-[24px] font-black uppercase leading-none text-white">Articles</h1>
            <div>
              {articles.map((article, index) => (
                <article className="border-b border-[#2b6688] py-2 first:pt-0" key={article.title}>
                  <button className="block w-full text-left text-[16px] font-black leading-[18px] text-white hover:text-cyan-200" type="button" onClick={() => setSelectedArticle(article)}>
                    {article.title}
                  </button>
                  <p className="mt-2 text-[12px] italic text-[#45b6df]">{article.author}</p>
                  <a
                    className="mt-2 inline-flex rounded-[4px] bg-[#00004c] px-2.5 py-1 text-[12px] uppercase text-white hover:bg-black"
                    href="/journals.html"
                    onClick={(event) => onNavigate(event, '/journals.html')}
                  >
                    {article.journal} (ISSN: {article.issn})
                  </a>
                  {index === 0 && (
                    <a className="ml-0 mt-3 hidden items-center gap-1 text-xs font-bold text-cyan-200 lg:inline-flex" href="/journals.html" onClick={(event) => onNavigate(event, '/journals.html')}>
                      Read More
                      <ArrowRight size={13} />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="h-[4px] bg-[#108bd8]" />
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-[1052px] gap-8 px-4 md:grid-cols-[1fr_1.05fr]">
          <div>
            <h2 className="text-[22px] font-bold text-[#11496c]">MedDocs Publishers</h2>
            <p className="mt-4 text-[14px] leading-7 text-slate-600">
              The journals, e-books and conferences are being published and organized in order to spread the information on the latest technological and scientific researches among the core group with the aim of disseminating information for the betterment of mankind.
            </p>
            <a className="mt-5 inline-flex bg-[#118bd7] px-5 py-2 text-[12px] font-bold uppercase text-white hover:bg-[#086aa8]" href="/about-us.html" onClick={(event) => onNavigate(event, '/about-us.html')}>
              More Info
            </a>
          </div>
          <div className="grid gap-5 md:grid-cols-[1fr_170px]">
            <div>
              <p className="text-[13px] font-bold uppercase text-[#118bd7]">Welcome to meddocs</p>
              <h2 className="mt-1 text-[28px] font-black uppercase text-[#11496c]">About Us</h2>
              <p className="mt-3 text-[14px] leading-7 text-slate-600">
                MedDocs Publishers is a very well-dedicated in publishing various informative medical journals which acts as a powerhouse to bring the physicians and the entire medical fraternity the best research with latest discovered key information in a completely understandable and clinically useful format.
              </p>
              <a className="mt-4 inline-flex items-center gap-1 text-[12px] font-bold uppercase text-[#118bd7]" href="/about-us.html" onClick={(event) => onNavigate(event, '/about-us.html')}>
                Read More
                <ArrowRight size={13} />
              </a>
            </div>
            <img className="hidden h-[170px] w-full object-cover md:block" src="https://meddocsonline.org/img/welcome_img.jpg" alt="Welcome to MedDocs" />
          </div>
        </div>
      </section>

      <section className="bg-[#f3f7f9] py-12">
        <div className="mx-auto max-w-[1052px] px-4">
          <div className="grid gap-8 lg:grid-cols-[315px_1fr]">
            <div>
              <h2 className="text-[30px] font-light leading-tight text-[#11496c]">
                Open Access Peer
                <span className="block text-[38px] font-black">Reviewed Journals</span>
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                We are dedicated to publish informative journals covering various areas of science, medicine and latest technology. We follow open access policies. All our published journals are peer-reviewed academic and scholarly articles.
              </p>
              <a className="mt-5 inline-flex bg-[#118bd7] px-5 py-2 text-[12px] font-bold uppercase text-white hover:bg-[#086aa8]" href="/journals.html" onClick={(event) => onNavigate(event, '/journals.html')}>
                View All Journals
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {journals.map(([title, icon, text]) => (
                <article className="group min-h-[156px] bg-white p-3 shadow-sm transition hover:bg-[#118bd7] hover:text-white" key={title}>
                  <div className="flex items-start gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#d9edf7]">
                      <img className="h-6 w-6 object-contain group-hover:hidden" src={`https://meddocsonline.org/img/journals/${icon}.png`} alt="" />
                      <img className="hidden h-6 w-6 object-contain group-hover:block" src={`https://meddocsonline.org/img/journals/${icon}-hover.png`} alt="" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[14px] font-black leading-5 text-[#11496c] group-hover:text-white">{title}</h3>
                      <p className="mt-1 line-clamp-3 text-[12px] leading-5 text-slate-600 group-hover:text-white/90">{text}</p>
                      <a className="mt-2 inline-flex text-[11px] font-bold uppercase text-[#118bd7] group-hover:text-white" href="/journals.html" onClick={(event) => onNavigate(event, '/journals.html')}>
                        Read More
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-[1052px] px-4">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[13px] font-bold uppercase text-[#118bd7]">meddocs</p>
              <h2 className="text-[30px] font-black text-[#11496c]">E-books /</h2>
            </div>
            <a className="bg-[#118bd7] px-5 py-2 text-[12px] font-bold uppercase text-white hover:bg-[#086aa8]" href="/e-books.html" onClick={(event) => onNavigate(event, '/e-books.html')}>
              View All E-Books
            </a>
          </div>
          <div className="ebook-slider overflow-hidden border-y border-slate-100 py-2">
            <div className="ebook-track flex w-max gap-5">
              {[...books, ...books].map((book, index) => (
                <a
                  className="block w-[150px] shrink-0 overflow-hidden border border-slate-200 bg-white p-2 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  href="/e-books.html"
                  onClick={(event) => onNavigate(event, '/e-books.html')}
                  key={`${book}-${index}`}
                >
                  <img className="h-[210px] w-full object-cover" src={`https://meddocsonline.org/img/books/${book}`} alt="MedDocs e-book" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f7f9] py-12">
        <div className="mx-auto grid max-w-[1052px] gap-8 px-4 md:grid-cols-[360px_1fr]">
          <img className="h-[280px] w-full object-cover" src="https://meddocsonline.org/img/j1.png" alt="MedDocs Conferences" />
          <div>
            <p className="text-[13px] font-bold uppercase text-[#118bd7]">Meddocs</p>
            <h2 className="text-[30px] font-black text-[#11496c]">Conferences</h2>
            <p className="mt-4 text-[14px] leading-7 text-slate-600">
              We have a wing which is dedicated to organize international conferences in various parts of the world. It provides a great platform for face to face discussions on various latest advancements.
            </p>
            <p className="mt-3 text-[14px] leading-7 text-slate-600">
              These conferences are organized with learned societies, industry leading companies and scholarly associations to provide an active forum to scientific communities.
            </p>
            <a className="mt-5 inline-flex bg-[#118bd7] px-5 py-2 text-[12px] font-bold uppercase text-white hover:bg-[#086aa8]" href="/conference.html" onClick={(event) => onNavigate(event, '/conference.html')}>
              Read More
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto grid max-w-[1052px] items-center gap-6 px-4 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="text-[22px] font-bold text-[#11496c]">MedDocs Publishers</h2>
            <p className="mt-3 text-[14px] leading-7 text-slate-600">
              We always work towards offering the best to you. For any queries, please feel free to get in touch with us.
            </p>
          </div>
          <a className="w-fit bg-[#118bd7] px-6 py-3 text-[12px] font-bold uppercase text-white hover:bg-[#086aa8]" href="/contactus.php" onClick={(event) => onNavigate(event, '/contactus.php')}>
            Contact Us
          </a>
        </div>
      </section>

      {selectedArticle && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-slate-950/70 px-4 py-6" role="dialog" aria-modal="true" aria-labelledby="article-modal-title">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-white p-6 shadow-2xl">
            <button className="absolute right-3 top-3 grid h-9 w-9 place-items-center bg-slate-100 text-xl font-black text-slate-700 hover:bg-slate-200" type="button" aria-label="Close article preview" onClick={() => setSelectedArticle(null)}>
              ×
            </button>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#118bd7]">Article Preview</p>
            <h2 id="article-modal-title" className="mt-3 pr-8 text-2xl font-black leading-8 text-[#11496c]">{selectedArticle.title}</h2>
            <p className="mt-4 text-sm italic text-[#118bd7]">{selectedArticle.author}</p>
            <p className="mt-3 inline-flex rounded bg-[#00004c] px-3 py-1.5 text-xs font-bold uppercase text-white">
              {selectedArticle.journal} (ISSN: {selectedArticle.issn})
            </p>
            <h3 className="mt-6 text-lg font-black text-slate-900">Abstract Preview</h3>
            <p className="mt-3 leading-8 text-slate-600">{selectedArticle.abstract}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex justify-center bg-[#118bd7] px-5 py-3 text-sm font-bold uppercase text-white hover:bg-[#086aa8]" href="/journals.html" onClick={(event) => onNavigate(event, '/journals.html')}>
                View Journal
              </a>
              <button className="inline-flex justify-center border border-slate-300 px-5 py-3 text-sm font-bold uppercase text-slate-700 hover:bg-slate-50" type="button" onClick={() => setSelectedArticle(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
