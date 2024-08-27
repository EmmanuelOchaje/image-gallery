import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import slides from "./assets/data";
import {
  Captions,
  Download,
  // Fullscreen,
  // Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import styles from "./App.module.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.app}>
      <div className={styles.btn}>
        <button onClick={() => setOpen(true)}>Open LightBox</button>
      </div>
      <Lightbox
        //, Fullscreen, Zoom
        plugins={[Captions, Download]}
        open={open}
        slides={slides}
        close={() => setOpen(false)}
      />
    </div>
  );
}

export default App;
