"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  Bell,
  Blocks,
  Bot,
  Calendar,
  CheckCircle,
  Database,
  DollarSign,
  FileSearch,
  FileText,
  Info,
  Link as LinkIcon,
  Lock,
  Network,
  Scale,
  Share2,
  Shield,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

// === Animations ===
const fadeInUpVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const getTransition = (delay: number = 0) => ({
  duration: 0.5,
  ease: "easeOut",
  delay,
});

// === Dummy Data for Bento Cards ===
const workflowItems = [
  { name: "Stripe-Payment.json", body: "Triggered when a new charge succeeds in Stripe." },
  { name: "Discord-Alert.json", body: "Send formatted messages to specific Discord channels." },
  { name: "OpenAI-Summarize.json", body: "Generate summaries from Google Form text inputs." },
  { name: "HTTP-Webhook.json", body: "Wait for external webhooks to trigger execution." },
  { name: "PostgreSQL-Sync.json", body: "Update database records on new customer creation." },
];

const bentoFeatures = [
  {
    Icon: Blocks,
    name: "Visual Workflow Builder",
    description: "Connect APIs and apps visually with a drag-and-drop canvas layout.",
    className: "col-span-3 md:col-span-2 lg:col-span-2",
    href: "/register",
    cta: "Learn more",
    background: (
      <div className="absolute top-10 flex w-full flex-col gap-4 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]">
        <Marquee pauseOnHover className="[--duration:20s]">
          {workflowItems.map((f, idx) => (
            <figure
              key={`mq1-${idx}`}
              className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.05] bg-gray-950/[.02] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.05] dark:bg-gray-50/[.02] dark:hover:bg-gray-50/[.05]",
                "transform-gpu transition-all duration-300 ease-out hover:blur-none"
              )}
            >
              <figcaption className="text-sm font-medium dark:text-white flex items-center gap-2">
                <Network className="w-4 h-4 text-indigo-500" /> {f.name}
              </figcaption>
              <blockquote className="mt-2 text-xs text-gray-500">{f.body}</blockquote>
            </figure>
          ))}
        </Marquee>
        <Marquee pauseOnHover reverse className="[--duration:20s]">
          {[
            { name: "GitHub-Issues.json", body: "Trigger workflow when a new issue is opened." },
            { name: "Slack-Notification.json", body: "Post directly to internal team Slack channels." },
            { name: "Anthropic-Claude.json", body: "Pass context to Claude 3.5 Sonnet for analysis." },
            { name: "SendGrid-Email.json", body: "Send automated follow-up emails to new leads." },
          ].map((f, idx) => (
            <figure
              key={`mq2-${idx}`}
              className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.05] bg-gray-950/[.02] hover:bg-gray-950/[.05]",
                "transform-gpu transition-all duration-300"
              )}
            >
              <figcaption className="text-sm font-medium dark:text-white flex items-center gap-2">
                <Network className="w-4 h-4 text-indigo-500" /> {f.name}
              </figcaption>
              <blockquote className="mt-2 text-xs text-gray-500">{f.body}</blockquote>
            </figure>
          ))}
        </Marquee>
      </div>
    ),
  },
  {
    Icon: Activity,
    name: "Real-time Execution logs",
    description: "Monitor job states, payload outputs, and node failures directly in real-time.",
    className: "col-span-3 md:col-span-1 lg:col-span-1",
    href: "/register",
    cta: "Learn more",
    background: (
      <div className="absolute right-0 top-0 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 overflow-hidden">
        <motion.div
          animate={{ y: ["0%", "-50%"] }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          className="flex flex-col items-center gap-4 pt-4 w-full"
        >
          {[...Array(2)].map((_, groupIdx) => (
            <div key={`col-${groupIdx}`} className="flex flex-col gap-4 w-full items-center">
              {[
                { tag: "Failed", text: "Stripe Webhook (Timeout)", icon: AlertTriangle, color: "text-red-500", bg: "bg-red-100 dark:bg-red-950", border: "border-red-200" },
                { tag: "Pending", text: "OpenAI Generation", icon: Activity, color: "text-amber-500", bg: "bg-amber-100 dark:bg-amber-950", border: "border-amber-200" },
                { tag: "Success", text: "Discord Notification", icon: CheckCircle, color: "text-emerald-500", bg: "bg-emerald-100 dark:bg-emerald-950", border: "border-emerald-200" },
                { tag: "Running", text: "PostgreSQL Sync", icon: Database, color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-950", border: "border-blue-200" },
              ].map((item, i) => (
                <div
                  key={`log-${groupIdx}-${i}`}
                  className="flex items-center gap-3 w-full max-w-[240px] rounded-xl border border-gray-950/[.05] bg-white p-3 shadow-sm"
                >
                  <div className={cn("p-2 rounded-full border", item.bg, item.border)}>
                    <item.icon className={cn("h-4 w-4", item.color)} />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-xs font-semibold text-gray-900">{item.tag}</span>
                    <span className="text-xs text-gray-500 truncate">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    ),
  },
  {
    Icon: Lock,
    name: "Encrypted Credentials",
    description: "Store OAuth tokens and API secrets securely using military-grade encryption.",
    className: "col-span-3 md:col-span-1 lg:col-span-1",
    href: "/register",
    cta: "Learn more",
    background: (
      <div className="absolute right-0 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
        <div className="absolute inset-0 flex justify-center items-start pt-8">
          <div className="w-full max-w-[240px] rounded-xl border border-gray-950/[.05] bg-white overflow-hidden relative shadow-md p-4">
            <motion.div
              animate={{ top: ["-10%", "110%", "-10%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[2px] bg-indigo-500/50 shadow-[0_0_10px_rgba(99,102,241,0.5)] z-10"
            />
            <div className="space-y-4 mb-2">
              <div className="flex items-center gap-3">
                <Lock className="w-4 h-4 text-indigo-500" />
                <div className="h-2 w-full bg-gray-100 rounded"></div>
              </div>
              <div className="flex items-center gap-3 opacity-80">
                <Shield className="w-4 h-4 text-indigo-500" />
                <div className="h-2 w-4/5 bg-gray-100 rounded"></div>
              </div>
              <div className="flex items-center gap-3 opacity-60">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    Icon: Bot,
    name: "AI Model Intgeration",
    description: "Built-in nodes for OpenAI, Anthropic, and Gemini text execution.",
    className: "col-span-3 md:col-span-1 lg:col-span-1",
    href: "/register",
    cta: "Learn more",
    background: (
      <div className="absolute right-0 top-0 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="relative w-full h-full max-w-[280px]">
             {/* Document Mockup */}
             <motion.div
              className="absolute top-8 left-4 w-[160px] bg-white border border-gray-200 rounded-lg p-3 shadow-sm z-10"
              initial={{ y: 0 }}
              animate={{ y: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Bot className="w-3 h-3 text-indigo-400" />
                <div className="h-1.5 w-12 bg-gray-200 rounded-full" />
              </div>
              <div className="space-y-1.5 mb-3">
                <div className="h-1.5 w-full bg-indigo-100 rounded-full" />
                <div className="h-1.5 w-4/5 bg-indigo-100 rounded-full" />
              </div>

               <div className="relative p-1.5 rounded bg-indigo-50 border border-indigo-100 mb-3">
                <div className="h-1.5 w-full bg-indigo-300/50 rounded-full mb-1.5" />
                <div className="h-1.5 w-2/3 bg-indigo-300/50 rounded-full" />
              </div>
            </motion.div>

            {/* Connecting Line */}
            <svg className="absolute inset-0 w-full h-full z-0">
              <motion.path
                d="M 120 100 Q 180 100 200 130"
                fill="none"
                stroke="currentColor"
                className="text-indigo-400"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <motion.circle cx="200" cy="130" r="3" className="fill-indigo-500" />
            </svg>

            {/* AI Suggestion Card */}
            <motion.div
              className="absolute top-[110px] right-2 w-[160px] bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-3 shadow-lg z-20 border border-indigo-400"
              initial={{ opacity: 0.8, x: 10 }}
              animate={{ opacity: 1, x: 0, y: [0, -4, 0] }}
              transition={{ y: { repeat: Infinity, duration: 3, ease: "easeInOut" } }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-3 h-3 text-indigo-200" />
                <span className="text-[10px] font-bold text-white tracking-wide">AI PAYLOAD</span>
              </div>
              <p className="text-[9px] text-indigo-100 leading-relaxed font-medium">
                Successfully parsed JSON response from GPT-4o mapping fields to webhook destination.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    ),
  },
  {
    Icon: Zap,
    name: "Inngest Powered Jobs",
    description: "Uninterrupted background execution tracking success metrics easily.",
    className: "col-span-3 md:col-span-1 lg:col-span-1",
    href: "/register",
    cta: "Learn more",
    background: (
      <div className="absolute right-0 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
        <div className="absolute inset-0 flex justify-center items-start pt-8">
          <div className="w-[85%] rounded-xl bg-transparent p-4">
             {/* Top Metrics Row */}
             <div className="flex justify-between items-center mb-6">
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 font-medium">Total Workflows Run</span>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-900">12,408</span>
                  <span className="text-[10px] text-emerald-500 font-semibold bg-emerald-100/50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                    <TrendingUp className="w-2 h-2" /> +8%
                  </span>
                </div>
              </div>
            </div>

            {/* Simulated Line Chart */}
            <div className="relative h-[60px] w-full mt-4">
              <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 40">
                <defs>
                  <linearGradient id="gradientCurve" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="rgb(99 102 241)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="rgb(99 102 241)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M0,40 L0,30 L20,25 L40,15 L60,20 L80,5 L100,0 L100,40 Z"
                  fill="url(#gradientCurve)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.path
                  d="M0,30 L20,25 L40,15 L60,20 L80,5 L100,0"
                  fill="none"
                  stroke="rgb(99 102 241)"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "linear", repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
                />
                <motion.circle
                  r="2"
                  className="fill-indigo-500"
                  animate={{
                    cx: [0, 20, 40, 60, 80, 100],
                    cy: [30, 25, 15, 20, 5, 0]
                  }}
                  transition={{ duration: 2, ease: "linear", repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
                />
              </svg>
            </div>
            {/* Timeline/Axis */}
            <div className="flex justify-between items-center mt-2 border-t border-gray-100 pt-2">
              <span className="text-[8px] text-gray-400">Jan</span>
              <span className="text-[8px] text-gray-400">Feb</span>
              <span className="text-[8px] text-gray-400">Mar</span>
              <span className="text-[8px] text-gray-400">Apr</span>
              <span className="text-[8px] text-gray-400">May</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* HEADER text-based branding, login/signup right */}
      <header className="absolute top-0 inset-x-0 w-full z-50 h-20 flex items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center">
          <span className="font-semibold text-2xl tracking-tighter text-gray-900 leading-none">
            Flow
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 hidden sm:block transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors shadow-sm"
          >
            Sign up
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        {/* HERO SECTION full height, centered content, no mockup */}
        <section className="relative flex flex-col items-center justify-center w-full px-4 min-h-screen overflow-hidden bg-[#f8fafc]">
          {/* Background radial soft blur meshes */}
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none flex items-center justify-center">
            <div className="absolute top-1/4 left-[-10%] w-[50vw] h-[50vw] bg-blue-300/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-[-10%] w-[40vw] h-[40vw] bg-indigo-200/30 rounded-full blur-[100px]" />
            <div className="absolute top-1/3 left-1/3 w-[60vw] h-[60vw] bg-purple-200/30 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto mt-[2rem]">
            <motion.h1
              initial="initial"
              animate="animate"
              variants={fadeInUpVariant}
              transition={getTransition(0.1)}
              className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-gray-900 leading-[1.05]"
            >
              Automate your work, <br />
              <span className="font-medium bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent pb-2">
                amplify your impact
              </span>
            </motion.h1>

            <motion.p
              initial="initial"
              animate="animate"
              variants={fadeInUpVariant}
              transition={getTransition(0.2)}
              className="text-lg md:text-2xl text-gray-500 mt-8 mb-12 max-w-3xl mx-auto leading-relaxed font-normal"
            >
              Flow is the open-source automation platform that connec—zero coding required.ts your favorite tools. Build powerful, multi-step workflows visually in minutes
            </motion.p>

            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUpVariant}
              transition={getTransition(0.4)}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
            >
              <Link
                href="/signup"
                className="cursor-pointer text-white font-medium rounded-2xl transition-all duration-200 bg-gray-900 hover:bg-gray-800 shadow-sm inline-flex h-14 px-8 items-center justify-center text-lg w-full sm:w-auto hover:scale-[1.02]"
              >
                Start building for free
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ===== FEATURES BENTO GRID identical to Clyra Setup ===== */}
        <section id="features" className="w-full py-24 md:py-32 bg-[#f8fafc]">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-4">
                Automations Made Simple, Fast,
                <br className="hidden md:block" /> and Visible.
              </h2>
              <p className="text-lg text-gray-500 max-w-xl mx-auto px-5">
                Empowering you to build integrations with flexible, reliable, and
                AI-powered execution logic.
              </p>
            </div>

            <BentoGrid className="max-w-6xl mx-auto">
              {bentoFeatures.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* PRICING identical to Clyra structure but stripped back for Flow */}
        <section id="pricing" className="w-full py-24 bg-white">
          <div className="container max-w-5xl mx-auto px-4">
             <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-4">
                Transparent Pricing
              </h2>
              <p className="text-lg text-gray-500 max-w-xl mx-auto px-5">
                Start for free, upgrade when you need heavy background scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Free */}
              <div className="border border-gray-200 rounded-3xl p-8 bg-white shadow-sm flex flex-col">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">Developer</h3>
                <p className="text-gray-500 mb-6">For personal projects.</p>
                <div className="text-5xl font-light mb-8 text-gray-900">$0<span className="text-lg text-gray-400">/mo</span></div>
                <ul className="space-y-4 mb-8 flex-1">
                   {[
                     "100 workflow executions",
                     "3 active workflows",
                     "Community support",
                     "Basic integrations"
                   ].map(item => (
                    <li key={item} className="flex gap-3 text-gray-600"><CheckCircle className="w-5 h-5 text-indigo-500" />{item}</li>
                   ))}
                </ul>
                <Button className="w-full h-12 text-base" variant="outline" asChild>
                  <Link href="/signup">Get Started</Link>
                </Button>
              </div>

               {/* Pro */}
              <div className="border border-indigo-200 rounded-3xl p-8 bg-indigo-50/50 relative shadow-md flex flex-col">
                <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">POPULAR</div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">Professional</h3>
                <p className="text-gray-500 mb-6">For teams doing critical syncs.</p>
                <div className="text-5xl font-light mb-8 text-gray-900">$49<span className="text-lg text-gray-400">/mo</span></div>
                <ul className="space-y-4 mb-8 flex-1">
                   {[
                     "150,000 executions",
                     "Unlimited active workflows",
                     "Premium AI Integrations",
                     "Custom API webhooks",
                     "Advanced logic & branching",
                     "Priority support & SLAs"
                   ].map(item => (
                    <li key={item} className="flex gap-3 text-gray-600"><CheckCircle className="w-5 h-5 text-indigo-500" />{item}</li>
                   ))}
                </ul>
                 <Button className="w-full h-12 text-base bg-indigo-600 hover:bg-indigo-700 text-white border-0 shadow-sm" asChild>
                    <Link href="https://buy.stripe.com/" target="_blank">Upgrade to Pro</Link>
                 </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


