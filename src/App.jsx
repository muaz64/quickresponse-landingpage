import { motion } from "framer-motion";
import { Check, Mail, Users, Star } from "lucide-react";
import Heroimg from "./assets/QuickResponse signup form.png";
import Features from "./assets/features.png";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Startup Founder",
    text: "QuickResponse doubled my subscriber list in just a month!",
  },
  {
    name: "David Kim",
    role: "Marketing Lead",
    text: "Super easy to use and integrates seamlessly with my workflow.",
  },
  {
    name: "Aisha Patel",
    role: "Blogger",
    text: "Finally a signup form that actually converts readers into fans.",
  },
];
const plans = [
  {
    name: "Starter",
    price: "$15",
    desc: "Grow your list with email marketing and landing pages.",
    features: [
      "Unlimited newsletters",
      "Unlimited Landing Pages",
      "Welcome email series",
      "AI campaign generator",
      "Signup forms and popups",
    ],
  },
  {
    name: "Marketer",
    price: "$48",
    desc: "Automate your marketing, promote and sell across channels.",
    features: [
      "Advanced marketing automation",
      "Email delivery scheduling",
      "Advanced segmentation",
      "Ecommerce campaigns",
      "Promo codes",
    ],
  },
  {
    name: "Creator",
    price: "$56",
    desc: "Create, market, and monetize your knowledge with all-in-one software.",
    features: [
      "AI Course Creator",
      "Unlimited courses",
      "Up to 500 students",
      "Quizzes & certificates",
      "Premium newsletters",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom pricing",
    desc: "Maximize revenue with tailored solutions and premium support.",
    features: [
      "Premium, priority support",
      "Dedicated IP address",
      "Single sign-on",
      "SMS marketing",
      "Mobile push notifications",
    ],
  },
];

export default function App() {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-700 to-slate-900 text-white">
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
          Build Your Email List <span className="text-cyan-400">Smarter</span>{" "}
          🚀
        </motion.h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          QuickResponse helps businesses grow with{" "}
          <span className="text-cyan-400 font-semibold">
            powerful signup forms
          </span>{" "}
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
        <h3 className="text-xl text-gray-300 mb-6">
          Trusted by leading brands
        </h3>
        <div className="flex flex-wrap justify-center gap-8 opacity-80">
          <img
            src="https://dummyimage.com/120x40/fff/aaa&text=Shopify"
            alt="Shopify"
          />
          <img
            src="https://dummyimage.com/120x40/fff/aaa&text=HubSpot"
            alt="HubSpot"
          />
          <img
            src="https://dummyimage.com/120x40/fff/aaa&text=Stripe"
            alt="Stripe"
          />
          <img
            src="https://dummyimage.com/120x40/fff/aaa&text=Notion"
            alt="Notion"
          />
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
      <section id="testimonials" className="py-20 px-6 lg:px-20">
      <h2 className="text-center text-3xl md:text-5xl font-bold">
        Loved by <span className="text-cyan-500">Users</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-10 mt-12">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="p-6 rounded-2xl border shadow "
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3 }}
          >
            <p className=" italic">“{t.text}”</p>
            <h4 className="mt-4 font-semibold">{t.name}</h4>
            <span className="text-sm ">{t.role}</span>
          </motion.div>
        ))}
      </div>
    </section>

      {/* Pricing */}

      <section className="py-20" id="pricing">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl mb-12 ">
            Pricing based on your needs
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{plan.desc}</p>
                <p className="mt-4 text-2xl font-bold text-gray-900">
                  {plan.price}
                  {plan.price !== "Custom pricing" && (
                    <span className="text-gray-500 text-base"> /mo</span>
                  )}
                </p>
                <ul className="mt-6 space-y-2 text-left text-sm text-gray-700">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-green-600 mr-2">✔</span> {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full rounded-xl bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition">
                  {plan.price === "Custom pricing"
                    ? "Contact Sales"
                    : "Get Started"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-extrabold mb-6">
          Ready to Grow Your Email List?
        </h2>
        <p className="text-gray-300 mb-8">
          Join thousands of businesses already using{" "}
          <span className="text-cyan-400 font-semibold">QuickResponse</span> to
          connect with their audience.
        </p>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-lg px-10 py-6 rounded-xl font-semibold">
          Create Free Account
        </button>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 border-t border-slate-700">
        <div className="mt-4 flex justify-center gap-6">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
        © {new Date().getFullYear()} Muaz Muhammad. All rights reserved.
      </footer>
    </div>
  );
}
