'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { projects, categories, Project } from '@/data/projects';

export default function Projets() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'Tous') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category === selectedCategory));
    }
  }, [selectedCategory]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Topographie': return 'fa-ruler-combined';
      case 'LiDAR': return 'fa-crosshairs';
      case 'Bathymétrie': return 'fa-water';
      case 'Photogrammétrie': return 'fa-camera';
      case 'Cadastre': return 'fa-map-marked-alt';
      case 'Monitoring': return 'fa-chart-line';
      default: return 'fa-folder';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Topographie': return 'bg-blue-500';
      case 'LiDAR': return 'bg-purple-500';
      case 'Bathymétrie': return 'bg-teal-500';
      case 'Photogrammétrie': return 'bg-green-500';
      case 'Cadastre': return 'bg-orange-500';
      case 'Monitoring': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white text-lidar-dark grid-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-lidar-dark">
          <div className="absolute inset-0 bg-gradient-to-br from-lidar-blue/40 via-lidar-dark to-black opacity-90"></div>
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-lidar-teal/10 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-lidar-blue/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-lidar-teal text-sm font-bold tracking-wider uppercase">
            Expertise & Innovation
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight tracking-tight">
            Portfolio <span className="bg-clip-text text-transparent bg-gradient-to-r from-lidar-teal to-lidar-blue">d'Excellence</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Exploration de projets d'envergure alliant précision géospatiale et technologies de pointe pour façonner le futur des infrastructures en Afrique.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              { icon: 'fa-check-circle', text: '500+ Missions Réussies' },
              { icon: 'fa-globe-africa', text: 'Couverture Sous-Régionale' },
              { icon: 'fa-award', text: 'Standard International' }
            ].map((stat, i) => (
              <div key={i} className="flex items-center bg-white/5 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 hover:border-lidar-teal/50 transition-colors duration-500">
                <i className={`fas ${stat.icon} mr-3 text-lidar-teal`}></i>
                <span className="font-medium text-white">{stat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-10 bg-white/80 backdrop-blur-xl sticky top-20 z-30 border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3.5 rounded-2xl font-bold transition-all duration-500 flex items-center gap-3 ${
                  selectedCategory === category
                    ? 'bg-lidar-dark text-white shadow-[0_10px_20px_-10px_rgba(0,0,0,0.3)] scale-105'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-lidar-blue'
                }`}
              >
                <i className={`fas ${getCategoryIcon(category)} ${selectedCategory === category ? 'text-lidar-teal' : ''}`}></i>
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-lidar-blue">{projects.length}</div>
              <div className="text-gray-600">Projets</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-lidar-blue">
                {new Set(projects.map(p => p.location.split(',')[0])).size}
              </div>
              <div className="text-gray-600">Régions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-lidar-blue">
                {new Set(projects.map(p => p.client)).size}
              </div>
              <div className="text-gray-600">Clients</div>
            </div>
          </div>

          {/* Projects Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-700 hover:-translate-y-3 cursor-pointer ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-lidar-dark/80 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className={`${getCategoryColor(project.category)} text-white text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full backdrop-blur-md shadow-lg`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full">
                    <span className="text-xs font-bold text-white tracking-widest">{project.year}</span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-lidar-blue/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-lidar-blue shadow-2xl transform scale-50 group-hover:scale-100 transition-transform duration-500">
                      <i className="fas fa-arrow-right text-xl"></i>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center text-lidar-teal text-[10px] font-bold uppercase tracking-widest mb-3">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    {project.location}
                  </div>
                  <h3 className="font-display font-bold text-xl text-lidar-dark mb-4 group-hover:text-lidar-blue transition-colors duration-300 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-8 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Footer Info */}
                  <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex -space-x-2">
                       {project.services.slice(0, 3).map((_, i) => (
                         <div key={i} className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] text-lidar-blue">
                           <i className="fas fa-cog"></i>
                         </div>
                       ))}
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      Detail Projet <i className="fas fa-chevron-right ml-1 text-[8px]"></i>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <i className="fas fa-folder-open text-6xl text-gray-300 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucun projet dans cette catégorie</h3>
              <p className="text-gray-500">Revenez plus tard pour voir nos nouvelles réalisations.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-lidar-dark to-lidar-blue text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vous avez un projet en tête?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Parlons de votre projet. Notre équipe d'experts est prête à vous accompagner.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/services"
              className="cyber-button bg-glass-light backdrop-blur-sm text-white border border-white/30 font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-500"
            >
              <span className="relative z-10 flex items-center justify-center">
                <i className="fas fa-cogs mr-2"></i> Nos Services
              </span>
            </Link>
            <Link
              href="/#contact"
              className="bg-white text-lidar-dark font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              <span className="flex items-center justify-center">
                <i className="fas fa-paper-plane mr-2"></i> Nous contacter
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-lidar-dark/95 z-50 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-[2.5rem] max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-[400px]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lidar-dark via-lidar-dark/20 to-transparent"></div>
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/20 z-10"
              >
                <i className="fas fa-times text-xl"></i>
              </button>

              <div className="absolute bottom-10 left-10 right-10">
                <span className={`${getCategoryColor(selectedProject.category)} text-white text-[10px] uppercase tracking-[0.2em] font-bold px-5 py-2 rounded-full mb-4 inline-block shadow-lg`}>
                  {selectedProject.category}
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">{selectedProject.title}</h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 md:p-12">
              {/* Project Info Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {[
                  { icon: 'fa-map-marker-alt', label: 'Localisation', value: selectedProject.location },
                  { icon: 'fa-calendar-alt', label: 'Année du Projet', value: selectedProject.year },
                  { icon: 'fa-building', label: 'Client', value: selectedProject.client || 'Client Confidentiel' },
                  { icon: 'fa-tasks', label: 'Expertises', value: `${selectedProject.services.length} Services` }
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-6 transition-hover hover:bg-lidar-blue/5 group">
                    <i className={`fas ${item.icon} text-lidar-blue text-2xl mb-4 transition-transform group-hover:scale-110`}></i>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">{item.label}</p>
                    <p className="font-bold text-lidar-dark">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  {/* Description */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-display font-bold text-lidar-dark mb-6 flex items-center">
                      <span className="w-8 h-1 bg-lidar-teal mr-4 rounded-full"></span>
                      Vision du Projet
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Services List with Icons */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-display font-bold text-lidar-dark mb-6">Expertises Déployées</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedProject.services.map((service, i) => (
                        <div key={i} className="flex items-center p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-lidar-teal transition-colors">
                          <div className="w-10 h-10 rounded-xl bg-lidar-teal/10 flex items-center justify-center text-lidar-teal mr-4">
                            <i className="fas fa-check"></i>
                          </div>
                          <span className="font-bold text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  {/* Gallery Sidebar */}
                  {selectedProject.images && selectedProject.images.length > 1 && (
                    <div className="mb-12">
                      <h3 className="text-xl font-display font-bold text-lidar-dark mb-6">Vues du Chantier</h3>
                      <div className="grid grid-cols-1 gap-4">
                        {selectedProject.images.slice(1).map((img, i) => (
                          <div key={i} className="relative h-48 rounded-3xl overflow-hidden group shadow-lg">
                            <Image
                              src={img}
                              alt={`${selectedProject.title} - Image ${i + 2}`}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Contact Sidebar Card */}
                  <div className="bg-gradient-to-br from-lidar-dark to-lidar-blue rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                    <h4 className="text-xl font-bold mb-4 relative z-10">Besoin d'une expertise similaire ?</h4>
                    <p className="text-white/70 text-sm mb-8 relative z-10 leading-relaxed">
                      Nos ingénieurs sont à votre disposition pour analyser vos besoins et proposer des solutions sur mesure.
                    </p>
                    <Link
                      href="/#contact"
                      className="inline-flex items-center justify-center w-full bg-white text-lidar-dark font-bold py-4 px-6 rounded-2xl hover:bg-lidar-teal hover:text-white transition-all duration-300 shadow-lg group"
                      onClick={() => setSelectedProject(null)}
                    >
                      <i className="fas fa-bolt mr-2 group-hover:animate-pulse"></i>
                      Lancer votre projet
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <BackToTop />
    </div>
  );
}
