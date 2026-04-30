import PageHero from '../components/PageHero.jsx';

export default function Conferences({ onNavigate }) {
  return (
    <>
      <PageHero eyebrow="MedDocs" title="Conferences">
        International conferences across the world for face-to-face discussion on latest scientific advancements.
      </PageHero>
      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-[1052px] items-center gap-10 px-4 lg:grid-cols-[360px_1fr]">
          <img
            className="h-[300px] w-full object-cover shadow-sm"
            src="https://meddocsonline.org/img/j1.png"
            alt="Medical conference"
          />
          <div>
            <h2 className="text-3xl font-black tracking-tight text-[#11496c]">MedDocs Conferences</h2>
            <p className="mt-5 text-[15px] leading-8 text-slate-600">
              MedDocs has a wing dedicated to organizing international conferences in various parts of the world. It provides a platform for face-to-face discussion on latest advancements.
            </p>
            <p className="mt-4 text-[15px] leading-8 text-slate-600">
              The organizing committee leads each conference with a scientific agenda. These events are arranged with learned societies, industry companies and scholarly associations.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {['Scientific agenda', 'Global speakers', 'Community forums'].map((item) => (
                <div className="bg-[#f3f7f9] p-4 text-sm font-black text-[#11496c]" key={item}>{item}</div>
              ))}
            </div>
            <a className="mt-6 inline-flex bg-[#118bd7] px-5 py-2 text-xs font-bold uppercase text-white" href="/contactus.php" onClick={(event) => onNavigate(event, '/contactus.php')}>Contact Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
