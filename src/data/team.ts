export interface TeamMember {
    name: string;
    title: string;
    photo: string;
    linkedin: string;
    email: string;
    phone: string;
    summary: string;
    isModalTrigger?: boolean;
}

export const team: TeamMember[] = [
    {
        name: 'Adam J.P. Leslie',
        title: 'Chairman & CEO',
        photo: '/images/team/adam-leslie.jpg',
        linkedin: 'https://www.linkedin.com/in/adamjpleslie/',
        email: 'adam@levenhall.com',
        phone: '+1 (202) 568-2101',
        summary: 'Career spanning sovereign intelligence service, diplomatic engagement, military aviation, and U.S. government market architecture. Operates within the upper tier of independent national security strategists in Washington, DC.',
        isModalTrigger: true,
    },
    {
        name: 'Nishank Motwani, PhD',
        title: 'Vice President of Technology, Industry, and Strategy',
        photo: '/images/team/nishank-motwani.jpg',
        linkedin: 'https://www.linkedin.com/in/nishankmotwani/',
        email: 'nmotwani@levenhall.com',
        phone: '',
        summary: 'Strategic advisor operating at the intersection of global security, emerging technology, and geopolitical risk. Career spans the Quad nations with significant experience in Afghanistan and the Middle East.',
        isModalTrigger: true,
    },
    {
        name: 'Hassan Gad',
        title: 'Director of Business Transformation',
        photo: '/images/team/hassan-gad.jpg',
        linkedin: 'https://www.linkedin.com/in/hassangad/',
        email: 'hgad@levenhall.com',
        phone: '',
        summary: 'Business transformation strategist operating at the intersection of artificial intelligence, defense contracting, and emerging market entry. Leads Levenhall\'s AI adoption strategy, federal business development, and market intelligence initiatives.',
        isModalTrigger: true,
    },
];
