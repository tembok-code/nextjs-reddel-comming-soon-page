import { getAnalytics, isSupported, logEvent } from "firebase/analytics";

//import analytics from "../../../firebaseConfig";

const Analytics = ({ children }) => {
  const analytics = isSupported().then((yes) =>
    yes ? getAnalytics(app) : null
  );
  if (typeof window != undefined) {
    const title = document.title;
    logEvent(analytics, "screen_view", { nextjs_screen: title });
  }
  return <>children</>;
};

export default Analytics;
