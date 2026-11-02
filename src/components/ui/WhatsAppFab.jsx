import { company } from '../../data/site'
import { useI18n } from '../../i18n/I18nContext'

/* Logo oficial de WhatsApp (glifo relleno, legible a tamaño grande). */
function WhatsAppGlyph({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.82 9.82 0 0 0 1.687 5.522l-.999 3.648 3.721-.97zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  )
}

/* Botón flotante de WhatsApp (abajo a la derecha). Abre el chat con el
   número de la empresa. Con etiqueta al pasar el cursor y pulso animado. */
export default function WhatsAppFab() {
  const { t } = useI18n()
  const label = t('cta.whatsapp')

  return (
    <a
      className="wa-fab"
      href={company.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
    >
      <span className="wa-fab-pulse" aria-hidden="true" />
      <WhatsAppGlyph size={32} />
      <span className="wa-fab-label">{label}</span>

      <style>{`
        .wa-fab{position:fixed;right:22px;bottom:22px;z-index:70;
          display:inline-flex;align-items:center;justify-content:center;
          width:62px;height:62px;border-radius:50%;
          background:#25d366;color:#fff;
          box-shadow:0 12px 28px -8px rgba(37,211,102,.7),0 4px 12px rgba(0,0,0,.22);
          transition:transform .2s ease,box-shadow .2s ease;}
        .wa-fab:hover{transform:translateY(-3px) scale(1.05);
          box-shadow:0 18px 38px -10px rgba(37,211,102,.85),0 6px 16px rgba(0,0,0,.3);}
        .wa-fab:active{transform:translateY(-1px) scale(1.02);}
        .wa-fab svg{position:relative;flex-shrink:0;}
        .wa-fab-pulse{position:absolute;inset:0;border-radius:50%;
          background:#25d366;z-index:-1;
          animation:waPulse 2.6s cubic-bezier(.4,0,.2,1) infinite;}
        @keyframes waPulse{
          0%{transform:scale(1);opacity:.6;}
          70%{transform:scale(1.8);opacity:0;}
          100%{transform:scale(1.8);opacity:0;}
        }
        .wa-fab-label{position:absolute;right:74px;
          background:var(--surface);color:var(--heading);
          border:1px solid var(--border);box-shadow:var(--shadow-card);
          font-size:.84rem;font-weight:600;padding:.5rem .75rem;border-radius:9px;
          white-space:nowrap;opacity:0;transform:translateX(8px);pointer-events:none;
          transition:opacity .18s ease,transform .18s ease;}
        .wa-fab:hover .wa-fab-label{opacity:1;transform:translateX(0);}
        @media (max-width:600px){
          .wa-fab{width:56px;height:56px;right:16px;bottom:16px;}
          .wa-fab-label{display:none;}
        }
        @media (prefers-reduced-motion:reduce){
          .wa-fab-pulse{animation:none;}
          .wa-fab{transition:none;}
        }
      `}</style>
    </a>
  )
}
