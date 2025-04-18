// pages/agent-studio/page.js

import Head from 'next/head';

export default function AgentStudioPage() {
  const features = [
    {
      title: 'Listen',
      description: 'Access industry-leading speech recognition models, purpose-built for customer service.',
    },
    {
      title: 'Reason',
      description: 'Ensure accurate, consistent, and reliable performance with a custom LLM adaptor for your brand.',
    },
    {
      title: 'Speak',
      description: 'Engage callers with a unique brand voice that feels like talking to a real person.',
    },
  ];

  const integrations = ['Amazon Connect', 'Five9', 'Genesys', 'Salesforce', 'Twilio'];

  return (
    <>
      <Head>
        <title>PolyAI Agent Studio</title>
        <meta
          name="description"
          content="The world's only voice-first omnichannel platform for conversational AI."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            The world's only voice-first omnichannel platform for conversational AI.
          </h1>
          <p className="text-lg mb-6">
            Access an elite conversational AI stack for customer engagement.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded">
            Request a demo
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="flex flex-wrap -mx-4">
            {features.map((feature) => (
              <div key={feature.title} className="w-full md:w-1/3 px-4 mb-8">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Integrations</h2>
          <ul className="flex flex-wrap justify-center space-x-6">
            {integrations.map((integration) => (
              <li key={integration} className="text-lg">
                {integration}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Demo Request Section */}
      <section className="bg-blue-600 py-20 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to hear it for yourself?</h2>
        <p className="mb-6">
          Get a personalized demo to learn how PolyAI can help you drive measurable business value.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded">
          Request a demo
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} PolyAI Ltd. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
