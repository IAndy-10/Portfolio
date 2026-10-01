
export const dataAboutPage = [
    {
        id: 1,
        title: "Co-founder & Board Member",
        subtitle: "Realiza — Sustainability Consulting, Chile",
        description: [
            "Co-founded and led a sustainability consultancy executing 50+ projects across Chile and internationally, spanning corporate climate strategy, B Corp certification, and ESG reporting.",
            "Designed and directed data collection and analysis pipelines to drive strategic planning, project evaluation, and climate change mitigation — working with GHG Protocol, SBTi, and other standards.",
            "Built VestaESG, an internal web application that streamlines carbon footprint consolidation, reporting and verification, giving teams real-time control over energy, water and waste data.",
            "Transitioned to a board advisory role. Currently supporting strategic direction.",
        ],
        date: "2021–2025",
    },
    {
        id: 2,
        title: "Project & Student Engagement Manager",
        subtitle: "UC Sustainability Directorate, Chile",
        description: [
            "Led the design, data analysis, and implementation of sustainability projects spanning transportation, biodiversity, and waste management for a major university.",
            "Managed large-scale environmental datasets to produce a Carbon Neutrality Strategy roadmap — one of the first in Chilean higher education.",
            "Achieved implementation of the university's first bike-sharing system as part of the Carbon Neutrality Strategy leadership team.",
        ],
        date: "2018–2020",
    },
    {
        id: 3,
        title: "New Economies Diagnostic Lead",
        subtitle: "GlocalMinds, Chile",
        description: "Mapped and analyzed organizations across Ibero-America associated with new economies, transforming complex network data into accessible visual formats to highlight systemic impact.",
        date: "2020",
    },
];

export const dataAboutPage_Ed = [
    {
        id: 1,
        title: "University of California, Santa Bárbara",
        subtitle: "Master of Science, Media Arts and Technology",
        description: "Focus: DSP, computer graphics, interactive media, generative systems, science communication through art.",
        date: "2025–Present",
    },
    {
        id: 2,
        title: "Pontificia Universidad Católica de Chile",
        subtitle: "Industrial Civil Engineer",
        description: "Major in Transportation Systems — Externalities & Environmental Impact. Minor in Water and Energy.",
        date: "2013–2019",
    },
];

export const dataAboutPage_Teaching = [
    {
        id: 1,
        title: "Lecturer",
        subtitle: "Institute for Sustainable Development, PUC Chile",
        description: "'Sustainability'",
        date: "2020–2021",
    },
    {
        id: 2,
        title: "Teaching Assistant",
        subtitle: "School of Engineering, PUC Chile",
        description: "'Introduction to Sustainability'",
        date: "2017–2019",
    },
];

export const dataAboutPage_More_OtherBackground = [
    {
        id: 1,
        title: "",
        subtitle: "Regenerativa Foundation, Chile",
        description: "Course in Syntropic Agriculture",
        date: "2022",
    },
    {
        id: 2,
        title: "",
        subtitle: "Permaculture Research Institute, Chile",
        description: "Permaculture Design",
        date: "2020",
    },
    {
        id: 3,
        title: "",
        subtitle: "Glocalminds Foundation, Chile",
        description: "Course in 'Art of Hosting' Experiential and Participatory Learning Methodologies",
        date: "2019",
    },
    {
        id: 4,
        title: "",
        subtitle: "Social Presencing Theater (Theory U)",
        description: "Embodied practice for sensing and actualizing emerging futures",
        date: "—",
    },
    {
        id: 5,
        title: "UC Young Leader Award",
        subtitle: "Sustainability Area, PUC Chile",
        description: "Recognition for outstanding leadership in sustainability initiatives.",
        date: "2019",
    },
];

export const dataAboutPage_More_Conferences = [
    {
        id: 1,
        title: "",
        subtitle: "Valparaíso Business Development Center, Chile",
        description: "Seminar on Sustainability and Circular Economy for Entrepreneurs",
        date: "2021",
    },
    {
        id: 2,
        title: "",
        subtitle: "Latin American Young Politicians Meeting, Chile",
        description: "Talk: 'What do we understand by Sustainability?'",
        date: "2021",
    },
];

