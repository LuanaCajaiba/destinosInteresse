const BASE_URL = 'https://amazon-api.sellead.com';

export const fetchCountry = () => {
    const url = `${BASE_URL}/country`
    return fetch(url).then(response => response.json())
};

export const fetchCity = () => {
    const url = `${BASE_URL}/city`
    return fetch(url).then(response => response.json())
};