import Link from "next/link";
import { shell } from "@/lib/styles";

export default function NotFound() {
  return (
    <main id="main-content" className={`${shell} grid min-h-[55vh] place-content-center justify-items-center py-20 text-center`}>
      <span className="font-serif text-[5rem] font-black text-blue">404</span>
      <h1 className="m-0 max-w-[680px] font-serif text-[clamp(2rem,5vw,4rem)] leading-[0.95]">This story has moved off the front page.</h1>
      <p className="text-muted">The page you requested could not be found.</p>
      <Link className="bg-blue px-3.5 py-[11px] text-[0.72rem] font-extrabold text-white uppercase" href="/">Return to today&apos;s edition</Link>
    </main>
  );
}
