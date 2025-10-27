'use client'

import { useState, useEffect, useRef } from 'react'
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
  Minus
} from 'lucide-react'


const AnimatedSection = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
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
}


const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
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
}

export default function Home() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const features = [
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

  const detailedFeatures = [
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

  const faqs = [
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
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">Overlay Pro TT</span>
            </motion.div>
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
                className="px-4 py-2 bg-primary-600 hover:bg-primary-500 rounded-lg transition-colors text-sm font-medium"
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
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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

        <div className="max-w-7xl mx-auto text-center relative z-10">
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
              className="flex items-center justify-center gap-3 mb-8"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </div>
                <span className="text-sm text-slate-300">Wplace.live power tool</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </div>
                <span className="text-sm text-slate-300">Open‑source</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                className="inline-block bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ backgroundSize: '200% auto' }}
              >
                Overlay Pro TT
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Transform your <span className="text-primary-400 font-semibold">wplace.live</span> experience with the most advanced overlay system. 
              Achieve pixel-perfect accuracy with intelligent color matching and intuitive controls.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <motion.button
                onClick={() => handleScrollTo('install')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-primary-600 rounded-lg font-semibold text-lg hover:bg-primary-500 transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40"
              >
                <span className="flex items-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Install Now</span>
                </span>
              </motion.button>
              <motion.a
                href="https://github.com/CreepsoOff/Wplace-Overlay-Pro"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-lg font-semibold text-lg transition-all border border-slate-700"
              >
                <span className="flex items-center space-x-2">
                  <Github className="w-5 h-5" />
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Powerful features for wplace.live
            </h2>
            <p className="text-xl text-slate-400">
              Everything you need for pixel‑perfect overlays, nothing you don't.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                  className="group relative p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-primary-500/10 rounded-2xl transition-all duration-300" />
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {detailedFeatures.map((feature, index) => {
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
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl mb-6">
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
                      className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 flex items-center justify-center overflow-hidden relative"
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-400">Everything you need to know</p>
          </AnimatedSection>
          
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-8">
            {faqs.map((faq, index) => (
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

      {/* Install Section */}
      <section id="install" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Install Overlay Pro TT in seconds and start creating pixel-perfect overlays on wplace.live
          </p>
          
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Install a Userscript Manager</h3>
                  <p className="text-slate-400">
                    Get{' '}
                    <a
                      href="https://violentmonkey.github.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 underline"
                    >
                      Violentmonkey
                    </a>{' '}
                    or{' '}
                    <a
                      href="https://www.tampermonkey.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 underline"
                    >
                      Tampermonkey
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Click the Install Button</h3>
                  <p className="text-slate-400">
                    The userscript will be automatically imported into your manager
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <motion.a
            href="http://cdn.jsdelivr.net/gh/creepsooff/Wplace-Overlay-Pro@development/dist/overlay-pro-tt.user.js"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 px-12 py-5 bg-primary-600 rounded-xl font-bold text-xl hover:bg-primary-500 transition-all shadow-2xl shadow-primary-500/20 hover:shadow-primary-500/40"
          >
            <Download className="w-6 h-6" />
            <span>Install Overlay Pro TT</span>
          </motion.a>
          <p className="text-sm text-slate-500 mt-6">
            Free and open-source • GPL-3.0 License
          </p>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
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
