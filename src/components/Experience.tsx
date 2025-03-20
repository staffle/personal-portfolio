
import React from 'react';

const experiences = [
  {
    company: 'Google',
    location: 'Warsaw, Poland',
    position: 'Software Engineer',
    period: 'Nov 2022 - Present',
    accomplishments: [
      {
        title: 'Compute Engine Integration Testing Framework',
        description: 'Enhanced integration testing framework processing 2M+ daily tests, improving API reliability within Cloud Control plane.'
      },
      {
        title: 'Presubmit Staging Testing',
        description: 'Implemented scalable API testing solution for pre-submission checks in staging environments, enabling early bug detection and reducing release delays by 5%. Led migration of 300+ staging integration tests to hermetic framework.'
      },
      {
        title: 'LLM-Powered Error Analysis',
        description: 'Developed test exception analysis scripts using scraping and classification to reduce debugging time for 500+ developers and improve test triaging efficiency.'
      },
      {
        title: 'Resource optimizations',
        description: 'Streamlined test environments by removing redundant components and segregating workload, reducing resource usage by 10% and improving deployment consistency. Led LLM-driven automation for Bazel refactoring and environment minimization.'
      }
    ]
  },
  {
    company: 'Motive',
    location: 'Remote, USA',
    position: 'Software Engineer',
    period: 'Mar 2022 - Oct 2022',
    accomplishments: [
      {
        title: 'Rebate Invoice Report',
        description: 'Developed automated billing and invoice generation system using cron jobs for 7300+ fuel vendor fleets, processing $1M+ monthly transactions, ensuring accuracy and efficiency at scale.'
      },
      {
        title: 'Low latency finance APIs',
        description: 'Designed and developed low-latency Ruby APIs for Apply Rebate and ledger management, ensuring high performance and reliability. Implemented unit and integration tests achieving 95% test coverage.'
      }
    ]
  },
  {
    company: 'MakeMyTrip',
    location: 'Bangalore, India',
    position: 'Software Engineer',
    period: 'Jun 2021 - Feb 2022',
    accomplishments: [
      {
        title: 'Training Platform for Sales Agents',
        description: 'Developed training platform emulating production for sales agents, reducing onboarding time by 50% and improving agent readiness for live operations.'
      },
      {
        title: 'Migration from Bare Metal to AWS',
        description: 'Led containerization of post-sales services using Docker for AWS migration project, improving deployment efficiency by 30% and reducing infrastructure costs through scalable cloud architecture.'
      }
    ]
  }
];

const ExperienceCard: React.FC<{
  company: string;
  location: string;
  position: string;
  period: string;
  accomplishments: { title: string; description: string }[];
  index: number;
}> = ({ company, location, position, period, accomplishments, index }) => {
  return (
    <div className="glass-card p-8 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: `${100 + index * 100}ms`, animationFillMode: 'forwards' }}>
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-1">{company}</h3>
          <p className="text-gray-600">{position}</p>
        </div>
        <div className="mt-2 md:mt-0 text-right">
          <span className="text-gray-600">{location}</span>
          <p className="text-gray-600">{period}</p>
        </div>
      </div>
      
      <div className="space-y-4 mt-4">
        {accomplishments.map((item, idx) => (
          <div key={idx} className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-primary">
            <h4 className="font-medium">{item.title}</h4>
            <p className="text-gray-600 mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Experience</h2>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
