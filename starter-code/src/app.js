import React from "react";

// const FormFields = props => {
//   return (
//     <div>
//       <input label="Name" type="text" placeholder="e.g Alex Smith" />
//       <FormField
//         label="Email"
//         type="email"
//         placeholder="e.g. alexsmith@gmail.com"
//       />
//     </div>
//   );
// };
const finalClass = {
  isActive: "is-active",
  isBlack: "is-black",
  isCentered: "is-centered",
  isDanger: "is-danger",
  isDark: "is-dark",
  isFocused: "is-focused",
  isGrouped: "is-grouped",
  isHovered: "is-hovered",
  isInfo: "is-info",
  isInverted: "is-inverted",
  isLarge: "is-large",
  isLight: "is-light",
  isLink: "is-link",
  isLoading: "is-loading",
  isMedium: "is-medium",
  isOutlined: "is-outlined",
  isPrimary: "is-primary",
  isRight: "is-right",
  isRounded: "is-rounded",
  isSelected: "is-selected",
  isSmall: "is-small",
  isStatic: "is-static",
  isSuccess: "is-success",
  isText: "is-text",
  isWarning: "is-warning",
  isWhite: "is-white"
};

const CoolButton = props => {
  console.log("LOOKIE", props);
  let newStr = "";
  let arr = Object.keys(finalClass);
  for (var key in arr) {
    if (props[key]) {
      newStr += " " + finalClass[key];
    }
  }
  return (
    <div>
      <button className={newStr}>{props.children}</button>
    </div>
  );
};
const FormField = props => {
  return (
    <div>
      <label className={props.class}></label>
      <input
        className={props.class}
        type={props.type}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
};

const Form = props => {
  // console.log("These are the props: ", props)
  return (
    <div>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="e.g Alex Smith" />
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input
            className="input"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
        </div>
      </div>
    </div>
  );
};

const Navbar = props => {
  return (
    <div>
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>

          <CoolButton isSmall isDanger className="button is-primary">
            Login
          </CoolButton>
          <CoolButton
            isSmall
            isSuccess
            className="button is-success is-primary is-small"
          >
            Signup
          </CoolButton>
          <div
            className="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="https://bulma.io/">
              Home
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a
                className="navbar-link"
                href="https://bulma.io/documentation/overview/start/"
              >
                Docs
              </a>
              <div className="navbar-dropdown is-boxed">
                <a
                  className="navbar-item"
                  href="https://bulma.io/documentation/overview/start/"
                >
                  Overview
                </a>
                <a
                  className="navbar-item"
                  href="https://bulma.io/documentation/modifiers/syntax/"
                >
                  Modifiers
                </a>
                <a
                  className="navbar-item"
                  href="https://bulma.io/documentation/columns/basics/"
                >
                  Columns
                </a>
                <a
                  className="navbar-item"
                  href="https://bulma.io/documentation/layout/container/"
                >
                  Layout
                </a>
                <a
                  className="navbar-item"
                  href="https://bulma.io/documentation/form/general/"
                >
                  Form
                </a>
                <hr className="navbar-divider" />
                <a
                  className="navbar-item"
                  href="https://bulma.io/documentation/elements/box/"
                >
                  Elements
                </a>
                <a
                  className="navbar-item is-active"
                  href="https://bulma.io/documentation/components/breadcrumb/"
                >
                  Components
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a
                    className="bd-tw-button button"
                    data-social-network="Twitter"
                    data-social-action="tweet"
                    data-social-target="https://bulma.io"
                    target="_blank"
                    href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms"
                  >
                    <span className="icon">
                      <i className="fab fa-twitter"></i>
                    </span>
                    <span>Tweet</span>
                  </a>
                </p>

                <p className="control">
                  <a
                    className="button is-primary"
                    href="https://github.com/jgthms/bulma/releases/download/0.8.0/bulma-0.8.0.zip"
                  >
                    <span className="icon">
                      <i className="fas fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

const Signup = () => {
  return (
    <div>
      <Navbar />
      <Form />
    </div>
  );
};

const App = props => {
  return (
    <div>
      <Navbar />
      <FormField class="name" placeholder="Name" type="text">
        {" "}
        Name
      </FormField>
      <Form />
    </div>
  );
};

export default App;
