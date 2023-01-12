import { ThemeProvider } from "@mui/material";

import "../styles/globals.css";

//
import { Poppins } from "@next/font/google";
import { theme } from "../components/ui/theme";
import { Layout } from "../components/ui/Layout";
//

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div className={poppins.className}>
        <Layout />
      </div>
      <script src="/scripts/icons.js" defer></script>
    </ThemeProvider>
  );
}
