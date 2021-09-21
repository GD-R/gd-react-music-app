import "./styles.css";
import React, { useState } from "react";

const musicObj = {
  edm: [
    { name: "Lean On", link: "https://youtu.be/YqeW9_5kURI" },
    { name: "Clarity", link: "https://youtu.be/IxxstCcJlsc" },
    { name: "Summer", link: "https://youtu.be/ebXbLfLACGM" }
  ],
  pop: [
    { name: "Cheap Thrills", link: "https://youtu.be/nYh-n7EOtMA" },
    { name: "STAY", link: "https://youtu.be/kTJczUoc26U" },
    { name: "Closer", link: "https://youtu.be/PT2_F-1esPk" }
  ],
  tropical: [
    { name: "Stole the Show", link: "https://youtu.be/BgfcToAjfdc" },
    { name: "Lose Somebody", link: "https://youtu.be/uruccxh9bkQ" },
    { name: "Firestone", link: "https://youtu.be/9Sc-ir2UwGU" }
  ]
};

export default function App() {
  let musicType = Object.keys(musicObj);

  const [type, setType] = useState("edm");

  function clickHandler(genre) {
    setType(genre);
    // console.log(musicObj[type][0,1]);
  }

  return (
    <div className="App">
      <h1>Check Out My Favourite Songs</h1>
      <div>
        {musicType.map((genre, index) => {
          return (
            <button key={index} onClick={() => clickHandler(genre)}>
              {genre}
            </button>
          );
        })}
        <div>
          <ul>
            {musicObj[type].map((music, index) => {
              return (
                <li key={index}>
                  <div>{music.name}</div>
                  <div>
                    <a href={music.link} target="_blank">
                      <ion-icon name="logo-youtube" size="large"></ion-icon>
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
