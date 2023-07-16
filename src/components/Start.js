function Start({ length, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the react Quiz !</h2>
      <h3>{length} questions to test your React Mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default Start;
