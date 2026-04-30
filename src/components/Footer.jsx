import { Globe2, Mail, MapPin } from 'lucide-react';

const quickRoutes = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us.html' },
  { label: 'Journals', path: '/journals.html' },
  { label: 'eBooks', path: '/e-books.html' },
  { label: 'Conferences', path: '/conference.html' },
  { label: "FAQ's", path: '/faq.html' },
  { label: 'Membership', path: '/membership.html' },
  { label: 'Indexing', path: '/indexing.html' },
  { label: 'Contact Us', path: '/contactus.php' },
  { label: 'Submit Manuscript', path: '/submit-manuscript.php' },
  { label: 'Author Guidelines', path: '/author-guidelines.html' },
  { label: 'Join As A Reviewer', path: '/join-as-reviewer.html' },
  { label: 'Open Access', path: '/open-access.html' },
  { label: 'Peer Review', path: '/peer-review.html' },
  { label: 'Plagiarism', path: '/plagiarism.html' },
  { label: 'Publication Fee', path: '/publication-fee.html' },
];

const footerLabels = [
  'Home',
  'About Us',
  'Journals',
  'eBooks',
  'Conferences',
  "FAQ's",
  'Membership',
  'Contact Us',
  'Submit Manuscript',
  'Author Guidelines',
  'Join As A Reviewer',
  'Open Access',
  'Peer Review',
  'Plagiarism',
  'Publication Fee',
];

export default function Footer({ onNavigate }) {
  const routeByLabel = Object.fromEntries(quickRoutes.map((route) => [route.label, route.path]));

  return (
    <footer className="bg-slate-950 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr_1fr] lg:px-8">
        <div>
          <h2 className="text-xl font-black">MedDocs Publishers</h2>
          <p className="mt-4 leading-7 text-slate-300">
            We always work towards offering the best. For queries, please get in touch with us or post valuable feedback.
          </p>
        </div>
        <div>
          <h3 className="font-black uppercase tracking-wide">Contact Us</h3>
          <div className="mt-5 space-y-3 text-slate-300">
            <p className="flex gap-3"><MapPin className="shrink-0 text-teal-300" size={19} />Vasai Road, Mumbai, Maharashtra, India</p>
            <p className="flex gap-3"><Mail className="shrink-0 text-teal-300" size={19} />eng.utkarshmishra@gmail.com</p>
            <p className="flex gap-3"><Globe2 className="shrink-0 text-teal-300" size={19} />https://utkarshmishra.vercel.app/</p>
          </div>
        </div>
        <div>
          <h3 className="font-black uppercase tracking-wide">Quick Links</h3>
          <div className="mt-5 grid grid-cols-2 gap-2 text-sm font-semibold text-slate-300">
            {footerLabels.map((label) => (
              <a className="hover:text-white" href={routeByLabel[label] || '/'} key={label} onClick={(event) => onNavigate(event, routeByLabel[label] || '/')}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-sm font-semibold text-slate-400 sm:px-6 lg:px-8">
        Copyright © 2026 Meddocs All Rights Reserved.
      </div>
    </footer>
  );
}
