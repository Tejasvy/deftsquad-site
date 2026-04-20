import Nav from "./components/Nav";
import ContactForm from "./components/ContactForm";
import PageAnimations from "./components/PageAnimations";

const ArrowIcon = () => (
  <svg
    className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-200 card-icon"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const PlusIcon = () => (
  <svg className="w-4 h-4 group-hover:text-swiss-accent transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
  </svg>
);

export default function Page() {
  return (
    <>
      <PageAnimations />
      <Nav />

      {/* ===================== HERO ===================== */}
      <section id="hero" className="pt-20 md:pt-24 border-b-4 border-swiss-fg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-0 min-h-[80vh] lg:min-h-[85vh]">
            <div className="lg:col-span-8 flex flex-col justify-center py-16 lg:py-24 lg:pr-16 lg:border-r-4 lg:border-swiss-fg">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-swiss-accent font-black text-xs uppercase tracking-widest">00.</span>
                <span className="font-bold text-xs uppercase tracking-widest">System Overview</span>
                <div className="gsap-divider-line flex-1 h-[2px] bg-black" />
              </div>

              <h1 className="gsap-hero-h1 text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                <span className="text-swiss-accent">AI</span> Solutions<br />
                & <span className="text-swiss-accent">IT</span><br />
                Consulting
              </h1>

              <p className="text-base md:text-lg font-normal leading-relaxed max-w-xl mb-10 text-gray-700">
                We offer professional guidance and actionable solutions to businesses, providing skilled
                professionals who build and maintain software applications and AI-powered solutions for your organization.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#services" className="inline-flex items-center bg-swiss-fg text-white font-bold text-xs uppercase tracking-widest px-8 h-14 hover:bg-swiss-accent transition-colors duration-200">
                  Explore Services
                  <svg className="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="#contact" className="inline-flex items-center border-2 border-swiss-fg text-swiss-fg font-bold text-xs uppercase tracking-widest px-8 h-14 hover:bg-swiss-fg hover:text-white transition-colors duration-200">
                  Contact Us
                </a>
              </div>
            </div>

            <div className="hidden lg:flex lg:col-span-4 items-center justify-center p-12 swiss-grid-pattern relative">
              <div className="relative w-full aspect-square max-w-[320px]">
                <div className="gsap-bauhaus-shape absolute top-0 right-0 w-48 h-48 rounded-full border-4 border-swiss-fg" />
                <div className="gsap-bauhaus-shape absolute bottom-8 left-0 w-32 h-32 bg-swiss-accent" />
                <div className="gsap-bauhaus-shape absolute top-1/2 left-1/3 w-16 h-16 bg-swiss-fg rounded-full" />
                <div className="gsap-bauhaus-shape absolute top-[60%] left-0 right-0 h-[3px] bg-swiss-fg" />
                <div className="gsap-bauhaus-shape absolute top-0 bottom-0 left-[40%] w-[3px] bg-swiss-fg" />
                <div className="gsap-bauhaus-shape absolute bottom-0 right-8 w-20 h-20 border-2 border-swiss-fg swiss-dots" />
                <div className="gsap-bauhaus-shape absolute bottom-2 right-0 text-[10px] font-bold uppercase tracking-widest text-gray-500">Google Cloud Partner</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="border-b-4 border-swiss-fg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <div className="gsap-stat-block group border-r-2 border-b-2 lg:border-b-0 border-swiss-fg p-6 md:p-8 lg:p-12 hover:bg-swiss-fg transition-colors duration-200 cursor-default">
              <span className="stat-number block font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter group-hover:text-white transition-colors duration-200">
                <span className="gsap-stat" data-target="7" data-suffix="+">7+</span>
              </span>
              <span className="block text-xs font-bold uppercase tracking-widest mt-2 text-gray-500 group-hover:text-gray-400 transition-colors duration-200">Core Services</span>
              <div className="plus-rotate mt-4 w-6 h-6 flex items-center justify-center"><PlusIcon /></div>
            </div>

            <div className="gsap-stat-block group border-b-2 lg:border-b-0 lg:border-r-2 border-swiss-fg p-6 md:p-8 lg:p-12 hover:bg-swiss-fg transition-colors duration-200 cursor-default">
              <span className="stat-number block font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter group-hover:text-white transition-colors duration-200">
                <span className="gsap-stat" data-target="99.9" data-decimals="1">99.9</span><span className="text-swiss-accent">%</span>
              </span>
              <span className="block text-xs font-bold uppercase tracking-widest mt-2 text-gray-500 group-hover:text-gray-400 transition-colors duration-200">Uptime SLA</span>
              <div className="plus-rotate mt-4 w-6 h-6 flex items-center justify-center"><PlusIcon /></div>
            </div>

            <div className="gsap-stat-block group border-r-2 border-swiss-fg p-6 md:p-8 lg:p-12 hover:bg-swiss-fg transition-colors duration-200 cursor-default">
              <span className="stat-number block font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter group-hover:text-white transition-colors duration-200">
                <span className="gsap-stat" data-target="6" data-suffix="+">6+</span>
              </span>
              <span className="block text-xs font-bold uppercase tracking-widest mt-2 text-gray-500 group-hover:text-gray-400 transition-colors duration-200">AI Capabilities</span>
              <div className="plus-rotate mt-4 w-6 h-6 flex items-center justify-center"><PlusIcon /></div>
            </div>

            <div className="gsap-stat-block group p-6 md:p-8 lg:p-12 hover:bg-swiss-fg transition-colors duration-200 cursor-default">
              <span className="stat-number block font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter group-hover:text-white transition-colors duration-200">GCP</span>
              <span className="block text-xs font-bold uppercase tracking-widest mt-2 text-gray-500 group-hover:text-gray-400 transition-colors duration-200">Cloud Partner</span>
              <div className="plus-rotate mt-4 w-6 h-6 flex items-center justify-center"><PlusIcon /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section id="services" className="border-b-4 border-swiss-fg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 md:py-16 border-b-2 border-swiss-fg">
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-swiss-accent font-black text-xs uppercase tracking-widest">01.</span>
                  <span className="font-bold text-xs uppercase tracking-widest">System</span>
                </div>
                <h2 className="gsap-section-h2 text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                  Our<br /><span className="text-swiss-accent">Services</span>
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-base font-normal leading-relaxed text-gray-700">
                  Cutting-edge development, AI, and cloud-native solutions engineered for your business.
                </p>
              </div>
            </div>
          </div>

          {/* Service cards — 7 total in a 3-col grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* 1. Cloud Native Development */}
            <div className="gsap-service-card group invert-card border-b-2 md:border-r-2 border-swiss-fg p-8 md:p-12 cursor-default">
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 border-2 border-swiss-fg flex items-center justify-center card-border-item">
                  <svg className="w-5 h-5 card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <ArrowIcon />
              </div>
              <h3 className="card-heading font-black text-xl uppercase tracking-tight mb-3">Cloud Native Development</h3>
              <p className="card-text text-sm font-normal leading-relaxed text-gray-600">Applications designed to reside in the cloud involve cloud technologies like Microservices, CI/CD, Infrastructure as Code and DevSecOps.</p>
            </div>

            {/* 2. Cloud Migration */}
            <div className="gsap-service-card group invert-card border-b-2 lg:border-r-2 border-swiss-fg p-8 md:p-12 cursor-default">
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 border-2 border-swiss-fg flex items-center justify-center card-border-item">
                  <svg className="w-5 h-5 card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
                <ArrowIcon />
              </div>
              <h3 className="card-heading font-black text-xl uppercase tracking-tight mb-3">Cloud Migration</h3>
              <p className="card-text text-sm font-normal leading-relaxed text-gray-600">Access, plan and execute cloud migration between on-premises-to-cloud and cloud-to-cloud services.</p>
            </div>

            {/* 3. Cloud Optimization */}
            <div className="gsap-service-card group invert-card border-b-2 md:border-r-2 lg:border-r-0 border-swiss-fg p-8 md:p-12 cursor-default">
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 border-2 border-swiss-fg flex items-center justify-center card-border-item">
                  <svg className="w-5 h-5 card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <ArrowIcon />
              </div>
              <h3 className="card-heading font-black text-xl uppercase tracking-tight mb-3">Cloud Optimization</h3>
              <p className="card-text text-sm font-normal leading-relaxed text-gray-600">Analyzing the right resource as per your application needs to eliminate resource wastage.</p>
            </div>

            {/* 4. Microservices */}
            <div className="gsap-service-card group invert-card border-b-2 md:border-r-2 border-swiss-fg p-8 md:p-12 cursor-default">
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 border-2 border-swiss-fg flex items-center justify-center card-border-item">
                  <svg className="w-5 h-5 card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                  </svg>
                </div>
                <ArrowIcon />
              </div>
              <h3 className="card-heading font-black text-xl uppercase tracking-tight mb-3">Microservices</h3>
              <p className="card-text text-sm font-normal leading-relaxed text-gray-600">A set of fine-grained services communicate with each other over well-defined APIs.</p>
            </div>

            {/* 5. Micro Frontend */}
            <div className="gsap-service-card group invert-card border-b-2 lg:border-r-2 border-swiss-fg p-8 md:p-12 cursor-default">
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 border-2 border-swiss-fg flex items-center justify-center card-border-item">
                  <svg className="w-5 h-5 card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <ArrowIcon />
              </div>
              <h3 className="card-heading font-black text-xl uppercase tracking-tight mb-3">Micro Frontend</h3>
              <p className="card-text text-sm font-normal leading-relaxed text-gray-600">Decomposing front-end application into small individual micro applications works loosely together.</p>
            </div>

            {/* 6. Mobile Development */}
            <div className="gsap-service-card group invert-card border-b-2 md:border-r-2 lg:border-r-0 border-swiss-fg p-8 md:p-12 cursor-default">
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 border-2 border-swiss-fg flex items-center justify-center card-border-item">
                  <svg className="w-5 h-5 card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <ArrowIcon />
              </div>
              <h3 className="card-heading font-black text-xl uppercase tracking-tight mb-3">Mobile Development</h3>
              <p className="card-text text-sm font-normal leading-relaxed text-gray-600">Design and develop a software application in both Apple and Android to fulfill your business needs.</p>
            </div>

            {/* Wide AI teaser strip — bridges Services into the dark AI Solutions section */}
            <a
              href="#ai-solutions"
              className="gsap-service-card group md:col-span-2 lg:col-span-3 bg-swiss-fg text-white p-8 md:p-12 cursor-pointer transition-colors duration-200 hover:bg-swiss-accent"
            >
              <div className="flex items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-black text-xs uppercase tracking-widest text-swiss-accent group-hover:text-white transition-colors duration-200">Next 03.</span>
                    <span className="font-bold text-xs uppercase tracking-widest text-gray-400 group-hover:text-white/80 transition-colors duration-200">Intelligence</span>
                  </div>
                  <h3 className="font-black text-3xl md:text-5xl uppercase tracking-tighter leading-[0.95]">
                    Ship with <span className="text-swiss-accent group-hover:text-white transition-colors duration-200">AI</span>.
                  </h3>
                  <p className="text-sm md:text-base font-normal text-gray-400 group-hover:text-white/85 max-w-xl leading-relaxed mt-3 transition-colors duration-200">
                    Six production-grade capabilities — strategy, LLM copilots, RAG, agents, custom ML, and MLOps. Built for your stack, shipped to your users.
                  </p>
                </div>
                <svg
                  className="shrink-0 w-12 h-12 md:w-16 md:h-16 -rotate-90 group-hover:translate-y-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ===================== SOLUTIONS ===================== */}
      <section id="solutions" className="border-b-4 border-swiss-fg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 md:py-16 border-b-2 border-swiss-fg">
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-swiss-accent font-black text-xs uppercase tracking-widest">02.</span>
                  <span className="font-bold text-xs uppercase tracking-widest">Method</span>
                </div>
                <h2 className="gsap-section-h2 text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                  IT<br /><span className="text-swiss-accent">Solutions</span>
                </h2>
              </div>
              <div className="lg:col-span-5 lg:order-1">
                <p className="text-base font-normal leading-relaxed text-gray-700">
                  Enterprise-grade infrastructure, managed services, and AI capabilities tailored for your needs.
                </p>
              </div>
            </div>
          </div>

          <div className="divide-y-2 divide-swiss-fg">
            <SolutionRow num="01" title="Cloud Solutions" body="Our Cloud Solutions provide businesses with the ability to store, access, and manage their data securely in the cloud. Scalable, cost-effective, and secure." />
            <SolutionRow num="02" title="Managed IT Services" body="Reliable IT support with proactive monitoring and maintenance of networks and systems. We ensure your systems remain secure, up-to-date, and running optimally." />
            <SolutionRow num="03" title="Disaster Recovery" body="Comprehensive protection utilizing the latest technology to ensure your data and systems are safe. Tailored plans for peace of mind in the face of disaster." />
            <SolutionRow num="04" title="Cloud Desktop" body="Securely store data and access your desktop and applications from any device. A cost-effective, secure and reliable way to work from anywhere in the world." />
            <SolutionRow num="05" title="Network Solutions" body="Comprehensive network solutions for businesses of all sizes. Certified professionals design, manage, and implement secure, reliable networks tailored to your needs." />
            <SolutionRow num="06" title="Support Consulting" body="Expert advice and guidance to help businesses maximize their IT investments. Tailored solutions to ensure your business takes full advantage of the latest technology." />
          </div>
        </div>
      </section>

      {/* ===================== AI SOLUTIONS ===================== */}
      <section id="ai-solutions" className="border-b-4 border-swiss-fg bg-swiss-fg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 md:py-16 border-b-2 border-gray-800">
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-swiss-accent font-black text-xs uppercase tracking-widest">03.</span>
                  <span className="font-bold text-xs uppercase tracking-widest text-gray-400">Intelligence</span>
                </div>
                <h2 className="gsap-section-h2 text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                  AI<br /><span className="text-swiss-accent">Solutions</span>
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-base font-normal leading-relaxed text-gray-400">
                  From strategy through production. We help you pick the right bet, ship a working system, and keep it reliable as usage grows.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <AiCard
              num="01"
              category="Strategy"
              title="AI Strategy & Roadmap"
              body="Executive workshops and feasibility audits that identify high-ROI use cases, assess data readiness, and produce a 90/180/365-day delivery roadmap — investment goes to initiatives that move the business, not experiments that stall."
              tags={["Workshops", "Audit", "90/180/365"]}
              border="border-b-2 md:border-r-2 border-gray-800"
            />
            <AiCard
              num="02"
              category="Integration"
              title="LLM Integrations & Copilots"
              body="Production copilots built on Claude, GPT, and Gemini — context-aware assistants embedded in your CRM, support desk, or internal tools. Prompting, tool-use, streaming UX, and cost/latency tuning included."
              tags={["Claude", "GPT", "Prompting"]}
              border="border-b-2 border-gray-800"
            />
            <AiCard
              num="03"
              category="Retrieval"
              title="RAG & Knowledge Systems"
              body="Retrieval-augmented generation over your documents, tickets, wikis, and databases. Vector stores, semantic chunking, hybrid search, and citation-grounded answers — your AI speaks from your sources, not its training data."
              tags={["Vectors", "Hybrid Search", "Citations"]}
              border="border-b-2 md:border-r-2 border-gray-800"
            />
            <AiCard
              num="04"
              category="Automation"
              title="AI Agents & Workflow Automation"
              body="Multi-step agents that plan, call tools, and execute workflows: lead qualification, ticket triage, document processing, research, outbound. Human-in-the-loop guardrails by default."
              tags={["Agents", "Tool-use", "Guardrails"]}
              border="border-b-2 border-gray-800"
            />
            <AiCard
              num="05"
              category="Modeling"
              title="Custom ML & Fine-Tuning"
              body="Domain-specific model development — classifiers, forecasters, recommenders, and fine-tuned open-weight LLMs when generic APIs aren't enough. Training pipelines, evaluation suites, and continuous retraining baked in."
              tags={["PyTorch", "Fine-Tune", "Pipelines"]}
              border="border-b-2 md:border-r-2 md:border-b-0 border-gray-800"
            />
            <AiCard
              num="06"
              category="Operations"
              title="MLOps, Evaluation & Safety"
              body="The unsexy foundation that makes AI trustworthy in production: automated evals, prompt/version control, observability, red-teaming, PII and prompt-injection defences, and cost guardrails. Ship fast, sleep at night."
              tags={["Evals", "Observability", "Security"]}
              border=""
            />
          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section id="why-us" className="border-b-4 border-swiss-fg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 md:py-16 border-b-2 border-swiss-fg">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-swiss-accent font-black text-xs uppercase tracking-widest">04.</span>
              <span className="font-bold text-xs uppercase tracking-widest">Advantages</span>
            </div>
            <h2 className="gsap-section-h2 text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
              Why<br />Deft<span className="text-swiss-accent">Squad?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <WhyCard num="01" title="Customer First" body="Customers come first is a fundamental value of our organisation. We endeavour to comprehend our clients' needs and provide solutions that meet or exceed them." borderExtra="border-b-2 lg:border-r-2" />
            <WhyCard num="02" title="Security" body="Security is among our top priorities. We adhere to the software industry's best practices and standards to ensure code is secure, dependable, and maintainable." borderExtra="border-b-2" />
            <WhyCard num="03" title="Solution with Passion" body="We are devoted to delivering high-quality IT solutions with enthusiasm and diligence. Our team can manage any project with efficiency and imagination." borderExtra="border-b-2 lg:border-r-2" />
            <WhyCard num="04" title="Timely Delivery within Budget" body="We have a proven methodology that ensures every stage of the project is planned, executed and monitored with precision and efficiency." borderExtra="border-b-2 lg:border-b-0" />
            <div className="group invert-card lg:col-span-2 p-8 md:p-12 bg-swiss-muted swiss-dots cursor-default">
              <div className="flex items-start gap-6">
                <span className="font-black text-5xl md:text-6xl tracking-tighter text-gray-300 group-hover:text-white/20 transition-colors duration-200 shrink-0 leading-none">05</span>
                <div>
                  <h3 className="card-heading font-black text-xl uppercase tracking-tight mb-3">Scalable Solutions</h3>
                  <p className="card-text text-sm font-normal leading-relaxed text-gray-600 max-w-2xl">We provide cloud consulting, migration, development, management, and security services. We have expertise in Azure, AWS, Google Cloud Platform, and IBM Cloud. We can help you design, build, deploy, and manage your cloud applications and infrastructure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PARTNER ===================== */}
      <section className="border-b-4 border-swiss-fg bg-swiss-fg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Trusted Partnership</span>
            </div>
            <div className="lg:col-span-4 text-center">
              <div className="inline-flex items-center gap-4">
                <div className="w-12 h-12 border-2 border-white flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-black text-lg uppercase tracking-tight">Google Cloud</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-swiss-accent">Certified Partner</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <div className="w-16 h-16 bg-swiss-accent inline-block" />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section id="contact" className="border-b-4 border-swiss-fg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 md:py-16 border-b-2 border-swiss-fg">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-swiss-accent font-black text-xs uppercase tracking-widest">05.</span>
              <span className="font-bold text-xs uppercase tracking-widest">Connect</span>
            </div>
            <h2 className="gsap-section-h2 text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
              Get In<br /><span className="text-swiss-accent">Touch</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-5 lg:border-r-2 border-swiss-fg py-12 md:py-16 lg:pr-12">
              <p className="text-base font-normal leading-relaxed text-gray-700 mb-10">
                Ready to upgrade your technology infrastructure or launch an AI initiative? Get in touch with our team of experts.
              </p>

              <div className="space-y-0 border-t-2 border-swiss-fg">
                <div className="py-6 border-b-2 border-swiss-fg">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-1">Address</span>
                  <span className="font-bold text-sm">5005 W Royal Ln Suite 183k, Irving, TX 75063</span>
                </div>
                <div className="py-6 border-b-2 border-swiss-fg">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-1">Phone</span>
                  <span className="font-bold text-sm">+1 469.599.4789</span>
                </div>
                <div className="py-6 border-b-2 border-swiss-fg">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-1">Email</span>
                  <span className="font-bold text-sm">info@deftsquad.com</span>
                </div>
              </div>

              <div className="mt-10 flex gap-4 items-end">
                <div className="w-8 h-8 bg-swiss-accent" />
                <div className="w-8 h-16 border-2 border-swiss-fg" />
                <div className="w-8 h-8 rounded-full border-2 border-swiss-fg" />
                <div className="w-16 h-[3px] bg-swiss-fg self-center" />
              </div>
            </div>

            <div className="lg:col-span-7 py-12 md:py-16 lg:pl-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="bg-swiss-fg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-gray-800">
            <div className="lg:col-span-2 py-12 md:py-16 lg:pr-16 lg:border-r border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/DeftSquadWhite.png"
                  alt="DeftSquad logo"
                  className="h-10 w-auto"
                  width={40}
                  height={50}
                />
                <span className="font-black text-lg uppercase tracking-tight">
                  Deft<span className="text-swiss-accent">Squad</span>
                </span>
              </div>
              <p className="text-sm font-normal leading-relaxed text-gray-400 max-w-sm">
                Professional IT consulting, AI solutions, and managed services. Building secure, scalable, and intelligent systems for businesses worldwide.
              </p>
              <div className="mt-6 inline-flex items-center gap-2">
                <div className="w-2 h-2 bg-swiss-accent" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Google Cloud Partner</span>
              </div>
            </div>

            <div className="py-12 md:py-16 lg:px-12 lg:border-r border-gray-800">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Navigation</h4>
              <ul className="space-y-4">
                <li><a href="#hero" className="text-sm font-medium text-gray-400 hover:text-swiss-accent transition-colors duration-150">Home</a></li>
                <li><a href="#services" className="text-sm font-medium text-gray-400 hover:text-swiss-accent transition-colors duration-150">Services</a></li>
                <li><a href="#solutions" className="text-sm font-medium text-gray-400 hover:text-swiss-accent transition-colors duration-150">Solutions</a></li>
                <li><a href="#ai-solutions" className="text-sm font-medium text-gray-400 hover:text-swiss-accent transition-colors duration-150">AI</a></li>
                <li><a href="#why-us" className="text-sm font-medium text-gray-400 hover:text-swiss-accent transition-colors duration-150">Why Us</a></li>
                <li><a href="#contact" className="text-sm font-medium text-gray-400 hover:text-swiss-accent transition-colors duration-150">Contact</a></li>
              </ul>
            </div>

            <div className="py-12 md:py-16 lg:pl-12">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Contact</h4>
              <div className="space-y-4 text-sm">
                <p className="text-gray-400">5005 W Royal Ln Suite 183k</p>
                <p className="text-gray-400">Irving, TX 75063</p>
                <p className="text-white font-bold">+1 469.599.4789</p>
                <p className="text-white font-bold">info@deftsquad.com</p>
              </div>
            </div>
          </div>

          <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-xs text-gray-600">&copy; {new Date().getFullYear()} DeftSquad. All rights reserved.</span>
            <span className="text-xs text-gray-600 uppercase tracking-widest">International Typographic Style</span>
          </div>
        </div>
      </footer>
    </>
  );
}

