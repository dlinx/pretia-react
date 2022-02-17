const SERVER = `http://localhost:8080/api/v1`;
export const getSlideData = () => fetch(`${SERVER}/data?count=10`).then(data => data.json());
