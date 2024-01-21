import './overlay.css'

const Overlay = ({ overrideNavbar = false }) => {
  return (
    <>
      {overrideNavbar ? (
        <div className='overlay' style={{ zIndex: 10 }}></div>
      ) : (
        <div className='overlay'></div>
      )}
    </>
  )
}
export default Overlay
