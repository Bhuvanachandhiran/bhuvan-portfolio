import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch {
      setStatus('Failed to send message.');
    }
  };

  return (
    <section id="contact" className="section bg-slate-50 dark:bg-slate-800/40">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-brand-orange mb-6">Contact</h2>

        <form onSubmit={submit} className="max-w-lg mx-auto flex flex-col gap-4">
          <input
            className="p-3 rounded border border-slate-300 dark:border-slate-700 text-black"
            placeholder="Your Name"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            className="p-3 rounded border border-slate-300 dark:border-slate-700 text-black"
            placeholder="Your Email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <textarea
            rows="5"
            className="p-3 rounded border border-slate-300 dark:border-slate-700 text-black"
            placeholder="Your Message"
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
            required
          />
          <button type="submit" className="btn">Send Message</button>
        </form>

        {status && <p className="mt-4 text-center text-brand-orange">{status}</p>}

        <div className="text-center mt-8">
          <p className="mb-2">Email: <a className="link" href="mailto:bhuvanachandhiran.dev@gmail.com">bhuvanachandhiran.dev@gmail.com</a></p>
          <p className="mb-4">Phone: +91 76398 76131</p>
          <a href="https://linkedin.com/in/p-bhuvanachandhiran" className="link font-bold mx-2" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/Bhuvanachandhiran" className="link font-bold mx-2" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
}
