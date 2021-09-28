import React from "react";
import "../Styles/modal.css";

function Modal({ closeModal }) {
    return (
        <div className="modal-position">
            <div className="modal-container">
                <div className="modal-header">
                    <h3 className="title">Hello im Modal</h3>
                </div>
                <div className="modal-body">
                    <p>
                        This HTML file is a template. If you open it directly in
                        the browser, you will see an empty page. You can add
                        webfonts, meta tags, or analytics to this file. The
                        build step will place the bundled scripts into the tag.
                        To begin the development, run `npm start` or `yarn
                        start`. To create a production bundle, use `npm run
                        build` or `yarn build`.
                    </p>
                </div>
                <div className="modal-footer">
                    <button onClick={() => closeModal(false)}>agree</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
