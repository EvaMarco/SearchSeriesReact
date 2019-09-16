const endpoint = 'https://api.tvmaze.com/search/shows?q=';

const getSeries = (userInput) => {
  return fetch(endpoint + userInput)
    .then(res => res.json());
}
export {getSeries};