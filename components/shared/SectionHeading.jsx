import Link from "next/link";

export default function SectionHeading({ eyebrow, title, href }) {
  return (
    <div className="mt-[34px] mb-[18px] flex min-h-[66px] items-end justify-between gap-5 border-t border-ink border-b border-rule pb-2.5">
      <div className="grid self-stretch content-end">
        {eyebrow ? <span className="mb-1 text-[0.61rem] font-black tracking-[0.12em] text-blue uppercase">{eyebrow}</span> : null}
        <h2 className="m-0 font-serif text-[clamp(1.65rem,2.6vw,2.4rem)] leading-[0.95] tracking-[-0.04em]">{title}</h2>
      </div>
      {href ? <Link className="pb-1 text-[0.65rem] font-black text-blue uppercase" href={href}>View all</Link> : null}
    </div>
  );
}
