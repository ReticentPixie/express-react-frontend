// ========== IMPORT DEPENDENCIES ==========
import { useState } from 'react';

// ========== Define the function that is the Component ==========
// ----- be sure to declare props -----
const Form = (props) => {
    // state to hold formData
    const [newForm, setNewForm] = useState({
        name: '',
        image: '',
        title: '',
    });

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createPeople(newForm);
        setNewForm({
            name: '',
            image: '',
            title: '',
        });
    };

    // ----- RETURN some JSX -----
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input type='text' value={newForm.name} name='name' placeholder='name' onChange={handleChange} />
                <input type='text' value={newForm.image} name='image' placeholder='image' onChange={handleChange} />
                <input type='text' value={newForm.title} name='title' placeholder='title' onChange={handleChange} />
                <input type='submit' value='Create Person' />
            </form>
        </section>
    );
};

// ========== EXPORT ==========
export default Form;