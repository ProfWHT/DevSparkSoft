import React from 'react';
import type { TeamMember } from '../types';
import { TEAM_MEMBERS } from '../constants';
import Image from '../components/Image';

const PageHeader: React.FC<{title: string}> = ({title}) => (
    <div className="bg-gray-900/50 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
    </div>
);

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="bg-gray-800/50 rounded-lg overflow-hidden text-center group transition-all duration-300 hover:shadow-2xl hover:shadow-brand-blue/20 hover:-translate-y-2">
    <div className="relative">
        <Image src={member.photo} 
             alt={member.name} 
             className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    </div>
    <div className="p-6 relative -mt-16 bg-gray-800/50 backdrop-blur-sm m-4 rounded-lg border border-gray-700">
      <h3 className="text-xl font-bold text-brand-light">{member.name}</h3>
      <p className="text-brand-blue font-semibold mb-2">{member.position}</p>
      {member.education && <p className="text-brand-slate text-sm mb-1">{member.education}</p>}
      <p className="text-brand-slate text-xs">{member.address}</p>
    </div>
  </div>
);

const TeamPage: React.FC = () => {
  const activeTeam = TEAM_MEMBERS
    .filter(member => member.isActive)
    .sort((a, b) => a.sortOrder - b.sortOrder);
    
  return (
    <div className="animate-fade-in-up">
      <PageHeader title="Meet Our Team" />

      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-light">The Minds Behind Our Success</h2>
            <p className="max-w-2xl mx-auto text-brand-slate mt-4">
              We are a collective of passionate innovators, strategic thinkers, and tech enthusiasts dedicated to delivering excellence.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {activeTeam.map((member, index) => (
              <div key={member.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <TeamMemberCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;