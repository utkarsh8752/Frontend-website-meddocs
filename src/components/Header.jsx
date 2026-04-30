import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const routeLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us.html' },
  { label: 'Journals', path: '/journals.html' },
  { label: 'eBooks', path: '/e-books.html' },
  { label: 'Conferences', path: '/conference.html' },
  { label: "FAQ's", path: '/faq.html' },
  { label: 'Membership', path: '/membership.html' },
  { label: 'Indexing', path: '/indexing.html' },
  { label: 'Contact Us', path: '/contactus.php' },
];

const topLinks = [
  { label: 'Home', path: '/' },
  { label: 'Journals', path: '/journals.html' },
  { label: 'eBooks', path: '/e-books.html' },
  { label: 'Conferences', path: '/conference.html' },
];

export default function Header({ activePath, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateAndClose = (event, path) => {
    onNavigate(event, path);
    setMenuOpen(false);
  };

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto flex max-w-[1052px] items-center justify-between border-b border-slate-200 px-4 text-[14px] text-slate-700">
          <span className="py-3.5 font-medium">Welcome to MedDocs Publishers</span>
          <div className="hidden items-stretch md:flex">
            {topLinks.map((link) => (
              <a
                className="px-4 py-3.5 font-bold uppercase hover:text-sky-700"
                href={link.path}
                key={link.path}
                onClick={(event) => onNavigate(event, link.path)}
              >
                {link.label}
              </a>
            ))}
            {['f', 't', 'G+', 'in'].map((item) => (
              <span className="grid w-12 place-items-center border-l border-slate-200 text-[15px] font-black text-slate-400" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <header className="relative z-40 bg-white">
        <div className="mx-auto flex max-w-[1052px] items-center justify-between px-4 py-7">
          <a className="block" href="/" onClick={(event) => onNavigate(event, '/')}>
            <img className="h-[66px] w-[170px] object-contain" src="https://meddocsonline.org/img/logo.png" alt="MedDocs Open Access Publisher" />
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a className="flex items-center gap-3" href="https://wa.me/918104591013">
              <span className="grid h-11 w-11 place-items-center border border-slate-300">
                <img className="h-7 w-7 object-contain" src="https://meddocsonline.org/img/wt.png" alt="" />
              </span>
              <span>
                <span className="block text-sm font-black text-black">Whatsapp Number</span>
                <span className="block text-sm text-black">+91 8104591013</span>
              </span>
            </a>
            <a className="flex items-center gap-3" href="mailto:eng.utkarshmishra@gmail.com">
              <span className="grid h-11 w-11 place-items-center border border-slate-300">
                <img className="h-7 w-7 object-contain" src="https://meddocsonline.org/img/email.png" alt="" />
              </span>
              <span>
                <span className="block text-sm font-black text-black">EMAIL</span>
                <span className="block text-sm text-black">eng.utkarshmishra@gmail.com</span>
              </span>
            </a>
          </div>
          <button className="grid h-10 w-10 place-items-center rounded-sm border border-slate-200 text-slate-700 md:hidden" aria-label="Toggle navigation" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div className="absolute left-0 right-0 -bottom-[29px] z-50 hidden md:block">
          <nav className="mx-auto flex h-[50px] max-w-[1052px] overflow-hidden rounded-[4px] bg-[#118bd7] pl-[14px] text-sm font-black uppercase text-white shadow-sm">
            {routeLinks.map((link) => (
              <a
                className={`flex items-center px-4 transition hover:bg-[#06639e] ${activePath === link.path ? 'bg-[#086aa8]' : ''}`}
                href={link.path}
                key={link.path}
                onClick={(event) => onNavigate(event, link.path)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {menuOpen && (
          <nav className="border-t border-slate-200 bg-white px-4 pb-4 shadow-lg md:hidden">
            <div className="mx-auto grid max-w-[1052px] gap-2">
              {routeLinks.map((link) => (
                <a
                  className={`rounded-sm px-3 py-3 text-sm font-black uppercase ${activePath === link.path ? 'bg-[#118bd7] text-white' : 'text-slate-700 hover:bg-slate-100'}`}
                  href={link.path}
                  key={link.path}
                  onClick={(event) => navigateAndClose(event, link.path)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