export const dataAboutPage_More_Volunteering = [
    {
        id: 1,
        title: "",
        subtitle: "Kingdom Fungi Festival",
        description: "Member of Operations Team, Art Direction",
        date: "2024",
    },
    {
        id: 2,
        title: "",
        subtitle: "Cverde NGO",
        description: "Partner, Director of Finance",
        date: "2024",
    },
    {
        id: 3,
        title: "",
        subtitle: "Mapu Kufüll Mushroom Cultivation Cooperative",
        description: "Partner, Workshop Facilitator",
        date: "2022 - 2024",
    },
];

export const dataCounter = [
    {
        id: 0,
        endCounter: 8,
        text: "Years of Experience",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 30,
        text: "Supported Organizations",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 50,
        text: "Projects Led",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        title: "A Fish Story",
        image: "/AFishStory1.png",
        href: "/projects/a-fish-story"
    },
    {
        title: "Sustainability Strategy Design",
        image: "/proyecto-aysen1.png",
        href: "/projects/sustainability-strategy"
    },
    {
        title: "PostTalk",
        image: "/fungi1.jpg",
        href: "/projects/posttalk"
    },
    {
        title: "YoTerra",
        image: "/araucarias1.png",
        href: "/projects/yoterra"
    },
];

// ─── Sound & Interaction / Space & Body ────────────────────────────────────────

