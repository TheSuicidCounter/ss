import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Card } from "@/components/ui/card"
import { Plus } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white">
      <header className="bg-black bg-opacity-50 backdrop-blur-md fixed w-full z-10">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZK5R5kGBOpmuinWmQmgEBlYU3fQv5x.png"
              alt="Smart Socket Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="#product-info" className="text-gray-300 hover:text-[#227fa8] transition duration-300">
                Product Info
              </Link>
            </li>
            <li>
              <Link href="#technologies" className="text-gray-300 hover:text-[#227fa8] transition duration-300">
                Technologies
              </Link>
            </li>
            <li>
              <Link href="/your-devices" className="text-gray-300 hover:text-[#227fa8] transition duration-300">
                Your Devices
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 pt-24">
        <section className="text-center py-20">
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#227fa8] to-sky-400">
            Welcome to Smart Socket
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            The intelligent power solution for your smart home
          </p>
          <Button 
            size="lg" 
            className="bg-[#227fa8] hover:bg-[#1b6589] text-white mb-12 transition-colors"
          >
            Learn More
          </Button>

          {/* Demo Device Card */}
          <div className="max-w-sm mx-auto mt-8">
            <Card className="bg-slate-800 text-white p-6 rounded-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Smart Light</h3>
                <Switch className="data-[state=checked]:bg-[#227fa8]" />
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Usage today:</span>
                  <span>50 Watt</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Use Week:</span>
                  <span>500 Kwh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Use Month:</span>
                  <span>5000 Kwh</span>
                </div>
              </div>

              <div className="bg-[#227fa8]/20 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-medium">Schedule</h4>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-[#227fa8] hover:text-sky-400 hover:bg-[#227fa8]/10"
                  >
                    <Plus className="h-5 w-5" />
                  </Button>
                </div>
                <div className="text-gray-300">
                  <div className="flex justify-between items-center">
                    <div>
                      <div>Tue</div>
                      <div className="text-sm text-gray-400">From 8pm</div>
                    </div>
                    <div className="text-center px-4 text-[#227fa8]">|</div>
                    <div>
                      <div>Thu</div>
                      <div className="text-sm text-gray-400">To 8am</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Add New Device Button */}
          <div className="mt-8">
            <Button 
              size="lg"
              className="bg-[#227fa8] hover:bg-[#1b6589] text-white transition-colors"
            >
              <Plus className="mr-2 h-5 w-5" /> Add New Device
            </Button>
          </div>
        </section>

        <section id="product-info" className="my-20">
          <h2 className="text-4xl font-semibold mb-6 text-[#227fa8]">Product Info</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Smart Socket is an innovative device that brings intelligence to your power outlets. 
            It allows you to control and monitor your electrical devices remotely, 
            optimize energy consumption, and enhance the safety of your home.
          </p>
        </section>

        <section id="technologies" className="my-20">
          <h2 className="text-4xl font-semibold mb-6 text-[#227fa8]">Technologies Used</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            <li className="bg-[#227fa8]/20 p-4 rounded-lg">
              <span className="text-[#227fa8] font-semibold">IoT Connectivity:</span> Seamless integration with your smart home ecosystem
            </li>
            <li className="bg-[#227fa8]/20 p-4 rounded-lg">
              <span className="text-[#227fa8] font-semibold">Machine Learning:</span> Advanced algorithms for energy optimization
            </li>
            <li className="bg-[#227fa8]/20 p-4 rounded-lg">
              <span className="text-[#227fa8] font-semibold">Mobile App Integration:</span> Control at your fingertips, anytime, anywhere
            </li>
            <li className="bg-[#227fa8]/20 p-4 rounded-lg">
              <span className="text-[#227fa8] font-semibold">Cloud Analytics:</span> Insightful data analysis for smarter decisions
            </li>
          </ul>
        </section>
      </main>

      <footer className="bg-black bg-opacity-50 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-gray-400">
          © 2025 Smart Socket. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
