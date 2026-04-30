import { Globe2, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import PageHero from '../components/PageHero.jsx';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const required = ['name', 'email', 'subject', 'message'];
    const missing = required.some((field) => !String(form.get(field) || '').trim());
    setStatus(missing ? 'Please fill all fields before sending.' : 'Thank you. Your message is ready to send.');
  };

  return (
    <>
      <PageHero eyebrow="Contact Us" title="Get In Touch">
        Please get in touch with us or post your valuable feedback.
      </PageHero>
      <section className="mx-auto max-w-[1052px] px-4 py-12">
        <div className="grid gap-5 lg:grid-cols-4">
          {[
            [MapPin, 'Address', 'Vasai Road,Mumbai, Maharashtra, India'],
            [Phone, 'Whatsapp Number', '+91 8104591013'],
            [Mail, 'Email','eng.utkarshmishra@gmail.com'],
            [Globe2, 'Website','https://utkarshmishra.vercel.app/'],
          ].map(([Icon, label, value]) => (
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" key={label}>
              <Icon className="text-teal-700" size={25} />
              <h2 className="mt-4 font-black">{label}</h2>
              <p className="mt-3 leading-7 text-slate-600">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          <form className="grid gap-4 border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-2" onSubmit={handleSubmit}>
            <input name="name" className="h-11 border border-slate-200 px-3 text-sm outline-none focus:border-[#118bd7]" placeholder="Name" />
            <input name="email" className="h-11 border border-slate-200 px-3 text-sm outline-none focus:border-[#118bd7]" placeholder="Email" type="email" />
            <input name="subject" className="h-11 border border-slate-200 px-3 text-sm outline-none focus:border-[#118bd7] sm:col-span-2" placeholder="Subject" />
            <textarea name="message" className="min-h-32 border border-slate-200 p-3 text-sm outline-none focus:border-[#118bd7] sm:col-span-2" placeholder="Message" />
            {status && <p className="text-sm font-bold text-[#11496c] sm:col-span-2">{status}</p>}
            <button className="bg-[#118bd7] px-5 py-3 text-xs font-bold uppercase text-white" type="submit">Send Message</button>
          </form>
          <aside className="bg-[#0b456d] p-6 text-white">
            <h2 className="text-xl font-black">MedDocs Publishers</h2>
            <p className="mt-4 text-sm leading-7 text-white/85">
              We always work towards offering the best. For queries, please feel free to get in touch or post valuable feedback after reading journals, eBooks or visiting conferences.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