function SolutionRow({ num, title, body }) {
  return (
    <div className="gsap-solution-row group invert-card-black grid lg:grid-cols-12 gap-6 py-8 md:py-12 px-4 md:px-8 cursor-default transition-all duration-200">
      <div className="lg:col-span-1">
        <span className="gsap-solution-num card-label text-swiss-accent font-black text-sm inline-block">{num}</span>
      </div>
      <div className="lg:col-span-3">
        <h3 className="card-heading font-black text-lg uppercase tracking-tight">{title}</h3>
      </div>
      <div className="lg:col-span-8">
        <p className="card-text text-sm font-normal leading-relaxed text-gray-600">{body}</p>
      </div>
    </div>
  );
}

function WhyCard({ num, title, body, borderExtra }) {
  return (
    <div className={`group invert-card ${borderExtra} border-swiss-fg p-8 md:p-12 cursor-default`}>
      <div className="flex items-start gap-6">
        <span className="font-black text-5xl md:text-6xl tracking-tighter text-swiss-muted group-hover:text-white/20 transition-colors duration-200 shrink-0 leading-none">{num}</span>
        <div>
          <h3 className="card-heading font-black text-xl uppercase tracking-tight mb-3">{title}</h3>
          <p className="card-text text-sm font-normal leading-relaxed text-gray-600">{body}</p>
        </div>
      </div>
    </div>
  );
}

function AiCard({ num, category, title, body, tags, border }) {
  return (
    <div className={`gsap-ai-card group relative p-8 md:p-12 cursor-default transition-colors duration-200 hover:bg-swiss-accent ${border}`}>
      <div className="flex items-start justify-between mb-8">
        <span className="font-black text-6xl md:text-7xl tracking-tighter text-swiss-accent group-hover:text-white transition-colors duration-200 leading-none">{num}</span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-black/70 border border-gray-800 group-hover:border-black/30 px-2 py-1 transition-colors duration-200">
          {category}
        </span>
      </div>
      <h3 className="font-black text-2xl md:text-3xl uppercase tracking-tight mb-4 max-w-sm text-white group-hover:text-black transition-colors duration-200">
        {title}
      </h3>
      <p className="text-sm font-normal leading-relaxed text-gray-400 group-hover:text-black/80 mb-6 max-w-md transition-colors duration-200">
        {body}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-black/70 border border-gray-800 group-hover:border-black/20 px-2 py-1 transition-colors duration-200"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
