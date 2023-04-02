import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';

const TrendingPage = () => {
    const [trendingData, setTrendingData]: any[] = React.useState([]);
    const fetchQuotes = async () => {
      try {
        const res = await axios.get(
          `https://youtube-search-and-download.p.rapidapi.com/trending`,
          {
            headers: {
              "X-RapidAPI-Key":
                "41b95cb566msh132a5b49a117a8dp1b0d9ajsn57afe773212c",
              "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
            },
            params: { id: "UCE_M8A5yxnLfW0KghEeajjw" },
          }
        );
        setTrendingData(res.data.contents);
        console.log(trendingData);
      } catch (err) {
        console.log(err);
      }
    };
    React.useEffect(() => {
        fetchQuotes();
      }, []);
    
  return (
    <div id="trending">
      <Link to='/'>
        <button className="btn-primary">Go back</button>
      </Link>
      <p className="title" style={{ marginTop: "60px" , textAlign: "center", fontSize: "38px"}}>
        Trending
      </p>
      {trendingData.map((value: any, idx: any) => {
        return (
          <a href={`https://www.youtube.com/watch?v=${value.video.videoId}`} target='_blank' rel='noreferrer'>
          <div className="trend-item" key={idx}>
            <img src={value.video.thumbnails[0].url} alt="pic-trending" />
            <div className="description-box">
              <p className="title"># {idx + 1} {value.video.title}</p>
              <p>{value.video.channelName}</p>
              <p>{value.video.viewCountText}</p>
            </div>
          </div>
        </a>
        )
      })}
    </div>
  )
}

export default TrendingPage
