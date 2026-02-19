export interface Service {
    id: string;
    label: string;
    title: string;
    summary: string;
    description: string[];
    externalLink?: string;
    deliverables: string[];
    highlight: {
        value: string;
        label: string;
    };
}

export const services: Service[] = [
    {
        id: 'advisory',
        label: 'Strategy',
        title: 'Market Entry Advisory',
        summary: 'We map the procurement landscape for your specific technology: who buys it, how they buy it, and what stands between you and a contract.',
        description: [
            'Entering the US defense market is not a matter of registering an entity and responding to solicitations. The procurement landscape is deliberately layered, shaped by regulation, classification requirements, industrial base policy, and political dynamics that shift with each administration.',
            'Levenhall conducts a structured assessment of your technology, your competitive position, and the specific agencies and programs most likely to acquire what you build. We identify the procurement vehicles available to you, the regulatory barriers you will face (ITAR, EAR, FAR, DFARS) and the realistic timeline from market entry to first contract.',
            'The result is not a report. It is an operational plan with named targets, identified pathways, and a clear sequence of actions.',
        ],
        deliverables: [
            'Procurement landscape assessment',
            'Agency & program target identification',
            'Regulatory pathway analysis (ITAR/EAR/FAR/DFARS)',
            'Competitive positioning report',
            'Operational market entry plan',
        ],
        highlight: {
            value: '3-6',
            label: 'Month engagement timeline',
        },
    },
    {
        id: 'rapid-procurement',
        label: 'Rapid Contracting',
        title: 'Rapid Procurement Pathways',
        summary: 'Navigate CSO, OTA, and follow-on production mechanisms that move from solicitation to award in 60 to 120 days.',
        description: [
            'The US Department of Defense has built an alternative procurement ecosystem designed for speed. Commercial Solutions Openings (CSOs), Other Transaction Authority (OTAs), and follow-on production agreements bypass traditional FAR-based processes, reducing timelines from years to months and lowering the compliance burden that deters international entrants.',
            'CSOs allow DoD to publish a problem statement and evaluate proposed solutions on merit, with awards in as few as 60 days. OTAs, which are exempt from the FAR entirely, enable negotiable terms, protected intellectual property, and direct prototype-to-production pipelines without re-competition. For allied firms, these mechanisms remove the barriers that traditionally required years of US infrastructure to overcome.',
            'Levenhall architects the pathway: identifying which consortia to join, which agencies are active in CSO and OTA solicitations, structuring teaming arrangements with US-based partners, and positioning your technology for prototype awards that lead directly to production contracts. Your status as a non-traditional defense contractor is not a limitation. Under OTA rules, it is a qualifying advantage.',
        ],
        deliverables: [
            'CSO & OTA solicitation identification',
            'Consortium membership & positioning',
            'Teaming arrangement structuring',
            'Prototype-to-production pipeline design',
            'Non-traditional contractor qualification',
        ],
        highlight: {
            value: '60-120',
            label: 'Days to contract award',
        },
    },
    {
        id: 'executive-placement',
        label: 'Leadership',
        title: 'Executive Placement',
        summary: 'Access our vetted network of US defense executives ready to lead your American operations.',
        description: [
            'International firms entering the US defense market face a structural problem: the people who understand your technology are not the people who understand US procurement. And the people who understand procurement need clearances, agency relationships, and operational credibility that cannot be acquired quickly.',
            'Levenhall maintains a curated network of former senior government officials, military officers, and defense industry executives who have led programs, held clearances, and built businesses within the US defense ecosystem. These are not advisors. They are operators, ready to serve as your US-based leadership.',
            'We match executives to your specific requirements: technology domain, target agencies, clearance level, and organizational culture. Every placement is structured to align incentives and protect both parties.',
        ],
        deliverables: [
            'Executive candidate matching & vetting',
            'Clearance & agency relationship verification',
            'Placement structuring & incentive alignment',
            'US operational leadership onboarding',
            'Ongoing performance review framework',
        ],
        highlight: {
            value: '200+',
            label: 'Vetted defense executives',
        },
    },
    {
        id: 'tax-services',
        label: 'Tax Advisory',
        title: 'International Tax Services',
        summary: 'Strategic tax planning through our partnership with CST Tax, specialists in cross-border defense transactions.',
        description: [
            'Cross-border defense transactions create tax obligations that are simultaneously complex and consequential. Entity structure, transfer pricing, treaty benefits, and withholding requirements all interact, and errors in any one area can create liabilities that dwarf the underlying contract value.',
            'Through our partnership with CST Tax, Levenhall provides clients with specialized tax advisory for US market entry. This includes entity formation and structuring, transfer pricing documentation, treaty benefit analysis, and ongoing compliance for firms operating across multiple jurisdictions.',
        ],
        externalLink: 'https://csttax.com/',
        deliverables: [
            'US entity formation & structuring',
            'Transfer pricing documentation',
            'Treaty benefit analysis',
            'Multi-jurisdiction compliance planning',
            'Ongoing tax advisory via CST Tax',
        ],
        highlight: {
            value: '50+',
            label: 'Cross-border engagements',
        },
    },
];
