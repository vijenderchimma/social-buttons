const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={className}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="main-container">
    <h1 className="main-heading">Social Buttons</h1>
    <div className="card-container">
      <Button buttonText="Like" className="button1" />
      <Button buttonText="Comment" className="button2" />
      <Button buttonText="Share" className="button3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
