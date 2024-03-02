import React, { Component } from "react";
class SwagEditor extends Component {
  state = {
    player: 0,
    frame: 0,
    backgroundupload: false,
    playerUpload: false,
    position: "top",
    px: 0,
    py: 0,
    canvasY: 400,
    canvasX: 400,
    start: true,
    rounded: 0,
    cornerValue: 0,
    customSize: false,
    scaleSize: 100,
    backgroundColor: '#2f064b',
    textColor: 'white',
  };
  imageSize = {
    "Logo cover": { x: 500, y: 500 },
    "Instagram Post": { x: 1080, y: 1080 },
    "Phone Wallpaper": { x: 1080, y: 1920 },
    "Social Media": { x: 1080, y: 1080 },
    "Desktop Wallpaper": { x: 1920, y: 1080 },
    "Facebook Cover": { x: 2050, y: 780 },
    custom: { x: 500, y: 500 },
  };

  // constructor(props) {
  //   super(props);
  //   this.canvasRef = React.createRef();
  // }

  componentDidMount() {
    this.clearCanvas();
    const { canvasX, canvasY } = this.state;
    var canvas = document.getElementById("backgroundCanvas");
    if (canvas) {
      canvas.width = canvasX;
      canvas.height = canvasY;
    }
  }
  componentDidUpdate() {
    const { canvasX, canvasY, start } = this.state;
    var canvas = document.getElementById("backgroundCanvas");
    if (canvas) {
      canvas.width = canvasX;
      canvas.height = canvasY;
      start && this.setState({ start: false });
      this.addBackground();
    }
  }

  handle = (e) => {
    let { name, value } = e.target;
    if (name !== "position") {
      value = parseInt(value) * 10 + 500;
    }
    this.setState({ [name]: value }, () => {
      this.playerUpdate();
    });
  };

  sizehandle = (val) => {
    val = val.target.value;
    if (val === "custom") {
      this.setState({ customSize: true });
      return;
    }
    const size = this.imageSize[val];
    this.setState({ canvasY: size.y, canvasX: size.x, scaleSize: (size.x > 600 && 50) || (size.y > 600 && 50) });
  };

  customSizeHandle = () => {
    const x = document.getElementById("customX").value;
    const y = document.getElementById("customY").value;
    this.setState({
      canvasX: x < 60 ? 500 : x,
      canvasY: y < 60 ? 500 : y,
      customSize: false,
    });
  };

  playerUpdate = () => {
    const { position, canvasY, canvasX } = this.state;
    const sizeImg = (Math.min(canvasX, canvasY) * 20) / 100;
    let px, py;
    let x = canvasX - sizeImg,
      y = canvasY - sizeImg;
    if (position === "top") {
      px = x / 2;
      py = 0;
    } else if (position === "left") {
      px = 0;
      py = y / 2;
    } else if (position === "right") {
      px = x;
      py = y / 2;
    } else if (position === "bottom") {
      px = x / 2;
      py = y;
    } else if (position === "topLeft") {
      px = 0;
      py = 0;
    } else if (position === "topRight") {
      px = x;
      py = 0;
    } else if (position === "bottomLeft") {
      px = 0;
      py = y;
    } else if (position === "bottomRight") {
      px = x;
      py = y;
    } else if (position === "center") {
      px = x / 2;
      py = y / 2;
    }
    this.setState({ px, py });
  };

  clearCanvas = () => {
    const { canvasX, canvasY } = this.state;
    const canvas = document.getElementById("backgroundCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvasX, canvasY);
  };

  imageImportFunction(inputId, imgId) {
    const input = document.getElementById(inputId);
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById(imgId).src = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
      this.setState({[inputId]: true});
    }
  }

  // playerSelect = (e) => {
  //   let { name, value } = e.target;
  //   document.getElementById(
  //     name
  //   ).src = `./swageditor/assests/img/players/player (${value}).svg`;
  //   this.setState({ player: value });
  // };

  download_img = (e) => {
    this.addBackground();
    var canvas = document.getElementById("backgroundCanvas");
    var image = canvas.toDataURL("image/png");
    e.target.href = image;

  };

  roundedCorner = (e) => {
    this.clearCanvas();
    let { value } = e.target;
    this.setState({ rounded: value || 0 }, () => {
      this.addBackground();
    });
  };

