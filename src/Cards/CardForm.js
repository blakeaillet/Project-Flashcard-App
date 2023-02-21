import React from "react";
import { useHistory, } from "react-router-dom";

function CardForm({ handleChange, handleSubmit, front, back, deck }) {
  const history = useHistory();
  
  return (
    <div>
      <h1>CardForm</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="front">Front</label>
          <textarea 
          type="text"
          name="front" 
          className="form-control" 
          id="front" 
          placeholder="Front side of the card"
          onChange={handleChange}
          value={front}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="back">Back</label>
          <textarea 
          type="text"
          name="back" 
          className="form-control" 
          id="back" 
          placeholder="Back side of the card"
          onChange={handleChange}
          value={back}
          ></textarea>
        </div>
        <button type="button" className="btn btn-secondary mx-1" onClick={() => history.push(`/decks/${deck.id}`)}>Done</button>
        <button type="submit" className="btn btn-primary" >Save</button>
      </form>
    </div>
  )
}

export default CardForm;