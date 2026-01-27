import React from 'react';
import { teamMembers } from '../data/mock';
import { Linkedin } from 'lucide-react';

const Team = () => {
  // Generate initials for avatar fallback
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const getGradient = (index) => {
    const gradients = [
      'from-teal-400 to-teal-600',
      'from-cyan-400 to-cyan-600',
      'from-emerald-400 to-emerald-600'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="team" className="py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
            Our Team
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 lg:mb-6">
            Built by BFSI Experts
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
            Deep expertise in Credit Risk, Data Science, and Investment Banking.
          </p>
        </div>

        {/* Single team member centered */}
        <div className="flex justify-center">
          <div className="max-w-md w-full">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="group bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 text-center"
              >
                {/* Avatar Container */}
                <div className="relative w-28 h-28 mx-auto mb-6">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div
                      className={`w-full h-full rounded-full bg-gradient-to-br ${getGradient(index)} flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-105 transition-transform duration-300`}
                    >
                      {getInitials(member.name)}
                    </div>
                  )}

                  {/* LinkedIn Badge */}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute -bottom-1 -right-1 w-8 h-8 bg-slate-900 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                  )}
                </div>

                {/* Member Info */}
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-teal-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>

                {/* Institution Badges */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {member.institutions.map((institution, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                    >
                      {institution}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
