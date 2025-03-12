import "../css/Sign-in.css";


function Signin(){
    return(
        <>
            <section className="container-fluid p-0 m-0">
                <div className="container form-box">
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" placeholder="Enter Email" id="exampleInputEmail1" />
                       
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Enter Password" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Allow Me</label>
                    </div>
                    <button type="submit" className="btn btn-success ">Submit</button>
                </form>
                    
                </div>
            </section>
        </>
    )
}
export default Signin;