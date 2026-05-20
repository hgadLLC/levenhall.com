export interface Nation {
    flag: string;
    name: string;
    tagline: string;
    description: string;
}

export const nations: Nation[] = [
    {
        flag: '🇺🇸',
        name: 'United States',
        tagline: '$1.5T+ Defense Budget',
        description: 'The destination market. Levenhall\'s intelligence and federal market entry practices are anchored here — the world\'s largest and most complex defense procurement environment.',
    },
    {
        flag: '🇬🇧',
        name: 'United Kingdom',
        tagline: 'Technology & Innovation',
        description: 'Britain\'s defense technology sector, from electronic warfare to autonomous systems, has direct application across US programs. AUKUS has only accelerated demand.',
    },
    {
        flag: '🇦🇺',
        name: 'Australia',
        tagline: 'Indo-Pacific',
        description: 'AUKUS has created unprecedented demand for allied technology integration across submarine, cyber, and quantum domains. Australian firms are uniquely positioned.',
    },
    {
        flag: '🇳🇿',
        name: 'New Zealand',
        tagline: 'Regional Stability',
        description: 'New Zealand\'s niche capabilities in signals intelligence, maritime domain awareness, and environmental monitoring serve growing US requirements in the Pacific.',
    },
    {
        flag: '🇨🇦',
        name: 'Canada',
        tagline: 'Arctic & Defense',
        description: 'NORAD modernization and Arctic domain awareness have elevated Canadian defense technology to a strategic priority for the Pentagon.',
    },
    {
        flag: '🌍',
        name: 'Trusted Partners',
        tagline: 'Trusted Democracies',
        description: 'Select firms from NATO allies and trusted democracies with capabilities aligned to US defense, national security, and dual-use priorities.',
    },
];