export const dataPortfolio_Artist = [
    {
        id: 1,
        slug: "posttalk",
        title: "PostTalk",
        subtitle: "Reverb plugin with hand-gesture control via MediaPipe — the musician's body becomes the interface.",
        tags: ["DSP", "Frontend", "Gesture HCI"],
        tools: ["MediaPipe", "C++17", "JUCE 8", "Svelte 5", "TypeScript", "WebView"],
        category: "Sound & Interaction",
        narrative: "What if a musician could shape sound with their hands — not by pressing buttons or turning knobs, but through gesture? PostTalk detects hand postures in real time via MediaPipe and maps them to audio effect parameters. The interface disappears. The performer's physical presence becomes the control surface.",
        technicalDetail: [
            "DSP engine in C++17 / JUCE 8: 8-line FDN reverb with Hadamard matrix, early reflections, Schroeder allpass diffusion, shimmer (vibrato + pitch shift + chorus), input conditioning, stereo widener, and dry/wet mixer — 47 parameters total.",
            "Svelte 5 UI runs inside a WebView. JS-to-C++ communication via URL-scheme interception; C++ pushes state back via evaluateJavascript() at ~30 Hz. The audio thread stays lock-free.",
            "MediaPipe HandLandmarker runs in the WebView. Dual-hand index fingers map to continuous pitch modulation; single-hand index-up/down toggles a sustain gate.",
            "Passes pluginval at strictness level 5 (VST3). Builds as VST3, AU, and Standalone.",
        ],
        learnings: [
            "Gesture-to-parameter mapping needs careful calibration — too sensitive and it is unplayable, too coarse and it loses expressiveness.",
            "Separating the UI thread from the DSP thread via message passing — not shared state — was the most important reliability decision. Audio dropouts break a performance.",
        ],
        status: "in-development",
        repository: "https://github.com/IAndy-10/PosTalk",
        images: ["/postalk-1.png"],
        video_url: "https://www.youtube.com/embed/jO9crDHlqVA",
    },
    {
        id: 2,
        slug: "reverbo",
        title: "Reverbo",
        subtitle: "Stereo FDN reverb plugin with interactive filter graph and diffusion XY pad — built in C++17/JUCE with a Svelte UI.",
        tags: ["DSP", "Frontend", "Audio programming"],
        tools: ["C++17", "JUCE 8", "Svelte 5", "TypeScript", "WebView"],
        category: "Sound & Interaction",
        narrative: "Built for the Audio Programming class at MAT. Most audio plugins use native C++ GUIs — Reverbo separates concerns: DSP runs in C++/JUCE on the audio thread, the UI runs as a Svelte web app delivered via WebView on the message thread. No shared mutable state between them.",
        technicalDetail: [
            "8-line FDN reverb in C++17 / JUCE 8: Hadamard feedback matrix, 4-stage Schroeder allpass diffusion, early reflections with spin modulation, crossover filter for frequency-dependent decay, chorus, stereo widener, and dry/wet mixer — 31 parameters total.",
            "Svelte 5 UI in WKWebView with an interactive FilterGraph (drag to adjust hi-cut frequency and Q) and a Diffusion Network XY pad (crossover × diffusion, damping × feedback). JS-to-C++ via URL-scheme interception; C++ pushes deltas at 30 Hz.",
            "10 ms exponential smoothing on continuous parameters. Smooth mode selector (Off/Low/Med/High) adjusts ramp time for decay, reflect gain, and diffuse gain.",
            "Passes pluginval at strictness level 5 (VST3). Builds as VST3, AU, and Standalone.",
        ],
        learnings: [
            "Separating interface concerns from processing concerns makes both easier to reason about. This pattern transfers directly to any system with real-time constraints.",
            "Smooth parameter transitions matter — abrupt knob changes create audible artifacts. The 10 ms exponential ramp was the minimum needed to eliminate clicks.",
        ],
        status: "in-development",
        repository: "https://github.com/IAndy-10/Reverbo",
        images: ["/Reverbo.png"],
        video_url: "https://www.youtube.com/embed/jMqBMv3HgVA",
    },
    {
        id: 4,
        slug: "yoterra",
        title: "YoTerra",
        subtitle: "Generative simulation of fungal morphogenesis in GLSL and a psychoacoustic sound piece composed in Ableton from bird recordings.",
        tags: ["Generative systems", "Psychoacoustics", "DSP"],
        tools: ["Librosa", "Python", "JS", "GLSL", "Ableton"],
        category: "Sound & Interaction",
        narrative: "YoTerra grows from a specific experience: time spent in Villarrica, in the south of Chile, where the relationship between fungi, forest, sound, and territory is palpable in a way that is hard to articulate in language. The birds I heard there — their calls layered into the texture of the landscape — became the raw material for the project.\n\nThe project has two interconnected pieces. Funga Morpho uses generative computer graphics to simulate fungal growth and morphogenesis — the mathematical processes by which biological forms emerge from simple rules. The visuals are not illustrations of fungi; they are processes that are inspired by mycelium. The First Singing is a sound piece built around those bird recordings from Villarrica — Chucao, Queltehue, Fiofío, Rayadito, Bandurria, Martín Pescador — processed and composed in Ableton, drawing on psychoacoustics: the study of how sound shapes our senses.\n\nThe two pieces are connected, so the behavior of the visuals and the sound influence each other in real time.",
        technicalDetail: [
            "Funga Morpho is a WebGL2 agent-based simulation using GLSL ES 3.0 shaders: agent shaders control individual particle movement, simulation shaders update the trail map each frame, and decay/display shaders handle evaporation and final rendering. The main goal was using simple local rules to generate emergent behaviors.",
            "The First Singing uses Python for field recording processing and psychoacoustic feature extraction — amplitude, dominant frequency, spectral centroid — from six bird species recorded in Villarrica, La Araucanía (Chucao, Queltehue, Fiofío, Rayadito, Bandurria, Martín Pescador) and the Voipir River. The sound design and composition were built in Ableton, where the bird recordings are layered, processed, and arranged into a piece that was built to replicate the poem structure.",
            "The sound piece maps acoustic features to emotional stages drawn from a poem by Mapuche poet Elicura Chihuailaf, creating a structure where ecological data and emotional narrative are encoded in the same signal.",
        ],
        learnings: [
            "First time working with natural sounds as compositional material. Using field recordings — rather than synthesized audio — grounds the piece in a specific place and time, but it also means the sound resists being shaped. The birds have their own rhythms and timbres; the composition has to work with that, not against it.",
            "Mapping the emotional journey of a poem onto psychoacoustic parameters was harder than expected. The science can describe how certain frequencies and textures tend to affect arousal and valence — the Circumplex Model was a useful reference for thinking about those two axes — but it cannot prescribe which audio effect produces which emotion. At some point the framework runs out and the artistic decision takes over. The model is just a map.",
            "First time working with GLSL. The possibilities open up considerably once visuals and audio are connected — parameters flow in both directions and the two systems start behaving like a single organism. The challenge is deciding what to couple tightly and what to leave free.",
        ],
        status: "in-development",
        repository: "",
        images: ["/fungamorpho1.png"],
    },
    {
        id: 5,
        slug: "perkung-fu",
        title: "Perkung-fu",
        subtitle: "Modal synthesis percussion plugin — tap a fruit with a contact mic and the plugin turns the impact into a tunable resonant membrane.",
        tags: ["DSP", "Physical Modeling", "HCI"],
        tools: ["C++17", "JUCE 8", "MediaPipe", "Svelte 5", "TypeScript", "WebView"],
        category: "Sound & Interaction",
        narrative: "Point the camera at a banana or an apple and the plugin switches presets. Attach a contact mic to the fruit, tap it, and listen to the haptic percussion of the object itself. The fruit is both the controller and the instrument.",
        technicalDetail: [
            "8-mode modal synthesis engine in C++17 / JUCE 8 using Bessel zero ratios for circular membrane modes. Onset detection via high-pass differencing with 3 ms peak-hold and 50 ms refractory cooldown. 9 parameters: tuning, decay, damp, strike, attenuation, low-cut, mic gain, output gain, threshold.",
            "Svelte 5 UI embedded via WKWebView. JS-to-C++ bridged through URL-scheme interception; C++ pushes parameters, peaks, and a 40-bin FFT spectrum back at 30 Hz. Audio thread reads only atomic pointers — fully lock-free.",
            "Camera-based object detection via MediaPipe switches presets in real time. Terminal-style interface with scanlines, bloom, and selectable palettes.",
            "Passes pluginval at strictness level 5 (VST3). Builds as VST3, AU, and Standalone.",
        ],
        learnings: [
            "Real-time computer vision driving audio parameters inside a DAW is a legitimate architectural pattern — this project is a proof of concept, but the bridge design scales.",
            "Translating the physics of a resonant membrane into code made the connection between equations and acoustic reality feel immediate. Physical modeling rewards mathematical intuition.",
        ],
        status: "in-development",
        repository: "https://github.com/IAndy-10/PerKung-fu",
        images: ["/perkung-fu-1.png"],
        video_url: "https://www.youtube.com/embed/HDvQbkjqt-I",
    },
    {
        id: 6,
        slug: "neochucao",
        title: "NeoChucao",
        subtitle: "Real-time MIDI instrument that navigates a 16-dimensional RAVE neural latent space trained on bird recordings in SuperCollider.",
        tags: ["Neural audio", "Live performance", "Latent space"],
        tools: ["SuperCollider", "RAVE", "nn.ar", "Python", "Supriya", "MIDI"],
        category: "Sound & Interaction",
        narrative: "RAVE — a variational autoencoder from IRCAM — compresses a sound corpus into a 16-dimensional latent space. NeoChucao lets a performer navigate that space from a MIDI keyboard in real time. Pitch maps to z0, velocity to z1, mod wheel to z2 for timbre morphing, and a CC knob injects randomness into the remaining dimensions.",
        technicalDetail: [
            "MIDI input maps to a 16-element latent vector fed to the RAVE decoder via nn.ar in SuperCollider. Each note spawns a Synth node decoding at audio rate with 50 ms lag smoothing on latent coordinates.",
            "An 800 ms ADSR envelope hides the decoder's 200–500 ms warm-up artefact — a constraint of the convolutional architecture, not a musical choice.",
            "Signal chain: Compander (~3:1 ratio) for dynamics, three-voice chorus to mask timbral wobble, FreeVerb2 for depth.",
        ],
        learnings: [
            "Moving from Python/Supriya to a single SuperCollider file shifted development time from infrastructure back to musical decisions.",
            "Latent space is genuinely unpredictable — some regions are expressive, others are dead. That instability is a property of what the model learned, not a bug to fix.",
        ],
        status: "complete",
        images: ["/example-picture-rave-midi.jpeg"],
        repository: "https://github.com/IAndy-10/NeoChucao",
        video_url: "https://www.youtube.com/embed/At6OtB0Dt7w",
        iterations: [
            {
                title: "Python + Supriya",
                description: "Python-driven architecture with mido, supriya, and a real-time 3D latent trajectory visualizer in vispy. Makes the geometry of the performance visible, but the added infrastructure pulled focus from the instrument itself.",
            },
            {
                title: "live-coding-rave",
                description: "Claude navigates the latent space through language via ClaudeCollider — an MCP server that generates and executes SuperCollider code live. Multiple RAVE models run in parallel on separate buses. Raises questions about authorship when the navigator is a language model rather than a hand on a keyboard.",
                url: "https://github.com/IAndy-10/liveCoding-rave/tree/main",
            },
        ],
    },
    {
        id: 7,
        slug: "aquifuturo",
        title: "AquiFuturo",
        subtitle: "Augmented reality experience that sonifies tree morphology — translating a Coast Live Oak's canopy and root structure into spatial sound through physical modeling and neural audio synthesis.",
        tags: ["Sonification", "AR", "Physical Modeling", "Neural Audio"],
        tools: ["Unity", "ARKit", "Python", "RAVE", "C#", "Blender"],
        category: "Sound & Interaction",
        narrative: "AquiFuturo is an augmented reality experience that sonifies a Coast Live Oak. The canopy skeleton is sonified via modal synthesis mirroring structural hierarchy; the root system via RAVE latent-space navigation trained on water sounds. The visitor approaches the tree, places the root system beneath it in AR, and listens to the morphology.",
        technicalDetail: [
            "Canopy sonification via modal synthesis: 267-node mass-spring network with per-class stiffness multipliers stratifying the spectrum across five structural classes (trunk base 20–120 Hz to terminal tips 1,500–8,000 Hz). Eigenvalue decomposition extracts 96 natural frequencies and mode shapes.",
            "Root sonification via RAVE latent-space navigation: 8 morphological features per node mapped into a 16-dim latent space via PCA. A periodic cubic spline connects TSP tour nodes into a smooth trajectory, decoded in overlapping chunks with crossfades.",
            "AR app on iOS via Unity + AR Foundation + ARKit. Nine audio tracks: five canopy layers with orientation-modulated filtering and gain, four RAVE root-zone clips triggered by tap interaction.",
        ],
        learnings: [
            "Modal synthesis encodes morphological hierarchy into sound — trunk produces sub-bass, terminal tips produce brightness. But the mapping is not self-evident without interactive tools.",
            "RAVE opens sonic spaces beyond deterministic physical models, though the output is shaped by training data as much as by geometry.",
            "The pipeline generalizes — any tree with a photogrammetric scan could generate its own soundscape.",
        ],
        status: "complete",
        repository: "https://github.com/IAndy-10/AquiFuturo",
        images: [],
        video_url: "https://www.youtube.com/embed/JtSMAYQnHuI",
    },
    {
        id: 8,
        slug: "dance-of-laplace",
        title: "The Dance of Laplace",
        subtitle: "Gray-Scott reaction-diffusion simulation projected inside the AlloSphere",
        tags: ["Allosphere", "Reaction-Diffusion", "Spatialization"],
        tools: ["C++", "Allolib", "Ableton", "GLSL"],
        category: "Sound & Interaction",
        narrative: "Driven by my interest in nature, I discovered that Reaction-Diffusion is one of the most well-known algorithms for simulating organic behavior. Then I wondered: what if I added another iteration — a Bi-Laplacian extension? That became the core of the piece: a texture generated on a sphere and displayed inside the AlloSphere for the End of Year Show 2026.",
        technicalDetail: [
            "Ping-pong FBO — two RGBA32F framebuffers swap read/write roles each sub-step. No CPU round-trips.",
            "Gray-Scott model with a Bi-Laplacian convolution applied to increase the morphological complexity of the piece.",
            "Nala Sinephro — Continuum 1, separated into three stems: Others, Bass, Drums. Each loaded and routed into its own bus with different spatialization equations.",
        ],
        learnings: [
            "I learned that complex mathematical concepts extend far beyond research or engineering — they carry real expressive potential in artistic contexts.",
            "Dealing with a complex system like the AlloSphere requires a lot of iteration. LLMs can help you deal with Media Art projects, but you need to understand the code and the environment to be able to execute a high-quality project.",
            "Audio spatialization is a complex topic. The Allosphere has 54 speakers, but the spatialization algorithms I implemented only made use of 8–16 at a time. The piece would have benefited from more complex spatialization techniques that could leverage the full array.",
        ],
        status: "complete",
        repository: "https://github.com/IAndy-10/Allolib-Reaction-Diffusion",
        images: ["/laplace1.jpeg", "/laplace2.jpeg"],
        video_url: "https://www.youtube.com/embed/6F-28OYPWOY",
    },
];

