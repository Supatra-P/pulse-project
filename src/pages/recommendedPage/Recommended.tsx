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

  return (
    <div id="recommended">
      <button style={{ marginTop: "100px" }} onClick={fetchQuotes}>
        Click ME!
      </button>
      <p className="title" style={{ marginTop: "30px" }}>
        Recommended Contents
      </p>
      <div className="recommend-container">
        <div className="recommend-item">
          <div className="recommend-pic-box"></div>
          <div className="recommend-description-box">
            <div>
              <p style={{ fontWeight: "bold" }}>Title Name</p>
              <p>Channel Name</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <FaEye id="eye-icon" />
              <p>5M</p>
            </div>
          </div>
        </div>
        {recommendedData.map((value: any, idx: any) => {
          return (
            <div className="recommend-item" key={idx}>
              {/* <img src={value.video.thumbnails[0].url} alt="pic-trending" /> */}
              <div className="recommend-pic-box"></div>
              <div className="recommend-description-box">
                <div>
                  <p style={{ fontWeight: "bold" }}># {idx+1} {value.video.title}</p>
                  <p>{value.video.channelName}</p>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <FaEye id="eye-icon" />
                  <p>{value.video.viewCountText}</p>
                </div>
              </div>
            </div>
          );
        }).reverse()}
      </div>
    </div>
  );
}
