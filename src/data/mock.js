// Mock data for PayGenix AI Landing Page
import { PiramalLogo, BarclaysLogo, IITBLogo, IITDLogo, IIMBLogo } from '../components/Logos';

export const trustLogos = [
  { name: 'Piramal', Component: PiramalLogo },
  { name: 'Barclays', Component: BarclaysLogo },
  { name: 'IITB', Component: IITBLogo },
  { name: 'IITD', Component: IITDLogo },
  { name: 'IIMB', Component: IIMBLogo },
];

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'LOS Suite', href: '#los-suite' },
  { label: 'Team', href: '#team' }
];



export const aiSuperpowers = [
  {
    id: 1,
    icon: 'Zap',
    title: 'Instant Credit Decisions',
    description: 'Deliver audit-ready decisions in under 4 minutes. BULGE-bracket quality at startup speed.'
  },
  {
    id: 2,
    icon: 'Bot',
    title: 'Automated Analyst Workflows',
    description: 'Handle bank statement analysis, bureau reports, and policy compliance on autopilot.'
  },
  {
    id: 3,
    icon: 'TrendingUp',
    title: 'Force Multiplier',
    description: 'Scale execution capacity without increasing headcount. Address the 32% CAGR MSME growth with precision.'
  }
];

export const losFeatures = [
  {
    id: 'copilot',
    title: 'CU.ai Co-Pilot',
    description: 'Seamlessly integrate AI-powered tools into your existing LOS. Review and edit transaction flags to refine risk calculations.',
    image: 'copilot'
  },
  {
    id: 'autopilot',
    title: 'CU.ai Auto-Pilot',
    description: 'Fully autonomous underwriting. Instant analysis of credit and risk profiles with a full audit trail.',
    image: 'autopilot'
  },
  {
    id: 'cam',
    title: 'Automated CAM Generation',
    description: 'Generate consistent, professional Credit Appraisal Memos with 50% higher operational efficiency.',
    image: 'cam'
  }
];

export const comparisonData = [
  {
    feature: 'Methodology',
    traditional: 'Black-Box / Subjective',
    PayGenix: 'Agentic Reasoning (Consensus)'
  },
  {
    feature: 'Explainability',
    traditional: 'Opaque / "Computer says No"',
    PayGenix: 'Audit-Ready Chain-of-Thought (CoT)'
  },
  {
    feature: 'TAT',
    traditional: '4-5 Days',
    PayGenix: '< 4 Minutes'
  },
  {
    feature: 'Risk Detection',
    traditional: 'Generic Risk Rules',
    PayGenix: 'Sub-Industry Intelligence'
  }
];

export const teamMembers = [
  {
    id: 1,
    name: 'Kritin Agarwal',
    role: 'CEO',
    bio: 'Senior Data Scientist at Piramal Finance, IITB.',
    institutions: ['Piramal', 'IITB'],
    image: '/kritin.jpeg',
    linkedin: 'https://www.linkedin.com/in/kritin-agarwal-342306156/'
  }
  // {
  //   id: 2,
  //   name: 'Yuvraj Yadav',
  //   role: 'CTO',
  //   bio: 'Senior Data Scientist at Piramal Finance, IITD.',
  //   institutions: ['Piramal', 'IITD'],
  //   image: '/yuvraj.jpeg',
  //   linkedin: 'https://www.linkedin.com/in/yuvraj-yadav-256b891b4/'
  // }
];
