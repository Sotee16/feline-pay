"use client";

const footerData = {
company: {
name: "FelinePay",
description:
"Buy, sell and exchange gift cards instantly. Create secure virtual dollar cards for online payments worldwide.",
},

products: [
"Gift Card Trading",
"Virtual Cards",
"Rate Calculator",
"Wallet",
],

resources: [
"FAQ",
"Blog",
"Help Center",
"Security",
],

companyLinks: [
"About Us",
"Contact",
"Privacy Policy",
"Terms of Service",
],

socials: [
{ name: "Facebook", href: "#" },
{ name: "Instagram", href: "#" },
{ name: "X", href: "#" },
{ name: "LinkedIn", href: "#" },
],
};

export default function Footer() {
return ( <footer className="bg-slate-950 text-white pt-20"> <div className="max-w-7xl mx-auto px-6 lg:px-12">

```
    <div className="grid md:grid-cols-4 gap-12 pb-16">

      {/* Brand */}
      <div className="md:col-span-1">
        <h2 className="text-3xl font-bold text-violet-500">
          FelinePay
        </h2>

        <p className="mt-4 text-slate-400">
          {footerData.company.description}
        </p>
      </div>

      {/* Products */}
      <div>
        <h3 className="font-semibold mb-5">
          Products
        </h3>

        <ul className="space-y-3 text-slate-400">
          {footerData.products.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Resources */}
      <div>
        <h3 className="font-semibold mb-5">
          Resources
        </h3>

        <ul className="space-y-3 text-slate-400">
          {footerData.resources.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Company */}
      <div>
        <h3 className="font-semibold mb-5">
          Company
        </h3>

        <ul className="space-y-3 text-slate-400">
          {footerData.companyLinks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

    </div>

    <div className="border-t border-slate-800 py-6 flex flex-col md:flex-row justify-between items-center">

      <p className="text-slate-500 text-sm">
        © 2026 FelinePay. All rights reserved.
      </p>

      <div className="flex gap-6 mt-4 md:mt-0">
        {footerData.socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            className="text-slate-400 hover:text-white"
          >
            {social.name}
          </a>
        ))}
      </div>

    </div>

    <div className="relative overflow-hidden">
      <h1 className="text-center font-black text-[clamp(4rem,15vw,14rem)] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.08)]">
        FELINEPAY
      </h1>
    </div>

  </div>
</footer>

);
}
