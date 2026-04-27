# CarbonCred Pitch Deck - Deployment Guide

This is a professional, investor-ready pitch deck built with Next.js. Deploy it to Vercel in 2 minutes.

## Option 1: One-Click Deploy (Recommended)

### Step 1: Push to GitHub
```bash
# If you haven't already connected to GitHub, do this first:
cd ~/carboncred-pitch
git remote add origin https://github.com/YOUR_USERNAME/carboncred-pitch.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to https://vercel.com/new
2. Select "Import Git Repository"
3. Paste your GitHub URL: `https://github.com/YOUR_USERNAME/carboncred-pitch`
4. Click "Import"
5. Click "Deploy"

**Done!** Vercel will give you a live URL in ~30 seconds.

---

## Option 2: Deploy from CLI

```bash
# Install Vercel CLI globally (if not already installed)
npm install -g vercel

# Deploy
cd ~/carboncred-pitch
vercel

# Follow prompts:
# - Link to existing Vercel project? (no, unless you have one)
# - Set project name? (carboncred-pitch)
# - Deploy to production? (yes)

# Your live URL will appear in the terminal
```

---

## Option 3: Deploy via GitHub Integration (Automatic)

1. Go to https://vercel.com/dashboard
2. Click "New Project"
3. Connect your GitHub account
4. Select the carboncred-pitch repository
5. Click "Import"
6. Click "Deploy"

Every push to main will automatically redeploy.

---

## What You Get

A professional pitch deck showing:

✅ **Problem Statement** - Airlines and companies struggling with carbon credits  
✅ **Solution Overview** - Fast, transparent, compliant platform  
✅ **Complete Workflow** - 4-step visual journey from project to retirement  
✅ **Value Props** - Custom benefits for each user type  
✅ **Call to Action** - "Schedule a Demo" button  

### Navigable Sections
- Problem
- Solution
- How It Works (full workflow)
- Value Proposition
- Contact CTA

---

## Share the Link

Once deployed, you'll get a URL like:
```
https://carboncred-pitch-abc123.vercel.app
```

**Share this link with:**
- Investors
- Carbon credit companies
- Airlines
- Board members
- Potential partners

---

## Customize

Edit content in `/app/page.tsx`:

- Change company name/branding in header
- Update problem statements
- Adjust value propositions
- Change "Schedule a Demo" button link

No rebuilding needed—just edit and commit:
```bash
cd ~/carboncred-pitch
# Edit app/page.tsx
git add .
git commit -m "Update pitch copy"
git push
# Vercel auto-deploys in 30 seconds
```

---

## Support

If you need to:
- Change colors: Edit Tailwind CSS in `app/page.tsx`
- Add images: Drop files in `/public` folder
- Modify layout: Edit components in `app/page.tsx`

---

## Notes

- This is a static, fast-loading site (no database needed)
- Fully responsive (mobile, tablet, desktop)
- Production-grade (hosted on Vercel CDN)
- Zero deployment friction
- Auto-HTTPS, SSL included
- Analytics available in Vercel dashboard

Deploy and share immediately. No setup complexity.
