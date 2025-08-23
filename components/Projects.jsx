import { motion } from 'framer-motion';
import projects from '@/lib/projects';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-brand-orange mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={i}
              whileHover={{ scale: 1.02, y: -5 }}
              className="card p-6 text-center"
            >
              <h3 className="text-xl font-bold text-brand-orange">{p.title}</h3>
              <p className="mt-2 mb-4">{p.description}</p>
              <div className="flex justify-center gap-4">
                <a className="link font-semibold" href={p.link} target="_blank" rel="noreferrer">GitHub →</a>
                {p.demo && <a className="link font-semibold" href={p.demo} target="_blank" rel="noreferrer">Live Demo →</a>}
              </div>
              {p.stack?.length ? (
                <div className="mt-4">
                  {p.stack.map((tag, idx) => (
                    <span key={idx} className="inline-block text-xs px-2.5 py-1 rounded-full bg-slate-200 dark:bg-slate-700 mr-2 mb-2">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
