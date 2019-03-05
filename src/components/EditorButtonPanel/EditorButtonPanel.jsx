import React from "react";
import { readJSON } from "../../utils/read";

import "./EditorButtonPanel.scss";

const EditorButtonPanel = props => {
  const selectFile = ({ target: input }) => {
    const { onReadEnd } = this.props;
    return readJSON(input, onReadEnd);
  };
  const { onSave } = props;

  return (
    <section className="graph-buttons">
      <button className={"button"} onClick={onSave}>
        Save and exit
      </button>
      {/* <label className={`file-picker-label`} htmlFor="file-picker">
            Загрузить JSON
            <input
              type="file"
              id="file-picker"
              className="file-picker"
              onChange={this.selectFile}
            />
          </label>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.saveGraph}
          >
            Сохранить результаты
          </button> */}
    </section>
  );
};

export default EditorButtonPanel;
