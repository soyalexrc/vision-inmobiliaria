import Router from "./routes";
import ScrollToTop from "./components/ScrollToTop";
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
import {ProgressBarStyle} from "./components/common/LoadingScreen";

function App() {
  return (
    <>
      <ThemeConfig>
        <GlobalStyles />
        <ProgressBarStyle />
        <ScrollToTop />
        <Router />
      </ThemeConfig>
    </>
  );
}

export default App;
