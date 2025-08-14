import Header from '../components/Header';
import LogosStrip from '../components/LogosStrip';
import dynamic from 'next/dynamic';

import { ChevronDownIcon } from '@heroicons/react/20/solid'


const AgentsSection = dynamic(() => import('../components/AgentsSection'), { ssr: false });

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      
      <LogosStrip />
      <AgentsSection />
      
    </div>
  );
}
