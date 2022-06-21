import React, { useContext } from "react";
import { Context } from "../App";
import {ReactComponent as DeleteIcon} from '../svg/delete.svg'

export default function MessageBuilder() {
  const { message, setMessage } = useContext(Context);

  return (
    <div className="message-container">
      <input
        type="radio"
        name="message-container"
        id="tab1"
        aria-controls="message"
        readOnly
        checked
      />
      <label htmlFor="tab1">Variant 1</label>

      <div className="tab-panels">
        <textarea
          className="tab-panel"
          id="message"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button className='tab-panels-button' onClick={() => setMessage('')}><DeleteIcon stroke='#B0B1B6'/></button>
      </div>
      <span>Length {message.length} chars</span>
    </div>
  );
}
