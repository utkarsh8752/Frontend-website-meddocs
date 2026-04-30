import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Journals from './pages/Journals.jsx';
import Ebooks from './pages/Ebooks.jsx';
import Conferences from './pages/Conferences.jsx';
import Faq from './pages/Faq.jsx';
import Membership from './pages/Membership.jsx';
import Indexing from './pages/Indexing.jsx';
import Contact from './pages/Contact.jsx';
import SubmitManuscript from './pages/SubmitManuscript.jsx';
import InfoPage from './pages/InfoPage.jsx';
import { ArrowUp, MessageCircle } from 'lucide-react';

const pageByPath = {
  '/': Home,
  '/about-us.html': About,
  '/journals.html': Journals,
  '/e-books.html': Ebooks,
  '/conference.html': Conferences,
  '/faq.html': Faq,
  '/membership.html': Membership,
  '/indexing.html': Indexing,
  '/contactus.php': Contact,
  '/submit-manuscript.php': SubmitManuscript,
  '/author-guidelines.html': () => <InfoPage title="Author Guidelines" eyebrow="Quick Links" />,
  '/join-as-reviewer.html': () => <InfoPage title="Join As A Reviewer" eyebrow="Reviewer" />,
  '/open-access.html': () => <InfoPage title="Open Access" eyebrow="Publishing Policy" />,
  '/peer-review.html': () => <InfoPage title="Peer Review" eyebrow="Publishing Policy" />,
  '/plagiarism.html': () => <InfoPage title="Plagiarism" eyebrow="Publishing Policy" />,
  '/publication-fee.html': () => <InfoPage title="Publication Fee" eyebrow="Author Information" />,
};

export default function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [showTop, setShowTop] = useState(false);
  const Page = useMemo(() => pageByPath[path] || Home, [path]);

  useEffect(() => {
    const syncPath = () => setPath(window.location.pathname);
    const handleScroll = () => setShowTop(window.scrollY > 420);
    window.addEventListener('popstate', syncPath);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('popstate', syncPath);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigate = (event, nextPath) => {
    event.preventDefault();
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
      setPath(nextPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Header activePath={path} onNavigate={handleNavigate} />
      <div className="route-fade" key={path}>
        <Page onNavigate={handleNavigate} />
      </div>
      <Footer onNavigate={handleNavigate} />
      <a
        className="fixed bottom-5 left-5 z-50 grid h-12 w-12 place-items-center rounded-full bg-[#25d366] text-white shadow-xl transition hover:scale-105 hover:bg-[#1fbd59]"
        href="https://wa.me/918104591013"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      {showTop && (
        <button
          className="fixed bottom-5 right-5 z-50 grid h-11 w-11 place-items-center rounded-full bg-[#118bd7] text-white shadow-xl transition hover:bg-[#086aa8]"
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp size={20} />
        </button>
      )}
    </main>
  );
}