  addBackground = () => {
    const { canvasX, canvasY, rounded = 2 } = this.state;
    this.clearCanvas();
    var canvas = document.getElementById("backgroundCanvas");
    if (canvas) {
      var ctx = canvas.getContext("2d");
      var img = document.getElementById("backgoundImg");
      if (rounded > 1) {
        if (rounded > 200) {
          var centerX = canvas.width / 2;
          var centerY = canvas.height / 2;
          var radius = Math.min(centerX, centerY);

          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
          ctx.stroke();
        }
        else {
          var borderRadius = rounded;
          var width = img.width;
          var height = img.height;
          var x = (canvas.width - width) / 2;
          var y = (canvas.height - height) / 2;

          ctx.beginPath();
          ctx.moveTo(x + borderRadius, y);
          ctx.arcTo(x + width, y, x + width, y + height, borderRadius);
          ctx.arcTo(x + width, y + height, x, y + height, borderRadius);
          ctx.arcTo(x, y + height, x, y, borderRadius);
          ctx.arcTo(x, y, x + width, y, borderRadius);
          ctx.closePath();
        }
        ctx.clip();
      }
      const src = img.src.charAt(img.src.length - 1);
      if (src) {
        src !== "#" &&
          ctx.drawImage(img, 0, 0, canvasX, canvasY);
        ctx.imageSmoothingEnabled = false;
        this.addPlayer();
      }
    }
    return true;
  };

  addPlayer = () => {
    const { px, py, canvasX, canvasY } = this.state;
    var canvas = document.getElementById("backgroundCanvas");
    if (canvas) {
      var ctx = canvas.getContext("2d");
      var img = document.getElementById("playerImg");
      let src = img.src.charAt(img.src.length - 1);
      if (src) {
        const sizeImg = (Math.min(canvasX, canvasY) * 20) / 100;
        src !== "#" &&
          ctx.drawImage(img, px, py, sizeImg, sizeImg);
      }
    }
    return true;
  };

