import styles from './photoSection.module.css'
export const PhotoSection = () => {
  return (
    <section>
      <div className="d-flex">
        <div className={`${styles.presentation_label}`}>
          <div className='mb-5'>
            <h2><mark>Meu nome é</mark></h2>
          </div>
          <h1 className={`${styles.name}`}><mark>Luana Feitosa</mark></h1>
        </div>
        <div>
          <img src="../../../public/luanac.jpeg" alt="luana" width={'100%'} className={`${styles.luana_image}`}/>
        </div>
      </div>
    </section>
  )
}