import { useEffect, useState } from "react";

const Form1 = () => {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [adrs, setadrs] = useState('')
    const [city, setcity] = useState('');
    const [state, setstate] = useState('');
    const [data, setdata] = useState([]);
    const [flag, setflag] = useState(false);
    const [edit, setedit ] = useState(false)
    const add = async (e) => {
        e.preventDefault()
        let data = { firstname, lastname, email, adrs, city, state }
        let resp = await fetch('http://localhost:9000/api/adddata',
            {
                method: "post",
                body: JSON.stringify(data),
                headers: { 'Content-type': 'application/json' }
            })
        if (resp.ok) {
            let res = await resp.json()
            if (res.statuscode === 1) {
                alert("Success")
                fetchData()
            } else {
                alert("Failure")
            }
        }
    }
    const [id, setid] = useState();
    const editmodeon = (det) =>{
        setedit(true)
        setfirstname(det.FirstName)
        setlastname(det.LastName)
        setemail(det.Email)
        setadrs(det.Address)
        setcity(det.City)
        setstate(det.State)
        setid(det._id)
    }

    const editmodeoff = () =>{
        setedit(false)
        setfirstname('')
        setlastname('')
        setemail('')
        setadrs('')
        setcity('')
        setstate('')
        setid('')
    }


    const updateData = async()=>{
        let data = { firstname, lastname, email, adrs, city, state }
        let resp = await fetch(`http://localhost:9000/api/updatedata/${id}`,
            {
                method: "put",
                body: JSON.stringify(data),
                headers: { 'Content-type': 'application/json' }
            })
        if (resp.ok) {
            let res = await resp.json()
            if (res.statuscode === 1) {
                alert("Success")
                setedit(false)
                fetchData()
            } else {
                alert("Failure")
            }
        }
    }

    const fetchData = async () => {
        var data2 = await fetch('http://localhost:9000/api/fetchdata')
        if (data2.ok) {
            let rs = await data2.json()
            if (rs.statuscode === 1) {
                setdata(rs.udata)
                setflag(true)
            } else {
                alert("failed to fetch data")
            }
        }
    }

    const dele = async (idk) => {
        let confirm = window.confirm("Are you sure about deleting this?")
        if (confirm === true) {
            var data2 = await fetch(`http://localhost:9000/api/deletdata/${idk}`,
                {
                    method: "delete",
                    headers: { 'Content-type': 'application/json' }
                })
            if (data2.ok) {
                let rs = await data2.json()
                if (rs.statuscode === 1) {
                    alert("deleted successfully")
                    fetchData();
                } else {
                    alert("failed to fetch data")
                }
            }
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <div className="form-control" style={{ border: "1px solid black " }}>
                <h1 > Mini Form </h1>
                {edit===false?
                <form className="row g-3" onSubmit={add}>
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label"> First Name </label>
                        <input value={firstname} onChange={(e) => setfirstname(e.target.value)} type="text" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">Last Name </label>
                        <input value={lastname} onChange={(e) => setlastname(e.target.value)} type="text" className="form-control" id="inputEmail" />
                    </div>
                    <div className="col-12">
                        <label for="inputAddress" className="form-label">Email</label>
                        <input value={email} onChange={(e) => setemail(e.target.value)} type="email" className="form-control" id="inputAddress" />
                    </div>
                    <div className="col-12">
                        <label for="inputAddress2" className="form-label">Address</label>
                        <input value={adrs} onChange={(e) => setadrs(e.target.value)} type="text" className="form-control" id="inputAddress2" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputState" className="form-label">City</label>
                        <input value={city} onChange={(e) => setcity(e.target.value)} type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-4">
                        <label for="inputState" className="form-label">State</label>
                        <input value={state} type="text" onChange={(e) => setstate(e.target.value)} className="form-control" id="inputCity" />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Submit form </button>
                    </div>
                </form>
                : <form className="row g-3">
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label"> First Name </label>
                    <input value={firstname} onChange={(e) => setfirstname(e.target.value)} type="text" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Last Name </label>
                    <input value={lastname} onChange={(e) => setlastname(e.target.value)} type="text" className="form-control" id="inputEmail" />
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Email</label>
                    <input value={email} onChange={(e) => setemail(e.target.value)} type="email" className="form-control" id="inputAddress" />
                </div>
                <div className="col-12">
                    <label for="inputAddress2" className="form-label">Address</label>
                    <input value={adrs} onChange={(e) => setadrs(e.target.value)} type="text" className="form-control" id="inputAddress2" />
                </div>
                <div className="col-md-6">
                    <label for="inputState" className="form-label">City</label>
                    <input value={city} onChange={(e) => setcity(e.target.value)} type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label">State</label>
                    <input value={state} type="text" onChange={(e) => setstate(e.target.value)} className="form-control" id="inputCity" />
                </div>
                <div className="col-12">
                    <button onClick={updateData} className="btn btn-primary">Update form </button> &nbsp; &nbsp;
                    <button onClick={editmodeoff} className="btn btn-danger">Cancel </button>
                </div>
            </form>
                }
            </div>
            <br /> <br />
            {
                flag === true ?
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">FirstName </th>
                                <th scope="col">LastName </th>
                                <th scope="col">Email</th>
                                <th scope="col">City</th>
                                <th scope="col">Update</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((det, i) =>
                                <tr key={i}>
                                    <td>{det.FirstName} </td>
                                    <td> {det.LastName} </td>
                                    <td> {det.Email} </td>
                                    <td> {det.City} </td>
                                    <td> <button onClick={()=>editmodeon(det)} className="btn btn-primary"> Update </button></td>
                                    <td> <button onClick={()=>dele(det._id)} className="btn btn-danger"> Delete </button></td>
                                </tr>
                            )}

                        </tbody>
                    </table> : <div> no data found </div>
            }
        </>
    );
}

export default Form1;