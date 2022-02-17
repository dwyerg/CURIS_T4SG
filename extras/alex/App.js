import './App.css';

const App = () => {
  return (
    <>
      <centerAllCont>

        <h1>What Do We Do?</h1>
        <div className="row">
          <div className="column" style={{ backgroundColor: '#88b3da'}}>
            <h2 id = "w">Consult</h2>
            <p id = "w">We <b>aid local organizations</b> in their efforts to improve public health</p>
          </div>
          <div className="column" style={{ backgroundColor: '#e6f2f6'}}>
            <h2 id="b2">Educate</h2>
            <p id="b2">We <b>raise awareness</b> of various public health issues relevant to the local area</p>
          </div>
          <div className="column" style={{ backgroundColor: '#88b3da'}}>
            <h2 id = "w">Consult</h2>
            <p id = "w">We strive to continuously <b>advance our understanding</b> of public health issues</p>
          </div>
        </div>


      </centerAllCont>
      <h3>2020-2021</h3>

    </>
  );
}

export default App;
