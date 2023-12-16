import "./index.css"
const Contact = () => {

    return (
        
            <main className="contact-form">
              <div className="form-container">
                <h3>Contact</h3>
                
                <p>We’d love to hear from you! Please fill out the form below.</p>
                <form  className="form">
                  <div className="form-group">
                    <label htmlFor="fullName">Full name</label>
                    <input
                      type="text"
                      id="fullName"
                      required
                      className="input-field"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="input-field"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone number</label>
                    <div className="phone-input">
                      <select className="country-code">
                        <option>US</option>
                        <option>ES</option>
                        <option>MR</option>
                        <option>ID</option>
                      </select>
                      <input
                        type="number"
                        id="phone"
                        placeholder="+1 (555) 000-000"
                        required
                        className="input-field"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      required
                      className="input-field"
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                </form>
              </div>
            </main>
          );
        };

export default Contact;