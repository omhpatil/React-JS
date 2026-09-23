function InternalCSS() {

  const myStyle = {
    color: 'red',
    background: 'yellow',
    textAlign: 'center'
  }

  return (
    <>
         {/* internal css */}
        <div style={myStyle}>CSS Styling Practice</div>
    </>
  )
}

export default InternalCSS