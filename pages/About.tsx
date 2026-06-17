// import aboutteam from "@images/about-team.jpg"

export default function AboutPage() {
return ( <main className="bg-slate-950 text-white">


  {/* Hero Section */}
  <section className="py-28 px-6 text-center">
    <span className="bg-violet-500/20 text-violet-300 px-4 py-2 rounded-full text-sm">
      About FelinePay
    </span>

    <h1 className="text-5xl md:text-7xl font-bold mt-6">
      Building The Future Of
      <span className="text-violet-500"> Digital Payments</span>
    </h1>

    <p className="max-w-3xl mx-auto mt-6 text-slate-400 text-lg">
      FelinePay helps users buy, sell and exchange gift cards while
      providing secure virtual dollar cards for global online payments.
    </p>
  </section>

  {/* Who We Are */}
  <section className="max-w-7xl mx-auto px-6 py-20">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <div>
        <img
          src="https://th.bing.com/th/id/OIP.HvOWjtt_B-Sd7BmyVss6FgHaEo?w=250&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
          alt="FelinePay Team"
          className="rounded-3xl w-full"
        />
      </div>

      <div>
        <span className="text-violet-400 uppercase font-semibold">
          Who We Are
        </span>

        <h2 className="text-4xl font-bold mt-4">
          Empowering Digital Transactions Worldwide
        </h2>

        <p className="mt-6 text-slate-400">
          FelinePay is a fintech platform created to simplify digital
          transactions through secure gift card trading and virtual
          payment solutions.
        </p>

        <p className="mt-4 text-slate-400">
          We help individuals, freelancers, remote workers and
          businesses access global payment tools with speed,
          transparency and security.
        </p>
      </div>

    </div>
  </section>

  {/* Mission & Vision */}
  <section className="max-w-7xl mx-auto px-6 py-20">
    <div className="grid md:grid-cols-2 gap-10">

      <div className="bg-slate-900 p-8 rounded-3xl">
        <h3 className="text-3xl font-bold mb-4">
          Our Mission
        </h3>

        <p className="text-slate-400">
          To make digital payments and gift card trading accessible,
          secure and effortless for everyone.
        </p>
      </div>

      <div className="bg-slate-900 p-8 rounded-3xl">
        <h3 className="text-3xl font-bold mb-4">
          Our Vision
        </h3>

        <p className="text-slate-400">
          To become Africa's most trusted platform for virtual cards,
          digital payments and gift card exchange services.
        </p>
      </div>

    </div>
  </section>

  {/* Why Choose Us */}
  <section className="max-w-7xl mx-auto px-6 py-20">

    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold">
        Why Choose FelinePay?
      </h2>

      <p className="text-slate-400 mt-4">
        Everything you need for secure digital transactions.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-slate-900 p-8 rounded-3xl">
        <h3 className="font-semibold text-xl">
          Best Market Rates
        </h3>
        <p className="mt-3 text-slate-400">
          Competitive gift card exchange rates.
        </p>
      </div>

      <div className="bg-slate-900 p-8 rounded-3xl">
        <h3 className="font-semibold text-xl">
          Fast Transactions
        </h3>
        <p className="mt-3 text-slate-400">
          Instant processing and quick payouts.
        </p>
      </div>

      <div className="bg-slate-900 p-8 rounded-3xl">
        <h3 className="font-semibold text-xl">
          Secure Platform
        </h3>
        <p className="mt-3 text-slate-400">
          Enterprise-grade security and protection.
        </p>
      </div>

      <div className="bg-slate-900 p-8 rounded-3xl">
        <h3 className="font-semibold text-xl">
          24/7 Support
        </h3>
        <p className="mt-3 text-slate-400">
          Dedicated support whenever you need help.
        </p>
      </div>

    </div>

  </section>

  {/* Statistics */}
  <section className="max-w-7xl mx-auto px-6 py-20">

    <div className="grid md:grid-cols-4 gap-8 text-center">

      <div>
        <h3 className="text-5xl font-bold text-violet-500">
          10K+
        </h3>
        <p className="mt-3 text-slate-400">
          Active Users
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-bold text-violet-500">
          100K+
        </h3>
        <p className="mt-3 text-slate-400">
          Transactions
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-bold text-violet-500">
          50+
        </h3>
        <p className="mt-3 text-slate-400">
          Countries
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-bold text-violet-500">
          99.9%
        </h3>
        <p className="mt-3 text-slate-400">
          Platform Uptime
        </p>
      </div>

    </div>

  </section>

  {/* CTA */}
  <section className="py-24 px-6">

    <div className="max-w-5xl mx-auto text-center bg-gradient-to-r from-violet-600 to-cyan-500 rounded-[40px] p-16">

      <h2 className="text-5xl font-bold">
        Ready To Start Trading?
      </h2>

      <p className="mt-6 text-lg">
        Join thousands of users already using FelinePay.
      </p>

      <button className="mt-8 bg-white text-black px-8 py-4 rounded-full font-semibold">
        Get Started
      </button>

    </div>

  </section>

</main>


);
}
