"use client"

import React from 'react'
import { Component as RotatingButton } from "@/components/ui/button-rotate"
  const handleGetStarted = () => {
    window.open("https://forms.gle/gLG6HF2XfUkoB83MA", "_blank")
  }
const Ticket = () => {
  return (
    <>
      <style jsx>{`
        *{
  box-sizing:border-box
}
body{
  background-color:#212121;
  display:flex;
  justify-content: center;
  align-items: center;
  height:100vh

}

.hint {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #666666;
  font-weight: 400;
  font-family: monospace;
  letter-spacing: 10px;
  text-wrap: nowrap;
  font-size: 15px;
}
#Ticket {
  position: relative;
  display: inline-block;
}
#container {
  display: inline-block;
  line-height: 1.3;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  animation: ticket-glow 1s ease-in-out infinite alternate;
}
.after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
  width: 20%;
  height: 100%;
  z-index: 10;
  &:hover ~ #container {
    transform: perspective(10cm) rotateX(15deg) rotateY(15deg);
  }
}
.before {
  position: absolute;
  content: "";
  top: 0;
  width: 20%;
  height: 100%;
  z-index: 10;
  &:hover ~ #container {
    transform: perspective(10cm) rotateX(-15deg) rotateY(-15deg);
  }
}
.card-container {
  position: relative;
  width: 600px;
  height: 250px;
  transform-style: preserve-3d;
  transition: transform 0.999s;
}
#ch1 {
  display: none;
}
#ch1:checked ~ .card-container {
  transform: perspective(10cm) rotateY(180deg);
}

.card {
  backface-visibility: hidden;
  position: absolute;

  width: 600px;
  height: 250px;
  display: flex;
  font-family: system-ui;
  transform: rotateY(0deg);
}
.main_part {
  padding: 20px;
  height: 250px;
  width: 450px;

  mask: radial-gradient(20px, #0000 98%, #000) -225px -125px;

  background: linear-gradient(90deg, #212121 0%, #333333 50%, #e8e8e8 100%);
}
.main_part_body {
  color: #e8e8e8;
  width: 100%;
  height: 100%;

  border-radius: 5px;
  background:
    radial-gradient(
        farthest-side at -33.33% 50%,
        #0000 52%,
        rgba(89, 65, 242, 0.35) 54% 57%,
        #0000 59%
      )
      0 calc(100px / 2),
    radial-gradient(
        farthest-side at 50% 133.33%,
        #0000 52%,
        rgba(89, 65, 242, 0.35) 54% 57%,
        #0000 59%
      )
      calc(100px / 2) 0,
    radial-gradient(
      farthest-side at 133.33% 50%,
      #0000 52%,
      rgba(89, 65, 242, 0.35) 54% 57%,
      #0000 59%
    ),
    radial-gradient(
      farthest-side at 50% -33.33%,
      #0000 52%,
      rgba(89, 65, 242, 0.35) 54% 57%,
      #0000 59%
    ),
    #212121;
  background-size:
    calc(100px / 4.667) 100px,
    100px calc(100px / 4.667);

  padding-left: 10px;
  .title {
    margin-bottom: 20px;
    .main_title {
      display: inline-block;
      font-size: 50px;
      font-weight: bold;
      color: transparent;
      background-image: linear-gradient(144deg, #666666, #999999);
      background-clip: text;
      animation: glow-pink 1s ease-in-out infinite alternate;
    }
    .sub_title {
      font-size: 10px;
      font-weight: lighter;
      color: #e8e8e8;
    }
  }
  .vip_pass {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    .vip {
      font-size: 25px;
      font-weight: lighter;
      color: gold;
      animation: glow 1s ease-in-out infinite alternate;
    }
    .vip_number {
      font-size: 15px;

      color: #e8e8e8;
    }
    .agendainfo {
      font-size: 10px;
      font-weight: lighter;
      margin-left: auto;
      padding-right: 5px;
    }
  }
  .info {
    font-family: "Courier New", monospace;
    font-size: 15px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;

    align-items: stretch;
    padding-top: 5px;
    border-top: solid 1px #e8e8e8;
    .date {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      padding: 0 5px;
      .day {
        font-weight: bold;
        font-size: 15px;
      }
    }
    .time {
      border-right: solid 1px #e8e8e8;
      padding: 0 5px;

      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .location {
      border-right: solid 1px #e8e8e8;
      padding: 0 5px;

      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}

.small_part {
  transform: rotate(-90deg);
  position: absolute;
  left: 400px;
  top: 50px;
  padding: 20px;

  height: 150px;
  width: 250px;
  border-top: 3px dotted #121212;
  background-color: #e8e8e8;

  mask: radial-gradient(20px, #0000 98%, #000) -125px -75px;
  box-shadow:
    -23px 23px 46px #828282,
    23px -23px 46px #ffffff;
}
.small_part_body {
  transform-style: preserve-3d;
  background:
    radial-gradient(
        farthest-side at -33.33% 50%,
        #0000 52%,
        rgba(89, 65, 242, 0.35) 54% 57%,
        #0000 59%
      )
      0 calc(100px / 2),
    radial-gradient(
        farthest-side at 50% 133.33%,
        #0000 52%,
        rgba(89, 65, 242, 0.35) 54% 57%,
        #0000 59%
      )
      calc(100px / 2) 0,
    radial-gradient(
      farthest-side at 133.33% 50%,
      #0000 52%,
      rgba(89, 65, 242, 0.35) 54% 57%,
      #0000 59%
    ),
    radial-gradient(
      farthest-side at 50% -33.33%,
      #0000 52%,
      rgba(89, 65, 242, 0.35) 54% 57%,
      #0000 59%
    ),
    #212121;
  background-size:
    calc(100px / 4.667) 100px,
    100px calc(100px / 4.667);
  position: relative;
  width: 100%;
  height: 100%;

  border-radius: 5px;
  background-color: #212121;
  padding: 10px;
  color: #e8e8e8;
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .barcode rect {
      fill: #e8e8e8;
    }
  }

.small_part_body .infos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  flex-wrap: wrap;
}


  .ticketNumber {
    font-weight: lighter;
  }
  .small_title {
    position: absolute;
    transform: rotate(90deg);
    top: 55px;
    right: -15px;
    font-size: 20px;
    font-weight: bold;
    color: transparent;
    background-image: linear-gradient(144deg, #666666, #999999);
    background-clip: text;
    animation: glow-pink 1s ease-in-out infinite alternate;
  }
  .infos {
    margin-bottom: 10px;
  }
}

.card-back {
  transform: rotateY(180deg);

  backface-visibility: hidden;
  width: 600px;
  height: 250px;
  display: flex;
  flex-direction: row-reverse;
  filter: drop-shadow(-25px 25px 29px #272727);
  font-family: system-ui;
}
.main_part-back {
  align-items: center;

  padding: 20px;
  height: 250px;
  width: 450px;

  mask: radial-gradient(20px, #0000 98%, #000) -225px -125px;

  background: linear-gradient(90deg, #e8e8e8 0%, #666666 50%, #212121 100%);
}

.small_part-back {
  transform: rotate(-90deg);
  position: absolute;
  right: 400px;
  top: 50px;
  padding: 20px;

  height: 150px;
  width: 250px;
  border-bottom: 3px dotted #121212;
  background-color: #e8e8e8;

  mask: radial-gradient(20px, #0000 98%, #000) -125px -75px;
  box-shadow:
    -23px 23px 46px #828282,
    23px -23px 46px #ffffff;
  text-align: center;
  font-size: 30px;
  padding-top: 50px;
  color: rgba(0, 0, 0, 0.5);
}

.mono {
  font-family: "Courier New", monospace;
}
.agenda {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  gap: 1px;
  .col {
    flex: 1;
    border-left: 2px solid #212121;
    display: flex;
    flex-direction: column;
    gap: 5px;
    .agenda-item {
      position: relative;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      border-radius: 5px;
      margin: 0 8px 0 8px;
      padding-left: 5px;
      padding-top: 5px;
      background:
        radial-gradient(
            farthest-side at -33.33% 50%,
            #0000 52%,
            rgba(89, 65, 242, 0.35) 54% 57%,
            #0000 59%
          )
          0 calc(100px / 2),
        radial-gradient(
            farthest-side at 50% 133.33%,
            #0000 52%,
            rgba(89, 65, 242, 0.35) 54% 57%,
            #0000 59%
          )
          calc(100px / 2) 0,
        radial-gradient(
          farthest-side at 133.33% 50%,
          #0000 52%,
          rgba(89, 65, 242, 0.35) 54% 57%,
          #0000 59%
        ),
        radial-gradient(
          farthest-side at 50% -33.33%,
          #0000 52%,
          rgba(89, 65, 242, 0.35) 54% 57%,
          #0000 59%
        ),
        #212121;
      background-size:
        calc(100px / 4.667) 100px,
        100px calc(100px / 4.667);

      &::before {
        position: absolute;
        top: 50%;
        left: -9px;
        transform: translate(-50%, -50%);
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #212121;
      }

      .agenda-time {
        font-size: 15px;
        font-weight: bolder;
        font-family: "Courier New", Courier, monospace;
        color: transparent;
        background-image: linear-gradient(144deg, #ffffffff, #999999);
        background-clip: text;
      }

      .agenda-text {
        font-size: 10px;
        color: #ffffffff;
        font-weight: normal;
      }
      .speaker {
        font-size: 7px;
        color: #ffffffff;
        font-weight: lighter;
      }
    }
  }
}

.glitch {
  position: relative;
  z-index: 1;
  &:hover:before {
    animation: glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
      infinite;
    color: #e84242ff;
    z-index: -1;
  }
  &:hover:after {
    animation: glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse
      both infinite;
    color: #ebe351ff;
    z-index: -2;
  }
}

.glitch:before,
.glitch:after {
  display: block;
  content: attr(data-glitch);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
}

@keyframes ticket-glow {
  from {
    filter: drop-shadow(0 0 100px #00000055) drop-shadow(0 0 30px #ffffff66)
  }

  to {
    filter: drop-shadow(0 0 100px #66666655) drop-shadow(0 0 30px #ffffff66)
      
  }
}

      `}</style>

      <div className="min-h-screen bg-gradient-to-br flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div id="Ticket">
          <div className="after"></div>
          <div className="before"></div>
          <label id="container">
            <input id="ch1" type="checkbox" />
            <div className="card-container">
              <div className="card">
                <div className="main_part">
                  <div className="main_part_body">
                    <div className="title">
                      <div className="main_title glitch" data-glitch="1 to 1 Private Mentorship">1 to 1 Private Mentorship</div>
                      <span className="sub_title">ICT Basic To Advance</span>

                      Lifetime Discord Access Guidance to Profitable Class Recordings
                    </div>
                    <div className="vip_pass">
                      <span className="vip">Price:₹49999</span>
                      <span className="vip_number mono">/</span>
                      <span className="agendainfo"> Details on the back</span>
                    </div>
                    <div className="info">
                      <div className="date">
                        <span className="day">ICT Basic</span> <span>To Advance</span>
                      </div>

                      <div className="time">
                        <span className="from">Lifetime Discord </span> <span>Access</span>
                      </div>
                      <div className="location">
                        Guidance to Profitable<br />
                        Class Recordings
                      </div>
                    </div>
                  </div>
                </div>
                <div className="small_part">
                  <div className="small_part_body">
                    <div className="content">
                      <div className="small_title">1 to 1 </div>
                      <div className="infos">
                        <span className="ticketNumber"
                        >Ticket <span className="mono">#30112</span></span>
                        <br />
                        <div className="info gate">
                          Learn: <span className="highlight">Trade Smart.</span>
                        </div>
                        <div className="info seat">
                          Grow: <span className="highlight">Consistently</span>
                        </div>
                        <div className="info seat">
                          Earn: <span className="highlight">Freedom</span>
                        </div>

                      </div>

                      <div>
                        <svg
                          className="barcode"
                          width="200"
                          height="40"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect x="0" y="0" width="3" height="40"></rect>
                          <rect x="2" y="0" width="1" height="40"></rect>
                          <rect x="4" y="0" width="2" height="40"></rect>
                          <rect x="7" y="0" width="1" height="40"></rect>
                          <rect x="9" y="0" width="3" height="40"></rect>
                          <rect x="13" y="0" width="1" height="40"></rect>
                          <rect x="15" y="0" width="2" height="40"></rect>
                          <rect x="18" y="0" width="1" height="40"></rect>
                          <rect x="20" y="0" width="2" height="40"></rect>
                          <rect x="23" y="0" width="1" height="40"></rect>
                          <rect x="25" y="0" width="3" height="40"></rect>
                          <rect x="29" y="0" width="1" height="40"></rect>
                          <rect x="31" y="0" width="2" height="40"></rect>
                          <rect x="34" y="0" width="1" height="40"></rect>
                          <rect x="36" y="0" width="2" height="40"></rect>
                          <rect x="39" y="0" width="1" height="40"></rect>
                          <rect x="41" y="0" width="3" height="40"></rect>
                          <rect x="45" y="0" width="2" height="40"></rect>
                          <rect x="48" y="0" width="1" height="40"></rect>
                          <rect x="50" y="0" width="2" height="40"></rect>
                          <rect x="53" y="0" width="1" height="40"></rect>
                          <rect x="55" y="0" width="2" height="40"></rect>
                          <rect x="58" y="0" width="1" height="40"></rect>
                          <rect x="60" y="0" width="3" height="40"></rect>
                          <rect x="64" y="0" width="2" height="40"></rect>
                          <rect x="67" y="0" width="1" height="40"></rect>
                          <rect x="69" y="0" width="3" height="40"></rect>
                          <rect x="73" y="0" width="1" height="40"></rect>
                          <rect x="75" y="0" width="2" height="40"></rect>
                          <rect x="78" y="0" width="1" height="40"></rect>
                          <rect x="80" y="0" width="2" height="40"></rect>
                          <rect x="83" y="0" width="1" height="40"></rect>
                          <rect x="85" y="0" width="3" height="40"></rect>
                          <rect x="89" y="0" width="1" height="40"></rect>
                          <rect x="91" y="0" width="2" height="40"></rect>
                          <rect x="94" y="0" width="1" height="40"></rect>
                          <rect x="96" y="0" width="2" height="40"></rect>
                          <rect x="99" y="0" width="1" height="40"></rect>
                          <rect x="101" y="0" width="3" height="40"></rect>
                          <rect x="105" y="0" width="2" height="40"></rect>
                          <rect x="108" y="0" width="1" height="40"></rect>
                          <rect x="110" y="0" width="2" height="40"></rect>
                          <rect x="113" y="0" width="1" height="40"></rect>
                          <rect x="115" y="0" width="2" height="40"></rect>
                          <rect x="118" y="0" width="1" height="40"></rect>
                          <rect x="120" y="0" width="3" height="40"></rect>
                          <rect x="124" y="0" width="2" height="40"></rect>
                          <rect x="127" y="0" width="1" height="40"></rect>
                          <rect x="129" y="0" width="3" height="40"></rect>
                          <rect x="133" y="0" width="1" height="40"></rect>
                          <rect x="135" y="0" width="2" height="40"></rect>
                          <rect x="138" y="0" width="1" height="40"></rect>
                          <rect x="140" y="0" width="2" height="40"></rect>
                          <rect x="143" y="0" width="1" height="40"></rect>
                          <rect x="145" y="0" width="3" height="40"></rect>
                          <rect x="149" y="0" width="1" height="40"></rect>
                          <rect x="151" y="0" width="2" height="40"></rect>
                          <rect x="154" y="0" width="1" height="40"></rect>
                          <rect x="156" y="0" width="2" height="40"></rect>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-back">
                <div className="main_part-back">
                  <div className="agenda">
                    <div className="col">
                      <div className="agenda-item">
                        <div className="agenda-time">What's Inside?</div>
                        <div className="agenda-text">ICT Basic To Advance</div>
                        <div className="speaker">Lifetime Discord Access</div>
                      </div>
                      <div className="agenda-item">
                        <div className="agenda-time">Guidance to Profitable</div>
                        <div className="agenda-text">Class Recordings</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="agenda-item">
                        <div className="agenda-time">WHAT YOU WILL GET EXTRA!</div>
                        <div className="agenda-text">• Lifetime discord access</div>
                        <div className="speaker">• Lifetime support</div>
                      </div>
                      <div className="agenda-item">
                        <div className="agenda-time">• Price reading sessions</div>
                        <div className="agenda-text">• Recording sessions</div>
                        <div className="speaker">• 1-1 doubt clarification</div>
                      </div>
                      <div className="agenda-item">
                        <div className="agenda-time">• Weekly market analysis</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="small_part-back">
                  <span className="mono">₹49999</span>
                </div>
              </div>
            </div>
          </label>
        </div>
        <div className="hint">CLICK TO FLIP</div>
        <RotatingButton onClick={handleGetStarted} />
      </div>
    </>
  )
}

export default Ticket;
