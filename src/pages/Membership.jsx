import { CheckCircle2, Mail, Users } from 'lucide-react';
import { useState } from 'react';
import PageHero from '../components/PageHero.jsx';

const memberships = [
  ['Student Membership', 'Applicable for pursuing students with institute or university identity proof.', '1500 USD', '2500 USD'],
  ['Individual Membership', 'Applicable for researchers and academicians. Registered members can publish without article fees during the period.', '2000 USD', '3500 USD'],
  ['Department Membership', 'Designed for a whole department in a university or institute, with authorization from the department head or chair.', '4000 USD', '6500 USD'],
];

export default function Membership() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMembership = memberships[activeIndex];

  return (
    <>
      <PageHero eyebrow="MedDocs" title="Membership">
        Membership supports authors, reviewers, editors, institutions and scientific communities connected with MedDocs.
      </PageHero>
      <section className="bg-white py-12">
        <div className="mx-auto max-w-[1052px] px-4">
          <div className="mb-8 bg-[#0b456d] p-6 text-white">
            <Users size={34} />
            <h2 className="mt-4 text-2xl font-black">Membership Benefits</h2>
            <p className="mt-3 leading-7 text-white/85">Members can publish unlimited articles in MedDocs journals and eBooks within the registered membership period, based on the selected plan.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {memberships.map(([title], index) => (
              <button
                className={`px-4 py-3 text-sm font-black uppercase ${activeIndex === index ? 'bg-[#118bd7] text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                type="button"
                key={title}
                onClick={() => setActiveIndex(index)}
              >
                {title}
              </button>
            ))}
          </div>
          <article className="mt-5 border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-black text-[#11496c]">{activeMembership[0]}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{activeMembership[1]}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <p className="flex items-center gap-2 bg-[#f3f7f9] p-4 text-sm font-bold"><CheckCircle2 className="text-[#118bd7]" size={17} />Fee for 1 year: {activeMembership[2]}</p>
              <p className="flex items-center gap-2 bg-[#f3f7f9] p-4 text-sm font-bold"><CheckCircle2 className="text-[#118bd7]" size={17} />Fee for 2 years: {activeMembership[3]}</p>
            </div>
          </article>
          <div className="mt-8 flex items-center gap-3 bg-[#f3f7f9] p-5 text-sm font-semibold text-slate-700">
            <Mail className="text-[#118bd7]" size={22} />
            For more information on MedDocs membership, contact: support@meddocsonline.org
          </div>
        </div>
      </section>
    </>
  );
}
