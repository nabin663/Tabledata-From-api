import { useEffect, useRef, useState } from "react";
import "./App.css";
import TableItem from "./Component/TableItem";

function App() {
  const [data, setData] = useState([]);
  const [useredetail, setUseredetail] = useState({
    id: 0,
    title: "",
    body: "",
  });

  const [message, setMessage] = useState("");
  const [userdetail, setUserdetail] = useState({ id: 0, title: "", email: "" });

  const myref = useRef(null);
  const myref2 = useRef(null);

  const fetchdata = async () => {
    const user = await fetch("https://jsonplaceholder.typicode.com/posts");
    const parsedData = await user.json();
    setData(parsedData);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const handleClick = () => {
    myref.current.click();
  };
  const onChange = (e) => {
    setUserdetail({ ...userdetail, [e.target.name]: e.target.value });
  }; //when we used async we use try catch when we call api

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      let postData = {
        postId: 1,
        id: userdetail.id,
        name: userdetail.title,
        body: userdetail.body,
      };
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "POST",
        headers: {
          "Conent-Type": "application/json, charset=UTF-8",
        },
        body: JSON.stringify(postData),
      });

      const json = await res.json();

      setData([{ ...postData, id: json.id }, ...data]);
      setMessage("successful");
    } catch (error) {
      setMessage("unsuccessful");
    }
  };
  const handleDclick = (uid) => {
    console.log(uid);
    const copied = [...data];
    copied.splice(uid, 1);
    setData(copied);
  };

  const handleEclick = (uid) => {
    try {
      myref2.current.click();
      setUseredetail({
        id: data[uid].id,
        title: data[uid].title,
        body: data[uid].body,
      });
      console.log(useredetail.id);
    } catch (error) {}
  };

  const onChangee = (e) => {
    setUseredetail({ ...useredetail, [e.target.name]: e.target.value });
    console.log(useredetail);
  };
  const onSubmitt = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        headers: { "Content-Type": "application/json charset=UTF-8" },
        body: JSON.stringify({
          title: useredetail.title,
          body: useredetail.body,
          id: useredetail.id,
          userId: 1,
        }),
      });
      const jsn = await res.json();

      setMessage("editing Successfull");
    } catch (error) {
      setMessage("edting unsuccessfull");
    }
  };

  return (
    <>
      <div className="row my-3">
        <div className="col">
          <h1 className="text-center" id="message">
            {message}
          </h1>
        </div>
        <div className="col">
          <button
            className="btn btn-primary "
            style={{ diplay: "inline-block" }}
            onClick={() => {
              setMessage("");
            }}
          >
            clear message
          </button>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{ display: "none" }}
        ref={myref2}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{ backgroundColor: "red", color: "white" }}
            >
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <div className="mb-3">
                    <label htmlFor="userid" className="form-label">
                      Id
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="userid"
                      name="id"
                      style={{ width: "20%" }}
                      onChange={onChangee}
                      value={useredetail.id}
                    />
                  </div>
                  <label htmlFor="name" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    aria-describedby="emailHelp"
                    placeholder="Enter your name here"
                    name="title"
                    onChange={onChangee}
                    value={useredetail.title}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    body
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="body"
                    placeholder="Enter a Email Address"
                    name="body"
                    onChange={onChangee}
                    value={useredetail.body}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={onSubmitt}
                >
                  Edit User
                </button>
              </form>
            </div>
            <div
              className="modal-footer"
              style={{ backgroundColor: "red", color: "white" }}
            >
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*this code is for model that is used by the users to e */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{ display: "none" }}
        ref={myref}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{ backgroundColor: "red", color: "white" }}
            >
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <div className="mb-3">
                    <label htmlFor="userid" className="form-label">
                      Id
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="userid"
                      name="id"
                      style={{ width: "20%" }}
                      value={userdetail.id}
                      onChange={onChange}
                    />
                  </div>
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="Enter your name here"
                    value={userdetail.title}
                    name="title"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter a Email Address"
                    name="body"
                    value={userdetail.body}
                    onChange={onChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={onSubmit}
                >
                  Add
                </button>
              </form>
            </div>
            <div
              className="modal-footer"
              style={{ backgroundColor: "red", color: "white" }}
            >
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <TableItem
          data={data}
          onclick={handleClick}
          onDclick={handleDclick}
          onEclick={handleEclick}
        />
      </div>
    </>
  );
}

export default App;
