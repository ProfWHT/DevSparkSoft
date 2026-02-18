import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/portfolio';
import type { PortfolioProject } from '../types';
import Image from '../components/Image';

const AdminPortfolioPage: React.FC = () => {
  const [projects, setProjects] = useState<PortfolioProject[]>(PORTFOLIO_PROJECTS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<PortfolioProject | null>(null);

  const openModal = (project: PortfolioProject | null = null) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProject(null);
  };

  const handleSave = (projectData: PortfolioProject) => {
    // This is a client-side simulation
    if (editingProject) {
      setProjects(projects.map(p => p.id === projectData.id ? projectData : p));
      alert(`Project "${projectData.titleEn}" updated! (Simulation)`);
    } else {
      setProjects([...projects, { ...projectData, id: `proj-${Date.now()}` }]);
      alert(`Project "${projectData.titleEn}" created! (Simulation)`);
    }
    closeModal();
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this project? (Simulation)")) {
      setProjects(projects.filter(p => p.id !== id));
      alert("Project deleted! (Simulation)");
    }
  };
  
  return (
    <div className="animate-fade-in-up">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Manage Portfolio</h1>
          <p className="text-brand-slate">Add, edit, or remove projects from your portfolio showcase.</p>
        </div>
        <button onClick={() => openModal()} className="px-4 py-2 font-semibold text-white bg-brand-blue rounded-md hover:bg-opacity-80">
          Add New Project
        </button>
      </div>

       <div className="mb-6 p-4 bg-yellow-900/30 border border-yellow-700 rounded-lg">
        <p className="text-yellow-300 font-semibold text-center">Note: This is a client-side simulation. All changes will be lost on page reload.</p>
      </div>

      <div className="bg-gray-800/50 rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-900/70 text-sm text-brand-slate uppercase tracking-wider">
            <tr>
              <th className="p-4">Thumbnail</th>
              <th className="p-4">Title</th>
              <th className="p-4">Category</th>
              <th className="p-4">Year</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {projects.map(project => (
              <tr key={project.id} className="hover:bg-gray-800 transition-colors">
                <td className="p-4"><Image src={project.thumbnailUrl} alt={project.titleEn} className="w-24 h-14 object-cover rounded-md" /></td>
                <td className="p-4 font-semibold text-brand-light">{project.titleEn}</td>
                <td className="p-4">{project.category}</td>
                <td className="p-4">{project.year}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${project.status === 'Published' ? 'bg-green-500/20 text-green-300' : 'bg-gray-600/50 text-gray-400'}`}>
                    {project.status}
                  </span>
                </td>
                <td className="p-4 space-x-2">
                  <button onClick={() => openModal(project)} className="text-brand-blue hover:underline">Edit</button>
                  <button onClick={() => handleDelete(project.id)} className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {isModalOpen && <ProjectFormModal project={editingProject} onSave={handleSave} onClose={closeModal} />}
    </div>
  );
};


const ProjectFormModal: React.FC<{
  project: PortfolioProject | null;
  onSave: (data: PortfolioProject) => void;
  onClose: () => void;
}> = ({ project, onSave, onClose }) => {
  const [formData, setFormData] = useState<Partial<PortfolioProject>>(project || {
      status: 'Draft',
      isFeatured: false,
      year: new Date().getFullYear(),
      techStack: [],
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
        setFormData(prev => ({...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else if (name === 'techStack') {
        setFormData(prev => ({...prev, techStack: value.split(',').map(s => s.trim())}));
    } else {
        setFormData(prev => ({...prev, [name]: value}));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData as PortfolioProject);
  };
  
  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <form onSubmit={handleSubmit}>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-6">{project ? 'Edit Project' : 'Add New Project'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="titleEn" value={formData.titleEn || ''} onChange={handleChange} placeholder="Title (English)" className="w-full bg-gray-800 p-2 rounded" required />
              <input name="titleBn" value={formData.titleBn || ''} onChange={handleChange} placeholder="Title (Bangla)" className="w-full bg-gray-800 p-2 rounded" required />
              <textarea name="summaryEn" value={formData.summaryEn || ''} onChange={handleChange} placeholder="Summary (English)" className="md:col-span-2 w-full bg-gray-800 p-2 rounded" rows={2}></textarea>
              <textarea name="summaryBn" value={formData.summaryBn || ''} onChange={handleChange} placeholder="Summary (Bangla)" className="md:col-span-2 w-full bg-gray-800 p-2 rounded" rows={2}></textarea>
              <input name="year" type="number" value={formData.year || ''} onChange={handleChange} placeholder="Year" className="w-full bg-gray-800 p-2 rounded" />
              <input name="category" value={formData.category || ''} onChange={handleChange} placeholder="Category" className="w-full bg-gray-800 p-2 rounded" />
              <input name="techStack" value={formData.techStack?.join(', ') || ''} onChange={handleChange} placeholder="Tech Stack (comma-separated)" className="md:col-span-2 w-full bg-gray-800 p-2 rounded" />
              <input name="thumbnailUrl" value={formData.thumbnailUrl || ''} onChange={handleChange} placeholder="Thumbnail URL" className="md:col-span-2 w-full bg-gray-800 p-2 rounded" required />
              <select name="status" value={formData.status || 'Draft'} onChange={handleChange} className="w-full bg-gray-800 p-2 rounded">
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
              </select>
               <label className="flex items-center gap-2 text-white">
                <input type="checkbox" name="isFeatured" checked={formData.isFeatured || false} onChange={handleChange} />
                Featured on Homepage?
              </label>
            </div>
          </div>
          <div className="p-4 bg-gray-800 flex justify-end gap-4">
            <button type="button" onClick={onClose} className="px-4 py-2 font-semibold text-white bg-gray-600 rounded-md">Cancel</button>
            <button type="submit" className="px-4 py-2 font-semibold text-white bg-brand-blue rounded-md">Save Project</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPortfolioPage;