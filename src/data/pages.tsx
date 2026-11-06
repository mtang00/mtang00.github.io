import type { ReactNode } from 'react';
import { contactInfo, education, personalInfo, skills } from './personal';
import { projects } from './projects';
import { practices, toolGroups, workflowIntro } from './workflow';

/**
 * The binder, as a list of leaves.
 *
 * A leaf is one physical sheet: `front` faces you on the right, `back` lands
 * on the left once it is turned. Spread N therefore shows leaf[N-1].back
 * beside leaf[N].front, which is why content is authored per face rather than
 * per spread.
 */
export interface BinderLeaf {
  front: ReactNode;
  back: ReactNode;
}

/* --- Page furniture ------------------------------------------------------ */

const Sheet = ({
  children,
  label,
  folio
}: {
  children: ReactNode;
  label?: string;
  folio?: string;
}) => (
  <div className="sheet sleeve relative flex h-full w-full flex-col overflow-hidden">
    <div className="flex flex-1 flex-col overflow-hidden px-[8%] py-[7%]">
      {label && <p className="plate-label mb-[3cqw] shrink-0">{label}</p>}
      {/*
        Scrolls only when it has to.
        The spread never triggers this: every page fits at desk sizes, which
        is checked by walking all of them. On a phone the four text-dense
        pages overflow a 343px sheet, and a page that quietly hides its last
        paragraph is worse than one that moves. The fade is the page foot
        falling into shadow, the same lighting logic as the gutter.
      */}
      <div className="no-scrollbar min-h-0 flex-1 overflow-y-auto">{children}</div>
    </div>
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[9%]"
      style={{ background: 'linear-gradient(to top, var(--page), transparent)' }}
    />
    {folio && (
      <p className="plate-label shrink-0 px-[8%] pb-[4%] opacity-60">{folio}</p>
    )}
  </div>
);

/**
 * The outside of the binder: board, not paper.
 *
 * Everything here is pressed or stamped rather than printed, because that is
 * what a cover is: the title is blind-stamped into the leatherette and the
 * rule under it is the one foil element. The lamp crosses it once on arrival
 * and then leaves it alone.
 */
const Cover = () => (
  <div className="leather sheet-container relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
    {/* The lamp pooling on the board. */}
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          'radial-gradient(ellipse 78% 58% at 50% 26%, oklch(0.32 0.018 265 / 0.9), transparent 70%)'
      }}
    />
    {/* The board turning down into the spine. */}
    <div
      className="pointer-events-none absolute inset-y-0 left-0 w-[7%]"
      style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.5), transparent)' }}
    />
    {/* A blind-stamped border, inset from the edge the way a real one is. */}
    <div
      className="pointer-events-none absolute inset-[5.5%] rounded-[2px]"
      style={{
        boxShadow:
          'inset 0 0 0 1px rgba(0,0,0,0.45), inset 0 0 0 2px rgba(255,255,255,0.045)'
      }}
    />

    <div className="relative px-[10%] text-center">
      <p
        className="plate-label mb-[5cqw]"
        style={{ color: 'rgba(255,255,255,0.42)', textShadow: '0 1px 0 rgba(0,0,0,0.7)' }}
      >
        Portfolio
      </p>
      <h1
        className="display emboss text-[clamp(1.8rem,11cqw,4.4rem)]"
        style={{ color: 'oklch(0.9 0.004 265)' }}
      >
        {personalInfo.name}
      </h1>
      <div
        className="mx-auto mt-[5cqw] h-px w-[22%]"
        style={{
          background: 'var(--accent)',
          boxShadow: '0 0 12px 1px oklch(0.55 0.21 258 / 0.55)'
        }}
      />
      <p
        className="p-body mt-[4cqw]"
        style={{ color: 'rgba(255,255,255,0.52)', textShadow: '0 1px 0 rgba(0,0,0,0.6)' }}
      >
        {personalInfo.title}
      </p>
    </div>

    {/* The one pass of the lamp, on arrival. Narrow, low, and once. */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="cover-sweep absolute inset-y-[-20%] left-0 w-[26%]"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.055) 45%, rgba(255,255,255,0.085) 52%, transparent)'
        }}
      />
    </div>
  </div>
);

const Back = () => (
  <div className="leather sheet-container relative flex h-full w-full items-end justify-center overflow-hidden">
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          'radial-gradient(ellipse 70% 55% at 50% 30%, oklch(0.29 0.016 265 / 0.75), transparent 72%)'
      }}
    />
    <div
      className="pointer-events-none absolute inset-[5.5%] rounded-[2px]"
      style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.42)' }}
    />
    <p
      className="plate-label relative pb-[8%]"
      style={{ color: 'rgba(255,255,255,0.32)', textShadow: '0 1px 0 rgba(0,0,0,0.6)' }}
    >
      End of portfolio
    </p>
  </div>
);

