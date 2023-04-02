import * as React from "react";
import "./Trending.css";
import axios from "axios";
import { Link } from "react-router-dom";

export interface ITrendingProps {
}

export function Trending(props: ITrendingProps) {
  const [trendingData, setTrendingData]: any[] = React.useState([]);
  const fetchQuotes = async () => {
    try {
      const res = await axios.get(
        `https://youtube-search-and-download.p.rapidapi.com/trending`,
        {
          headers: {
            'X-RapidAPI-Key': '273a90d302mshd13ca34f73eb990p119fa3jsn7c55a601997a',
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
      <p className="title" style={{ marginTop: "60px" }}>
        Trending
      </p>
      {trendingData.map((value: any, idx: any) => {
        return (
          idx < 3 ?
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
            : null
        )
      })}
      <Link to='trendingPage'>
        <div style={{display: "flex",justifyContent: "center", marginTop: "12px"}}>
          <button className="btn-primary" style={{justifyContent: "center"}}>Show more!</button>
        </div>
      </Link>
    </div>
  );
}
