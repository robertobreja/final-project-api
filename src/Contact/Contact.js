import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const onHandleSubmit = (e) => {
    e.preventDefault();
    navigate('/thanks');
    

  }
return (
<form onSubmit={onHandleSubmit} className="col-6">
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput2" className="form-label">Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput2" />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Your message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
</div>

  <button type="submit" className="btn btn-primary">Send the message</button>
 
</form>
)
}

export default Contact;