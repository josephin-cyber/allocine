const API_KEY = "d9704205c7e50bbdcf606981a02dd5cf";

const requests = {
    fetchTendance: `/discover/tv/?api_key=${API_KEY}&language=fr-fr`,
    fetchPopulaire: `/trending/all/day?api_key=${API_KEY}&language=fr-fr`,
    fetchLectureEnCours: `/movie/now_playing?api_key=${API_KEY}&language=fr-fr`,
    fetchEnSalleDeCinema: `/discover/movie?api_key=${API_KEY}&language=fr-fr`,
    fetchLesMieuxNotes: `/movie/top_rated?api_key=${API_KEY}&language=fr-fr&page=1`,
    fetchArrivebientôt: `/movie/upcoming?api_key=${API_KEY}&language=fr-fr&with_networks=28`,
}

export default requests;

