'use client'

import { useState, useEffect, useRef, useCallback, memo } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Layers, 
  Share2, 
  Palette, 
  LayoutGrid, 
  Zap, 
  Globe,
  Github,
  Download,
  ChevronDown,
  Sparkles,
  Move,
  Eye,
  Plus,
  Minus,
  Menu,
  X
} from 'lucide-react'

// Animation variants for reuse
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const AnimatedSection = memo(({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
})

AnimatedSection.displayName = 'AnimatedSection'


const StepCard = memo(({ step, title, description, buttons, icon: Icon, index }: { step: string; title: string; description: string; buttons: Array<{ link: string; text: string; icon: any }>; icon: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentCard = cardRef.current
    if (!currentCard) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible')
          }, index * 100)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(currentCard)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={cardRef}
      className="feature-card backdrop-blur-sm rounded-2xl border border-slate-800 p-8 flex flex-col overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)',
      }}
    >
      <div className="mb-4">
        <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-600/30 to-violet-600/30 border border-blue-400/50 text-sm font-medium text-white">
          Step {step}
        </span>
      </div>
      <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-slate-300 leading-relaxed mb-6 flex-grow">{description}</p>
      <div className="flex flex-col gap-3">
        {buttons.map((button, idx) => {
          const ButtonIcon = button.icon
          return (
            <motion.a
              key={idx}
              href={button.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-lg font-medium transition-all shadow-lg shadow-blue-500/20"
            >
              <ButtonIcon className="w-5 h-5" />
              <span>{button.text}</span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </motion.a>
          )
        })}
      </div>
    </div>
  )
})

StepCard.displayName = 'StepCard'

const FeatureCard = memo(({ icon: Icon, title, description, index }: { icon: any; title: string; description: string; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentCard = cardRef.current
    if (!currentCard) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible')
          }, index * 100)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(currentCard)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={cardRef}
      className="feature-card group relative p-8 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-primary-500/50 transition-all duration-300 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 50%, rgba(51, 65, 85, 0.4) 100%)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-violet-500/0 to-primary-500/0 group-hover:from-primary-500/10 group-hover:via-violet-500/5 group-hover:to-primary-500/10 rounded-2xl transition-all duration-300" />
      <div className="relative flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-500 transition-all duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-slate-400 leading-relaxed text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
})

FeatureCard.displayName = 'FeatureCard'

const FAQItem = memo(({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-slate-700/50 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-primary-400 transition-colors group"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium pr-8">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          {isOpen ? (
            <Minus className="w-5 h-5 text-primary-400" />
          ) : (
            <Plus className="w-5 h-5 text-slate-400 group-hover:text-primary-400" />
          )}
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-slate-400 leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  )
})

FAQItem.displayName = 'FAQItem'

// Static data extracted outside component for better performance
const FEATURES_DATA = [
    {
      icon: Layers,
      title: 'Multiple Overlays',
      description: 'Run several overlays simultaneously for complex projects',
    },
    {
      icon: Share2,
      title: 'Direct Sharing',
      description: 'Share overlays instantly with friends and collaborators',
    },
    {
      icon: Palette,
      title: 'Smart Color Matching',
      description: 'Automatic alignment with wplace.live color palette',
    },
    {
      icon: LayoutGrid,
      title: 'Dual Display Modes',
      description: 'Switch between full overlay and precise dot mode',
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Instant overlay updates with zero lag performance',
    },
    {
      icon: Globe,
      title: 'Universal Compatibility',
      description: 'Works seamlessly across all modern browsers',
    },
]

const DETAILED_FEATURES_DATA = [
    {
      icon: Eye,
      title: 'Smart Overlay System',
      description: 'Overlay images above or behind tiles with pixel-perfect precision and transparency controls',
    },
    {
      icon: Sparkles,
      title: 'Advanced Color Matching',
      description: 'Intelligent color matching to the Wplace palette with customizable tolerance settings',
    },
    {
      icon: Move,
      title: 'Flexible Positioning',
      description: 'Drag, resize, and reposition overlays with intuitive controls and snap-to-grid functionality',
    },
]

