import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://github.com/peuvini.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <author>
                                Pedro vinicius
                            </author>
                            <time 
                            title='28 de julho às 10:32'
                            dateTime='2023-07-28 10:32:00'>
                                Cerca de 2h atrás
                            </time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>

                    </header>

                    <p>Muito bom Pedro, Parabens!!!</p>
                    
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir 
                        <span>
                            20
                        </span>
                    </button>
                </footer>
            </div>
        </div>
    )
}