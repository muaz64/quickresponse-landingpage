import { motion } from "framer-motion";
import { Check, Mail, Users, Star } from "lucide-react";
import Heroimg from "./assets/QuickResponse signup form.png";
import Features from "./assets/features.png"

export default function App() {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-cyan-400">QuickResponse</h1>
        <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-xl font-medium">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
        >
          Build Your Email List <span className="text-cyan-400">Smarter</span> 🚀
        </motion.h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          QuickResponse helps businesses grow with{" "}
          <span className="text-cyan-400 font-semibold">powerful signup forms</span>{" "}
          designed to capture more leads effortlessly.
        </p>

        {/* Signup Form */}
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto mb-8">
          <div className="relative w-full sm:flex-1">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-medium"
          >
            Sign Up Free
          </button>
        </form>

        <button className="bg-cyan-500 hover:bg-cyan-600 text-lg px-8 py-6 rounded-xl font-semibold">
          Start for Free
        </button>

        <motion.img
          src={Heroimg}
          alt="QuickResponse signup form"
          className="mx-auto mt-12 max-w-xl rounded-2xl shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        />
      </section>

      {/* Trusted Clients */}
      <section className="py-16 px-6 text-center">
        <h3 className="text-xl text-gray-300 mb-6">Trusted by leading brands</h3>
        <div className="flex flex-wrap justify-center gap-8 opacity-80">
          <img src="https://dummyimage.com/120x40/fff/aaa&text=Shopify" alt="Shopify" />
          <img src="https://dummyimage.com/120x40/fff/aaa&text=HubSpot" alt="HubSpot" />
          <img src="https://dummyimage.com/120x40/fff/aaa&text=Stripe" alt="Stripe" />
          <img src="https://dummyimage.com/120x40/fff/aaa&text=Notion" alt="Notion" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">Why Choose QuickResponse?</h2>
          <ul className="space-y-4">
            {[
              "Drag-and-drop signup forms",
              "Advanced analytics",
              "Seamless integrations",
              "Automated follow-ups",
            ].map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <Check className="text-cyan-400" /> {feature}
              </li>
            ))}
          </ul>
          <button className="mt-8 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-medium">
            Try It Now
          </button>
        </div>
        <motion.img
          src={Features}
          alt="Features"
          className="rounded-2xl shadow-xl"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800/50 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
          {[1, 2, 3, 4].map((t) => (
            <div
              key={t}
              className="min-w-[300px] max-w-sm bg-slate-900 border border-slate-700 rounded-xl shadow-lg"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  “QuickResponse made building our email list 3x faster. The forms are stunning and easy to use!”
                </p>
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-cyan-400" />
                  <div>
                    <p className="font-semibold">Jane Doe</p>
                    <p className="text-sm text-gray-400">Marketing Lead @ Shopify</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-extrabold mb-6">Ready to Grow Your Email List?</h2>
        <p className="text-gray-300 mb-8">
          Join thousands of businesses already using{" "}
          <span className="text-cyan-400 font-semibold">QuickResponse</span> to connect with their audience.
        </p>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-lg px-10 py-6 rounded-xl font-semibold">
          Create Free Account
        </button>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 border-t border-slate-700">
        © {new Date().getFullYear()} QuickResponse. All rights reserved.
      </footer>
    </div>
  );
}
