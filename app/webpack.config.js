const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: "./src/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyWebpackPlugin([{ from: "./src/index.html", to: "index.html" }]),
    new CopyWebpackPlugin([{ from: "./src/html/about-us.html", to: "about-us.html" }]),
    new CopyWebpackPlugin([{ from: "./src/html/donor-registration.html", to: "donor-registration.html" }]),
    new CopyWebpackPlugin([{ from: "./src/html/patient-registration.html", to: "patient-registration.html" }]),
    new CopyWebpackPlugin([{ from: "./src/html/view-donors.html", to: "view-donors.html" }]),
    new CopyWebpackPlugin([{ from: "./src/html/view-patients.html", to: "view-patients.html" }]),
    new CopyWebpackPlugin([{ from: "./src/html/transplant-matching.html", to: "transplant-matching.html" }]),
    new CopyWebpackPlugin([{ from: "./src/css/bootstrap.css", to: "css/bootstrap.css" }]),
    new CopyWebpackPlugin([{ from: "./src/css/styles.css", to: "css/styles.css" }]),
    new CopyWebpackPlugin([{ from: "./src/css/style-home.css", to: "css/style-home.css" }]),
    new CopyWebpackPlugin([{ from: "./src/css/fontawesome-all.css", to: "css/fontawesome-all.css" }]),
    new CopyWebpackPlugin([{ from: "./src/images/organ-donation-logo-new.svg", to: "images/organ-donation-logo-new.svg" }]),
    new CopyWebpackPlugin([{ from: "./src/images/logo-new-final.svg", to: "images/logo-new-final.svg" }]),
    new CopyWebpackPlugin([{ from: "./src/images/logo-final-1.svg", to: "images/logo-final-1.svg" }]),
    new CopyWebpackPlugin([{ from: "./src/images/logo-final-2.svg", to: "images/logo-final-2.svg" }]),
    // new CopyWebpackPlugin([{ from: "./src/images/header-image-new.png", to: "images/header-image-new.png" }]),
    new CopyWebpackPlugin([{ from: "./src/images/organ-donation-platform-logo.svg", to: "images/organ-donation-platform-logo.svg" }]),
    new CopyWebpackPlugin([{ from: "./src/images/organ-donation-platform-logo-1.svg", to: "images/organ-donation-platform-logo-1.svg" }]),
    new CopyWebpackPlugin([{ from: "./src/images/organ-donation-platform-logo-white.svg", to: "images/organ-donation-platform-logo-white.svg"}]),
    new CopyWebpackPlugin([{ from: "./src/images/transplant-icon.svg", to: "images/transplant-icon.svg" }]),
    new CopyWebpackPlugin([{ from: "./src/images/waiting-list-icon.svg", to: "images/waiting-list-icon.svg" }]),
    new CopyWebpackPlugin([{ from: "./src/images/chopra.png", to: "images/chopra.png" }]),
    new CopyWebpackPlugin([{ from: "./src/images/porwal.png", to: "images/porwal.png" }]),
    new CopyWebpackPlugin([{ from: "./src/images/udit.jfif", to: "images/udit.jfif" }]),
    // new CopyWebpackPlugin([{ from: "./src/images/organ-donation-system-low-resolution-logo-color-on-transparent-background.png", to: "images/organ-donation-system-low-resolution-logo-color-on-transparent-background.svg" }]) 
  ],
  devServer: { contentBase: path.join(__dirname, "dist"), compress: true },
};