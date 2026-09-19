import { useState } from 'react';

function App() {

  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  // Add activity
  function addActivity() {

    if (activity.trim() === "") {
      return;
    }

    setListData((prevList) => [
      ...prevList,
      activity
    ]);

    setActivity("");
  }

  // Remove specific activity
  function removeActivity(indexToRemove) {

    setListData((prevList) =>
      prevList.filter((_, index) => index !== indexToRemove)
    );
  }

  // Remove all activities
  function removeAll() {
    setListData([]);
  }

  return (
    <>
      <div>

        <div>TODO LIST</div>

        <br />

        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />

        <button onClick={addActivity}>
          ADD
        </button>

        <br />

        <p>Here is your list:</p>

        {listData.length > 0 && (
          <>
            {listData.map((data, i) => (
              <div key={i}>

                <span>{data}</span>

                <button onClick={() => removeActivity(i)}>
                  Remove
                </button>

              </div>
            ))}

            <br />

            <button onClick={removeAll}>
              Remove All
            </button>
          </>
        )}

      </div>
    </>
  );
}

export default App;