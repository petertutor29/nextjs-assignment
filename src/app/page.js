import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-950 text-slate-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-2xl shadow-xl text-center">
        
        {/* Student Badge */}
        <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
          2nd Year IT Student
        </div>

        {/* Main Name */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Peter V. Tutor
        </h1>

        {/* Simple Bio */}
        <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">
          Welcome to my Next.js website project! I am currently learning web development and building basic projects to practice my coding skills.
        </p>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4">
          <Link
            href="/portfolio"
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-emerald-500/10 text-sm"
          >
            My Portfolio
          </Link>
          <Link
            href="/about"
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium px-6 py-3 rounded-xl border border-slate-700 transition-all text-sm"
          >
            About Me
          </Link>
        </div>

      </div>
    </div>
  );
}