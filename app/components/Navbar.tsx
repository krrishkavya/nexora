export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-5 py-4">
      {/* Logo */}
      <a href="/" className="text-[18px] font-bold tracking-tight">
        NEXORA
      </a>

      {/* Navigation */}
      <nav className="flex items-center gap-7 text-[12px]">
        <a href="#features">Features</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#pricing">Pricing</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Auth */}
      <div className="flex items-center gap-4 text-[12px]">
        <a href="/login">Log in</a>

        <a
          href="/signup"
          className="rounded-full bg-purple-600 px-4 py-2.5 font-medium"
        >
          Sign up free →
        </a>
      </div>
    </header>
  );
}