  render() {
    const { start, customSize, scaleSize, backgroundColor, textColor, backgroundupload, playerUpload } = this.state;
    const customStyle = [
      {
        backgroundColor: backgroundColor, color: textColor
      }
    ]
    return (
      <div>
        {/* <div>
          <label>Theme</label>
          <div><label>background : </label>  <input type="color" onChange={(e) => this.setState({ backgroundColor: e.target.value })} /></div>
          <div><label>Text Color : </label>  <input type="color" onChange={(e) => this.setState({ textColor: e.target.value })} /></div>

        </div> */}
        <div className="p-4 px-2 w-screen min-h-screen relative text-center" style={customStyle[0]}>
          <section className="flex justify-center px-4 pt-6 text-2xl md:text-4xl">
            {/* <img src="./swagEditor/assests/aliando-rocky.regular.png" alt="logo" /> */}
            Marketing Profile Icon
          </section>
          <p className="text-red-500 mb-6 font-medium">Note: If the image does not update, click the 'Add | Update Design' button.</p>
          <section className="flex flex-col md:flex-row flex-wrap gap-2 justify-center">
            <section className="flex bg-purple-800">
              <span className="bg-purple-900 p-3 min-w-200 text-left">Select a file</span>
              <label className="bg-purple-800 hoverBg flex flex-col items-center px-4 py-2 bg-transparent  cursor-pointer outline-none focus:outline-none  hover:text-blue-100 w-full">
                <svg
                  className="w-8 h-8"
                  fill={backgroundupload ? 'lightgreen':"currentColor"}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <input
                  className="hidden"
                  type="file"
                  id="backgroundupload"
                  onChange={() => {
                    this.imageImportFunction(
                      "backgroundupload",
                      "backgoundImg"
                    );
                  }}
                />
                <img
                  id="backgoundImg"
                  src="#"
                  alt="Your background"
                  className="hidden"
                />
              </label>
            </section>

            <section className="flex bg-purple-800">
              <span className="bg-purple-900 p-3 min-w-200 text-left">Logo</span>
             
              <div className="flex bg-purple-800 hoverBg w-full">
                <label className="flex flex-col items-center px-4 py-2  bg-transparent  cursor-pointer outline-none focus:outline-none  hover:text-blue-100 w-full">
                  <svg
                    className="w-8 h-8"
                    fill={playerUpload ? 'lightgreen':"currentColor"}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
                  <input
                    className="hidden"
                    type="file"
                    id="playerUpload"
                    onChange={() => {
                      this.imageImportFunction("playerUpload", "playerImg");
                    }}
                  />
                </label>
              </div>
              <img
                id="playerImg"
                src={null}
                alt="playerImg"
                className="hidden"
              />
            </section>

            {/* <section className="flex justify-between bg-purple-800">
              <span className="bg-purple-900 p-3 min-w-200 w-40">Swag frames</span>
              <select
                onChange={this.handleFrame}
                name="frameImg"
                className=" bg-purple-800  p-3 select:bg-purple-900 customselect"
              >
                <option value="1">Frame1</option>
                <option value="2">Frame2</option>

              </select>

              <div className=" flex">
                <img id="frameImg" src="./swageditor/assests/img/background/bg (1).png" alt="Your frame" className="hidden" />
              </div>

            </section> */}

            <section className="flex  bg-purple-800 pr-2">
              {/* Player Position */}

              <span className="bg-purple-900 p-3 min-w-200 text-left">Logo Position</span>
              <select
                onChange={this.handle}
                name="position"
                className="bg-purple-800 w-full p-3 select:bg-purple-900 customselect"
              >
                <option value="top">Top</option>
                <option value="left">Left</option>
                <option value="right">Right</option>
                <option value="bottom">Bottom</option>
                <option value="topLeft">TopLeft</option>
                <option value="topRight">TopRight</option>
                <option value="bottomLeft">BottomLeft</option>
                <option value="bottomRight">BottomRight</option>
                <option value="center">Center</option>
              </select>
            </section>

            <section className="flex bg-purple-800 pr-2">
              {/* Post type */}
              <span className="bg-purple-900 p-3 min-w-200 text-left">Post type</span>
              <select
                onChange={this.sizehandle}
                name="position"
                className="bg-purple-800 p-3 w-full"
              >
                <option value="Logo cover">Logo</option>
                <option value="Instagram Post">Instagram Post</option>
                <option value="Phone Wallpaper">Phone Wallpaper</option>
                <option value="Social Media">Social Media</option>
                <option value="Desktop Wallpaper">Desktop Wallpaper</option>
                <option value="Facebook Cover">Facebook Cover</option>
                <option value="custom">custom</option>
              </select>
            </section>

            <section className="flex  bg-purple-800">
              {/* Post type */}
              <span className="bg-purple-900 p-3 min-w-200 text-left">Border Radius</span>
              <input
                type="number"
                placeholder="0"
                onChange={this.roundedCorner}
                name="position"
                className="bg-purple-800 p-3 w-20"
              />
            </section>
          </section>

          {/* <section className="flex ">
            <div className="bg-purple-800 flex justify-between ">
              <select
                name="position"
                className=" bg-purple-800  p-3 select:bg-purple-900 customselect"
                onChange={(e) => {
                  this.setState({ rounded: e.target.value === "true" });
                }}
              >
                <option value="false">Rectangle</option>
                <option value="true">Circle</option>
              </select>
            </div>
          </section> */}

          <section className="mt-4 mb-10 text-left ml-4 ml-12 flex justify-center">
            <a
              className="bg-purple-900 px-4 py-2 hover:shadow-lg hoverBg h-full"
              id="download"
              onClick={this.download_img}
              download="myImage.jpg"
              href="#"
            >
              Download
            </a>

            <input
              className="bg-purple-800 font-sm p-2 hover:shadow-lg hoverBg"
              type="button"
              onClick={() => {
                start && this.setState({ start: false });
                this.addBackground();
              }}
              value={start ? "Add Design" : "Update Design"}
            />
          </section>

          <section
            id="canvas"
            className={`relative overflow-scroll mx-auto transform md:scale-${scaleSize}`}
            style={{ maxWidth: "100%", width: "fit-content", transformOrigin: "0 0" }}
          >
            <canvas
              className="border-2 border-purple-800"
              id="backgroundCanvas"
              style={{
                zIndex: 1,
                top: "100px",
              }}
            >
              This text is displayed if your browser does not support HTML5
              Canvas.
            </canvas>
          </section>
        </div>

        {customSize && (
          <div
            className="absolute bg-white py-2 px-6 top-0 mx-auto  text-black z-50"
            style={{ transform: "translate(-50%, 0px)", marginLeft: "50%" }}
          >
            <div className="relative">
              <p className="text-center font-medium text-gray-500">
                Custom dimensions
              </p>
              <span className="absolute font-medium right-0 text-gray-600 top-0 cursor-pointer" onClick={() => this.setState({
                customSize: false,
              })}>
                X
              </span></div>
            <div className="flex ">
              <span className="border-2 m-2  p-2 rounded">
                <input
                  type="number"
                  placeholder="width"
                  className="w-full"
                  style={{ width: "70px", height: "30px" }}
                  id="customX"
                />
              </span>
              <span className="border-2 m-2  p-2 rounded">
                <input
                  type="number"
                  placeholder="height"
                  className="w-full"
                  style={{ width: "70px", height: "30px" }}
                  id="customY"
                />
              </span>
              <span className="  border-2 m-2 p-3 font-medium rounded">
                px
              </span>
            </div>
            <div className="w-full">
              <input
                type="button"
                value="Submit"
                className="border-2 bg-purple-900 px-3 py-1  w-full m-2 text-white my-4 rounded"
                onClick={() => {
                  this.customSizeHandle();
                }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SwagEditor;
