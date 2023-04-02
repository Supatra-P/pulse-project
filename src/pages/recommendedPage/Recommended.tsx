import * as React from "react";
import { FaEye } from "react-icons/fa";
import "./Recommended.css";
import axios from "axios";

export interface IRecommendedProps {}

export function Recommended(props: IRecommendedProps) {
  const [recommendedData, setRecommendedData]: any[] = React.useState([]);
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
      setRecommendedData(res.data.contents);
      console.log(recommendedData);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchQuotes();
  }, []);


  return (
    <div id="recommended">
      <p className="title" style={{ marginTop: "30px" }}>
        Recommended
      </p>
      <div className="recommend-container">
        {recommendedData.map((value: any, idx: any) => {
          return (
              (idx < 6) ? 
              <a href={`https://www.youtube.com/watch?v=${value.video.videoId}`} target='_blank' rel='noreferrer'>
                <div className="recommend-item" key={idx}>
                  <div className="recommend-pic-box">
                    <img src={value.video.thumbnails[0].url} alt="pic-trending" />
                  </div>
                  <div className="recommend-description-box">
                    <div style={{maxWidth: "250px"}}>
                      <p style={{ fontWeight: "bold" }}># {idx+1} {value.video.title}</p>
                      <p>{value.video.channelName}</p>
                    </div>
                    <div className="view-box">
                      <FaEye id="eye-icon" />
                      <p>{value.video.viewCountText}</p>
                    </div>
                  </div>
                </div></a>
            : null);
          }).reverse()}
      </div>
    </div>
  );
}
