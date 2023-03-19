import styles from './footer.module.css'
export const TheFooter = () => {
  return (
    <footer>
      <div className='container'>
        <div className="row text-center">
          <div className='col-4'>
            meuemail@gmail.com
          </div>
          <div className='col-4'>
            <h3>
              Entre em <mark>contato</mark>
            </h3>
          </div>
          <div className='col-4'>
            Rua da pipoquinha Nº 19 Casa 309
          </div>
        </div>
        <div className='col-12 text-center mt-3'>
          <p>Made by Hermes 2023</p>
        </div>
      </div>
    </footer>
  )
}