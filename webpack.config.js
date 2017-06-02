module.exports = {

  // This is the entry point or start of our react applicaton
  entry: "./app.js",

  // The plain compiled JavaScript will be output into this file
  output: {
    filename: "public/bundle.js"
  },
  resolve: {
      extensions: ['', '.js', '.jsx']
  },
  

  // This section desribes the transformations we will perform
  module: {
    loaders: [
      {
        // Only working with files that in in a .js or .jsx extension
        test: /\.es6\.js$/, loader: "babel-loader",
        query: {
          presets: ['es2015']
        },
        // Webpack will only process files in our app folder. This avoids processing
        // node modules and server files unnecessarily
        include: /app/,
        loader: "babel",
        // query: {
        //   // These are the specific transformations we'll be using.
        //   presets: ["react", "es2015"]
        // }
      }
    ]
  },
//   resolve: {
//       extensions: ['.es6.js']
//   },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: "eval-source-map"
};