import './contact.scss'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="textContainer">
            <h1>Let's work together</h1>
            <div className="item">
                <h2>Mail</h2>
                <span>hello@react.dev</span>
            </div>
            <div className="item">
                <h2>Address</h2>
                <span>hello street New York</span>
            </div>
            <div className="item">
                <h2>Phone</h2>
                <span>+1 123456789</span>
            </div>
        </div>
        <div className="formContainer">
            <form >
                <input type="text" required placeholder='Name'/>
                <input type="email" required placeholder='email'/>
                <textarea rows={8} placeholder='Message' />
                <button>Submit</button>

            </form>
        </div>
    </div>
  )
}

export default Contact