export default function Options({ updateFeedback, feedback, totalFeedback }) {
  const handleReset = () => {
    updateFeedback('reset');
  };

  return (
    <div className="options">
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={handleReset}>Reset</button>
      )}
    </div>
  );
}
