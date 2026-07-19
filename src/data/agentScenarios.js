/**
 * Hero agent-demo scenarios. Each cycles in the WhatsApp-style panel.
 * client = the business owner's message, agent = the AI reply.
 * result renders on a second line in mono/mint.
 */

const agentScenarios = [
  {
    tag: "CA FIRM",
    client: "Interest on Sharma ji's loan till today?",
    agent: "\u20B918,42,000 principal \u00B7 214 days @ 14%",
    result: "\u2192 Interest: \u20B91,51,032 \u00B7 Ledger updated \u2713",
  },
  {
    tag: "CLINIC",
    client: "Print prescription for patient #482",
    agent: "Prescription ready \u2014 A. Reddy, 3 medicines",
    result: "\u2192 Next visit: 24 Jul \u00B7 Sent to printer \u2713",
  },
  {
    tag: "RETAIL",
    client: "How many 5kg atta bags left?",
    agent: "Stock: 14 units \u2014 below reorder point (20)",
    result: "\u2192 Draft PO created for supplier \u2713",
  },
];

export default agentScenarios;
