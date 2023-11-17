// /** @type {import('tailwindcss').Config} */


//MATERIAL TAILWIND 
// const withMT = require("@material-tailwind/react/utils/withMT");
// module.exports = withMT({
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     screens: {
//       530: { max: "530px" },
//     },
//     fontFamily: {
//       // ubuntu: ["Ubuntu"],
//       // roboto: ["Roboto"],
//     },
//     container: {
//       center: true,
//       padding: "10px",
//     },
//     extend: {
//       gridTemplateColumns: {
//         // "auto-full": "repeat(auto-fill, 390px)",
//         // "auto-fill": "repeat(auto-fill, 300px)",
//       },
//       // colors:{
//       //   red: '#fff'
//       // }
//     },
//   },
//   plugins: [],
// });

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      530: { max: '530px' },
    },
    fontFamily: {
      // ubuntu: ["Ubuntu"],
      // roboto: ["Roboto"],
    },
    container: {
      center: true,
      padding: '10px',
    },
    extend: {
      gridTemplateColumns: {
        // "auto-full": "repeat(auto-fill, 390px)",
        // "auto-fill": "repeat(auto-fill, 300px)",
      },
      // colors:{
      //   red: '#fff'
      // }
    },
  },
  plugins: [],
}
