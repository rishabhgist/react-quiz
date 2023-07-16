function Options({ question, dispatch, answer }) {
  const hasAnswred = answer !== null;

  return (
    <div className="options">
      {question.options.map((o, i) => (
        <button
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            hasAnswred
              ? i === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={o}
          disabled={answer !== null}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export default Options;
