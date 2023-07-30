import {Comment} from './components/Comment.jsx'
import { Header } from './components/Header.jsx';
import { Post } from './components/Post.jsx';
import {Sidebar} from './components/Sidebar.jsx'
import {Avatar} from './components/Avatar.jsx'
//JSX = Javascript  + XML(html)
import styles from './App.module.css'
import './global.css';



// author : {avatar_url: "" , name: "" , role: ""}
//publishedAt: Date;
// content: String;
const posts = [
    {
      id: 1,
      author: {
          avatarUrl: 'https://github.com/peuvini.png',
          name: 'Pedro Vinicius',
          role: 'Estudante'
      },
      content: [
        {type : 'paragraph', content: 'Fala galeraa 👋',},
        {type : 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},    
        {type : 'link', content: 'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2023-07-30 10:00:00'),
    },
    {
      id: 2,
      author: {
          avatarUrl: 'https://github.com/diego3g.png',
          name: 'Diego Fernandes',
          role: 'CTO @Rocketseat'
      },
      content: [
        {type : 'paragraph', content: 'Fala galeraa 👋',},
        {type : 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},    
        {type : 'link', content: 'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2023-07-10 10:00:00'),
    }
];


// iteracao -- criar um estrutura de repeticao
// iterar uma array - pegar uma array e pra cada posicao do array fazer alguma funcao

export function App() {
  return (
    <div>
    <Header/>
      <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map(post => {
               return (
               <Post
                  key={post.id}
                  author = {post.author}
                  content = {post.content}
                  publishedAt = {post.publishedAt}
               />)
            })}
          </main>
      </div>
    </div>
  )
}


