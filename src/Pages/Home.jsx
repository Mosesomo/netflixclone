import Content from "../Components/Content"
import Row from "../Components/Row"
import request from '../Request'


const Home = () => {
  return (
    <div>
      <Content />
      <Row rowId = '1' title='UpComing' fetchUrl={request.requestUpcoming}/>
      <Row rowId = '2' title='Horror Movies' fetchUrl={request.requestHorror}/>
      <Row rowId = '3' title='Top Rated' fetchUrl={request.requestTopRated}/>
      <Row rowId = '4' title='Trending' fetchUrl={request.requestTrending}/>
      <Row rowId = '5' title='Popular' fetchUrl={request.requestPopular}/>
    </div>
  )
}

export default Home
