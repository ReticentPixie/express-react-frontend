// ========== IMPORT DEPENDENCIES ==========
import { useState} from 'react';

// ========== Define the function that is the Component ==========
// ----- be sure to declare props -----
const Show = (props) => {
    // create a local variable for the id
    const id = props.match.params.id;
    // create a shortcut variable
    const people = props.people;
    // find the specific person inside the array that we want by their id
    const person = people.find((p) => p._id === id);

    // initialize state for updateForm - initialized to a person so the form will be pre-populated with the person's information
    const [editForm, setEditForm] = useState(person);

    // handleChange function for the form
    const handleChange = (event) => {
        // use call back pattern - all we need to do is change the formState to the new information
        setEditForm((prevState) => ({
            ...prevState,
            // [event.target.name] is computed properties - it means it will be name, title, or image based on what triggered the event
            // computed properties makes it easier to dynamically select properties within an object
            [event.target.name]: event.target.value,
        }));
    };

    // handleSubmit for the form
    const handleSubmit = (event) => {
        // prevent submit default behavior
        event.preventDefault();
        // call updatePeople helper function and pass in editForm for the data and the id
        props.updatePeople(editForm, person._id);
        // redirect people back to the index
        // .push is a method of .history within props - it allows us to push locations into the browser's history
            // programatically routes us back to the index page
        props.history.push('/');
    };

    // helper function to remove/delete a person
    const removePerson = () => {
        console.log('made it here')
        // call deletePeople helper function and pass it the person's id
        props.deletePeople(person._id);
        // redirect people back to the index or main list of people
        props.history.push('/');
    };

    // ----- RETURN some JSX -----
    return (
        <div className='person'>
          <h1>{person.name}</h1>
          <h2>{person.title}</h2>
          <img src={person.image} alt={person.name} />
          {/* add a button that will call removePerson when clicked */}
          <button id='delete' onClick={removePerson}>DELETE</button>
          {/* add a form that is pre-populated with the person's information and will call handleChange if/when any field is edited */}
          <form onSubmit={handleSubmit}>
              <input type='text' value={editForm.name} name='name' placeholder='name' onChange={handleChange} />
              <input type='text' value={editForm.image} name='image' placeholder='image' onChange={handleChange} />
              <input type='text' value={editForm.title} name='title' placeholder='title' onChange={handleChange} />
              <input type='submit' value='Update Person' />
          </form>
        </div>
      );
};

// ========== EXPORT the COMPONENT ==========
export default Show;