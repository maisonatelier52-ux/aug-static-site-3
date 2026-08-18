export default function Newsletter() {
  return (
    <section className="my-[34px] grid grid-cols-[1fr_1.2fr] gap-8 border-t border-ink border-b border-rule bg-[#eef1f5] p-[22px] max-[820px]:grid-cols-1 max-[580px]:mx-[-14px] max-[580px]:p-[18px_14px]" id="newsletter" aria-labelledby="newsletter-title">
      <div>
        <span className="text-[0.61rem] font-black tracking-[0.12em] text-blue uppercase">The Weekly Meridian</span>
        <h2 className="my-[5px] font-serif text-[1.65rem] leading-none" id="newsletter-title">A clear view of the week, in one email.</h2>
        <p className="m-0 font-serif text-[0.86rem] text-muted">Seven essential stories, one visual essay and a reading list from our editors.</p>
      </div>
      <form action="#" className="[&_label]:mb-[7px] [&_label]:block [&_label]:text-[0.65rem] [&_label]:font-black [&_label]:uppercase">
        <label htmlFor="newsletter-email">Email address</label>
        <div className="flex max-[580px]:grid">
          <input className="h-11 min-w-0 flex-1 border border-[#8d939b] border-r-0 bg-white px-3 max-[580px]:border-r" id="newsletter-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
          <button className="cursor-pointer border-0 bg-blue px-[18px] text-[0.67rem] font-black text-white uppercase max-[580px]:h-[42px]" type="submit">Subscribe</button>
        </div>
        <small className="mt-[7px] block text-[0.55rem] text-muted">By subscribing, you agree to receive our demo newsletter.</small>
      </form>
    </section>
  );
}