/* --- Spread content ------------------------------------------------------ */

const Opening = () => (
  <Sheet label="Introduction" folio="01">
    <h2 className="display p-title-lg">
      I build things that have to survive contact with real users.
    </h2>
    <p className="p-lead mt-[4cqw] max-w-[60ch]" style={{ color: 'var(--ink-soft)' }}>
      {personalInfo.bio}
    </p>
    <p className="p-lead mt-[3cqw] max-w-[60ch]" style={{ color: 'var(--ink-soft)' }}>
      Three projects follow. Each one is live, each one has people using it, and
      the numbers quoted against them are measured rather than estimated.
    </p>
  </Sheet>
);

const Contents = () => (
  <Sheet label="Contents" folio="02">
    <ol className="space-y-0">
      {[
        ['Introduction', '01'],
        ...projects.map((p, i) => [p.title, String(i + 3).padStart(2, '0')] as const),
        ['Technical skills', '06'],
        ['AI-assisted development', '07'],
        ['Education', '08'],
        ['Contact', '09']
      ].map(([title, n]) => (
        <li
          key={title as string}
          className="p-row p-body flex items-baseline gap-3 border-b last:border-0"
          style={{ borderColor: 'var(--rule)' }}
        >
          <span className="plate-label shrink-0">{n}</span>
          <span className="flex-1 truncate">{title}</span>
        </li>
      ))}
    </ol>
  </Sheet>
);

const ProjectText = ({ index }: { index: number }) => {
  const p = projects[index];
  return (
    <Sheet label={`Plate ${String(index + 1).padStart(2, '0')}`} folio={String(index + 3).padStart(2, '0')}>
      <h2 className="display p-title-lg">{p.title}</h2>
      <p className="p-lead mt-[3cqw] max-w-[56ch]" style={{ color: 'var(--ink-soft)' }}>
        {p.description}
      </p>
      <ul className="mt-[4cqw] space-y-[1.6cqw]">
        {p.highlights.slice(0, 3).map((h) => (
          <li key={h} className="p-body flex gap-3">
            <span
              className="mt-[0.5em] h-1 w-1 shrink-0 rounded-full"
              style={{ background: 'var(--accent)' }}
            />
            <span style={{ color: 'var(--ink-soft)' }}>{h}</span>
          </li>
        ))}
      </ul>
      <div className="mt-[4cqw] flex flex-wrap gap-[1cqw]">
        {p.technologies.slice(0, 7).map((t) => (
          <span
            key={t}
            className="plate-label rounded-full px-2.5 py-1"
            style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
          >
            {t}
          </span>
        ))}
      </div>
      {p.links.live && (
        <p className="p-body mt-[3.5cqw]" style={{ color: 'var(--accent)' }}>
          {p.links.live.replace('https://', '')}
        </p>
      )}
    </Sheet>
  );
};

/** A plate: the image mounted on the page, the way a print sits in a sleeve. */
const ProjectPlate = ({ index }: { index: number }) => {
  const p = projects[index];
  const img = p.images[0];
  const url = typeof img === 'string' ? img : img?.url;
  const caption = typeof img === 'string' ? '' : img?.description;
  return (
    <div className="sheet sleeve relative flex h-full w-full flex-col overflow-hidden">
      <div className="flex flex-1 items-center justify-center overflow-hidden px-[7%] pt-[7%]">
        <div
          className="relative max-h-full w-full overflow-hidden rounded-[2px]"
          style={{ boxShadow: '0 18px 40px -16px rgba(0,0,0,0.45), 0 0 0 1px var(--rule)' }}
        >
          {url && (
            <img
              src={url}
              alt={caption || p.title}
              loading="lazy"
              className="block h-full w-full object-cover"
            />
          )}
        </div>
      </div>
      <p className="plate-label shrink-0 px-[7%] pb-[5%] pt-5 leading-relaxed">
        {caption}
      </p>
    </div>
  );
};

const SkillsPage = () => {
  const groups = skills.reduce<Record<string, typeof skills>>((acc, s) => {
    const k = s.category || 'other';
    (acc[k] ||= []).push(s);
    return acc;
  }, {});
  const titles: Record<string, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    tools: 'Tools & DevOps',
    concepts: 'Concepts'
  };
  return (
    <Sheet label="Technical skills" folio="06">
      <div className="space-y-[3cqw]">
        {Object.entries(groups).map(([k, items]) => (
          <div key={k}>
            <p className="plate-label mb-2">{titles[k] || k}</p>
            <p className="p-body" style={{ color: 'var(--ink-soft)' }}>
              {items.map((i) => i.name).join(' · ')}
            </p>
          </div>
        ))}
      </div>
    </Sheet>
  );
};

