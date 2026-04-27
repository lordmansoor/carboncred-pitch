"use client";

import { ChevronRight, Zap, Shield, TrendingUp, Clock, DollarSign } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/50 backdrop-blur border-b border-green-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="font-bold text-white">C</span>
            </div>
            <h1 className="text-xl font-bold text-white">CarbonCred</h1>
          </div>
          <nav className="flex gap-6">
            <a href="#problem" className="text-gray-300 hover:text-white transition">Problem</a>
            <a href="#solution" className="text-gray-300 hover:text-white transition">Solution</a>
            <a href="#workflow" className="text-gray-300 hover:text-white transition">How It Works</a>
            <a href="#value" className="text-gray-300 hover:text-white transition">Value</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Carbon Credits at <span className="text-green-400">Internet Speed</span>
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          The world's fastest platform for buying, selling, and retiring carbon credits. Serving airlines and enterprises.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition">
          See Demo →
        </button>
      </section>

      {/* Problem Section */}
      <section id="problem" className="max-w-6xl mx-auto px-6 py-24">
        <h3 className="text-4xl font-bold text-white mb-12 text-center">The Problem</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Problem 1: Airlines */}
          <div className="bg-slate-800/50 border border-red-500/30 rounded-xl p-8">
            <Clock className="w-12 h-12 text-red-500 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">Airlines Are Mandated</h4>
            <p className="text-gray-400">
              Starting 2024, all international airlines must offset CO₂ emissions under CORSIA.
              <br /><br />
              They need 150+ million credits.
            </p>
          </div>

          {/* Problem 2: Supply Shortage */}
          <div className="bg-slate-800/50 border border-red-500/30 rounded-xl p-8">
            <TrendingUp className="w-12 h-12 text-red-500 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">Supply Crisis</h4>
            <p className="text-gray-400">
              Only 33 million credits available in the entire market.
              <br /><br />
              Airlines are scrambling, procurement takes 3-6 months.
            </p>
          </div>

          {/* Problem 3: Fragmented */}
          <div className="bg-slate-800/50 border border-red-500/30 rounded-xl p-8">
            <DollarSign className="w-12 h-12 text-red-500 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">Fragmented & Expensive</h4>
            <p className="text-gray-400">
              Brokers charge 15-30% commissions. Consulting fees: $100K+.
              <br /><br />
              No transparency on pricing.
            </p>
          </div>
        </div>

        <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-xl p-8">
          <p className="text-yellow-300 text-center text-lg font-semibold">
            There's also a second crisis: Companies need to report carbon credits for SEC compliance (starting 2025), but they have no tools. Spreadsheets are audit nightmares.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="max-w-6xl mx-auto px-6 py-24">
        <h3 className="text-4xl font-bold text-white mb-12 text-center">Our Solution</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Solution 1 */}
          <div className="bg-slate-800/50 border border-green-500/30 rounded-xl p-8">
            <Zap className="w-12 h-12 text-green-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">1. Instant Access</h4>
            <p className="text-gray-400">
              Airlines get carbon credits in <strong>1 week</strong>, not 6 months.
              <br /><br />
              We aggregate supply from verified sources globally.
            </p>
          </div>

          {/* Solution 2 */}
          <div className="bg-slate-800/50 border border-green-500/30 rounded-xl p-8">
            <Shield className="w-12 h-12 text-green-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">2. Fair & Transparent</h4>
            <p className="text-gray-400">
              No hidden commissions. Transparent pricing.
              <br /><br />
              Verified credits with full auditability. Every transaction is cryptographically secure.
            </p>
          </div>

          {/* Solution 3 */}
          <div className="bg-slate-800/50 border border-green-500/30 rounded-xl p-8">
            <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">3. Compliance Made Easy</h4>
            <p className="text-gray-400">
              Built-in tools for companies to report carbon credits for SEC, ESG, and SBTi.
              <br /><br />
              Audit-ready in one click.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="max-w-6xl mx-auto px-6 py-24">
        <h3 className="text-4xl font-bold text-white mb-12 text-center">How It Works</h3>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="flex gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500">
                <span className="text-white font-bold">1</span>
              </div>
            </div>
            <div className="flex-1 bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h4 className="text-xl font-bold text-white mb-2">Project Creators (Guyana, Costa Rica, etc.)</h4>
              <p className="text-gray-400">
                Real-world carbon projects verify they've reduced emissions. They need buyers.
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ChevronRight className="w-8 h-8 text-green-500 transform rotate-90" />
          </div>

          {/* Step 2 */}
          <div className="flex gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500">
                <span className="text-white font-bold">2</span>
              </div>
            </div>
            <div className="flex-1 bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h4 className="text-xl font-bold text-white mb-2">CarbonCred Platform</h4>
              <p className="text-gray-400">
                We list credits from verified sources. Airlines and companies come to us.
              </p>
              <p className="text-green-400 font-semibold mt-3">✓ Complete auditability</p>
              <p className="text-green-400 font-semibold">✓ No double-counting possible</p>
              <p className="text-green-400 font-semibold">✓ Regulatory-ready</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ChevronRight className="w-8 h-8 text-green-500 transform rotate-90" />
          </div>

          {/* Step 3 */}
          <div className="flex gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500">
                <span className="text-white font-bold">3</span>
              </div>
            </div>
            <div className="flex-1 bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h4 className="text-xl font-bold text-white mb-2">Buyers (Airlines, Corporations)</h4>
              <p className="text-gray-400">
                They purchase credits instantly. Built-in compliance tools help them report.
              </p>
              <p className="text-green-400 font-semibold mt-3">✓ Compliance certificates generated</p>
              <p className="text-green-400 font-semibold">✓ SEC/ESG reporting automated</p>
              <p className="text-green-400 font-semibold">✓ Full audit trail available</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ChevronRight className="w-8 h-8 text-green-500 transform rotate-90" />
          </div>

          {/* Step 4 */}
          <div className="flex gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500">
                <span className="text-white font-bold">4</span>
              </div>
            </div>
            <div className="flex-1 bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h4 className="text-xl font-bold text-white mb-2">Credits Retired (Permanent)</h4>
              <p className="text-gray-400">
                Credits are locked forever with public proof of retirement. Compliance achieved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section id="value" className="max-w-6xl mx-auto px-6 py-24">
        <h3 className="text-4xl font-bold text-white mb-12 text-center">Why CarbonCred?</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 border border-green-500/30 rounded-xl p-8">
            <h4 className="text-2xl font-bold text-green-400 mb-4">For Airlines</h4>
            <ul className="space-y-3 text-gray-300">
              <li>✓ 500K credits in 1 week (not 6 months)</li>
              <li>✓ Transparent pricing (no surprises)</li>
              <li>✓ Verified, regulatory-compliant</li>
              <li>✓ Direct access to supply (no middlemen)</li>
              <li>✓ CORSIA compliance proof included</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-green-500/30 rounded-xl p-8">
            <h4 className="text-2xl font-bold text-green-400 mb-4">For Companies</h4>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Automated Scope 1/2 emissions tracking</li>
              <li>✓ SEC disclosure export (one click)</li>
              <li>✓ Carbon credit retirement ledger</li>
              <li>✓ ESG/SBTi validation built-in</li>
              <li>✓ Affordable compliance solution</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-green-500/30 rounded-xl p-8">
            <h4 className="text-2xl font-bold text-green-400 mb-4">For Project Developers</h4>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Global distribution instantly</li>
              <li>✓ Faster payout (2 days, not 30-60)</li>
              <li>✓ Transparent deal flow</li>
              <li>✓ Direct access to buyers</li>
              <li>✓ Fair marketplace pricing</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-green-500/30 rounded-xl p-8">
            <h4 className="text-2xl font-bold text-green-400 mb-4">For Regulators</h4>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Complete auditability & transparency</li>
              <li>✓ Double-counting mathematically impossible</li>
              <li>✓ Cryptographic proof of every transaction</li>
              <li>✓ Public verification accessible</li>
              <li>✓ Compliance-ready reporting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h3 className="text-4xl font-bold text-white mb-6">
          Solving a $2B+ Market Problem
        </h3>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Airlines need 150M+ credits. We provide them in 1 week at fair prices.
          <br />
          Companies need compliance tools. We make reporting automatic.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-10 rounded-lg transition text-lg">
          Schedule a Demo
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-400">
          <p>CarbonCred © 2026 | Solving the Carbon Credit Crisis</p>
        </div>
      </footer>
    </div>
  );
}
