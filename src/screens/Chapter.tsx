// Lettore di un capitolo di teoria: spiegazioni, schemi, esempi svolti, riassunto finale.
import { useEffect, useRef, useState } from 'react';
import type { Block, Unit } from '../types';
import { CHAPTERS } from '../data/study';
import { Rich, unitStyle } from '../components/UI';
import Scene from '../graphs/scenes';
import { setState, today } from '../engine/store';

function BlockView({ b }: { b: Block }) {
  switch (b.t) {
    case 'p':
      return (
        <p className="sb-p">
          <Rich text={b.text} />
        </p>
      );
    case 'h':
      return <h3 className="sb-h">{b.text}</h3>;
    case 'list': {
      const L = b.ordered ? 'ol' : 'ul';
      return (
        <L className="sb-list">
          {b.items.map((it, i) => (
            <li key={i}>
              <Rich text={it} />
            </li>
          ))}
        </L>
      );
    }
    case 'def':
      return (
        <div className="sb-def">
          <div className="sb-tag">Definizione</div>
          <b>{b.term}</b>
          <p>
            <Rich text={b.text} />
          </p>
        </div>
      );
    case 'formula':
      return (
        <div className="sb-formula">
          <div className="expr">{b.expr}</div>
          {b.note && <p>{b.note}</p>}
        </div>
      );
    case 'example':
      return (
        <div className="sb-example">
          <div className="sb-tag">Esempio svolto</div>
          <b>{b.title}</b>
          <ol>
            {b.steps.map((s, i) => (
              <li key={i}>
                <Rich text={s} />
              </li>
            ))}
          </ol>
          {b.result && (
            <p className="res">
              <Rich text={b.result} />
            </p>
          )}
        </div>
      );
    case 'warn':
      return (
        <div className="sb-warn">
          <span aria-hidden>⚠️</span>
          <p>
            <Rich text={b.text} />
          </p>
        </div>
      );
    case 'key':
      return (
        <div className="sb-key">
          <div className="sb-tag">Da ricordare</div>
          <ul>
            {b.items.map((it, i) => (
              <li key={i}>
                <Rich text={it} />
              </li>
            ))}
          </ul>
        </div>
      );
    case 'flow':
      return (
        <div className="sb-flow">
          {b.title && <div className="sb-tag">{b.title}</div>}
          <div className="flow">
            {b.items.map((it, i) => (
              <div key={i} className="flow-step">
                <span>
                  <Rich text={it} />
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    case 'tree':
      return (
        <div className="sb-tree">
          <div className="tree-root">{b.root}</div>
          <div className="tree-kids">
            {b.children.map((ch, i) => (
              <div key={i} className="tree-kid">
                <b>
                  <Rich text={ch.label} />
                </b>
                {ch.sub && (
                  <ul>
                    {ch.sub.map((s, k) => (
                      <li key={k}>
                        <Rich text={s} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    case 'table':
      return (
        <div className="sb-table" role="region" tabIndex={0} aria-label="Tabella">
          <table>
            <thead>
              <tr>
                {b.head.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r, i) => (
                <tr key={i}>
                  {r.map((cell, k) => (
                    <td key={k}>
                      <Rich text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'figure':
      return (
        <figure className="sb-figure">
          <Scene id={b.scene} />
          <figcaption>
            <Rich text={b.caption} />
          </figcaption>
        </figure>
      );
  }
}

export default function Chapter({ unit, onExit, onPractice }: { unit: Unit; onExit: () => void; onPractice: () => void }) {
  const ch = CHAPTERS[unit.id];
  const [active, setActive] = useState(0);
  const endRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [unit.id]);

  // capitolo letto quando si arriva al riassunto finale
  useEffect(() => {
    const el = endRef.current;
    if (!el || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((es) => {
      if (es.some((e) => e.isIntersecting))
        setState((s) => {
          if (!s.read[unit.id]) s.read[unit.id] = today();
        });
    });
    io.observe(el);
    return () => io.disconnect();
  }, [unit.id]);

  // sezione corrente evidenziata nella barra
  useEffect(() => {
    const secs = [...document.querySelectorAll<HTMLElement>('.study-sec')];
    const onScroll = () => {
      let k = 0;
      secs.forEach((s, i) => {
        if (s.getBoundingClientRect().top < 140) k = i;
      });
      setActive(k);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [unit.id]);

  useEffect(() => {
    navRef.current?.querySelector<HTMLElement>('[aria-current="true"]')?.scrollIntoView({ block: 'nearest', inline: 'center' });
  }, [active]);

  if (!ch) return null;
  const go = (i: number) => {
    const el = document.getElementById(`sec-${i}`);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 112, behavior: 'smooth' });
  };

  return (
    <div className="study" style={unitStyle(unit)}>
      <div className="study-head">
        <button className="iconbtn" onClick={onExit} aria-label="Chiudi">
          ✕
        </button>
        <div className="study-titles">
          <span>Unità {unit.n}</span>
          <b>{unit.title}</b>
        </div>
      </div>
      <nav className="study-nav" ref={navRef} aria-label="Sezioni">
        {ch.sections.map((s, i) => (
          <button key={i} aria-current={i === active} onClick={() => go(i)}>
            {s.title}
          </button>
        ))}
      </nav>
      <main className="study-body">
        <p className="study-intro">{ch.intro}</p>
        {ch.sections.map((s, i) => (
          <section key={i} id={`sec-${i}`} className="study-sec">
            <h2>{s.title}</h2>
            {s.blocks.map((b, k) => (
              <BlockView key={k} b={b} />
            ))}
          </section>
        ))}
        <section className="study-summary" ref={endRef}>
          <h2>In sintesi</h2>
          <ul>
            {ch.summary.map((s, i) => (
              <li key={i}>
                <Rich text={s} />
              </li>
            ))}
          </ul>
        </section>
        <button className="btn unit block" onClick={onPractice}>
          Esercitati su questa unità
        </button>
      </main>
    </div>
  );
}
