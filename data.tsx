
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
        subtitle: "Audio effects controller driven by hand gestures via MediaPipe — replacing the flat interface with embodied physical interaction for live music performance.",
        tags: ["DSP", "Frontend", "Gesture HCI"],
        tools: ["MediaPipe", "C++", "JUCE", "Svelte", "TypeScript", "Webview"],
        category: "Sound & Interaction",
        narrative: "LLMs changed human-computer interaction permanently. Natural language as an interface is a genuine leap. But it also narrows something. We have reduced the richness of human expression to text and voice, as if language were the only channel. Communication is posture, movement, proximity, sound, gesture, context. We have bodies, and our bodies carry meaning that language cannot fully encode.\n\nPostTalk asks: what if a musician could shape sound with their hands — not by pressing buttons or turning knobs, but through gesture? The performer's hand postures, detected in real time via MediaPipe, control audio effect parameters. The interface disappears. The musician's physical presence becomes the control surface.",
        technicalDetail: [
            "DSP layer built in C++17 with JUCE 8. The reverb engine is an 8-line Feedback Delay Network with a Hadamard feedback matrix, plus Early Reflections (8-tap parallel delays with spin modulation), a 4-stage Schroeder allpass diffusion network, frequency-dependent decay via per-line crossover filtering, saturation, vibrato, pitch shifting, stereo widening, and an XY-controlled timbre filter — 56 parameters in total.",
            "UI layer is a Svelte + TypeScript frontend delivered via WebBrowserComponent, running on the message thread separate from the DSP engine. All 56 parameters are bridged universally: JS → C++ via a custom URL scheme (juce://setparameter?name=decay&value=0.42) intercepted by the WebBrowserComponent; C++ → JS via evaluateJavascript() on the message thread, keeping the audio thread lock-free.",
            "Hand gesture detection via MediaPipe HandLandmarker running inside the Webview. Dual-hand pitch control maps both index fingers pointing up/down to continuous frequency modulation. Single-hand index-up engages a sustain gate; index-down releases it. Gate state latches until the opposite gesture occurs.",
            "Architecture insight: separating the UI thread from the DSP thread via message passing — not shared state — keeps audio processing deterministic while the interface stays responsive.",
        ],
        learnings: [
            "Real-time computer vision in a live performance context has strict latency requirements. MediaPipe running in the Webview is fast enough, but the mapping between gesture and effect needs careful calibration — too sensitive and it is unplayable, too coarse and it loses expressiveness.",
            "Thread separation is not just an architectural choice — it is a musical one. Audio dropouts break a performance. Keeping the DSP thread isolated from UI events was the most important reliability decision in the project.",
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
        subtitle: "Full-chain audio plugin: DSP signal processing in C++/JUCE with a custom UI built in Svelte delivered via Webview.",
        tags: ["DSP", "Frontend", "Audio programming"],
        tools: ["C++", "JUCE", "DSP", "Svelte", "Webview"],
        category: "Sound & Interaction",
        narrative: "Digital signal processing is foundational to how machines perceive and generate the world — audio, video, sensor data, many generative models run on DSP under the hood. I am drawn to it not just as a technical discipline, but because I see opportunities to apply DSP thinking to acoustic monitoring, soundscape analysis, ecological sensing and human-computer interaction.\n\nThe immediate context was the Audio Programming class at MAT. The brief: build an audio plugin. Rather than building a standard interface, I saw an opportunity to bring my frontend web development skills into the DSP world. Most audio plugins are built entirely in C++ with native GUIs. Mine separates concerns: DSP runs in C++/JUCE on one thread, the UI runs as a Svelte web application delivered via Webview on another.",
        technicalDetail: [
            "DSP architecture built in C++ with JUCE, organized in discrete processing stages: Early Reflections, Diffusion Network (chorus, crossover filter, delay lines, feedback matrix, LFO), FDN Reverb (feedback delay network with freeze), and Input/Output gain stages.",
            "UI layer is a Svelte application running inside a Webview component, fully decoupled from the audio thread. Communication between layers uses JUCE's message-passing system — no shared mutable state between threads.",
            "20+ parameters across three types: continuous knobs (decay, size, diffusion, damping, dry/wet, pre-delay, stereo width, frequencies), toggles (freeze, filters, chorus enable), and discrete selectors (smoothing, density, reverb mode).",
            "The plugin is open source and distributed as a free download on GitHub. Packaging and distribution required understanding the full plugin lifecycle beyond just writing DSP code.",
        ],
        learnings: [
            "The most transferable insight is architectural: separating interface concerns from processing concerns makes both easier to reason about and easier to change. This is true in audio plugins, but also in data applications.",
            "First DSP project where I learned about memory allocation, C++ and JUCE, and the importance of smooth parameter transitions — abrupt changes in knob values create audible artifacts.",
        ],
        status: "in-development",
        repository: "https://github.com/IAndy-10/Reverbo",
        images: ["/Reverbo.png"],
        video: "/reverbo.mov",
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
        subtitle: "Physical modeling percussion synthesizer VST plugin with a sci-fi terminal interface driven by real-time camera object detection.",
        tags: ["DSP", "Physical Modeling", "HCI"],
        tools: ["C++", "JUCE", "MediaPipe", "WebView"],
        category: "Sound & Interaction",
        narrative: "Perkung-fu combines martial-arts discipline with percussive synthesis — (joking). That's just the name. The core idea is simpler and weirder: point the camera at a banana or an apple and the plugin switches presets. Each fruit triggers a different instrument configuration. Then, with a contact mic attached to the fruit, you tap it — and listen to the haptic percussion of the object itself. The fruit is both the controller and the instrument.",
        technicalDetail: [
            "Physical modeling synthesis engine built in C++/JUCE. Parameters include Tuning (40–2000 Hz), Decay, Damping, and Strike position — mapped to the physical behavior of a resonant membrane.",
            "Camera-based object detection pipeline integrated into the WebView UI layer. Detected objects and their positions modulate synthesis parameters in real time via the JS–JUCE bridge.",
            "Terminal-style UI with selectable palettes, scanlines, bloom effects, and bilingual label support — the interface is designed to feel alien and performative.",
        ],
        learnings: [
            "Combining WebView and MediaPipe inside an audio plugin that runs in a DAW has serious potential beyond this demo. Here it is used for fun, but the underlying architecture — real-time computer vision driving audio parameters inside a production environment — is a legitimate direction. This project is just the tip of the iceberg.",
            "Physical modeling is a fascinating world, largely because of the role mathematics plays in it. Translating the physics of a resonant membrane — tuning, damping, strike position — into code that produces convincing percussive sound made the connection between equations and acoustic reality feel immediate and rewarding.",
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
        narrative: "RAVE — a variational autoencoder from IRCAM — learns a compressed latent representation of a sound corpus and reconstructs it through a decoder. The birds.ts model was trained on bird recordings: organic, textured sound collapsed into a 16-dimensional space. NeoChucao asks a simple question: what happens if a performer navigates that space directly, note by note, from a keyboard?\n\nEach MIDI note-on maps to a coordinate in that latent space and feeds the RAVE decoder in real time via SuperCollider's nn.ar. Pitch maps to z0 — the highest-variance axis — velocity to z1, the mod wheel to z2 for timbre morphing, and a CC knob injects Gaussian randomness into z3–z15, giving the performer control over how deterministic or chaotic the instrument sounds. The hardest part was not the code but the mapping: a keyboard implies pitch steps, but latent space has no natural pitch axis — only variance.",
        technicalDetail: [
            "MIDI input is translated to a 16-element latent vector: note number → z0 (linearly mapped to [−2, +2] over the playable range), velocity → z1, mod wheel (CC 1) → z2, and CC 2 → noise_scale. z3–z15 are filled with session-fixed Gaussian draws per MIDI note, so each key produces a consistent timbral character within a session but differs across sessions.",
            "The birds.ts TorchScript model (WassersteinRAVE, 16 latent dims, block size 2048 samples) is loaded into scsynth via the nn.ar SuperCollider extension. Each MIDI note spawns a new Synth node running NN(\\birds, \\decode).ar at audio rate. A Lag.kr of 0.05 s on each latent parameter smooths coordinate transitions and prevents clicks between notes.",
            "The RAVE decoder's convolutional layers initialize from zero on every new Synth node, producing near-silence for 200–500 ms while the network fills up. An 800 ms ADSR attack envelope is used to hide this warm-up artefact — a constraint imposed by the model's architecture, not a musical choice.",
            "Raw RAVE output passes through a three-stage signal chain: a Compander (threshold 0.4, ~3:1 ratio, 10 ms attack / 100 ms release) tames amplitude swells from the decoder's own dynamics; a three-voice chorus (DelayL at 15 ms ± 3 ms, LFOs at 0.15–0.22 Hz spaced 120° apart) masks timbral wobble from latent lag; FreeVerb2 adds room depth.",
        ],
        learnings: [
            "The most important lesson was infrastructure versus musical focus. Python with Supriya worked technically but shifted development time toward OSC routing and async scheduling — away from musical decisions. Moving everything into a single SuperCollider file made calibration fast enough to happen in real time, which changed what the project could become.",
            "The warm-up artefact — 200–500 ms of near-silence when the decoder's convolutional state initializes from zero — is architectural and unfixable by signal processing alone. Designing the instrument's ADSR around it was the right approach. Distinguishing between a musical decision and a model constraint turned out to matter more than any specific technical fix.",
            "Using a latent space as an instrument is genuinely unpredictable. Some coordinates produce sounds that are striking and alive; others produce noise with no musical value. That instability is not a bug to fix — it is a property of what RAVE learned. The model was trained on birds, which are not musical in any conventional sense. Navigating that space with a keyboard takes time: time to map which regions are expressive, which are dead, and which are worth returning to. Audio encoders trained on non-musical material demand a different kind of performer patience.",
        ],
        status: "complete",
        images: ["/example-picture-rave-midi.jpeg"],
        audio: "/NeoChucao-example.wav",
        repository: "https://github.com/IAndy-10/NeoChucao",
        video_url: "https://www.youtube.com/embed/uRod_opk1PA",
        iterations: [
            {
                title: "Python + Supriya",
                description: "Replaces the SuperCollider-native approach with a Python-driven architecture: mido handles MIDI input, supriya communicates with scsynth over OSC, and a real-time 3D visualizer built in vispy renders the latent trajectory at 60 fps — a glowing point and fading trail moving through the (z0, z1, z2) space as the performer plays. What makes this version compelling is that it makes the geometry of the performance visible. Navigating a 16-dimensional learned space is abstract by nature; the visualization turns it into something you can watch and reason about. The tradeoff is complexity — the Python layer adds infrastructure that pulls attention away from the instrument itself, which is ultimately why the SuperCollider version became the primary one.",
            },
            {
                title: "live-coding-rave",
                description: "Takes a different approach entirely. Instead of a performer navigating the latent space from a keyboard, Claude does it through language. Using ClaudeCollider — an MCP server that lets Claude generate and execute SuperCollider code live — you describe what you want and Claude composes patterns that are routed through RAVE models in real time. The models run in parallel on separate buses (birds, marine mammals, or other). This version raises a question about authorship and control, which is one of the key component in the discussion about AI and Media Art. The latent space is still being navigated, but the navigator is a language model responding to human intent rather than a hand on a keyboard.",
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
        narrative: "Scientific observation and aesthetic representation were once deeply intertwined — Haeckel's Kunstformen der Natur, Merian's botanical illustrations, Dioscorides' plant drawings in De Materia Medica. Today, sensors and algorithms have separated them. Ecological sensing relies on specialized equipment that isolates tree morphology data from independent artists and interdisciplinary teams.\n\nAquiFuturo is an augmented reality prototype that treats tree morphology as both scientific subject and artistic medium. A Coast Live Oak was captured through photogrammetry, and its canopy and simulated root system were converted into skeleton graphs. Both structures are sonified via complementary methods: the canopy through mass-spring physical modeling mirroring structural hierarchy, and the roots via RAVE latent-space navigation trained on water sounds. Deployed as an outdoor iOS AR application, the visitor approaches the tree, places the root system beneath it, and listens to the morphology.\n\nThe theoretical framework draws on Regeneration (Reed, 2007) — the capacity to co-create with nature rather than merely reduce harm — Sympoiesis (Haraway, 2016) — making-together, positioning nature, technology, and human as co-creating agents — and Nature-centric design (Oxman, 2016), which reframes the tree's structure as co-designer rather than resource to extract.",
        technicalDetail: [
            "The canopy is modeled as a mass-spring network: 267 nodes carry point masses proportional to branch cross-section (m ∝ r²), connected by springs with stiffness k ∝ 1/L². Per-class stiffness multipliers (1× at trunk base to 20,000× at terminal tips) stratify the spectrum across five structural classes: trunk_base (20–120 Hz), primary (50–380 Hz), lateral (160–1,500 Hz), fine (500–4,000 Hz), terminal (1,500–8,000 Hz). Modal analysis solves the generalized eigenvalue problem K·φ = λ·M·φ to extract 96 natural frequencies and mode shapes.",
            "Excitation follows a TSP tour through the skeleton graph — each node receives a broadband click (raised-cosine pulse) calibrated per class (2 ms at trunk base, 0.03 ms at terminals). Mode shapes (φ) weight both how much energy enters each mode and how much is heard at the output. Five mono WAV files (120 s, 48 kHz, 24-bit) are RMS-normalized to −18 dBFS.",
            "Root sonification uses RAVE (Realtime Audio Variational autoencoder) trained on water sounds. Eight morphological features per node (depth, radius, branch order, position, is_terminal) are z-scored and mapped into RAVE's 16-dimensional latent space via PCA calibration against encoded reference audio. A periodic cubic spline connects TSP tour nodes into a smooth latent trajectory, decoded in overlapping 512-frame chunks with linear crossfades.",
            "The AR application runs on iOS via Unity + AR Foundation + ARKit. Nine audio tracks: five ambient canopy layers phase-locked from placement with low-pass filtering, stereo panning, and gain modulated by phone orientation and distance; four RAVE root-zone clips triggered by tap interaction. A seven-state machine guides the user from menu through placement to the AR experience.",
        ],
        learnings: [
            "Physical modeling via modal synthesis successfully encodes morphological hierarchy into sound — the trunk produces sub-bass resonances, terminal tips produce high-frequency brightness. But the connection between sound and structure is not self-evident without explanation. Making that relationship perceptible would require interactive tools that let the user directly manipulate structure and hear the result.",
            "Cross-domain latent-space navigation using RAVE offers a complementary approach. Its inherent complexity and unpredictability invite deeper investigation into what neural synthesis can reveal — opening sonic spaces beyond deterministic physical models. The trade-off is acknowledged: RAVE produces sound shaped by root geometry, but the output sounds like whatever the model was trained on.",
            "The most significant limitation is that the root system is simulated (via Rhizomorph) rather than measured. Future iterations could explore low-cost acoustic sensing to capture real subterranean data. The pipeline is designed to generalize — any tree with a photogrammetric scan could generate its own unique soundscape.",
            "The act of asking someone to physically approach a specific tree and interact with its roots is itself a gesture toward relational awareness — that tree becomes a remembered, named object rather than background.",
        ],
        status: "complete",
        repository: "",
        images: [],
        video: "/AquiFuturo.mov",
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
