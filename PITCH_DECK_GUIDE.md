# CarbonCred Pitch Deck — What's Included

## Overview

This is a **professional, production-ready pitch deck** that explains the CarbonCred platform without technical jargon or cost details. It's designed to be shared with investors, partners, and stakeholders.

---

## What the Pitch Deck Shows

### 1. **Hero Section**
- Compelling headline: "Carbon Credits at Internet Speed"
- One-line value prop
- Clear call-to-action

### 2. **The Problem** (3 Sections)
Shows **what's broken** in the current market:

- **Airlines Are Mandated** — CORSIA requires international airlines to offset starting 2024. They need 150M+ credits.
- **Supply Crisis** — Only 33M credits exist. Massive shortage creates panic buying.
- **Fragmented & Expensive** — Brokers charge 15-30% commissions, consulting costs $100K+, no price transparency.

Plus a bonus problem: **Companies need compliance tools for SEC disclosure** (starting 2025), but have no solution.

### 3. **Our Solution** (3 Pillars)
Shows **how we solve it**:

- **Instant Access** — 1 week instead of 6 months
- **Fair & Transparent** — No hidden fees, verified credits, complete auditability
- **Compliance Made Easy** — Built-in SEC/ESG/SBTi tools

### 4. **How It Works** (4-Step Workflow)
Visual journey:

```
Project Creators (Guyana)
    ↓
CarbonCred Platform (aggregates, verifies, lists)
    ↓
Buyers (Airlines, Corporations)
    ↓
Credits Retired (permanent, with proof)
```

Each step shows **what's happening** and **what value we deliver**:
- Step 1: Real-world emissions prevented
- Step 2: Aggregation, auditability, regulatory compliance
- Step 3: Instant purchase, compliance tools
- Step 4: Permanent retirement with public proof

### 5. **Value Proposition** (4 Audiences)
Customized benefits for each user:

- **For Airlines**: Fast (1 week), transparent, compliant
- **For Companies**: Automated tracking, SEC-ready, affordable
- **For Project Developers**: Global distribution, fast payout, fair pricing
- **For Regulators**: Complete transparency, double-counting prevention, audit trail

### 6. **Call to Action**
Final hook: **"$2B+ Market Problem"** with demo booking CTA

---

## Design Philosophy

**No Technical Jargon**
- No mention of Neon, Stripe, Trigger.dev, APIs, etc.
- No cost breakdown
- No infrastructure details
- Pure business value

**Investor-Ready**
- Professional color scheme (dark slate + green)
- Clean typography
- Visual hierarchy
- Trust signals (verified, auditable, transparent)

**Stakeholder-Focused**
- Problem first (they need to feel the pain)
- Solution clearly solves that pain
- Workflow shows the reality (not fantasy)
- Value customized per audience

---

## How to Use This

### For Investors
1. Deploy the app
2. Share the link in your pitch deck
3. Use it as conversation starter
4. "This is what we're building. Let me show you."

### For Partnerships
1. Send the link to carbon credit companies
2. "Want to integrate with CarbonCred?"
3. Shows your platform clearly

### For Recruiting
1. Share with potential team members
2. "This is the vision. Want to build it?"
3. Professional presentation = serious founder

### For Board Meetings
1. Display on TV/projector
2. Walk through workflow
3. Hit each pain point → each solution

---

## Customization (5 Minutes)

### Edit Content
File: `/app/page.tsx`

Change these sections:
- Line 45-52: Header branding
- Line 73-75: Hero text
- Line 110-128: Problem sections (edit text, keep icons)
- Line 167-175: Solution sections (edit text, keep icons)
- Line 252-302: Workflow steps (edit text and descriptions)
- Line 367-410: Value props (add/remove benefits)

### Change Colors
Find and replace:
- `text-green-400` → any Tailwind color
- `border-green-500` → any Tailwind color
- `bg-green-500` → any Tailwind color

### Add Logo
1. Drop PNG/SVG in `/public` folder
2. Update line 46 in page.tsx with new image path

### Add Contact Info
Replace "Schedule a Demo" button link:
```
<button onClick={() => window.location.href = 'https://calendly.com/your-link'}>
```

---

## Deployment (2 Steps)

### Step 1: Push to GitHub
```bash
cd ~/carboncred-pitch
git remote add origin https://github.com/YOUR_USERNAME/carboncred-pitch.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Paste your GitHub URL
4. Click "Deploy"

**Done in 30 seconds.** You'll get a live URL like:
```
https://carboncred-pitch-xyz.vercel.app
```

---

## Share the Link

**Perfect for:**
- Email to investors: "Here's what we're building"
- LinkedIn posts: "Check out our pitch deck"
- Slack: Share in conversations
- Pitch deck slides: "Visit carboncred-pitch-xyz.vercel.app to see the full workflow"
- Business cards: Print QR code of the link

---

## Analytics

Once deployed on Vercel:
1. Go to Vercel Dashboard
2. Select project
3. Click "Analytics"
4. See visitor counts, page views, geographic data

Track if investors are actually visiting the deck.

---

## Next Steps

1. **Deploy it** (follow DEPLOYMENT.md)
2. **Share the link** (start with 5 potential investors)
3. **Get feedback** (what questions does it raise?)
4. **Iterate** (update copy based on feedback)
5. **Track engagement** (Vercel analytics)

---

## FAQ

**Q: Should I send the link or download/print it?**
A: Send the link. It's always up-to-date, looks professional on any device, and you can see who visits.

**Q: Can I present it live?**
A: Yes! Open it fullscreen on your laptop, click "See Demo" button to navigate. Scroll through the workflow.

**Q: How long does the pitch take?**
A: 3-5 minutes to walk through. Problem → Solution → Workflow → Value → Ask.

**Q: Can I embed it in my own website?**
A: Yes, but this is best as a standalone link. Share the Vercel URL directly.

**Q: What if they ask technical questions?**
A: You have separate docs explaining architecture, database, APIs, etc. (COMPETITIVE_ANALYSIS.md, etc. in the vault). This deck is business-only.

---

## Files Included

```
carboncred-pitch/
├── app/
│   ├── page.tsx          ← Main pitch deck (edit this)
│   ├── layout.tsx        ← Page structure
│   └── globals.css       ← Styling
├── package.json          ← Dependencies
├── next.config.ts        ← Next.js config
├── tailwind.config.ts    ← Tailwind CSS settings
├── DEPLOYMENT.md         ← How to deploy ← READ THIS
└── PITCH_DECK_GUIDE.md   ← This file
```

---

## Support

**Deploy doesn't work?**
- See DEPLOYMENT.md for step-by-step

**Want to change design?**
- Edit `/app/page.tsx` → CSS classes are Tailwind
- Run `npm run dev` locally to preview changes

**Want to add pages?**
- Create new file in `/app` folder (e.g., `/app/team/page.tsx`)
- Add navigation link in header

---

**Created:** April 28, 2026  
**Status:** Production-Ready  
**Deploy Time:** < 2 minutes  
**Audience:** Investors, Partners, Stakeholders  
**Tone:** Professional, Problem-Solution focused  

🎯 **Goal:** Share this link. Get feedback. Iterate. Raise capital.
