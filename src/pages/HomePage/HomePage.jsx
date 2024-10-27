import React, { useState, useEffect } from "react";
import "./Homepage.css";
import Background1 from "../../assets/images/img1home.jpg";
import Img1 from "../../assets/images/img1.png";
import { ref, push, onValue } from "firebase/database"; 
import { database } from "../../firebase"; 

const HomePage = () => {
  const [comments, setComments] = useState([]); 
  const [newComment, setNewComment] = useState(""); 

  useEffect(() => {
    const commentsRef = ref(database, "comments/");
    onValue(commentsRef, (snapshot) => {
      const data = snapshot.val();
      const fetchedComments = data ? Object.values(data) : [];
      setComments(fetchedComments); 
    });
  }, []);

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const commentsRef = ref(database, "comments/");
      push(commentsRef, {
        text: newComment,
        timestamp: new Date().toLocaleString(),
      });
      setNewComment("");
    }
  };

  return (
    <div className="homepage-container">
      <div
        className="view1"
        style={{
          backgroundImage: `url(${Background1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className="home-text">
          <h1>BSITE</h1>
          <p>Learn, play, repeat</p>
        </div>
      </div>

      <div className="view2">
        <div className="img-container1">
          <img src={Img1} alt="img" />
        </div>
        <div className="introduction">
          <div className="text-intro">
            <h1>Introduction to Basketball</h1>
            <p>
              Basketball is a fast-paced, dynamic sport that combines
              athleticism, strategy, and <br /> teamwork. Played on a
              rectangular court with two hoops at opposite ends, the <br /> game
              revolves around dribbling, passing, and shooting a basketball to
              score <br /> points. The objective is simple—score more points
              than the opposing team by <br /> successfully shooting the ball
              through the opponent's hoop.
            </p>
          </div>
          <a href="#learn-more">Learn more</a>
        </div>
      </div>

      <div className="view3" id="learn-more">
        <div className="text-title">
          <h1>Free tips and tricks</h1>
          <p>

          Your Ultimate Guide to Everything <br /> Basketball: Rules, Strategies, Equipment, <br /> and More

          </p>
        </div>
      </div>

      <div className="view4">
        <div className="faq">
          <h1>Frequently asked questions</h1>
          <div className="faq-items">
            <i class="material-icons">sports_basketball</i>
            <p>
              How many players are on the court for each team during a
              basketball game?
            </p>
          </div>

          <div className="faq-items">
            <i class="material-icons">sports_basketball</i>
            <p>What is considered a three-point shot in basketball?</p>
          </div>
          <div className="faq-items">
            <i class="material-icons">sports_basketball</i>
            <p>What is dribbling, and why is it important in basketball?</p>
          </div>
          <div className="faq-items">
            <i class="material-icons">sports_basketball</i>
            <p>
              What are the most important basic rules of basketball every player
              should know?
            </p>
          </div>
          <div className="faq-items">
            <i class="material-icons">sports_basketball</i>
            <p>How many players are on a basketball team?</p>
          </div>
        </div>


        <div className="comment-view">
      <div className="comment-card-container">
        <h2 className="comments-title">Comments</h2>
        <div className="comment-container">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="comment-card">
                <div className="comment-profile">
                  <div className="profile-image"></div>
                  <div>
                    <h3 className="comment-user">{comment.user}</h3>
                    <small className="comment-timestamp">{comment.timestamp}</small>
                  </div>
                </div>
                <p className="comment-text">{comment.text}</p>
              </div>
            ))
          ) : (
            <p className="no-comments">No comments yet</p>
          )}
        </div>

        <div className="comment-input">
          <input
            type="text"
            placeholder="Add a comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={handleAddComment} className="add-comment-button">
            Add Comment
          </button>
        </div>
      </div>
    </div>

      
      </div>
    </div>
  );
};

export default HomePage;
