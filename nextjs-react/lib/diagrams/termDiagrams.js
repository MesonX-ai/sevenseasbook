/**
 * Diagrams for the Eternal Terms pages:
 *   termDiagrams[slug]                 — term overview diagram
 *   termGuideDiagrams[slug][guideSlug] — per study-guide diagram
 */
import { N, S } from "./shared";

export const termDiagrams = {
  "machine-learning": {
    title: "From Data to Decisions",
    subtitle: "The machine learning flywheel",
    caption: "Models improve with better data, and better products generate more data — the loop compounds.",
    edgeLabels: ["examples", "patterns", "score", "serve"],
    feedback: { label: "outcomes → new training data" },
    stages: [
      S("Data", "slate", [N("database", "Real-world examples", "Interactions, transactions, sensors, labels")]),
      S("Train", "blue", [N("gear", "Learning algorithm", "Parameters tuned to fit the examples")]),
      S("Evaluate", "amber", [N("chart", "Held-out tests", "Generalization measured, overfitting caught")]),
      S("Serve", "purple", [N("globe", "Predictions", "Spam scores, forecasts, recommendations")]),
    ],
  },
  "neural-networks": {
    title: "How a Neural Network Computes",
    subtitle: "Tiny votes, stacked deep",
    caption: "No single neuron knows anything — depth of layers is where understanding emerges.",
    edgeLabels: ["inputs", "weighted sums", "signals", "activations"],
    feedback: { label: "backpropagation adjusts every weight" },
    stages: [
      S("Input", "slate", [N("doc", "Numbers in", "Text, pixels, or audio as numeric features")]),
      S("Neurons", "blue", [N("network", "Weights & sums", "Each neuron weighs, sums, and passes a threshold")]),
      S("Layers", "purple", [N("memory", "Stacked depth", "Edges → shapes → concepts, level by level")]),
      S("Output", "green", [N("check", "Prediction", "Class scores, next tokens, or actions")]),
    ],
  },
  "natural-language-processing": {
    title: "How Machines Understand Language",
    subtitle: "From characters to meaning",
    caption: "Contextual embeddings let the same word mean different things in different sentences.",
    edgeLabels: ["tokens", "vectors", "context"],
    stages: [
      S("Text in", "slate", [N("doc", "Raw language", "Sentences, questions, documents")]),
      S("Tokenize", "blue", [N("code", "Pieces", "Words and subwords mapped to ids")]),
      S("Embed", "purple", [N("network", "Meaning as geometry", "Similar ideas land close in vector space")]),
      S("Attend", "amber", [N("sparkles", "Transformer attention", "Every token weighs every other token")]),
      S("Task out", "green", [N("check", "Answer / translate / summarize", "Fluency with intent understood")]),
    ],
  },
  "computer-vision": {
    title: "Pixels to Perception",
    subtitle: "The computer vision stack",
    caption: "Early layers see edges; deep layers see faces and cars. Vision is perception built from arithmetic.",
    edgeLabels: ["images", "features", "understanding"],
    stages: [
      S("Image in", "slate", [N("eye", "Grid of pixels", "Cameras, scanners, and screens as numbers")]),
      S("Filters", "blue", [N("network", "Edges & textures", "Convolutions detect simple patterns first")]),
      S("Features", "purple", [N("memory", "Learned parts", "Eyes, wheels, letters — mid-level concepts")]),
      S("Decide", "green", [N("check", "Detect & segment", "Labels, boxes, and masks per object")]),
    ],
  },
  "reinforcement-learning": {
    title: "The Agent–Environment Loop",
    subtitle: "Learning from consequences",
    caption: "No labels, just consequences: reward shapes policy, one action at a time.",
    edgeLabels: ["action", "new state"],
    feedback: { label: "reward updates the policy" },
    stages: [
      S("Agent", "blue", [N("robot", "A policy", "Rules for choosing the next action")]),
      S("Act", "amber", [N("play", "Take an action", "Move a piece, click a link, steer a robot")]),
      S("Environment", "slate", [N("globe", "Responds", "New state plus reward or penalty")]),
      S("Learn", "purple", [N("gear", "Update the policy", "Repeat what worked; avoid what hurt")]),
    ],
  },
  "knowledge-representation": {
    title: "Facts Machines Can Reason Over",
    subtitle: "From raw data to a queryable knowledge graph",
    caption: "Structured facts and relationships let systems answer questions that flat documents cannot.",
    edgeLabels: ["extract", "connect", "query", "answers"],
    stages: [
      S("Raw data", "slate", [N("doc", "Documents & records", "Messy text, tables, and logs")]),
      S("Structure", "blue", [N("graph", "Entities & relations", "People, places, products — linked")]),
      S("Reason", "purple", [N("search", "Graph queries", "Paths and patterns expose hidden connections")]),
      S("Serve", "green", [N("check", "Verified facts", "Grounded, citable answers for LLMs and apps")]),
    ],
  },
  "ai-ethics-alignment": {
    title: "Building AI Worth Trusting",
    subtitle: "The ethics & alignment workflow",
    caption: "Alignment is re-verified with every model generation — it is a process, not a certificate.",
    edgeLabels: ["intent", "capabilities", "findings", "oversight"],
    feedback: { label: "incidents feed back into policy" },
    stages: [
      S("Intent", "slate", [N("target", "Say what you want", "Specification: who is served, who is at risk")]),
      S("Align", "blue", [N("sparkles", "Shape behavior", "RLHF, constitutional methods, refusals")]),
      S("Probe", "red", [N("shield", "Red-team it", "Jailbreaks and misuse tested before release")]),
      S("Govern", "amber", [N("scale", "Oversight", "Audits, model cards, incident response")]),
    ],
  },
};

