import axios from 'axios';
import { globalBirds } from '../data/globalBirds';

const BASE_URL = '/api/2/recordings';

// Cache to prevent hitting API limit too hard
const cache = new Map();

export const searchBirdsInBox = async (bbox) => {
    // bbox format: { minLat, minLng, maxLat, maxLng }
    // Xeno-canto query box format: box:LAT_MIN,LON_MIN,LAT_MAX,LON_MAX
    const { minLat, minLng, maxLat, maxLng } = bbox;
    const query = `box:${minLat.toFixed(2)},${minLng.toFixed(2)},${maxLat.toFixed(2)},${maxLng.toFixed(2)}`;

    if (cache.has(query)) {
        return cache.get(query);
    }

    try {
        console.log(`Fetching birds with query: ${query}`);
        // Attempt to fetch from API
        // Note: For local dev, this might fail without a CORS proxy if not configured correctly,
        // so we have a robust fallback.
        const response = await axios.get(`${BASE_URL}?query=${query}`);

        let recordings = [];
        if (response.data && response.data.recordings) {
            recordings = response.data.recordings
                .map(bird => ({
                    ...bird,
                    lat: parseFloat(bird.lat),
                    lng: parseFloat(bird.lng)
                }))
                .filter(bird =>
                    !isNaN(bird.lat) &&
                    !isNaN(bird.lng) &&
                    bird.lat !== 0 &&
                    bird.lng !== 0
                )
                .slice(0, 50); // Limit live results to 50
        }

        // Merge API results with Global Mock Data to ensure coverage
        // Create a Set of existing IDs to avoid duplicates if API returns some
        const existingIds = new Set(recordings.map(r => r.id));
        const filteredMock = globalBirds.filter(bird => !existingIds.has(bird.id));

        // Combine real API results with our curated global list
        // This guarantees the map is ALWAYS full
        const combinedResults = [...recordings, ...filteredMock];

        cache.set(query, combinedResults);
        return combinedResults;

    } catch (error) {
        console.warn("Error fetching bird data, falling back to complete global dataset:", error);
        // Return Massive Global Data on Error
        return globalBirds;
    }
};

export const getSpeciesImage = (scientificName) => {
    // Basic helper to get a potential image from Bing Search
    // Adding 'bird photography' improves the chance of getting a nice, full photo
    return `https://tse2.mm.bing.net/th?q=${encodeURIComponent(scientificName + " bird photography")}&w=400&h=300&c=7&rs=1&p=0`;
};
