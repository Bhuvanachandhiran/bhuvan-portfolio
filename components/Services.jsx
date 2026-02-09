export default function Skills() {
  const skills = [
    {
      title: "AI / Machine Learning",
      desc: "CNNs, Deep Learning, OCR, Transformers, RAG pipelines, Model Training & Evaluation"
    },
    {
      title: "Frameworks & Tools",
      desc: "TensorFlow, Keras, Scikit-learn, Flask, Django, FAISS, Sentence Transformers"
    },
    {
      title: "Data & Visualization",
      desc: "Pandas, NumPy, Matplotlib, Power BI, Tableau"
    },
    {
      title: "Core & Development",
      desc: "Python, Git, REST APIs, Model Deployment"
    }
  ];

  return (
    <section id="skills" className="section bg-slate-50 dark:bg-slate-800/40">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-brand-orange mb-8">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <div key={i} className="card p-6">
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
