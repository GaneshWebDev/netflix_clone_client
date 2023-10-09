import './HomeScreen.css'
import Row from '../Row'
import Banner from '../Banner'
import Navbar from '../Nav'
import requests from '../request'
function HomeScreen(){
    return(
        <div className="homeScreen">
            <Navbar/>
            <Banner/>
            <Row  title={'Netflix Originals'} request={requests.fetchNetflixOriginals} isLarge />
            <Row  title={'Top Rated'} request={requests.fetchTopRated} />
            <Row  title={'Action Movies'} request={requests.fetchActionMovies} />
            <Row  title={'Comedy Movies'} request={requests.fetchComedyMovies} />
            <Row  title={'Horror Movies'} request={requests.fetchHorrorMovies}  />
            <Row  title={'Romance Movies'} request={requests.fetchRomanceMovies}  />
            <Row  title={'Documentaries'} request={requests.fetchDocumentaries}  />
        </div>
    )
}
export default HomeScreen