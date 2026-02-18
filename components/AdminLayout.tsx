import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Logo from './Logo';

const AdminLayout: React.FC = () => {
  const navLinks = [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Blog Generator', path: '/admin/blog-generator' },
    { name: 'Image Generator', path: '/admin/image-generator' },
    { name: 'Blog Editor', path: '/admin/blog-editor' },
    { name: 'Blog Seeder', path: '/admin/blog-seeder' },
    { name: 'Team Management', path: '/admin/team' },
  ];

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
      isActive
        ? 'bg-brand-blue text-white'
        : 'text-brand-slate hover:bg-gray-700 hover:text-white'
    }`;

  return (
    <div className="min-h-screen bg-brand-dark flex">
      <aside className="w-64 bg-gray-900/50 p-4 border-r border-gray-800 flex flex-col">
        <div className="mb-8">
          <Logo />
        </div>
        <nav className="flex-grow">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink to={link.path} className={getNavLinkClass} end={link.path === '/admin'}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <NavLink to="/" className="text-sm text-brand-slate hover:text-brand-orange">
            &larr; Back to Main Site
          </NavLink>
        </div>
      </aside>
      <main className="flex-1 p-6 lg:p-10 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;