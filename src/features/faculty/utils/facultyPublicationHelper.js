/**
* Publication Data Cleaning and Processing Helpers
* Formats journal articles, conference papers, DOIs, and indexing badges safely.
*/

// Strip HTML tags and entities cleanly without dangerouslySetInnerHTML
export const stripHtml = (htmlString) => {
    if (!htmlString || typeof htmlString !== 'string') return '';
    return htmlString
        .replace(/<[^>]*>/g, ' ')
        .replace(/&nbsp;/gi, ' ')
        .replace(/&amp;/gi, '&')
        .replace(/&lt;/gi, '<')
        .replace(/&gt;/gi, '>')
        .replace(/&quot;/gi, '"')
        .replace(/&#39;/gi, "'")
        .replace(/\s+/g, ' ')
        .trim();
};

/**
 * Normalise title text
 */
export const cleanPublicationTitle = (rawTitle) => {
    const text = stripHtml(rawTitle);
    // Remove wrapping quotes if present
    return text.replace(/^["']|["']$/g, '').trim();
};

/**
 * Extract clean DOI string from text or URL
 * DOI pattern: 10.xxxx/...
 */
export const extractDoi = (input) => {
    if (!input || typeof input !== 'string') return null;

    const match = input.match(/\b(10\.\d{4,9}\/[-._;()/:A-Za-z0-9]+)\b/);
    if (match) {
        return match[1].replace(/[.,;)]+$/, ''); // Strip trailing punctuation
    }

    return null;
};

/**
 * Generate safe, canonical DOI URL
 */
export const getSafeDoiUrl = (doiOrUrl) => {
    if (!doiOrUrl) return null;
    const doi = extractDoi(doiOrUrl);
    if (doi) {
        return `https://doi.org/${encodeURI(doi)}`;
    }

    // If already a safe HTTPS link
    if (typeof doiOrUrl === 'string' && doiOrUrl.startsWith('https://')) {
        return doiOrUrl;
    }

    return null;
};

/**
 * Standardise indexing tags for journals and conferences
 * Detects Scopus, SCI, SCIE, Web of Science, UGC, IEEE, etc.
 */
export const standardiseIndexing = (indexingData) => {
    if (!indexingData) return [];

    const tokens = [];

    if (Array.isArray(indexingData)) {
        indexingData.forEach((item) => {
            if (typeof item === 'string') tokens.push(item);
            else if (item && item.name) tokens.push(item.name);
        });
    } else if (typeof indexingData === 'string') {
        tokens.push(...indexingData.split(/[,;/]+/));
    } else if (typeof indexingData === 'object') {
        if (indexingData.scopus || indexingData.isScopus) tokens.push('Scopus');
        if (indexingData.sci || indexingData.isSci) tokens.push('SCI');
        if (indexingData.scie || indexingData.isScie) tokens.push('SCIE');
        if (indexingData.wos || indexingData.webOfScience) tokens.push('Web of Science');
        if (indexingData.ugc || indexingData.ugcCare) tokens.push('UGC-CARE');
    }

    const badges = new Set();

    tokens.forEach((t) => {
        const norm = String(t).toUpperCase().trim();
        if (norm.includes('SCOPUS')) badges.add('Scopus');
        if (norm.includes('SCIE')) badges.add('SCIE');
        else if (norm.includes('SCI')) badges.add('SCI');
        if (norm.includes('WEB OF SCIENCE') || norm.includes('WOS')) badges.add('Web of Science');
        if (norm.includes('UGC')) badges.add('UGC-CARE');
        if (norm.includes('IEEE')) badges.add('IEEE Xplore');
        if (norm.includes('PUBMED')) badges.add('PubMed');
        if (norm.includes('ESCI')) badges.add('ESCI');
    });

    return [...badges];
};

/**
 * Normalise a Journal record from Linways/API
 */
export const normaliseJournalRecord = (raw) => {
    if (!raw) return null;

    const title = cleanPublicationTitle(raw.title || raw.paperTitle || raw.articleTitle || '');
    const journal = stripHtml(raw.journal || raw.journalName || raw.name || '');
    const year = raw.year || raw.publicationYear || raw.publishedYear || raw.date || '';
    const doi = getSafeDoiUrl(raw.doi || raw.doiLink || raw.url || raw.link || title);
    const indexing = standardiseIndexing(raw.indexing || raw.indexedIn || raw);

    return {
        title: title || 'Untitled Publication',
        journal: journal || 'N/A',
        year: year || 'N/A',
        volume: raw.volume || raw.vol || '',
        issue: raw.issue || '',
        pages: raw.pages || raw.pageNumber || '',
        issn: raw.issn || raw.eissn || '',
        publisher: raw.publisher || '',
        doiUrl: doi,
        indexing: indexing,
        isScopus: indexing.includes('Scopus') || !!raw.scopus,
        isSci: indexing.includes('SCI') || indexing.includes('SCIE') || !!raw.sci,
        isWos: indexing.includes('Web of Science') || !!raw.wos
    };
};

/**
 * Normalise a Conference record from Linways/API
 */
export const normaliseConferenceRecord = (raw) => {
    if (!raw) return null;

    const title = cleanPublicationTitle(raw.title || raw.paperTitle || '');
    const conference = stripHtml(raw.conference || raw.conferenceName || raw.proceedings || '');
    const year = raw.year || raw.date || '';
    const type = raw.type || (conference.toLowerCase().includes('international') ? 'International' : 'National');
    const doi = getSafeDoiUrl(raw.doi || raw.doiLink || raw.url || raw.link);
    const indexing = standardiseIndexing(raw.indexing || raw.indexedIn || raw);

    return {
        title: title || 'Untitled Conference Paper',
        conference: conference || 'N/A',
        year: year || 'N/A',
        type: type,
        venue: raw.venue || raw.place || raw.location || '',
        publisher: raw.publisher || '',
        doiUrl: doi,
        indexing: indexing
    };
};