export const termGuideDiagrams = {
  "machine-learning": {
    "explained-simply": {
      title: "Learning From Examples, Simply",
      subtitle: "Show, don't tell",
      stages: [
        S("Show examples", "slate", [N("book", "Spam and not-spam", "Hundreds of labeled emails")]),
        S("Find patterns", "blue", [N("sparkles", "What do spammers do?", "ALL CAPS, weird links, urgent tone")]),
        S("Judge new mail", "green", [N("check", "Automatic sorting", "The pattern works on unseen mail")]),
      ],
    },
    "how-it-works": {
      title: "Train, Validate, Test",
      subtitle: "The honest way to grade a model",
      stages: [
        S("Train", "blue", [N("gear", "Fit the model", "Learn patterns from the training split")]),
        S("Validate", "amber", [N("chart", "Tune choices", "Pick settings on data it never trained on")]),
        S("Test", "green", [N("check", "Final exam", "One last score on truly unseen examples")]),
      ],
    },
    "real-world": {
      title: "ML in the Business Wild",
      subtitle: "Where the flywheel spins today",
      stages: [
        S("Money", "teal", [N("scale", "Credit & pricing", "Risk models on years of outcome data")]),
        S("Machines", "slate", [N("gear", "Predictive maintenance", "Failures flagged before they happen")]),
        S("Shopping", "purple", [N("globe", "Recommendations", "Every click trains the next suggestion")]),
      ],
    },
  },
  "neural-networks": {
    "explained-simply": {
      title: "A Committee of Tiny Voters",
      subtitle: "Neural networks, simply",
      stages: [
        S("Ask simple questions", "slate", [N("chat", "Each neuron votes", "Is there an edge here? A curve?")]),
        S("Count the votes", "blue", [N("network", "Layers combine", "Millions of small votes add up")]),
        S("A big conclusion", "green", [N("check", "That is a cat", "Simple voters, deep stack, smart result")]),
      ],
    },
    "how-it-works": {
      title: "Learning From Mistakes",
      subtitle: "Forward pass, loss, backpropagation",
      edgeLabels: ["prediction", "error"],
      feedback: { label: "nudge every weight slightly" },
      stages: [
        S("Guess", "blue", [N("play", "Forward pass", "Data flows through layers to a prediction")]),
        S("Grade", "amber", [N("chart", "Measure the loss", "How far off was the guess?")]),
        S("Adjust", "purple", [N("gear", "Backpropagate", "Blame flows backward; weights improve")]),
      ],
    },
    "real-world": {
      title: "Deep Networks Around You",
      subtitle: "From photos to paragraphs",
      stages: [
        S("Your camera", "slate", [N("eye", "Night mode & faces", "Convolutional networks tune every shot")]),
        S("Your keyboard", "purple", [N("chat", "Predictive text", "Language models guess your next word")]),
        S("Medicine", "teal", [N("shield", "Scan analysis", "Networks flag what tired eyes miss")]),
      ],
    },
  },
  "computer-vision": {
    "explained-simply": {
      title: "How Computers See",
      subtitle: "Vision, simply",
      stages: [
        S("Look", "slate", [N("eye", "A picture is numbers", "Every pixel is a tiny brightness value")]),
        S("Spot shapes", "blue", [N("network", "Edges become eyes", "Simple patterns combine into objects")]),
        S("Name it", "green", [N("check", "Stop sign, 99%", "Detection with confidence")]),
      ],
    },
    "how-it-works": {
      title: "Convolutions to Classifications",
      subtitle: "The vision pipeline",
      stages: [
        S("Filter", "blue", [N("gear", "Slide & detect", "Convolutions sweep for edges and textures")]),
        S("Pool & stack", "purple", [N("memory", "Build abstractions", "Deeper layers see parts, then wholes")]),
        S("Head", "green", [N("chart", "Classify / detect", "Final layers map features to labels")]),
      ],
    },
    "real-world": {
      title: "Machines That Watch",
      subtitle: "CV in production",
      stages: [
        S("Quality lines", "slate", [N("gear", "Inspect everything", "Defects caught at conveyor speed")]),
        S("Radiology", "teal", [N("shield", "Second reader", "Models flag anomalies for doctors")]),
        S("Retail", "purple", [N("chart", "Shelf analytics", "Stockouts detected in real time")]),
      ],
    },
  },
  "reinforcement-learning": {
    "explained-simply": {
      title: "Learning by Doing",
      subtitle: "RL, simply",
      feedback: { label: "rewards shape the next try" },
      stages: [
        S("Try something", "slate", [N("play", "Take a guess", "No manual — just act and see")]),
        S("Feel the outcome", "amber", [N("target", "Yay or ouch", "A reward or a penalty comes back")]),
        S("Do more of the yay", "green", [N("check", "Gradually better", "Thousands of tries later: mastery")]),
      ],
    },
    "how-it-works": {
      title: "Policy, Reward, Update",
      subtitle: "The RL training loop",
      edgeLabels: ["action", "reward signal"],
      feedback: { label: "policy update" },
      stages: [
        S("Policy", "blue", [N("robot", "Decision rules", "A map from states to actions")]),
        S("Environment", "slate", [N("globe", "Push back", "Simulated or real world responds")]),
        S("Optimize", "purple", [N("gear", "Maximize return", "Gradients climb toward higher rewards")]),
      ],
    },
    "real-world": {
      title: "RL Out in the World",
      subtitle: "Beyond game playing",
      stages: [
        S("Games", "slate", [N("play", "Superhuman play", "Go, chess, esports — RL's proving ground")]),
        S("Robotics", "amber", [N("robot", "Grasp & walk", "Skills learned in simulation, shipped to hardware")]),
        S("Alignment", "purple", [N("shield", "RLHF", "Human preferences steer modern LLMs")]),
      ],
    },
  },
  "knowledge-representation": {
    "explained-simply": {
      title: "Facts With Connections",
      subtitle: "Knowledge representation, simply",
      stages: [
        S("Collect facts", "slate", [N("doc", "Not just text", "Paris is the capital of France")]),
        S("Link them", "blue", [N("graph", "Things and ties", "Facts become a web machines can walk")]),
        S("Answer smartly", "green", [N("check", "Multi-hop questions", "Who was president when the Eiffel Tower opened?")]),
      ],
    },
    "how-it-works": {
      title: "From Documents to Graphs",
      subtitle: "The representation pipeline",
      stages: [
        S("Extract", "blue", [N("search", "Find entities", "People, places, products pulled from text")]),
        S("Normalize", "purple", [N("gear", "Resolve & link", "One company, one canonical node")]),
        S("Query & reason", "green", [N("graph", "Walk the edges", "Paths answer questions flat search cannot")]),
      ],
    },
    "real-world": {
      title: "Graphs in Production",
      subtitle: "Where structure wins",
      stages: [
        S("Search", "teal", [N("globe", "Knowledge panels", "The boxes search engines show about entities")]),
        S("Fraud rings", "slate", [N("shield", "Relationship patterns", "Shared devices and accounts expose schemes")]),
        S("Drug discovery", "purple", [N("chart", "Biomedical graphs", "Hidden compound–disease connections")]),
      ],
    },
  },
  "ai-ethics-alignment": {
    "explained-simply": {
      title: "Teaching AI Good Manners",
      subtitle: "Ethics & alignment, simply",
      stages: [
        S("Say the goal", "slate", [N("target", "Be careful", "Help me is not enough — say what never to do")]),
        S("Practice with people", "blue", [N("users", "Human feedback", "People rate answers; the model learns taste")]),
        S("Test the tricks", "red", [N("shield", "Try to break it", "Find the loopholes before strangers do")]),
      ],
    },
    "how-it-works": {
      title: "The Alignment Toolbox",
      subtitle: "How alignment work is done",
      edgeLabels: ["preferences", "violations"],
      feedback: { label: "every exploit becomes a test" },
      stages: [
        S("RLHF", "blue", [N("users", "Preference training", "Human choices become reward signals")]),
        S("Red-team", "red", [N("alert", "Attack your own model", "Jailbreaks, misuse, manipulation probes")]),
        S("Evaluate & govern", "amber", [N("scale", "Prove it", "Evals, audits, and oversight before release")]),
      ],
    },
    "real-world": {
      title: "Trust in the Wild",
      subtitle: "Responsible AI in production",
      stages: [
        S("Hiring", "slate", [N("scale", "Bias audits", "Fairness measured across groups, not assumed")]),
        S("Regulation", "amber", [N("doc", "EU AI Act", "Risk tiers make documentation mandatory")]),
        S("Escalation", "purple", [N("users", "Humans in the loop", "High-stakes decisions always have an override")]),
      ],
    },
  },
};
