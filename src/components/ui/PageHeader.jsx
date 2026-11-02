import MaritimeBackdrop from './MaritimeBackdrop'

/* Cabecera compacta para páginas internas (banda azul marino). */
export default function PageHeader({ badge, title, lead }) {
  return (
    <section className="page-header">
      <MaritimeBackdrop opacity={0.5} />
      <div className="container-x page-header-inner">
        {badge && <span className="eyebrow eyebrow--light">{badge}</span>}
        <h1 className="page-header-title">{title}</h1>
        {lead && <p className="page-header-lead">{lead}</p>}
      </div>

      <style>{`
        .page-header{position:relative;overflow:hidden;background:var(--color-navy-900);
          padding-block:3.75rem 3.25rem;}
        .page-header-inner{position:relative;z-index:2;max-width:46rem;}
        .page-header-title{color:#fff;margin-top:1rem;font-size:clamp(1.9rem,4.2vw,2.9rem);}
        .page-header-lead{color:rgba(226,235,243,.85);margin-top:1.1rem;font-size:1.08rem;line-height:1.6;}
      `}</style>
    </section>
  )
}
