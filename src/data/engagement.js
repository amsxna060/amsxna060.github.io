/**
 * Engagement models + indicative rates.
 * Set showRates: false to hide all pricing instantly.
 * Rates are "starting from" anchors — final quotes depend on scope.
 */

export const showRates = true;

const engagement = [
  {
    title: "Fixed-scope project",
    fit: "BEST FOR → a defined build",
    desc: "Clear scope, milestones and price agreed up front. You pay for outcomes, not hours.",
    rate: "from \u20B949,000 · intl. from $1,500",
    hot: false,
  },
  {
    title: "Monthly retainer",
    fit: "BEST FOR → ongoing product work",
    desc: "Reserved hours every month for features, fixes and improvements. Priority response.",
    rate: "from \u20B945,000/mo · intl. from $1,200/mo",
    hot: true,
  },
  {
    title: "Consulting / audit",
    fit: "BEST FOR → AI & backend decisions",
    desc: "Architecture reviews, AI-feasibility calls and cost-optimization audits for your existing system.",
    rate: "\u20B92,500/hr · intl. $40/hr",
    hot: false,
  },
];

export default engagement;