const FAQS_DATA = [
    {
      question: 'What is Overlay Pro TT?',
      answer: 'Overlay Pro TT is a powerful userscript for wplace.live that allows you to overlay images on the canvas with pixel-perfect accuracy, smart color matching, and intuitive controls.',
    },
    {
      question: 'How do I install it?',
      answer: 'First, install a userscript manager like Violentmonkey or Tampermonkey in your browser. Then click the Install button above to add Overlay Pro TT to your userscript manager.',
    },
    {
      question: 'Is it compatible with my browser?',
      answer: 'Yes! Overlay Pro TT works seamlessly with all modern browsers including Chrome, Firefox, Edge, and Safari. Just make sure you have a userscript manager installed.',
    },
    {
      question: 'Can I use multiple overlays at once?',
      answer: 'Absolutely! You can run several overlays simultaneously, making it perfect for complex collaborative projects on wplace.live.',
    },
    {
      question: 'How does color matching work?',
      answer: 'Our intelligent color matching algorithm automatically aligns your overlay colors with the wplace.live palette, ensuring perfect color accuracy with customizable tolerance settings.',
    },
    {
      question: 'Is it free to use?',
      answer: 'Yes! Overlay Pro TT is completely free and open-source under the GPL-3.0 license.',
    },
]

const STEPS_DATA = [
  {
    step: '1 of 3',
    title: 'Install Userscript Manager',
    description: "Add Violentmonkey or Tampermonkey extension to your browser. Choose your preferred manager below.",
    buttons: [
      { link: 'https://violentmonkey.github.io/get-it/', text: 'Get Violentmonkey', icon: Download },
      { link: 'https://www.tampermonkey.net/', text: 'Get Tampermonkey', icon: Download }
    ],
    icon: Download
  },
  {
    step: '2 of 3',
    title: 'Install Script',
    description: 'Click the button below to install Overlay Pro TT. Your userscript manager will handle the installation automatically.',
    buttons: [
      { link: 'http://cdn.jsdelivr.net/gh/creepsooff/Wplace-Overlay-Pro@development/dist/overlay-pro-tt.user.js', text: 'Install Overlay Pro TT', icon: Zap }
    ],
    icon: Zap
  },
  {
    step: '3 of 3',
    title: 'Go to wplace.live',
    description: 'Navigate to wplace.live and Overlay Pro TT will activate automatically. All features are ready to use immediately.',
    buttons: [
      { link: 'https://wplace.live', text: 'Open wplace.live', icon: Globe }
    ],
    icon: Globe
  }
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleScrollTo = useCallback((id: string) => {
    setMobileMenuOpen(false)
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        const offset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl z-50 border-b border-slate-800/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">Overlay Pro TT</span>
            </motion.div>

            {/* Desktop Menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden md:flex items-center space-x-8"
            >
              <button
                onClick={() => handleScrollTo('home')}
                className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
              >
                Home
              </button>
              <button
                onClick={() => handleScrollTo('features')}
                className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
              >
                Features
              </button>
              <button
                onClick={() => handleScrollTo('faq')}
                className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
              >
                FAQ
              </button>
              <button
                onClick={() => handleScrollTo('install')}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-lg transition-all text-sm font-medium shadow-md shadow-blue-500/20"
              >
                Install
              </button>
              <a
                href="https://github.com/CreepsoOff/Wplace-Overlay-Pro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={{
              height: mobileMenuOpen ? 'auto' : 0,
              opacity: mobileMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
          >
            <div className="py-4 space-y-3 border-t border-slate-800/50">
              <button
                onClick={() => handleScrollTo('home')}
                className="block w-full text-left px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors text-sm font-medium"
              >
                Home
              </button>
              <button
                onClick={() => handleScrollTo('features')}
                className="block w-full text-left px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors text-sm font-medium"
              >
                Features
              </button>
              <button
                onClick={() => handleScrollTo('faq')}
                className="block w-full text-left px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors text-sm font-medium"
              >
                FAQ
              </button>
              <button
                onClick={() => handleScrollTo('install')}
                className="block w-full text-left px-4 py-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-lg transition-all text-sm font-medium shadow-md shadow-blue-500/20"
              >
                Install
              </button>
              <a
                href="https://github.com/CreepsoOff/Wplace-Overlay-Pro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors text-sm font-medium"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-700/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex items-center justify-center gap-3 mb-8 lg:mb-12"
            >
              <div className="flex items-center gap-2 px-4 py-2 lg:px-5 lg:py-2.5 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50">
                <div className="relative flex h-2 w-2 lg:h-2.5 lg:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 lg:h-2.5 lg:w-2.5 bg-green-500"></span>
                </div>
                <span className="text-sm lg:text-base font-medium text-slate-300">Professional Grade</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 lg:px-5 lg:py-2.5 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50">
                <div className="relative flex h-2 w-2 lg:h-2.5 lg:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 lg:h-2.5 lg:w-2.5 bg-green-500"></span>
                </div>
                <span className="text-sm lg:text-base font-medium text-slate-300">Open‑source</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Overlay Pro TT
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-slate-300 mb-12 lg:mb-14 max-w-4xl mx-auto leading-relaxed"
            >
              Transform your <span className="text-violet-400 font-semibold">wplace.live</span> experience with the most advanced overlay system. 
              Achieve <span className="text-white font-semibold">pixel-perfect accuracy</span> with intelligent color matching and intuitive controls.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 lg:mb-20"
            >
              <motion.button
                onClick={() => handleScrollTo('install')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-lg lg:rounded-xl font-semibold text-base lg:text-xl transition-all shadow-lg shadow-blue-500/30 hover:shadow-violet-500/40"
              >
                <span className="flex items-center space-x-2">
                  <Download className="w-5 h-5 lg:w-6 lg:h-6" />
                  <span>Install Now</span>
                </span>
              </motion.button>
              <motion.a
                href="https://github.com/CreepsoOff/Wplace-Overlay-Pro"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 lg:px-10 lg:py-5 bg-slate-800 hover:bg-slate-700 rounded-lg lg:rounded-xl font-semibold text-base lg:text-xl transition-all border border-slate-700"
              >
                <span className="flex items-center space-x-2">
                  <Github className="w-5 h-5 lg:w-6 lg:h-6" />
                  <span>View on GitHub</span>
                </span>
              </motion.a>
            </motion.div>
            <motion.button
              onClick={() => handleScrollTo('features')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{
                opacity: { delay: 1 },
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Scroll to features"
            >
              <ChevronDown className="w-8 h-8 mx-auto" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Powerful features for wplace.live
            </h2>
            <p className="text-xl text-slate-400">
              Everything you need for pixel‑perfect overlays, nothing you don't.
            </p>
          </AnimatedSection>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES_DATA.map((feature, index) => {
              const Icon = feature.icon
              return (
                <FeatureCard
                  key={index}
                  icon={Icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {DETAILED_FEATURES_DATA.map((feature, index) => {
              const Icon = feature.icon
              const isEven = index % 2 === 0
              return (
                <AnimatedSection
                  key={index}
                  className={`flex flex-col ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } items-center gap-12 lg:gap-16`}
                >
                  <div className="flex-1">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-2xl mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-xl text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="flex-1 w-full">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="aspect-video rounded-2xl border border-slate-700 flex items-center justify-center overflow-hidden relative"
                      style={{
                        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.7) 50%, rgba(51, 65, 85, 0.5) 100%)',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-700/10" />
                      <Icon className="w-24 h-24 text-primary-500/20 relative z-10" />
                    </motion.div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-400">Everything you need to know</p>
          </AnimatedSection>
          
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-8">
            {FAQS_DATA.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="install" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-fuchsia-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              How it works in three steps
            </h2>
            <p className="text-xl text-slate-400">
              From manual placement to perfect precision — here's how Overlay Pro TT works.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-3">
            {STEPS_DATA.map((item, index) => (
              <StepCard
                key={index}
                step={item.step}
                title={item.title}
                description={item.description}
                buttons={item.buttons}
                icon={item.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">Overlay Pro TT</span>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/CreepsoOff/Wplace-Overlay-Pro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-slate-500 text-sm">
            <p>
              © 2025 Overlay Pro TT. Licensed under{' '}
              <a
                href="https://github.com/CreepsoOff/Wplace-Overlay-Pro/blob/master/LICENSE.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300"
              >
                GPL-3.0
              </a>
            </p>
            <p className="mt-2">
              For use with{' '}
              <a
                href="https://wplace.live"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300"
              >
                wplace.live
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