const WorkflowPage = () => (
  <Sheet label="AI-assisted development" folio="07">
    <h2 className="display p-title">How I work with Claude Code</h2>
    <p className="p-body mt-[3cqw] max-w-[58ch]" style={{ color: 'var(--ink-soft)' }}>
      {workflowIntro}
    </p>
    <div className="mt-[3.5cqw] space-y-[1.8cqw]">
      {practices.slice(0, 4).map((pr) => (
        <div key={pr.title} className="border-t pt-3" style={{ borderColor: 'var(--rule)' }}>
          <div className="flex items-baseline justify-between gap-4">
            <p className="p-body font-medium">{pr.title}</p>
            <span className="plate-label shrink-0">{pr.evidence}</span>
          </div>
        </div>
      ))}
    </div>
  </Sheet>
);

const SetupPage = () => (
  <Sheet label="Setup" folio="07">
    <div className="space-y-[3cqw]">
      {toolGroups.map((g) => (
        <div key={g.name}>
          <p className="plate-label mb-2">{g.name}</p>
          <p className="p-body" style={{ color: 'var(--ink-soft)' }}>
            {g.items.join(' · ')}
          </p>
        </div>
      ))}
    </div>
    <div className="mt-[4cqw] border-t pt-[3cqw]" style={{ borderColor: 'var(--rule)' }}>
      <p className="p-body" style={{ color: 'var(--ink-soft)' }}>
        {practices[4]?.detail}
      </p>
    </div>
  </Sheet>
);

const EducationPage = () => {
  const e = education;
  return (
    <Sheet label="Education" folio="08">
      <h2 className="display p-title">{e.degree}</h2>
      <p className="p-body mt-[2cqw]" style={{ color: 'var(--accent)' }}>
        {e.institution}
      </p>
      <p className="plate-label mt-2">
        {e.location} · {e.graduationYear}
      </p>
      {e.relevantCoursework && (
        <div className="mt-[4cqw]">
          <p className="plate-label mb-2">Relevant coursework</p>
          <p className="p-body" style={{ color: 'var(--ink-soft)' }}>
            {e.relevantCoursework.join(' · ')}
          </p>
        </div>
      )}
    </Sheet>
  );
};

const ContactPage = () => (
  <Sheet label="Contact" folio="09">
    <h2 className="display p-title-lg">Get in touch</h2>
    <div className="mt-[5cqw] space-y-[2.4cqw]">
      {[
        ['Email', contactInfo.email, `mailto:${contactInfo.email}`],
        ['GitHub', contactInfo.github.replace('https://', ''), contactInfo.github],
        ['LinkedIn', contactInfo.linkedin.replace('https://www.', ''), contactInfo.linkedin],
        ['Resume', 'resume.pdf', contactInfo.resume]
      ].map(([label, text, href]) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('mailto') ? undefined : '_blank'}
          rel="noreferrer"
          className="flex items-baseline justify-between gap-4 border-b pb-3 transition-colors hover:opacity-70"
          style={{ borderColor: 'var(--rule)' }}
        >
          <span className="plate-label">{label}</span>
          <span className="p-body truncate" style={{ color: 'var(--accent)' }}>
            {text}
          </span>
        </a>
      ))}
    </div>
  </Sheet>
);

/* --- The binder ---------------------------------------------------------- */

export const leaves: BinderLeaf[] = [
  { front: <Cover />, back: <Opening /> },
  { front: <Contents />, back: <ProjectText index={0} /> },
  { front: <ProjectPlate index={0} />, back: <ProjectText index={1} /> },
  { front: <ProjectPlate index={1} />, back: <ProjectText index={2} /> },
  { front: <ProjectPlate index={2} />, back: <SkillsPage /> },
  { front: <WorkflowPage />, back: <SetupPage /> },
  { front: <EducationPage />, back: <ContactPage /> },
  { front: <Back />, back: <Back /> }
];

/**
 * What each spread is called, indexed by how many leaves have been turned.
 *
 * The counter at the foot says where you are in the stack; this says what you
 * are looking at, which is the thing a reader actually wants. Derived from the
 * project data rather than typed out, so adding a fourth plate cannot leave a
 * label pointing at the wrong spread.
 */
export const spreadTitles: string[] = [
  'Front cover',
  'Introduction',
  ...projects.map((p) => p.title),
  'Skills and workflow',
  'Setup and education',
  'Contact',
  'Back cover'
];

/**
 * The same content as a single reading sequence.
 *
 * A 3:2 spread on a 390px phone gives each page 195px, which is not a design
 * decision anybody would defend. Narrow screens get one face at a time
 * instead, and flattening the leaves front-then-back happens to produce the
 * exact reading order of the spreads: a project's text page precedes its
 * plate, just as it sits to the left of it on a desk.
 */
export const faces: ReactNode[] = leaves.flatMap((l) => [l.front, l.back]);
