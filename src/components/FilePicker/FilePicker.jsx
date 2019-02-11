import React, { PureComponent } from "react";
import { readJSON } from "../../utils/read";

import "./FilePicker.css";

export class FilePicker extends PureComponent {
  selectFile = ({ target: input }) => {
    const { onReadEnd } = this.props;
    return readJSON(input, onReadEnd);
  };

  render() {
    const { className } = this.props;

    return (
      <label className={`file-picker-label ${className}`} htmlFor="file-picker">
        Загрузить JSON
        <input
          type="file"
          id="file-picker"
          className="file-picker"
          onChange={this.selectFile}
        />
      </label>
    );
  }
}

export default FilePicker;
