import Modal from './Modal.css'

const Modals = ({ openModal, setOpenModal }) => {
  return (
    <>
      <div
        className={!openModal ? 'hidden' : 'h-full fixed w-full top-[30%] left-[37%]'}
        // закрывать вне окна
        onClick={() => setOpenModal(false)}
      >
        {/* что б не закрывалось при нажатии на контент */}
        <div class="form-container" onClick={(e) => e.stopPropagation()}>
          <div class="logo-container">Forgot Password</div>

          <form class="form">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                required=""
              />
            </div>

            <button class="form-submit-btn" type="submit">
              Send Email
            </button>
          </form>

          <p class="signup-link">
            Don't have an account?
            <a href="#" class="signup-link link">
              Sign up now
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Modals
