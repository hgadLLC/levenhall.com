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
        summary: 'Brings deep expertise in defense technology assessment, industrial strategy, and cross-border technology transfer. Bridges the gap between allied innovation and US procurement requirements.',
    },
    {
        name: 'Hassan Gad',
        title: 'Director of Business Transformation',
        photo: '/images/team/hassan-gad.jpg',
        linkedin: 'https://www.linkedin.com/in/hassangad/',
        email: 'hgad@levenhall.com',
        phone: '',
        summary: 'Specializes in organizational restructuring and operational design for firms navigating US market entry. Ensures client operations are structured for sustained performance within the federal contracting environment.',
    },
    {
        name: 'Jackie Gibson',
        title: 'Director of Partnerships and Procurement Facilitation',
        photo: '/images/team/jackie-gibson.jpg',
        linkedin: 'https://www.linkedin.com/in/jacqueline-gibson-304a49229/',
        email: 'jgibson@levenhall.com',
        phone: '',
        summary: 'Manages consortium relationships and partnership structures central to Levenhall\'s procurement facilitation model. Deep understanding of OTA consortia, teaming arrangements, and their application to allied market entry.',
    },
];
