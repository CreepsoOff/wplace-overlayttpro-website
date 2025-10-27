'use client'

import { useEffect, useState } from 'react'
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
  Eye
} from 'lucide-react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    setIsVisible(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

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
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Layers className="w-6 h-6 text-accent-400" />
              <span className="font-bold text-xl">Overlay Pro TT</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => handleScrollTo('home')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleScrollTo('features')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => handleScrollTo('faq')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => handleScrollTo('install')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Install
              </button>
              <a
                href="https://github.com/CreepsoOff/Wplace-Overlay-Pro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-5xl sm:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
                Overlay Pro TT
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your <span className="text-accent-400 font-semibold">wplace.live</span> experience with the most advanced overlay system. 
              Achieve pixel-perfect accuracy with intelligent color matching and intuitive controls.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button
                onClick={() => handleScrollTo('install')}
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg font-semibold text-lg hover:from-primary-500 hover:to-accent-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-accent-500/50"
              >
                <span className="flex items-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Install Now</span>
                </span>
              </button>
              <a
                href="https://github.com/CreepsoOff/Wplace-Overlay-Pro"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-lg font-semibold text-lg hover:bg-white/20 transition-all border border-white/20"
              >
                <span className="flex items-center space-x-2">
                  <Github className="w-5 h-5" />
                  <span>View on GitHub</span>
                </span>
              </a>
            </div>
            <button
              onClick={() => handleScrollTo('features')}
              className="animate-bounce text-gray-400 hover:text-white transition-colors"
              aria-label="Scroll to features"
            >
              <ChevronDown className="w-8 h-8 mx-auto" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transition-all duration-700 ${
              visibleSections.has('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-gray-400 text-center mb-16">for wplace.live</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className={`group p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-accent-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-accent-500/20 ${
                    visibleSections.has('features')
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {detailedFeatures.map((feature, index) => {
              const Icon = feature.icon
              const isEven = index % 2 === 0
              return (
                <div
                  key={index}
                  className={`flex flex-col ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } items-center gap-12`}
                >
                  <div className="flex-1">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="aspect-video bg-gradient-to-br from-primary-900/30 to-accent-900/30 rounded-2xl border border-white/10 flex items-center justify-center">
                      <Icon className="w-24 h-24 text-accent-400/30" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-700 ${
              visibleSections.has('faq') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className={`group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-accent-500/50 transition-all duration-500 ${
                  visibleSections.has('faq') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <summary className="cursor-pointer p-6 font-semibold text-lg list-none flex items-center justify-between">
                  <span>{faq.question}</span>
                  <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-gray-400 animate-fade-in">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Install Section */}
      <section id="install" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            visibleSections.has('install') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Get Started?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Install Overlay Pro TT in seconds and start creating pixel-perfect overlays on wplace.live
          </p>
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8 mb-8">
            <div className="flex items-start space-x-4 mb-6 text-left">
              <div className="flex-shrink-0 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Install a Userscript Manager</h3>
                <p className="text-gray-400">
                  Get{' '}
                  <a
                    href="https://violentmonkey.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-400 hover:text-accent-300 underline"
                  >
                    Violentmonkey
                  </a>{' '}
                  or{' '}
                  <a
                    href="https://www.tampermonkey.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-400 hover:text-accent-300 underline"
                  >
                    Tampermonkey
                  </a>{' '}
                  for your browser
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 text-left">
              <div className="flex-shrink-0 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Click the Install Button</h3>
                <p className="text-gray-400">
                  The userscript will be automatically imported into your manager
                </p>
              </div>
            </div>
          </div>
          <a
            href="http://cdn.jsdelivr.net/gh/creepsooff/Wplace-Overlay-Pro@development/dist/overlay-pro-tt.user.js"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-12 py-5 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl font-bold text-xl hover:from-primary-500 hover:to-accent-500 transition-all transform hover:scale-105 shadow-2xl hover:shadow-accent-500/50"
          >
            <Download className="w-6 h-6" />
            <span>Install Overlay Pro TT</span>
          </a>
          <p className="text-sm text-gray-500 mt-6">
            Free and open-source • GPL-3.0 License
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Layers className="w-6 h-6 text-accent-400" />
              <span className="font-bold text-xl">Overlay Pro TT</span>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/CreepsoOff/Wplace-Overlay-Pro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>
              © 2025 Overlay Pro TT. Licensed under{' '}
              <a
                href="https://github.com/CreepsoOff/Wplace-Overlay-Pro/blob/master/LICENSE.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-400 hover:text-accent-300"
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
                className="text-accent-400 hover:text-accent-300"
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


