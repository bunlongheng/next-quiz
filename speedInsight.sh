npm i @vercel/speed-insights

import { SpeedInsights } from "@vercel/speed-insights/next";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default MyApp;


git add .
git commit -m "Added Vercel Speed Insights"
git push origin main