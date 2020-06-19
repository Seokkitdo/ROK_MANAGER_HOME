import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import i18next from "../config/lang/i18n";
import { Dropdown } from "react-bootstrap";

class MainComponent extends Component {
  state = {
    languageTitle: "한국어",
  };
  changeLanguage = (e) => {
    // 언어변경
    i18next.changeLanguage(e.split(",")[0]);
    // 이름변경
    this.setState({ languageTitle: e.split(",")[1] });
  };

  render() {
    const { t } = this.props;
    return (
      <div>
        <Dropdown onSelect={this.changeLanguage}>
          <Dropdown.Toggle variant="secondary" size="sm">
            {this.state.languageTitle}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey={["ko", "한국어"]}>한국어</Dropdown.Item>
            <Dropdown.Item eventKey={["en", "ENGLISH"]}>ENGLISH</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <p>{t("Welcome to ROK-MANAGER")}</p>
      </div>
    );
  }
}
export default withTranslation()(MainComponent);
