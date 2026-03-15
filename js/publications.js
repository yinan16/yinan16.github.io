// Publications data
const publications = [
  // === 2026 ===
  // --- Journals ---
  {
    year: 2026,
    title: "Is orthopaedics entering the age of generative AI? — A narrative review of current applications, challenges, and future directions",
    authors: "Felix C. Oettl, James A. Pruneski, Bálint Zsidai, Yinan Yu, Ting Cong, Thomas Tischer, Michael T. Hirschmann, Kristian Samuelsson",
    venue: "Knee Surgery, Sports Traumatology, Arthroscopy",
    volume: "34(1)",
    pages: "370-377",
    doi: "10.1002/ksa.70145",
    type: "journal",
    tags: ["LLMs"],
    domain: ["Medicine"]
  },
  {
    year: 2026,
    title: "Unpacking banks' response to societal expectations: An NLP analysis of European banks' discussion of climate change",
    authors: "Åsa Löfgren, Jasmine Elliott, Yinan Yu, Samuel Scheidegger",
    venue: "Research in International Business and Finance",
    volume: "82",
    pages: null,
    doi: "10.1016/j.ribaf.2025.103207",
    type: "journal",
    tags: ["NLP", "Sustainability"],
    domain: ["Finance"]
  },
  {
    year: 2026,
    title: "Small language models: The big play for agentic artificial intelligence in orthopaedics",
    authors: "Felix C. Oettl, James A. Pruneski, Bálint Zsidai, Yinan Yu, Michael T. Hirschmann, Kristian Samuelsson",
    venue: "Knee Surgery, Sports Traumatology, Arthroscopy",
    volume: "34(2)",
    pages: "398-401",
    doi: "10.1002/ksa.70126",
    type: "journal",
    tags: ["LLMs"],
    domain: ["Medicine"]
  },
  {
    year: 2026,
    title: "A practical guide to the implementation of AI in orthopaedic research part 8: Resource management checklist for AI-driven research projects in orthopaedics",
    authors: "Umile Giuseppe Longo, Benedetta Bandini, Maristella Saccomanno, Pieter D'Hooghe, Bálint Zsidai, Jacob F. Oeding, Felix Conrad Oettl, Kristian Samuelsson, Alessandro De Sire, Robert Feldt, Yinan Yu",
    venue: "Journal of Experimental Orthopaedics",
    volume: "13",
    pages: null,
    doi: "10.1002/jeo2.70623",
    type: "journal",
    tags: ["ML/DL"],
    domain: ["Medicine"]
  },
  {
    year: 2026,
    title: "Human versus GPT-4 in qualitative analysis: A comparative reanalysis of patient interview data following anterior cruciate ligament injury rehabilitation",
    authors: "Ramana Piussi, Justin F. Schneiderman, Yinan Yu, Kristian Samuelsson, Eric Hamrin Senorski",
    venue: "The Knee",
    volume: "60",
    pages: "104388",
    doi: "10.1016/j.knee.2026.104388",
    type: "journal",
    tags: ["LLMs"],
    domain: ["Medicine"]
  },
  // --- Conferences ---
  {
    year: 2026,
    title: "Latent Domain Prompt Learning for Vision-Language Models",
    authors: "Zhixing Li, Arsham Gholamzadeh Khoee, Yinan Yu",
    venue: "The 51st IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP 2026)",
    volume: null,
    pages: null,
    doi: null,
    url: "https://arxiv.org/abs/2511.00067",
    type: "conference",
    tags: ["Multimodal Learning", "Computer Vision"],
    domain: []
  },

  // === 2025 ===
  // --- Journals ---
  {
    year: 2025,
    title: "Artificial intelligence agents in orthopaedics: Concepts, capabilities and the road ahead",
    authors: "Felix C. Oettl, James A. Pruneski, Bálint Zsidai, Yinan Yu, Ting Cong, Robert Feldt, Philipp W. Winkler, Michael T. Hirschmann, Kristian Samuelsson, ESSKA Artificial Intelligence Working Group",
    venue: "Knee Surgery, Sports Traumatology, Arthroscopy",
    volume: "33(12)",
    pages: "4475-4483",
    doi: "10.1002/ksa.70109",
    type: "journal",
    tags: ["LLMs"],
    domain: ["Medicine"]
  },
  {
    year: 2025,
    title: "A practical guide to the implementation of artificial intelligence in orthopaedic research — Part 3: How orthopaedic research benefits from the implementation of artificial intelligence",
    authors: "James A. Pruneski, Ayoosh Pareek, Bálint Zsidai, Jacob F. Oeding, Jonathan D. Hughes, Felix C. Oettl, Philipp W. Winkler, Thomas Tischer, Elmar Herbst, Alberto Grassi, Michael T. Hirschmann, Christophe Ley, Yinan Yu, Kristian Samuelsson, ESSKA Artificial Intelligence Working Group",
    venue: "Journal of Experimental Orthopaedics",
    volume: "12(4)",
    pages: null,
    doi: "10.1002/jeo2.70481",
    type: "journal",
    tags: ["ML/DL"],
    domain: ["Medicine"]
  },
  {
    year: 2025,
    title: "A practical guide to the implementation of AI in orthopaedic research — Part 5: Data management",
    authors: "Bálint Zsidai, Felix Oettl, James A. Pruneski, Gergely Pánics, Philipp W. Winkler, Eric Hamrin Senorski, Michael T. Hirschmann, Yinan Yu, Robert Feldt, Kristian Samuelsson, ESSKA Artificial Intelligence Working Group",
    venue: "Journal of Experimental Orthopaedics",
    volume: "12(4)",
    pages: null,
    doi: "10.1002/jeo2.70581",
    type: "journal",
    tags: ["ML/DL"],
    domain: ["Medicine"]
  },
  {
    year: 2025,
    title: "Mapping sustainability in higher education: a natural language processing analysis of student theses",
    authors: "Mattias Sundemo, Åsa Löfgren, Yinan Yu, Samuel Scheidegger",
    venue: "Higher Education",
    volume: null,
    pages: null,
    doi: "10.1007/s10734-025-01526-9",
    type: "journal",
    tags: ["NLP", "Sustainability"],
    domain: []
  },
  {
    year: 2025,
    title: "Deep learning-based Scalable Image-to-3D Facade Parser for generating thermal 3D building models",
    authors: "Yinan Yu, Alex Gonzalez-Caceres, Samuel Scheidegger, Sanjay Somanath, Alexander Hollberg",
    venue: "Automation in Construction",
    volume: "179",
    pages: null,
    doi: "10.1016/j.autcon.2025.106449",
    type: "journal",
    tags: ["Computer Vision"],
    domain: ["Building & Construction"]
  },
  {
    year: 2025,
    title: "Size or diversity? Synthetic dataset recommendations for machine learning heating energy prediction models in early design stages for residential buildings",
    authors: "Xinyue Wang, Yinan Yu, Robin Teigland, Alexander Hollberg",
    venue: "Energy and AI",
    volume: "21",
    pages: null,
    doi: "10.1016/j.egyai.2025.100557",
    type: "journal",
    tags: ["ML/DL"],
    domain: ["Building & Construction"]
  },
  // --- Conferences ---
  {
    year: 2025,
    title: "AI-based hospitalisation detection in telemonitoring data from heart failure patients",
    authors: "Erik Aerts, Yinan Yu, Annika Rosengren, Mengxi Fu, Martin Lindgren, Martin Adiels, Helen Sjöland",
    venue: "European Heart Journal",
    volume: "46(Supplement_1)",
    pages: null,
    doi: "10.1093/eurheartj/ehaf784.4400",
    type: "conference",
    tags: ["ML/DL"],
    domain: ["Medicine"]
  },
  {
    year: 2025,
    title: "Inclusive AI for Mobility and Transportation",
    authors: "Yinan Yu, Anna Carlsson, Jörgen Lundälv",
    venue: "17th Conference of the Nordic Network on Disability Research (NNDR 2025)",
    volume: null,
    pages: null,
    doi: null,
    url: "https://www.helsinki.fi/en/conferences/nndr-2025/",
    type: "conference",
    tags: ["Accessibility"],
    domain: ["Transport & Infrastructure"]
  },
  {
    year: 2025,
    title: "Polymer: Development Workflows as Software",
    authors: "Dhasarathy Parthasarathy, Yinan Yu, Earl T. Barr",
    venue: "Companion Proceedings of the 33rd ACM International Conference on the Foundations of Software Engineering (FSE 2025)",
    volume: null,
    pages: "535-539",
    doi: "10.1145/3696630.3728494",
    type: "conference",
    tags: ["Software Engineering"],
    domain: []
  },
  {
    year: 2025,
    title: "Automating a Complete Software Test Process Using LLMs: An Automotive Case Study",
    authors: "Shuai Wang, Yinan Yu, Robert Feldt, Dhasarathy Parthasarathy",
    venue: "IEEE/ACM 47th International Conference on Software Engineering (ICSE 2025)",
    volume: null,
    pages: "373-384",
    doi: "10.1109/ICSE55347.2025.00211",
    type: "conference",
    tags: ["LLMs", "Software Engineering"],
    domain: ["Automotive"]
  },
  {
    year: 2025,
    title: "iQUEST: An Iterative Question-Guided Framework for Knowledge Base Question Answering",
    authors: "Shuai Wang, Yinan Yu",
    venue: "63rd Annual Meeting of the Association for Computational Linguistics (ACL 2025)",
    volume: "1",
    pages: "15616-15628",
    doi: "10.18653/v1/2025.acl-long.760",
    url: "https://aclanthology.org/2025.acl-long.760/",
    type: "conference",
    tags: ["NLP", "LLMs"],
    domain: []
  },
  {
    year: 2025,
    title: "BetterCheck: Towards Safeguarding VLMs for Automotive Perception Systems",
    authors: "Malsha Ashani Mahawatta Dona, Beatriz Cabrero-Daniel, Yinan Yu, Christian Berger",
    venue: "The 28th IEEE International Conference on Intelligent Transportation Systems (ITSC 2025)",
    volume: null,
    pages: null,
    doi: null,
    url: "https://arxiv.org/abs/2507.17722",
    type: "conference",
    tags: ["Multimodal Learning"],
    domain: ["Automotive"]
  },
  {
    year: 2025,
    title: "Domain-Invariant Prompt Learning for Vision-Language Models",
    authors: "Arsham Gholamzadeh Khoee, Yinan Yu, Robert Feldt",
    venue: "1st SCOPE Workshop at the 13th International Conference on Learning Representations (ICLR 2025)",
    volume: null,
    pages: null,
    doi: null,
    url: "https://openreview.net/forum?id=SODTFGcNfp",
    type: "conference",
    tags: ["Multimodal Learning", "Computer Vision"],
    domain: []
  },
  // --- Preprints ---
  {
    year: 2025,
    title: "GateLens: A Reasoning-Enhanced LLM Agent for Automotive Software Release Analytics",
    authors: "Arsham Gholamzadeh Khoee, Shuai Wang, Yinan Yu, Robert Feldt, Dhasarathy Parthasarathy",
    venue: "arXiv preprint",
    volume: "abs/2503.21735",
    pages: null,
    doi: "10.48550/arXiv.2503.21735",
    type: "preprint",
    tags: ["LLMs", "Software Engineering"],
    domain: ["Automotive"]
  },
  {
    year: 2025,
    title: "Cost-Aware Prediction (CAP): An LLM-Enhanced Machine Learning Pipeline and Decision Support System for Heart Failure Mortality Prediction",
    authors: "Yinan Yu, Falk Dippel, Christina E. Lundberg, Martin Lindgren, Annika Rosengren, Martin Adiels, Helen Sjöland",
    venue: "arXiv preprint",
    volume: "abs/2511.15357",
    pages: null,
    doi: "10.48550/arXiv.2511.15357",
    type: "preprint",
    tags: ["ML/DL", "LLMs"],
    domain: ["Medicine"]
  },
  {
    year: 2025,
    title: "Analysis of heart failure patient trajectories using sequence modeling",
    authors: "Falk Dippel, Yinan Yu, Annika Rosengren, Martin Lindgren, Christina E. Lundberg, Erik Aerts, Martin Adiels, Helen Sjöland",
    venue: "arXiv preprint",
    volume: "abs/2511.16839",
    pages: null,
    doi: "10.48550/arXiv.2511.16839",
    type: "preprint",
    tags: ["ML/DL"],
    domain: ["Medicine"]
  },
  {
    year: 2025,
    title: "PCARNN-DCBF: Minimal-Intervention Geofence Enforcement for Ground Vehicles",
    authors: "Yinan Yu, Samuel Scheidegger",
    venue: "arXiv preprint",
    volume: "abs/2511.15522",
    pages: null,
    doi: "10.48550/arXiv.2511.15522",
    type: "preprint",
    tags: ["ML/DL"],
    domain: ["Automotive"]
  },

  // === 2024 ===
  // --- Journals ---
  {
    year: 2024,
    title: "Sentiment and semantic analysis: Urban quality inference using machine learning algorithms",
    authors: "Emily Ho, Michelle Schneider, Sanjay Somanath, Yinan Yu, Liane Thuvander",
    venue: "iScience",
    volume: "27(7)",
    pages: null,
    doi: "10.1016/j.isci.2024.110192",
    type: "journal",
    tags: ["NLP", "Sustainability"],
    domain: []
  },
  {
    year: 2024,
    title: "climateBUG: A data-driven framework for analyzing bank reporting through a climate lens",
    authors: "Yinan Yu, Samuel Scheidegger, Jasmine Elliott, Åsa Löfgren",
    venue: "Expert Systems with Applications",
    volume: "239",
    pages: null,
    doi: "10.1016/j.eswa.2023.122162",
    type: "journal",
    tags: ["NLP", "Sustainability"],
    domain: ["Finance"]
  },
  {
    year: 2024,
    title: "Domain generalization through meta-learning: a survey",
    authors: "Arsham Gholamzadeh Khoee, Yinan Yu, Robert Feldt",
    venue: "Artificial Intelligence Review",
    volume: "57",
    pages: null,
    doi: "10.1007/s10462-024-10922-z",
    type: "journal",
    tags: ["ML/DL"],
    domain: []
  },
  {
    year: 2024,
    title: "Building efficient CNNs using Depthwise Convolutional Eigen-Filters (DeCEF)",
    authors: "Yinan Yu, Samuel Scheidegger, Tomas McKelvey",
    venue: "Neurocomputing",
    volume: "609",
    pages: null,
    doi: "10.1016/j.neucom.2024.128461",
    type: "journal",
    tags: ["ML/DL", "Computer Vision"],
    domain: []
  },
  // --- Conferences ---
  {
    year: 2024,
    title: "GoNoGo: An Efficient LLM-Based Multi-agent System for Streamlining Automotive Software Release Decision-Making",
    authors: "Arsham Gholamzadeh Khoee, Yinan Yu, Robert Feldt, Andris Freimanis, Patrick Andersson Rhodin, Dhasarathy Parthasarathy",
    venue: "36th IFIP International Conference on Testing Software and Systems (ICTSS 2024). Lecture Notes in Computer Science",
    volume: "15383",
    pages: "30-45",
    doi: "10.1007/978-3-031-80889-0_3",
    type: "conference",
    tags: ["LLMs", "Software Engineering"],
    domain: ["Automotive"]
  },
  {
    year: 2024,
    title: "LLMs Can Check Their Own Results to Mitigate Hallucinations in Traffic Understanding Tasks",
    authors: "Malsha Ashani Mahawatta Dona, Beatriz Cabrero-Daniel, Yinan Yu, Christian Berger",
    venue: "36th IFIP International Conference on Testing Software and Systems (ICTSS 2024). Lecture Notes in Computer Science",
    volume: "15383",
    pages: "114-130",
    doi: "10.1007/978-3-031-80889-0_8",
    type: "conference",
    tags: ["LLMs"],
    domain: ["Automotive"]
  },
  {
    year: 2024,
    title: "Scalability in Building Component Data Annotation: Enhancing Facade Material Classification with Synthetic Data",
    authors: "Josie Harrison, Alexander Hollberg, Yinan Yu",
    venue: "2024 European Conference on Computing in Construction (EC3 2024)",
    volume: null,
    pages: "120-127",
    doi: null,
    url: "https://arxiv.org/abs/2404.08557",
    type: "conference",
    tags: ["Computer Vision"],
    domain: ["Building & Construction"]
  },
  {
    year: 2024,
    title: "Semantic-Aware Representation of Multi-Modal Data for Data Ingress: A Literature Review",
    authors: "Pierre Lamart, Yinan Yu, Christian Berger",
    venue: "50th Euromicro Conference on Software Engineering and Advanced Applications (SEAA 2024)",
    volume: null,
    pages: "122-125",
    doi: "10.1109/SEAA64295.2024.00026",
    type: "conference",
    tags: ["Multimodal Learning", "Software Engineering"],
    domain: []
  },
  {
    year: 2024,
    title: "Evaluating and Enhancing Trustworthiness of LLMs in Perception Tasks",
    authors: "Malsha Ashani Mahawatta Dona, Beatriz Cabrero-Daniel, Yinan Yu, Christian Berger",
    venue: "27th IEEE International Conference on Intelligent Transportation Systems (ITSC 2024)",
    volume: null,
    pages: "431-438",
    doi: "10.1109/ITSC58415.2024.10920027",
    type: "conference",
    tags: ["LLMs"],
    domain: ["Automotive"]
  },
  {
    year: 2024,
    title: "Tapping in a Remote Vehicle's onboard LLM to Complement the Ego Vehicle's Field-of-View",
    authors: "Malsha Ashani Mahawatta Dona, Beatriz Cabrero-Daniel, Yinan Yu, Christian Berger",
    venue: "50th Euromicro Conference Series on Software Engineering and Advanced Applications (SEAA 2024) - WiP",
    volume: "10(2)",
    pages: null,
    doi: null,
    url: "https://arxiv.org/abs/2408.10794",
    type: "conference",
    tags: ["LLMs"],
    domain: ["Automotive"]
  },

  // === 2023 ===
  // --- Conferences ---
  {
    year: 2023,
    title: "AirDnD: Asynchronous In-Range Dynamic and Distributed Network Orchestration Framework",
    authors: "Malsha Ashani Mahawatta Dona, Christian Berger, Yinan Yu",
    venue: "43rd IEEE International Conference on Distributed Computing Systems (ICDCS 2023)",
    volume: null,
    pages: "953-954",
    doi: "10.1109/ICDCS57875.2023.00108",
    type: "conference",
    tags: ["Software Engineering"],
    domain: ["Automotive"]
  },
  {
    year: 2023,
    title: "BAUFER: A Baseline-Enabled Facial Expression Recognition Pipeline Trained With Limited Annotations",
    authors: "Charlotte von Numers, Yinan Yu, Aleksandra Petkova, Emmette Hutchison, Jesper Havsol",
    venue: "7th International Workshop on Health Intelligence (W3PHIAI 2023) at the 37th AAAI Conference on Artificial Intelligence. Studies in Computational Intelligence",
    volume: "1106",
    pages: "221-236",
    doi: "10.1007/978-3-031-36938-4_17",
    type: "conference",
    tags: ["Computer Vision", "ML/DL"],
    domain: []
  },

];
