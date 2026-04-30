import PageHero from '../components/PageHero.jsx';

const policies = [
  ['Open Access', 'Readers can access scientific innovation and research without paid subscription barriers.'],
  ['Peer Review', 'Articles are evaluated for scientific accuracy, importance and novelty before publication.'],
  ['Plagiarism', 'Submitted articles are checked carefully to maintain publication integrity.'],
];

export default function About({ onNavigate }) {
  return (
    <>
      <PageHero eyebrow="Welcome to MedDocs" title="About Us">
        MedDocs Publishers is dedicated to publishing informative medical journals for physicians and the medical fraternity.
      </PageHero>
      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-[1052px] gap-10 px-4 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-[#11496c]">MedDocs Publishers</h2>
            <p className="mt-5 text-[15px] leading-8 text-slate-600">
              MedDocs Publishers is dedicated to publishing informative medical journals which act as a powerhouse for physicians and medical researchers by bringing key information in a clinically useful format.
            </p>
            <p className="mt-4 text-[15px] leading-8 text-slate-600">
              Practicing physicians can stay informed about new developments in the field, which is necessary to treat patients in the best possible way.
            </p>
            <p className="mt-4 text-[15px] leading-8 text-slate-600">
              MedDocs follows rigorous peer-review and editing processes to evaluate scientific accuracy, importance and novelty. This helps maintain reliability, reader trust and high standards for medical publishing.
            </p>
            <p className="mt-4 text-[15px] leading-8 text-slate-600">
              The publishing division also supports medical e-books and international conferences that bring scientists and research professionals together for global knowledge exchange.
            </p>
          </div>
          <aside>
            <img className="h-[220px] w-full object-cover shadow-sm" src="https://meddocsonline.org/img/welcome_img.jpg" alt="MedDocs publishing" />
            <div className="mt-5 bg-[#f3f7f9] p-5">
              <h3 className="font-black text-[#11496c]">Journals MedDocs</h3>
              <ul className="mt-4 space-y-2 text-sm font-semibold text-slate-600">
                <li>Annals of Anesthesia and Pain Medicine</li>
                <li>Journal of Drug Abuse & Addiction</li>
                <li>Journal of Microbiology & Immunology</li>
                <li>Annals of Otolaryngology</li>
                <li>Journal of Tuberculosis</li>
              </ul>
              <a className="mt-4 inline-flex bg-[#118bd7] px-4 py-2 text-xs font-bold uppercase text-white" href="/journals.html" onClick={(event) => onNavigate(event, '/journals.html')}>View All</a>
            </div>
          </aside>
        </div>
        <div className="mx-auto mt-10 grid max-w-[1052px] gap-4 px-4 md:grid-cols-3">
          {policies.map(([title, text]) => (
            <article className="border-t-4 border-[#118bd7] bg-[#f8fafc] p-5" key={title}>
              <h3 className="text-lg font-black text-[#11496c]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
