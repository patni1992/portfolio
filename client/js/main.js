
if (process.env.NODE_ENV !== "production") {require("webpack-hot-middleware/client?reload=true")}

import "../../node_modules/flickity/dist/flickity.css"
import "../../node_modules/flickity-fullscreen/fullscreen.css"
import "flickity";
import "flickity-fullscreen";
import "../sass/main.scss";
import "../index.hbs";
import "./home";
