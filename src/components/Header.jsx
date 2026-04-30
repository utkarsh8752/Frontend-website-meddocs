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
  { label: 'Contact Us', path: '/contactus.html' },
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
    <header className="  bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="mx-auto flex max-w-[1052px] items-center justify-between px-4 text-[14px] text-slate-700">
          <span className="py-3.5 font-medium">
            Welcome to MedDocs Publishers
          </span>

          <div className="hidden md:flex items-stretch">
            {topLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => onNavigate(e, link.path)}
                className="px-4 py-3.5 font-bold uppercase hover:text-sky-700"
              >
                {link.label}
              </a>
            ))}

            {['f', 't', 'G+', 'in'].map((item) => (
              <span
                key={item}
                className="grid w-12 place-items-center border-l border-slate-200 text-[15px] font-black text-slate-400"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="mx-auto flex max-w-[1052px] items-center justify-between px-4 py-6">
        <a href="/" onClick={(e) => onNavigate(e, '/')}>
          <img
            className="h-[66px] w-[170px] object-contain"
            src="https://meddocsonline.org/img/logo.png"
            alt="Logo"
          />
        </a>

        {/* Contact */}
        <div className="hidden md:flex items-center gap-8">
          <a href="https://wa.me/918104591013" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center border">
              <img src="https://meddocsonline.org/img/wt.png" className="h-7" />
            </span>
            <span>
              <span className="block text-sm font-black">Whatsapp</span>
              <span className="block text-sm">+91 8104591013</span>
            </span>
          </a>

          <a href="mailto:eng.utkarshmishra@gmail.com" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center border">
              <img src="https://meddocsonline.org/img/email.png" className="h-7" />
            </span>
            <span>
              <span className="block text-sm font-black">Email</span>
              <span className="block text-sm">eng.utkarshmishra@gmail.com</span>
            </span>
          </a>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden border border-red-700 p-2"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Navigation bar (FIXED STRUCTURE) */}
      <div className="bg-[#118bd7] hidden md:block sticky top-0 z-50">
        <nav className="mx-auto flex max-w-[1052px] h-[50px] items-center text-sm font-black uppercase text-white">
          {routeLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={(e) => onNavigate(e, link.path)}
              className={`px-4 h-full flex items-center hover:bg-[#06639e] ${
                activePath === link.path ? 'bg-[#086aa8]' : ''
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white px-4 pb-4 shadow-lg">
          {routeLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={(e) => navigateAndClose(e, link.path)}
              className={`block px-3 py-3 text-sm font-black uppercase rounded ${
                activePath === link.path
                  ? 'bg-[#118bd7] text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}