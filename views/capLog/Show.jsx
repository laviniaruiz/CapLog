import React from "react";
import DefaultLayout from "../layouts/DefaultLayouts";

function Show(props) {
  console.log(props)
  return (
    <DefaultLayout>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1>Title: {props.caplog.title}</h1>
        <h1>Entry: {props.caplog.entry}</h1>
        <h1>USS Ship: {props.caplog.shipIsBroken}</h1>{props.caplog.shipIsBroken ? 'is NOT broken' : 'BROKEN!!!!! FIX IT ASAP BITCH'}
        <br />
        <br />
        <div className="d-flex">
          <a href={`/caplogs/${props.caplog._id}/edit`}>
            <button className="btn btn-outline-primary">Edit</button>
          </a>
          <form
            action={`/caplogs/${props.caplog._id}?_method=DELETE`}
            method="POST"
          >
            <button className="btn btn-outline-danger mx-5">Delete</button>
          </form>
          <a href="/caplogs">
            <button className="btn btn-outline-dark">Back</button>
          </a>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Show;