// ─── Data & Science ────────────────────────────────────────────────────────────

export const dataPortfolio_Engineer = [
    {
        id: 1,
        slug: "a-fish-story",
        title: "A Fish Story",
        subtitle: "Interactive scrolltelling piece translating a scientific paper on Marine Protected Areas into a data visualization experience.",
        tags: ["Data viz", "Frontend", "DSP", "Science communication"],
        tools: ["D3.js", "React", "R", "Vite"],
        category: "Data & Science",
        narrative: "Climate change discourse is dominated by what we must stop: stop pollution, stop fossil fuels, stop emissions. That framing is true but incomplete — and in practice, it paralyzes more than it mobilizes. Real systems have inertia. They do not stop overnight.\n\nAfter years working in sustainability and sharing space with activists, politicians, and conservationists, I became convinced that lasting change comes from making good practices so compelling and effective that bad ones become obsolete — not from shaming people into stopping.\n\nA Fish Story uses a first-person scrolltelling narrative to visualize the positive impact of Marine Protected Areas (MPAs) during extreme weather events. Climate change is already here. But we already have tools to adapt — MPAs give marine ecosystems significantly more resilience when heatwaves hit. The story makes that argument visually and emotionally, not just statistically.",
        technicalDetail: [
            "Data work: source dataset cleaned and processed in RStudio. Visual composition and layout planning in Affinity Designer before any code was written.",
            "Web layer built with D3.js for all data-driven visuals. Scroll position controls application state, triggering both visual transitions and audio events across 7 narrative sections.",
            "Stack: Vite + React + Tailwind CSS. The scrolltelling architecture separates narrative sections each with their own data visualization layer.",
            "All visual elements are grounded in real, peer-reviewed datasets — no illustrative approximations. Using official datasets requires significant cleaning work, but it is non-negotiable for science communication with integrity.",
        ],
        learnings: [
            "D3.js has a wide range of affordances, especially combined with scroll-driven interaction. It stops being a charting library and becomes a spatial storytelling tool.",
            "The most important insight: humans do not make decisions from data alone — they respond to stories and emotional experiences. A number showing MPA resilience is forgettable. A first-person narrative that puts you inside that ecosystem is not.",
            "Data discipline: extracting only what is necessary to communicate the essence — that MPAs increase ecosystem resilience — sharpened the whole narrative. More data is not always clearer.",
        ],
        status: "in-development",
        repository: "https://github.com/IAndy-10/MPA-AFishStory",
        siteUrl: "/fish-story/",
        images: ["/AFishStory1.png", "/AFishStory2.png", "/AFishStory3.png"],
    },
    {
        id: 2,
        slug: "sustainability-strategy",
        title: "Sustainability Strategy Design",
        subtitle: "A methodology for turning fragmented institutional data into actionable climate roadmaps",
        tags: ["Data visualization", "Strategic planning", "Carbon neutrality"],
        tools: ["Python", "SQL", "Google Looker", "AHP", "Monte Carlo"],
        category: "Data & Science",
        narrative: "In 2021 I co-founded Realiza, a sustainability consultancy in Chile. The methodology at its core was one I had been developing since my time at the UC Sustainability Directorate — a repeatable process for helping organizations understand where they stand environmentally and build credible, actionable roadmaps toward carbon neutrality and sustainability certifications.\n\nThe problem this work addresses is deceptively hard: large institutions have fragmented data. Energy consumption lives in facilities. Waste data lives in operations. Commuting data does not exist until you build a survey. Biodiversity data has never been collected at all. The first challenge is always creating data pipelines thinking about the institutional context.",
        technicalDetail: [
            "Data collection: custom survey instruments for commuting, waste, and energy. Qualitative workshops using participatory methodologies (Art of Hosting, Theory U) to surface institutional priorities and identify data owners.",
            "Frameworks applied: GHG Protocol (Scopes 1, 2, 3), SBTi targets, GreenMetric. SDG alignment analysis using Python and SQL when needed.",
            "Data processing and visualization: Python, SQL or other tools for dataset construction, cleaning, and cross-institutional comparison. Custom dashboards in Google Looker designed to communicate to non-technical institutional leadership.",
            "Decision modeling: Analytic Hierarchy Process (AHP) for project prioritization under multiple criteria. Monte Carlo simulation for emissions forecasting under uncertainty, producing future projection models with uncertainty ranges.",
            "Scale: 50+ projects executed through Realiza. Clients include Universidad de Aysén, Pontificia Universidad Católica de Chile, and AJE Group's Bio Amayu agricultural supply chain (SBTi goals).",
        ],
        learnings: [
            "The hardest part of sustainability data work is not the analysis — it is connecting climate goals to the core business and governance. Who owns the data? Who has to change their behavior to collect it? These are political and relational questions as much as technical ones.",
            "Visualizing for institutional decision-makers requires stripping out almost everything. A chart that works for a researcher does not work for a university president",
            "Building a consultancy around a methodology forces you to make the implicit explicit — every assumption you hold as an expert has to become a documented step that someone else can follow. Creating a system that can be replicated was the hardest part.",
            "At the beginning, the core motivation was to contribute to climate action. Over time, I learned that when working with companies, impact alone is not enough — the work must also align with business profitability. This shifted my perspective toward identifying where sustainability efforts can generate tangible value for organizations, while still producing meaningful environmental impact.",
        ],
        status: "complete",
        repository: "",
        images: ["/proyecto-aysen1.png", "/proyecto-carbono4.png", "/proyecto-reciclaje-2.png"],
    },
    {
        id: 3,
        slug: "vestaesg",
        title: "VestaESG",
        subtitle: "A SaaS platform built to replace the manual carbon accounting work",
        tags: ["Frontend", "Data viz", "Climate tech", "Product leadership"],
        tools: ["React", "FastAPI", "PostgreSQL", "Docker", "Python"],
        category: "Data & Science",
        narrative: "After co-founding Realiza and seeing the inefficiencies in the accounting process — chasing departments for spreadsheets, cleaning inconsistent formats, aggregating by hand, then spending weeks on verification before a report could be issued — I knew exactly what was broken. VestaESG is what I would have wanted on day one.\n\nBuilt within Realiza, it is a SaaS platform designed for Chilean higher education institutions to measure, report, and manage their environmental impact — aligned with GHG Protocol, Huella Chile, and the sustainability certification requirements of the Chilean higher education system. Because I had spent years inside the problem, I was positioned to define both the product and the data model, not just manage the build. I coordinated the commercial manager and backend developers, and built the frontend myself.",
        technicalDetail: [
            "Frontend: React 18 + Tailwind CSS + Chart.js + Zustand. Dashboard-first design — each department sees its own energy, water, and waste data; administrators see aggregated institutional totals and trend lines across campuses.",
            "Backend: FastAPI (Python 3.12) with a three-layer middleware stack for authentication and others. I wasn't in charge of this layer, but I had to learn and understand it deeply to design the frontend and coordinate the team effectively.",
            "Database: PostgreSQL 16 with a schema designed for GHG Protocol Scopes 1/2/3 and Huella Chile output formats.",
            "Excel upload wizard: 3-step frontend flow (select, preview, confirm). This allow the user to create an automated reporting pipeline.",
        ],
        learnings: [
            "Building a product to solve your own problem is an advantage, but also a trap: you design for yourself and forget that users do not share your mental model of the data. The hardest UX decisions came from unlearning assumptions I had as a carbon accounting expert.",
            "Knowing the domain deeply meant I could skip the discovery phase that most product teams spend months on — I could go straight to designing around constraints like Scope 3 data fragmentation and Huella Chile verification requirements.",
            "Frontend development for data-heavy applications is a UX problem as much as a coding problem. Showing many indicators without overwhelming the user requires real design judgment, not just component architecture.",
        ],
        status: "in-development",
        repository: "",
        images: ["/vestaesg-1.png", "/vestaesg-2.png", "/vestaesg-3.png"],
    },
];

