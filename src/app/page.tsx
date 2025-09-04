
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-bold tracking-tight mb-4">
            Turn Your Passion into a Business
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Nexus Singularity provides you with the tools and resources to monetize your hobbies and interests.
          </p>
          <a
            href="#"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
      </main>

      <section id="how-it-works" className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-purple-600 rounded-full p-4 mb-4">
                <Image src="/lightbulb.svg" alt="Passion Discovery" width={40} height={40} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Discover Your Passion</h3>
              <p className="text-gray-400">Identify your interests and strengths to find the perfect business idea.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-600 rounded-full p-4 mb-4">
                <Image src="/file.svg" alt="Business Plan" width={40} height={40} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Create a Business Plan</h3>
              <p className="text-gray-400">Our tools will help you generate a solid business plan to guide your journey.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-600 rounded-full p-4 mb-4">
                <Image src="/users.svg" alt="Community Hub" width={40} height={40} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Connect with a Community</h3>
              <p className="text-gray-400">Join a supportive community of entrepreneurs and mentors.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Passion Discovery</h3>
              <p className="text-gray-400">Our interactive tools help you explore your interests and find profitable business ideas.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Business Plan Generator</h3>
              <p className="text-gray-400">Automatically generate a comprehensive business plan tailored to your venture.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Community Hub</h3>
              <p className="text-gray-400">Connect with like-minded individuals, ask questions, and get feedback.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Resource Library</h3>
              <p className="text-gray-400">Access a curated library of articles, guides, and courses to help you succeed.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Mentor Matching</h3>
              <p className="text-gray-400">Get paired with an experienced mentor to guide you on your journey.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Funding Opportunities</h3>
              <p className="text-gray-400">Discover funding opportunities to help you launch and grow your business.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2023 Nexus Singularity. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
