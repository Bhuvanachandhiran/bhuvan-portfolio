export default function Services() {
  const services = [
    { title: 'AI/ML Development', desc: 'Chatbots (RAG), OCR/CV, classic ML, model serving.' },
    { title: 'Full-Stack Apps', desc: 'APIs with Flask/Django + modern React/Next.js frontends.' },
    { title: 'Data Visualization', desc: 'Power BI, Tableau, Plotly Dash—clean, decision-ready dashboards.' },
  ];

  return (
    <section id="services" className="section bg-slate-50 dark:bg-slate-800/40">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-brand-orange mb-8">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="card p-6">
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