export const hexagonData = [
    // Row 0: cols 1, 3, 5 (left, center, right)
    {
        id: 0,
        name: "PostTalk",
        backgroundImage: "/postalk-1.png",
        link: "/projects/posttalk",
        type: "Sound & Interaction",
        visible: false,
    },
    {
        id: 6,
        name: "YoTerra",
        backgroundImage: "/araucarias1.png",
        link: "/projects/yoterra",
        type: "Sound & Interaction",
    },
    {
        id: 1,
        name: "A Fish Story",
        backgroundImage: "/AFishStory1.png",
        link: "/projects/a-fish-story",
        type: "Data & Science",
    },
    // Row 1: cols 0, 2, 4 (left, center, right)
    {
        id: 2,
        name: "Reverbo",
        backgroundImage: "/Reverbo.png",
        link: "/projects/reverbo",
        type: "Sound & Interaction",
        visible: false,
    },
    {
        id: 9,
        name: "AquiFuturo",
        backgroundImage: "/AquiFuturo.png",
        link: "/projects/aquifuturo",
        type: "Sound & Interaction",
    },
    {
        id: 3,
        name: "Sustainability Strategy",
        backgroundImage: "/proyecto-aysen1.png",
        link: "/projects/sustainability-strategy",
        type: "Data & Science",
    },
    // Row 2: cols 1, 3, 5 (left, center, right)
    {
        id: 7,
        name: "Perkung-fu",
        backgroundImage: "/perkung-fu-1.png",
        link: "/projects/perkung-fu",
        type: "Sound & Interaction",
        visible: false,
    },
    {
        id: 10,
        name: "The Dance of Laplace",
        backgroundImage: "/laplace1.jpeg",
        link: "/projects/dance-of-laplace",
        type: "Sound & Interaction",
    },
    {
        id: 5,
        name: "VestaESG",
        backgroundImage: "/proyecto-carbono4.png",
        link: "/projects/vestaesg",
        type: "Data & Science",
    },
    // Row 3: col 0 (left)
    {
        id: 8,
        name: "NeoChucao",
        backgroundImage: "/NeoChucao.png",
        link: "/projects/neochucao",
        type: "Sound & Interaction",
        visible: false,
    },
];
