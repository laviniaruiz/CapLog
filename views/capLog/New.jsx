import React from "react";

function New() {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let today = `${month}/${day}/${year}`
  return (
    <div>
      <h1>New Captains Log</h1>
      <form action="/capLog" method="POST">
        <label htmlFor="ttl">Title:</label>
        <br />
        <input type="text" id="ttl" name="title" />
        <br />
        <br />

        <label htmlFor="entry">Entry:</label>
        <br />
        <input type="text" id="entry" name="entry" />
        <br />
        <br />

        <label htmlFor="ts">Time Stamp:</label>
        <br />
        <input type="text" id="ts" name="ts" value={today} />
        <br />
        <br />

        <input
          type="checkbox"
          id="shipIsBroken"
          name="shipIsBroken"
          value="shipIsBroken"
        ></input>
        <label htmlFor="shipIsBroken">Ship Is Broken</label>
        <br></br>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default New;