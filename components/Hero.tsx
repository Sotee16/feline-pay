 import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-slate-100">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-200/20 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid min-h-[90vh] items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
              🚀 Trusted Gift Card Marketplace
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900 lg:text-7xl">
              Trade Gift Cards
              <span className="block bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
                With Confidence
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-600">
              Buy and sell Amazon, Apple, Steam, Google Play, Visa,
              Mastercard and other gift cards securely. Get competitive
              rates, instant processing, and reliable support.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/sell"
                className="rounded-xl bg-orange-600 px-8 py-4 font-semibold text-white transition hover:bg-orange-700"
              >
                Sell Gift Cards
              </Link>

              <Link
                href="/rates"
                className="rounded-xl border border-orange-300 bg-white px-8 py-4 font-semibold text-orange-600 transition hover:bg-orange-50"
              >
                View Rates
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  10K+
                </h3>
                <p className="text-slate-600">Successful Trades</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  24/7
                </h3>
                <p className="text-slate-600">Customer Support</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  100%
                </h3>
                <p className="text-slate-600">Secure Transactions</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center">
            <div className="relative">
          <img
  src=" https://thumbs.dreamstime.com/b/glossy-glass-flag-liberian-county-maryland-montserrado-northwestern-portion-west-african-nation-liberia-containing-258427925.jpg?w=992"
  alt="Gift Card"
  className="w-full max-w-lg rounded-2xl"
/>

              {/* Floating Card */}
              <div className="absolute -left-8 top-10 rounded-2xl bg-white p-4 shadow-xl">
                <p className="text-sm text-slate-500">
                  Current Rate
                </p>
                <h4 className="text-xl font-bold text-green-600">
                  $100 Amazon = LRD Rate
                </h4>
              </div>

              {/* Floating Badge */}
              <div className="absolute -right-6 bottom-10 rounded-2xl bg-orange-600 px-5 py-3 text-white shadow-xl">
                ⚡ Instant Payment
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}