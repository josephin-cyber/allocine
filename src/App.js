import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
    return (
        <div className="app">
            <Nav/>
            <Banner />
            <Row title= "Tendance" fetchUrl={requests.fetchTendance} isLargeRow/>
            <Row title= "Populaire" fetchUrl={requests.fetchPopulaire} isLargeRow/>
            <Row title= "Lecture en cours" fetchUrl={requests.fetchLectureEnCours} isLargeRow/>
            <Row title= "En salle de cinema" fetchUrl={requests.fetchEnSalleDeCinema} isLargeRow/>
            <Row title= "Les mieux notés" fetchUrl={requests.fetchLesMieuxNotes} isLargeRow/>
        </div>
    )
}

export default App;

