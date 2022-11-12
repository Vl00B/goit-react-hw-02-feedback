export const FeedbackOptions = props => (
  <>
    <button onClick={props.positive} type="button">
      good
    </button>
    <button onClick={props.neutral} type="button">
      neutral
    </button>
    <button onClick={props.negative} type="button">
      bad
    </button>
  </>
);
