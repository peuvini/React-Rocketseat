import { Header } from './components/Header.jsx';
import { Post } from './components/Post.jsx';
import {Sidebar} from './components/Sidebar.jsx'
//JSX = Javascript  + XML(html)
import styles from './App.module.css'
import './global.css';



export function App() {
  return (
    <div>
    <Header/>
      <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post />
          </main>
      </div>

    </div>
  )
}


