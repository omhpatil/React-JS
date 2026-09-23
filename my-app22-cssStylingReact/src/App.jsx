import InlineCSS from "./InlineCSS"
import InternalCSS from "./InternalCSS"
import ExternalCSS from "./ExternalCSS"
import styles from "./myStyle.module.css" 

function App() {
  return (
    <>
    <InlineCSS />
    <br/>
    <InternalCSS />
    <br/>
    <ExternalCSS />
    <br/>
    <div className={styles.divContainer}>MySelf CSS Modules</div>
    </>
  )
}

export default App
