import React from 'react'
import image1 from "../images/thunder.png";
import image2 from "../images/cloudy.png";
import image3 from "../images/sunny.jpg";

const News = () => {
  return (
    <div className="news-container">
      <h1>News</h1>
      <div className="news-cards">
        <div className="news-card">
          <div className="content-overlay"></div>
          <img src={image1} alt="image" className="image" />
          <p>Thunder Strikes Delhi</p>
          <div class="content-details fadeIn-bottom">
            <div class="text">Read more</div>
          </div>
        </div>
        <div className="news-card">
          <div className="content-overlay"></div>
          <img src={image2} alt="image" className="image" />
          <p>Cloudstorms in manipur</p>
          <div class="content-details fadeIn-bottom">
            <div class="text">Read more</div>
          </div>
        </div>
        <div className="news-card">
          <div className="content-overlay"></div>
          <img src={image3} alt="image" className="image" />
          <p>It's summer season in Mumbai</p>
          <div class="content-details fadeIn-bottom">
            <div class="text">Read more</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News