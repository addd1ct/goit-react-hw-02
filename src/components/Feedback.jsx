export default function Feedback({ feedback, totalFeedback, positiveFeedback }) {
  return (
    <div className="feedback">
      <h2>Feedback Statistics</h2>
      <p>Total feedback: {totalFeedback}</p>
      <p>Positive feedback: {positiveFeedback}%</p>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
    </div>
  );
}
