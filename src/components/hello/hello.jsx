import styles from './hello.module.css'
export const Hello = () => {
  return (
    <div className={`${styles.hello} d-flex justify-content-between`}>
      <section className='col-md-6'>
        <div className={`${styles.image_luana}`}>
          <img className={`${styles.shadow} ${styles.luana_photo}`} src="../../../public/luanaf.jpeg" alt="luana" width={400}/>
        </div>
      </section>
      <section className='col-md-6'>
        <div className={`${styles.hello_text}`}>
            <strong><mark>QUEM SOU EU?... </mark><br /></strong>
            Me chamo Luânissa rantantan pá pá (*moto de noia)
            O Naruto pode ser um pouco duro às vezes
            Talvez você não saiba disso
            Mas o Naruto também
            Cresceu sem pai

            Na verdade, ele nunca conheceu nenhum de seus pais
            E nunca teve nenhum amigo em nossa aldeia
            Mesmo assim, eu nunca vi ele chorar
            Ficar zangado ou se dar por vencido

            Ele está sempre disposto a melhorar
            Ele quer ser respeitado, é o sonho dele
            E o Naruto daria a vida por isso sem hesitar
            Meu palpite é que ele se cansou de chorar
            E decidiu fazer alguma coisa a respeito
        </div>
      </section>
    </div>
  )
}