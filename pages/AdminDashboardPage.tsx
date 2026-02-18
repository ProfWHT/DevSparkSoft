import React from 'react';
import { Link } from 'react-router-dom';
import { RocketIcon, UsersIcon, ImageIcon, EditIcon } from '../components/icons/Icons';

const AdminDashboardPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
      <p className="text-brand-slate mb-8">Welcome! Manage your website content and settings from here.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link 
          to="/admin/blog-generator"
          className="block p-8 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors group"
        >
          <RocketIcon className="h-10 w-10 text-brand-orange mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">
            AI Blog Generator
          </h2>
          <p className="text-brand-slate">
            Create high-quality, SEO-optimized blog posts automatically using the power of AI.
          </p>
        </Link>

        <Link 
          to="/admin/image-generator"
          className="block p-8 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors group"
        >
          <ImageIcon className="h-10 w-10 text-brand-blue mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-blue transition-colors">
            AI Image Generator
          </h2>
          <p className="text-brand-slate">
            Generate clean, modern tech illustrations for your blog covers and content.
          </p>
        </Link>

        <Link 
          to="/admin/blog-editor"
          className="block p-8 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors group"
        >
          <EditIcon className="h-10 w-10 text-green-400 mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
            Blog Editor
          </h2>
          <p className="text-brand-slate">
            Edit existing blog posts. Note: The author field is locked as per policy.
          </p>
        </Link>

        <Link 
          to="/admin/team"
          className="block p-8 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors group"
        >
          <UsersIcon className="h-10 w-10 text-brand-cyan mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
            Team Management
          </h2>
          <p className="text-brand-slate">
            View and manage the team members displayed on the public website.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboardPage;