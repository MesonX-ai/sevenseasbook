export const eternalTerms = [
  {
    slug: "machine-learning",
    name: "Machine Learning",
    icon: "📈",
    tagline: "The discipline of learning from data instead of being explicitly programmed",
    definition:
      "Machine learning is the field of study that gives computers the ability to learn patterns from data without being explicitly programmed for every rule. Instead of hand-coding logic, engineers supply examples, and algorithms adjust internal parameters to generalize from those examples to situations they have never seen.",
    whyEternal: [
      "Machine learning has survived every hype cycle since the 1950s because it solves a problem that never goes away: many real-world tasks are too complex, too fuzzy, or too fast-changing for humans to write explicit rules. Spam filters, fraud detection, demand forecasting, and medical triage all change faster than any rulebook can be maintained.",
      "Every major AI wave — expert systems in the 1980s, statistical learning in the 1990s, deep learning in the 2010s, and today's foundation models — has been powered by the same core idea: improve performance on a task through exposure to data. The algorithms change; the discipline endures.",
      "For enterprises, machine learning is the bridge between data assets and business decisions. It is the reason data engineering, feature stores, MLOps, and model governance exist as disciplines at all.",
    ],
    coreIdeas: [
      {
        title: "Supervised learning",
        text: "Learn a mapping from inputs to labeled outputs — classification and regression — using annotated examples. Still the workhorse of enterprise prediction: churn scoring, risk models, quality inspection.",
      },
      {
        title: "Unsupervised learning",
        text: "Discover structure in unlabeled data through clustering, dimensionality reduction, and anomaly detection. Essential when labels are expensive and the questions are exploratory.",
      },
      {
        title: "Generalization vs. memorization",
        text: "The central tension of the field: a model must fit training data without overfitting it. Regularization, validation splits, and cross-validation exist to keep models honest.",
      },
      {
        title: "The data flywheel",
        text: "Models improve with more and better data, and better products generate more data. Organizations that close this loop compound their advantage over time.",
      },
    ],
    applications: [
      "Credit scoring and insurance pricing built on gradient-boosted tree ensembles",
      "Predictive maintenance that flags equipment failures before they happen",
      "Recommendation engines powering retail, media, and marketplace platforms",
      "Demand and capacity forecasting for supply chains and logistics",
    ],
    milestones: [
      { year: "1959", event: "Arthur Samuel coins \"machine learning\" while building a checkers program that improves with play." },
      { year: "1995", event: "Support vector machines popularize kernel methods and margin-based learning." },
      { year: "2012", event: "AlexNet demonstrates that deep learning plus GPUs plus data decisively outperforms hand-engineered features." },
      { year: "2020s", event: "Foundation models reframed ML: pretrain once on broad data, adapt everywhere with fine-tuning and prompting." },
    ],
    futureOutlook:
      "Machine learning is absorbing into the infrastructure layer of software. The future enterprise will treat models like databases: versioned, monitored, governed, and reused across products. AutoML, synthetic data, and small specialized models will sit alongside giant foundation models, and the winners will be the organizations with the cleanest data pipelines and the tightest evaluation loops.",
    keyTakeaway:
      "Machine learning endures because data keeps growing and rules keep decaying. Invest in data quality, evaluation discipline, and feedback loops — those outlast any single algorithm.",
    furtherReading: [
      { title: "A Few Useful Things to Know About Machine Learning — Pedro Domingos", url: "https://homes.cs.washington.edu/~pedrod/papers/cacm12.pdf" },
      { title: "Machine Learning — Wikipedia", url: "https://en.wikipedia.org/wiki/Machine_learning" },
      { title: "Google Machine Learning Crash Course", url: "https://developers.google.com/machine-learning/crash-course" },
    ],
  },
  {
    slug: "neural-networks",
    name: "Neural Networks",
    icon: "🧠",
    tagline: "Layered computation inspired by the brain — the substrate of modern AI",
    definition:
      "A neural network is a system of interconnected simple units (neurons) organized in layers, each computing a weighted sum followed by a non-linear activation. By adjusting millions or billions of weights through backpropagation, networks learn to approximate extremely complex functions directly from data.",
    whyEternal: [
      "Neural networks were proposed in 1943, dismissed in the 1970s, revived in the 1980s, and triumphant in the 2010s — yet the underlying idea never changed: compose simple differentiable units into deep hierarchies that can represent almost anything.",
      "They endure because they are universal approximators with a property no other family matches: learnable representations. Each layer builds features from the layer below — edges to faces in vision, tokens to meaning in language. Every modern breakthrough — CNNs, transformers, diffusion models, large language models — is a new neural architecture, not a departure from the paradigm.",
      "Hardware co-evolution cements them: GPUs, TPUs, and custom accelerators exist because neural networks are parallel by nature, and their economics improve every year.",
    ],
    coreIdeas: [
      {
        title: "Layers and representations",
        text: "Depth lets networks build hierarchies of features — pixels to edges to objects in vision, tokens to syntax to plans in language. Depth is where capability compounds.",
      },
      {
        title: "Backpropagation",
        text: "The chain rule applied at scale: errors flow backward through the network and every weight learns its share of the blame. This single algorithm trains nearly all modern AI.",
      },
      {
        title: "Activation functions",
        text: "Non-linearities (ReLU, GELU, attention softmax) are what let networks model anything beyond simple linear relationships. Architecture innovation is largely connection and activation innovation.",
      },
      {
        title: "Scaling laws",
        text: "Loss falls predictably as models, data, and compute grow. This empirical law turned neural network training into an engineering discipline with forecastable returns.",
      },
    ],
    applications: [
      "Large language models powering chat, coding, and reasoning assistants",
      "Vision transformers for medical imaging, autonomous driving, and satellite analysis",
      "Diffusion models generating images, video, and molecular structures",
      "Speech recognition and synthesis in every modern voice interface",
    ],
    milestones: [
      { year: "1943", event: "McCulloch and Pitts model the neuron as a logical unit." },
      { year: "1986", event: "Rumelhart, Hinton, and Williams popularize backpropagation for multi-layer networks." },
      { year: "2017", event: "\"Attention Is All You Need\" introduces the transformer, the architecture behind modern LLMs." },
      { year: "2020s", event: "Models cross hundreds of billions of parameters; scaling laws make compute the primary currency of AI progress." },
    ],
    futureOutlook:
      "Neural networks are evolving from static models into running systems — agentic networks that call tools, remember, and collaborate. Sparsity, mixture-of-experts, and neuromorphic hardware will keep pushing efficiency, but the paradigm of differentiable, layered, learnable computation is not going anywhere. It is the computational substrate of the field.",
    keyTakeaway:
      "Neural networks won because they turn representation learning into an engineering problem. Learn the architecture families — CNN, RNN, transformer, diffusion — and you can read any modern AI paper.",
    furtherReading: [
      { title: "Neural Network — Wikipedia", url: "https://en.wikipedia.org/wiki/Neural_network_(machine_learning)" },
      { title: "Deep Learning — Nature review by LeCun, Bengio, Hinton", url: "https://www.nature.com/articles/nature14539" },
      { title: "3Blue1Brown — Neural Networks series", url: "https://www.3blue1brown.com/topics/neural-networks" },
    ],
  },
  {
    slug: "natural-language-processing",
    name: "Natural Language Processing",
    icon: "💬",
    tagline: "Teaching machines to read, understand, and generate human language",
    definition:
      "Natural Language Processing (NLP) is the field that lets machines analyze, understand, and generate human language. It spans everything from tokenization and parsing to semantic understanding, translation, summarization, and open-ended dialogue — and it is the technology behind today's large language models and chat assistants.",
    whyEternal: [
      "Language is humanity's native interface for knowledge, and that will never change. Contracts, medical records, support tickets, code, conversations — the world's work runs on text. Any machine that can genuinely work with language gains access to nearly all of it.",
      "NLP has reinvented itself every decade — rules, then statistics, then word embeddings, then transformers — yet the goals have been constant since the 1950s: machine translation, question answering, and summarization were Turing-era ambitions. Modern LLMs finally deliver them at scale, but the hard problems (ambiguity, context, reasoning, factuality) are the same ones researchers have chipped at for seventy years.",
      "For businesses, language is where AI ROI is most immediate: support automation, document intelligence, search, and copilots all begin with NLP.",
    ],
    coreIdeas: [
      {
        title: "Tokens and embeddings",
        text: "Text becomes numbers: tokenizers split language into units, and embeddings place them in vector space where semantic similarity becomes geometric proximity.",
      },
      {
        title: "Attention and context",
        text: "Transformer attention lets every token weigh every other token, capturing long-range dependencies that defeated earlier sequence models. Context length is the working memory of language AI.",
      },
      {
        title: "Pretraining and adaptation",
        text: "Models learn language from vast corpora, then adapt through fine-tuning, instruction tuning, and RLHF to follow instructions and align with human preferences.",
      },
      {
        title: "Grounding and factuality",
        text: "Fluency is not truth. Retrieval augmentation, citation, and verification pipelines exist because language models can confidently generate plausible falsehoods.",
      },
    ],
    applications: [
      "Conversational assistants and enterprise copilots for support, sales, and operations",
      "Document intelligence: extracting structure from contracts, invoices, and medical records",
      "Machine translation and real-time multilingual communication",
      "Semantic search and retrieval over enterprise knowledge bases",
    ],
    milestones: [
      { year: "1954", event: "The Georgetown–IBM experiment translates Russian sentences, igniting the machine translation dream." },
      { year: "2013", event: "word2vec makes word meaning computable as vectors; \"king - man + woman ≈ queen\" captures imaginations." },
      { year: "2018", event: "BERT and GPT establish pretraining plus fine-tuning as the NLP standard." },
      { year: "2022", event: "ChatGPT brings conversational language AI to hundreds of millions of users." },
    ],
    futureOutlook:
      "NLP is dissolving into multimodal models that read text alongside images, audio, and video, and into agentic systems that act on what they read. The enduring challenges are trust challenges: factuality, attribution, bias, and controllability. Organizations that pair language models with their own grounded knowledge will outperform those using raw models alone.",
    keyTakeaway:
      "Language AI is the interface layer of the intelligence economy. The durable skill is not prompt tricks — it is building grounded, evaluated, well-integrated language systems.",
    furtherReading: [
      { title: "Natural Language Processing — Wikipedia", url: "https://en.wikipedia.org/wiki/Natural_language_processing" },
      { title: "Attention Is All You Need — the Transformer paper", url: "https://arxiv.org/abs/1706.03762" },
      { title: "Hugging Face NLP Course", url: "https://huggingface.co/learn/nlp-course" },
    ],
  },
  {
    slug: "computer-vision",
    name: "Computer Vision",
    icon: "👁️",
    tagline: "Giving machines the ability to see and interpret the visual world",
    definition:
      "Computer Vision is the field that enables machines to extract meaning from images and video — detecting objects, recognizing faces, reading scenes, tracking motion, and understanding spatial context. It turns pixels into structured understanding that software can act on.",
    whyEternal: [
      "Vision is the richest sensory channel humans have, and most human knowledge work and physical work involves seeing. As long as cameras exist — and they are now everywhere, from phones to factories to satellites — there will be value in machines that can interpret what they capture.",
      "The field has cycled through the same enduring questions since the 1960s: what is in this image, where is it, what is happening, and what does it mean? Hand-crafted features gave way to learned convolutional features, and now to vision transformers and multimodal foundation models — but the problems of segmentation, detection, depth, and scene understanding are permanent.",
      "Vision is also the bridge between digital AI and the physical world: robots, vehicles, and inspection systems all depend on it, which makes it one of the few AI fields whose value grows as AI moves into hardware.",
    ],
    coreIdeas: [
      {
        title: "Convolution",
        text: "Slide small learnable filters across an image to detect local patterns — edges, textures, shapes — and stack them into hierarchies. CNNs powered a decade of vision breakthroughs.",
      },
      {
        title: "Detection and segmentation",
        text: "Beyond classification, vision systems localize objects with bounding boxes and outline them at pixel level. These are the primitives of real-world perception.",
      },
      {
        title: "Vision transformers",
        text: "Treating image patches like tokens lets transformers unify vision and language — the foundation of multimodal models that can see and reason at once.",
      },
      {
        title: "3D and depth",
        text: "Stereo, LiDAR, and neural reconstruction recover the geometry behind the pixels. Depth estimation is what turns seeing into navigating.",
      },
    ],
    applications: [
      "Autonomous vehicles perceiving lanes, pedestrians, and traffic signals",
      "Industrial quality inspection catching defects invisible to tired eyes",
      "Medical imaging: tumor detection, retinal analysis, and radiology triage",
      "Retail analytics, face recognition, and augmented reality experiences",
    ],
    milestones: [
      { year: "1966", event: "MIT's Summer Vision Project jokingly assigns \"connect a camera to a computer and see what it sees\" — a task still being solved." },
      { year: "1998", event: "LeNet-5 shows convolutional networks can read handwritten digits, powering early check processing." },
      { year: "2012", event: "AlexNet crushes the ImageNet competition, launching the deep learning era of vision." },
      { year: "2020s", event: "Vision transformers and multimodal models unify seeing and language; text-to-image generation arrives at consumer quality." },
    ],
    futureOutlook:
      "Computer vision is becoming ambient and multimodal: cameras plus language models that can answer questions about what they see, in real time. Edge accelerators will run vision models on-device for privacy and latency, while world models — learned simulations of physical environments — point toward vision systems that can predict what happens next, not just describe what is.",
    keyTakeaway:
      "Vision is how AI touches the physical world. Every robot, vehicle, and camera-backed workflow is a computer vision deployment in disguise.",
    furtherReading: [
      { title: "Computer Vision — Wikipedia", url: "https://en.wikipedia.org/wiki/Computer_vision" },
      { title: "ImageNet and the deep learning revolution", url: "https://en.wikipedia.org/wiki/ImageNet" },
      { title: "CS231n: Deep Learning for Computer Vision — Stanford", url: "https://cs231n.stanford.edu/" },
    ],
  },
  {
    slug: "reinforcement-learning",
    name: "Reinforcement Learning",
    icon: "🎯",
    tagline: "Learning by doing — decisions, rewards, and consequences",
    definition:
      "Reinforcement Learning (RL) is the study of how agents learn to make sequences of decisions by acting in an environment and receiving rewards or penalties. Rather than learning from labeled examples, RL agents learn from the consequences of their own actions — the same way humans and animals learn skills.",
    whyEternal: [
      "RL formalizes the oldest learning problem there is: how to act in an uncertain world to maximize long-term benefit. Prediction tells you what is true; RL tells you what to do. Planning, control, game-playing, and goal pursuit are permanent problems, and RL is their mathematics.",
      "It has repeatedly delivered superhuman results that no other approach could: backgammon in the 1990s, Go in 2016, and modern game-playing and robotics systems since. Crucially, RL is now inside the LLM pipeline itself — RLHF (reinforcement learning from human feedback) is what turns raw language models into helpful, aligned assistants.",
      "As AI moves from answering questions to taking actions — agents, robots, autonomous operations — the action-learning loop of RL becomes the operating system of that shift.",
    ],
    coreIdeas: [
      {
        title: "Agent, environment, reward",
        text: "The RL loop: an agent observes state, takes an action, and receives a reward and a new state. Everything else — algorithms, architectures, theory — serves this loop.",
      },
      {
        title: "Exploration vs. exploitation",
        text: "Should the agent try something new or repeat what worked? This trade-off is the heart of learning under uncertainty, and it shows up everywhere from A/B testing to robotics.",
      },
      {
        title: "Value and policy",
        text: "Value functions estimate how good a situation is; policies map situations to actions. Modern methods learn both, often with deep networks as function approximators.",
      },
      {
        title: "RLHF and alignment",
        text: "Human preferences become reward signals. RLHF fine-tunes language models toward helpfulness and safety, making RL a core production technique, not a lab curiosity.",
      },
    ],
    applications: [
      "RLHF alignment of large language models and chat assistants",
      "Game-playing superhuman agents: Go, chess, poker, and real-time strategy",
      "Robotics: locomotion, manipulation, and warehouse automation",
      "Operations optimization: datacenter cooling, traffic signals, pricing, and inventory",
    ],
    milestones: [
      { year: "1989", event: "Watkins introduces Q-learning, making model-free RL practical." },
      { year: "2016", event: "DeepMind's AlphaGo defeats Lee Sedol, showcasing learned intuition in an open-ended game." },
      { year: "2017", event: "AlphaZero masters chess, shogi, and Go from self-play alone — no human games." },
      { year: "2022", event: "RLHF takes center stage as the alignment technique behind ChatGPT-class models." },
    ],
    futureOutlook:
      "RL is becoming the glue between large models and real-world action. Agents that plan, call tools, and self-correct are implicitly doing RL even when trained otherwise. Expect hybrid systems: foundation models provide priors and language, while RL provides the decision discipline. Safe exploration — learning without expensive failures — remains the frontier.",
    keyTakeaway:
      "Whenever AI must act rather than just answer, RL is the framework. Learn the loop: state, action, reward, update — it recurses through everything from robotics to model alignment.",
    furtherReading: [
      { title: "Reinforcement Learning — Wikipedia", url: "https://en.wikipedia.org/wiki/Reinforcement_learning" },
      { title: "Sutton & Barto — Reinforcement Learning: An Introduction", url: "http://incompleteideas.net/book/the-book.html" },
      { title: "OpenAI Spinning Up in Deep RL", url: "https://spinningup.openai.com/" },
    ],
  },
  {
    slug: "knowledge-representation",
    name: "Knowledge Representation & Reasoning",
    icon: "🗂️",
    tagline: "Encoding what machines know — and making it usable for inference",
    definition:
      "Knowledge Representation and Reasoning (KRR) is the field concerned with how facts, rules, and relationships about the world can be encoded so machines can store, retrieve, and infer from them. It spans logic, ontologies, knowledge graphs, semantic web standards, and — increasingly — the structured memory layers that ground modern AI systems.",
    whyEternal: [
      "Intelligence without organized knowledge is guesswork. From Aristotle's logic to semantic networks to today's knowledge graphs and vector databases, the question has never changed: how do we represent what is known so it can be searched, checked, and reasoned over?",
      "KRR fell out of fashion during the deep learning boom and came roaring back — because LLMs made the problem urgent. Models hallucinate; structured knowledge does not. Enterprise RAG systems, knowledge graphs, citation pipelines, and agent memory layers are all KRR reborn as the grounding layer for generative AI.",
      "Every regulated industry — medicine, finance, law, aviation — ultimately requires knowledge that is explicit, auditable, and consistent. That guarantee cannot come from statistical weights alone; it requires representation and reasoning on top.",
    ],
    coreIdeas: [
      {
        title: "Ontologies and taxonomies",
        text: "Formal vocabularies of concepts and relationships — what exists, and how it relates. Shared ontologies let systems and teams speak the same language.",
      },
      {
        title: "Knowledge graphs",
        text: "Entities as nodes, relationships as edges. Graphs capture the connected nature of real knowledge — customers, products, symptoms, parts — and power search, recommendation, and fraud detection.",
      },
      {
        title: "Inference",
        text: "Deriving new facts from known ones: deduction, rule engines, constraint solving, and graph queries. Reasoning is what turns stored knowledge into answered questions.",
      },
      {
        title: "Hybrid neural-symbolic systems",
        text: "The frontier: neural networks for perception and fluency, symbolic structures for precision and auditability. Retrieval-augmented generation is the first mainstream hybrid.",
      },
    ],
    applications: [
      "Enterprise knowledge graphs unifying customers, products, and operations data",
      "Retrieval-augmented generation (RAG) grounding LLMs in verified company knowledge",
      "Clinical decision support mapping symptoms, drugs, and interactions",
      "Compliance and audit systems that trace conclusions back to sources",
    ],
    milestones: [
      { year: "1959", event: "John McCarthy proposes Advice Taker — programs reasoning from declaratively represented knowledge." },
      { year: "1980s", event: "Expert systems bring rule-based knowledge engineering into commercial use." },
      { year: "2012", event: "Google's Knowledge Graph launches: \"things, not strings.\" Semantic search goes mainstream." },
      { year: "2023+", event: "The RAG era: vector databases, knowledge graphs, and citation layers become the grounding stack for LLMs." },
    ],
    futureOutlook:
      "The future of KRR is symbiosis with neural networks. Expect agent memory that is graph-structured, LLMs that cite and query formal knowledge sources as naturally as they generate text, and verification layers that check generated claims against curated knowledge. The organizations that structure their knowledge now will own the most capable AI assistants later.",
    keyTakeaway:
      "Models are engines; knowledge is fuel. Representation and reasoning are how you make what your organization knows usable, checkable, and safe for AI to act on.",
    furtherReading: [
      { title: "Knowledge Representation and Reasoning — Wikipedia", url: "https://en.wikipedia.org/wiki/Knowledge_representation_and_reasoning" },
      { title: "Knowledge Graph — Wikipedia", url: "https://en.wikipedia.org/wiki/Knowledge_graph" },
      { title: "França et al. — RegGPT: RAG for regulatory alignment", url: "https://arxiv.org/abs/2307.05313" },
    ],
  },
  {
    slug: "ai-ethics-alignment",
    name: "AI Ethics & Alignment",
    icon: "🧭",
    tagline: "Keeping powerful AI systems safe, fair, and steerable by human values",
    definition:
      "AI Ethics and Alignment is the discipline of ensuring AI systems behave in ways that are fair, transparent, safe, and consistent with human intent and values. Ethics covers the societal dimension — bias, privacy, accountability, and impact — while alignment covers the technical one: making systems reliably pursue the goals their operators actually intend.",
    whyEternal: [
      "Every technology powerful enough to matter is powerful enough to cause harm, and AI is the most general technology yet created. Questions of fairness, transparency, and control have accompanied AI since its founding — Asimov's Three Laws were published in 1942 — and they will accompany it as long as the technology exists.",
      "Alignment became an engineering discipline the moment AI capabilities exploded. Models can now write code, influence opinion, and act through tools; the question \"does the system reliably do what we intend?\" is as concrete as any latency or uptime metric. Techniques like RLHF, constitutional AI, red-teaming, and eval suites are the industry's answer.",
      "Regulation is locking these concerns into law — the EU AI Act, sector-specific rules, and enterprise governance frameworks. Responsible AI has moved from principle decks to procurement requirements, and that trend only strengthens.",
    ],
    coreIdeas: [
      {
        title: "Bias and fairness",
        text: "Models learn from human data, human data carries human bias. Fairness requires measurement across groups, careful metric choices, and mitigation at data, model, and decision levels.",
      },
      {
        title: "Transparency and explainability",
        text: "Stakeholders deserve to know why a system decided what it did. Explainability ranges from interpretable models to post-hoc attribution, citations, and decision logs.",
      },
      {
        title: "Alignment techniques",
        text: "RLHF, constitutional methods, safety training, and refusal behaviors steer models toward intent. Alignment is never done — it is re-verified with every model generation.",
      },
      {
        title: "Governance and accountability",
        text: "Model cards, audit trails, human oversight, and incident response. When AI fails — and it will — organizations need clear ownership and recourse paths.",
      },
    ],
    applications: [
      "RLHF and safety training pipelines for production language models",
      "Bias auditing and fairness dashboards for hiring, lending, and healthcare models",
      "AI governance frameworks mapping models to regulations like the EU AI Act",
      "Red-team programs probing systems for misuse before adversaries find it",
    ],
    milestones: [
      { year: "1942", event: "Asimov publishes the Three Laws of Robotics — the first popular alignment framework." },
      { year: "2016", event: "The COMPAS recidivism controversy ignites mainstream debate on algorithmic bias." },
      { year: "2022", event: "RLHF-based assistants make alignment techniques a household engineering practice." },
      { year: "2024", event: "The EU AI Act enters force — the first comprehensive legal framework for AI systems." },
    ],
    futureOutlook:
      "As AI systems gain autonomy — agents with tools, memory, and money — alignment shifts from single responses to long-horizon behavior: did the agent pursue the right goals across a thousand steps? Expect standardized evals, third-party audits, provenance tracking, and formal oversight mechanisms to mature rapidly. The organizations that treat alignment as a product requirement, not a compliance checkbox, will earn the trust that adoption requires.",
    keyTakeaway:
      "Trust is the scarcest resource in the AI economy. Ethics and alignment are not constraints on capability — they are what makes capability deployable at scale.",
    furtherReading: [
      { title: "AI Alignment — Wikipedia", url: "https://en.wikipedia.org/wiki/AI_alignment" },
      { title: "EU AI Act — official overview", url: "https://artificialintelligenceact.eu/" },
      { title: "Constitutional AI — Anthropic", url: "https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback" },
    ],
  },
];
