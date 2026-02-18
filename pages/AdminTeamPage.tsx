import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import ImageUploader from '../components/ImageUploader';
import Image from '../components/Image';

const AdminTeamPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-bold text-white mb-2">Manage Team Members</h1>
      <p className="text-brand-slate mb-8">
        This is a client-side simulation. The "Save Image" button is for demonstration only and does not perform a real upload.
      </p>

      <div className="mt-8 space-y-6">
        {TEAM_MEMBERS.map(member => (
          <div key={member.name} className="bg-gray-800/50 p-6 rounded-lg grid md:grid-cols-3 gap-6 items-start">
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
  );
};

export default AdminTeamPage;
