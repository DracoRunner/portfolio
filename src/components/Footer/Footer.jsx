import React from 'react';
import { contactContent, footerContent } from '../../content/portfolioContent';

const Footer = () => {
  return (
    <>
      <section className="bg-[var(--ink)] px-6 md:px-16 pt-32 pb-24 border-none" id="contact">
        <p className="text-[0.72rem] font-bold tracking-[0.2em] uppercase text-[var(--green)] mb-7 reveal">
          {contactContent.overline}
        </p>
        <h2 className="contact-heading-font text-[clamp(4rem,10vw,9rem)] text-white mb-16 reveal">
          SAY<br />HELLO.
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3.5 reveal">
          {contactContent.cards.map((card, i) => {
            const isLink = !!card.link;
            const CardTag = isLink ? 'a' : 'div';
            const extraProps = isLink ? { href: card.link, target: card.link.startsWith('http') ? '_blank' : undefined, rel: card.link.startsWith('http') ? 'noopener' : undefined } : {};

            return (
              <CardTag 
                key={i} 
                className={`p-6 bg-white/5 border border-white/[0.09] rounded-[var(--radius)] transition-all hover:bg-white/[0.08] hover:border-white/[0.18] ${isLink ? "block" : ""}`}
                {...extraProps}
              >
                <div className="text-[0.65rem] font-bold tracking-[0.16em] uppercase text-white/35 mb-2">
                  {card.label}
                </div>
                <div className={`text-[0.92rem] font-medium leading-[1.45] flex items-center gap-2 ${card.isAvail ? "text-[var(--green)] ccard-avail-pulse" : "text-white/85"}`}>
                  {card.val}
                </div>
              </CardTag>
            );
          })}
        </div>
      </section>

      <footer className="bg-[var(--ink)] border-t border-white/[0.07] px-6 md:px-16 py-7 flex flex-col md:flex-row items-center justify-between gap-4 text-[0.78rem] text-white/30">
        <span dangerouslySetInnerHTML={{ __html: footerContent.copyright.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white/55">$1</strong>') }} />
        <span>{footerContent.role}</span>
        <span>{footerContent.tagline}</span>
      </footer>
    </>
  );
};

export default Footer;
