import React, { useState, useEffect } from "react";
import "./Homepage.css";
import Background1 from "../../assets/images/img1home.jpg";
import Img1 from "../../assets/images/img1.png";
import { ref, push, onValue } from "firebase/database"; // Import Firebase functions
import { database } from "../../firebase"; // Import the initialized database

const HomePage = () => {
  const [comments, setComments] = useState([]); // State to hold fetched comments
  const [newComment, setNewComment] = useState(""); // State to hold the new comment input

  // Fetch comments from Firebase Realtime Database
  useEffect(() => {
    const commentsRef = ref(database, "comments/");
    onValue(commentsRef, (snapshot) => {
      const data = snapshot.val();
      const fetchedComments = data ? Object.values(data) : [];
      setComments(fetchedComments); // Update state with fetched comments
    });
  }, []);

  // Handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const commentsRef = ref(database, "comments/");
      push(commentsRef, {
        text: newComment,
        timestamp: new Date().toLocaleString(),
      });
      setNewComment(""); // Clear input after adding the comment
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
          <p>Your Ultimate Guide to Everything Basketball...</p>
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
                   <h1>Comments</h1>
          <div className="comment-container">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={index} className="comment">
                  <p>{comment.text}</p>
                  <small>{comment.timestamp}</small>
                </div>
              ))
            ) : (
              <p>No comments yet</p>
            )}
          </div>

          <div className="comment-input">
            <input
              type="text"
              placeholder="Add a comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button onClick={handleAddComment}>Add Comment</button>
          </div>
          </div>
   
        </div>
      </div>
    </div>
  );
};

export default HomePage;
