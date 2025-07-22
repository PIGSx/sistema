import "./erro.scss";

const index = () => {
  return (
    <>
    <a
        href="https://codepen.io/ZonFire99/full/njdls/"
        className="viewFull"
        target="_parent"
        rel="noopener noreferrer"
      >
        View in full it looks way better :)
      </a>

      <div className="error">
        <div className="wrap">
          <div className="404">
            <pre>
              <code>
                <span className="green">&lt;!</span>
                <span>DOCTYPE html</span>
                <span className="green">&gt;</span>
                {"\n"}
                <span className="orange">&lt;html&gt;</span>
                {"\n    "}
                <span className="orange">&lt;style&gt;</span>
                {"\n   "}* {"{"}
                {"\n            "}
                <span className="green">everything</span>:
                <span className="blue">awesome</span>;
                {"\n"}{"}"}
                {"\n    "}
                <span className="orange">&lt;/style&gt;</span>
                {"\n "}
                <span className="orange">&lt;body&gt;</span>
                {"\n              "}ERROR 404!
                {"\n        "}FILE NOT FOUND!
                {"\n        "}
                <span className="comment">
                  &lt;!--The file you are looking for,{"\n"}          is not
                  where you think it is.--&gt;
                </span>
                {"\n"}
                <span className="orange">&lt;/body&gt;</span>
                {"\n"}
                <span className="orange">&lt;/html&gt;</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
