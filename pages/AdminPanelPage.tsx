import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import ImageUploader from '../components/ImageUploader';
import Image from '../components/Image';

const PageHeader: React.FC<{title: string}> = ({title}) => (
    <div className="bg-gray-900/50 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
    </div>
);

const AdminPanelPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <PageHeader title="Admin Panel (Demonstration)" />

      <section className="py-16 bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-gray-800/50 p-6 rounded-lg border border-yellow-500/30">
            <h2 className="text-2xl font-bold text-brand-light mb-2">Manage Team Members</h2>
            <p className="text-brand-slate">
              This is a client-side simulation of an admin panel. The "Save Image" button is for demonstration purposes only and does not perform a real upload. Here you can see the reusable image uploader component in action.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {TEAM_MEMBERS.map(member => (
              <div key={member.name} className="bg-gray-800/30 p-6 rounded-lg grid md:grid-cols-3 gap-6 items-start">
                {/* Current Info */}
                <div className="md:col-span-1">
                    <h3 className="text-xl font-semibold text-brand-light">{member.name}</h3>
                    <p className="text-brand-slate">{member.position}</p>
                    <div className="mt-4">
                        <Image 
                            src={member.photo} 
                            alt={member.name}
                            className="w-24 h-24 object-cover rounded-full"
                        />
                    </div>
                </div>

                {/* Image Uploader Example */}
                <div className="md:col-span-2">
                    <h4 className="text-lg font-medium text-brand-light mb-2">Upload New Photo</h4>
                    <ImageUploader />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminPanelPage;
