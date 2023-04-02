import * as React from "react";
import "./Trending.css";
import axios from "axios";

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

  return (
    <div id="trending">
      <button style={{ marginTop: "100px" }} onClick={fetchQuotes}>
        Click ME!
      </button>
      <p className="title" style={{ marginTop: "60px" }}>
        Trending
      </p>
      {trendingData.map((value: any, idx: any) => {
        return (
          idx < 3 ?
            <div className="trend-item" key={idx}>
              <img src={value.video.thumbnails[0].url} alt="pic-trending" />
              <div className="description-box">
                <p className="title"># {idx + 1} {value.video.title}</p>
                <p>{value.video.channelName}</p>
                <p>
                  Description . . Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
                <p>{value.video.viewCountText}</p>
              </div>
            </div>
            : null
        )
      })}

    </div>
  );
}
