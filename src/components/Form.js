import React from 'react';
import './css.css';

const Form = props => (
    <div className="Form-Container">
        <form onSubmit={props.getFunction} className="query">
            <input type="text" className="searchtext" name="searchtext" />
            <button>search</button>
        </form>

    </div>

);
export default Form;