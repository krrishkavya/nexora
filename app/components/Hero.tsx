export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-8 text-center text-white">
      
      {/* Purple glow */}
      <div className="pointer-events-none absolute left-1/2 top-[300px] h-[350px] w-[650px] -translate-x-1/2 rounded-full bg-purple-600/40 blur-[120px]" />

      {/* Badge */}
      <div className="relative mx-auto mb-5 w-fit rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1.5 text-xs text-purple-300">
        Built for modern teams
      </div>

      {/* Main heading */}
      <h1 className="relative bg-gradient-to-b from-white via-purple-200 to-purple-500 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
        NEXORA
      </h1>

      {/* Tagline */}
      <h2 className="relative mt-3 text-xl font-semibold">
        Organize. Collaborate. Deliver.
      </h2>

      {/* Description */}
      <p className="relative mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-400">
        Nexora helps teams manage projects, track tickets,
        <br />
        and collaborate seamlessly — all in one place.
      </p>

      {/* Buttons */}
      <div className="relative mt-6 flex justify-center gap-3">
        <a
          href="/signup"
          className="rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium shadow-lg shadow-purple-600/30 transition hover:bg-purple-500"
        >
          Get Started Free →
        </a>

        <a
          href="#features"
          className="rounded-lg border border-white/20 px-6 py-3 text-sm font-medium transition hover:bg-white/10"
        >
          Take a Tour →
        </a>
      </div>

      {/* Dashboard */}
      <div className="relative mx-auto mt-8 w-[80%] max-w-[700px]">
        <div className="rounded-[22px] border border-purple-400/60 bg-gradient-to-b from-purple-500/20 to-transparent p-1.5 shadow-[0_0_50px_rgba(147,51,234,0.35)]">
          
          <div className="overflow-hidden rounded-[17px] border border-white/10 bg-[#111022]">

            {/* Dashboard header */}
            <div className="flex h-11 items-center justify-between border-b border-white/10 px-5">
              
              <div className="flex items-center gap-2">
                <div className="text-base font-bold text-purple-400">
                  ✕
                </div>
                <span className="text-sm font-semibold">
                  NEXORA
                </span>
              </div>

              <div className="h-5 w-48 rounded-md bg-white/5" />

              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-purple-500/40" />
                <div className="h-2.5 w-12 rounded bg-white/10" />
              </div>

            </div>

            {/* Dashboard body */}
            <div className="flex min-h-[330px]">

              {/* Sidebar */}
              <div className="hidden w-36 border-r border-white/10 p-4 md:block">
                <div className="space-y-2">
                  {[
                    "Dashboard",
                    "Projects",
                    "Tickets",
                    "Calendar",
                    "Team",
                    "Reports",
                    "Settings",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className={`rounded-md px-2.5 py-2 text-left text-xs ${
                        index === 0
                          ? "bg-purple-600/80 text-white"
                          : "text-gray-400"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Dashboard content */}
              <div className="flex-1 p-5 text-left">

                <div className="mb-4">
                  <div className="text-base font-semibold">
                    Welcome back, Alex 👋
                  </div>

                  <div className="mt-1 text-xs text-gray-500">
                    Here's what's happening with your projects today.
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  {[
                    ["Total Projects", "24"],
                    ["Open Tickets", "128"],
                    ["In Progress", "64"],
                    ["Resolved", "182"],
                  ].map(([title, value]) => (
                    <div
                      key={title}
                      className="rounded-lg border border-white/10 bg-white/[0.03] p-3"
                    >
                      <div className="text-[10px] text-gray-500">
                        {title}
                      </div>

                      <div className="mt-1 text-lg font-semibold">
                        {value}
                      </div>

                      <div className="mt-1 text-[9px] text-purple-400">
                        ↑ 12% from last week
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.03] p-4">
                  <div className="mb-3 text-sm font-medium">
                    Ticket Overview
                  </div>

                  <div className="flex h-32 items-end gap-2">
                    {[35, 55, 45, 70, 50, 80, 62, 90, 68, 85, 72, 95].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t bg-purple-500/60"
                          style={{ height: `${height}%` }}
                        />
                      )
                    )}
                  </div>
                </div>

                {/* Bottom cards */}
                <div className="mt-4 grid grid-cols-2 gap-3">

                  <div className="h-20 rounded-lg border border-white/10 bg-white/[0.03] p-3">
                    <div className="text-xs font-medium">
                      Projects
                    </div>

                    <div className="mt-3 h-1.5 rounded-full bg-purple-500/60" />

                    <div className="mt-2 h-1.5 w-3/4 rounded-full bg-purple-500/30" />
                  </div>

                  <div className="h-20 rounded-lg border border-white/10 bg-white/[0.03] p-3">
                    <div className="text-xs font-medium">
                      Priority Tickets
                    </div>

                    <div className="mt-3 h-1.5 w-4/5 rounded-full bg-purple-500/60" />

                    <div className="mt-2 h-1.5 w-1/2 rounded-full bg-purple-500/30" />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}