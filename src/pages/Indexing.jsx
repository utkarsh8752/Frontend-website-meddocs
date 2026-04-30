import { SearchCheck } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';

const indexingItems = [
  ['Open access metadata', 'Structured publication information improves discoverability and reader access.'],
  ['Search engine visibility', 'Article pages and archives are designed for broad research discovery.'],
  ['Permanent archives', 'Published content remains available through journal archives and article listings.'],
  ['Citation support', 'Journal metadata helps readers identify journal names, ISSNs, authors and article titles.'],
  ['Global readership', 'Open access publication removes subscription barriers for international readers.'],
  ['Research networks', 'Publishing information is organized for academic sharing and indexing workflows.'],
];

export default function Indexing() {
  return (
    <>
      <PageHero eyebrow="Indexing" title="Discoverable Research">
        Indexing improves visibility, citation and access for published articles across scholarly research networks.
      </PageHero>
      <section className="mx-auto max-w-[1052px] px-4 py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {indexingItems.map(([item, text]) => (
            <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm" key={item}>
              <SearchCheck className="mx-auto text-teal-700" size={28} />
              <h2 className="mt-4 font-black">{item}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
