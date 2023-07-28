import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                
                <div className={styles.author}>
                    <img 
                    className={styles.avatar} 
                    src='https://github.com/peuvini.png'
                    />

                    <div className={styles.authorInfo}>
                        <strong>Pedro Vinicius</strong>
                        <span>Web developer</span>
                    </div>

                </div>


                <time 
                title='28 de julho às 10:32'
                dateTime='2023-07-28 10:32:00'>
                    Publicado há 1h
                </time>

            </header>

            <div className={styles.content}>
                    <p> Fala galeraa 👋 </p>
                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>     
                    <p>👉{' '}<a href=''> jane.design/doctorcare</a></p>
                    <p>
                        <a>#novoprojeto</a> {' '}
                        <a>#nlw </a> {' '}               
                        <a>#rocketseat</a>
                    </p>
            </div>

            <form className={styles.commentForm}>
                <strong>
                    Deixe seu feedback
                </strong>

                <textarea 
                placeholder="Deixe um comentario"
                />

                <button type='submit'> Comentar </button>
            </form>
        </article>
    )
}