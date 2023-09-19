
import {useState, useEffect} from 'react'

const Form = (props) => {

    const[formData, setFormData] = useState({
        seatchterm: "",
    });
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        props.moviesearch(formData.searchterm);
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
}

export default Form