// ========== IMPORT DEPENDENCIES ==========
import { Link } from 'react-router-dom'
// import { useState } from 'react';
import Form from '../components/Form'

// ========== Define the function that is the Component ==========
// ----- be sure to declare props -----
const Index = (props) => {
    /*
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

    // handleSubmit funciton for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createPeople(newForm);
        setNewForm({
            name: '',
            image: '',
            title: '',
        });
    };
    */

    // loaded function
    const loaded = () => {
        return props.people.map((person) => (
            <div key={person._id} className='person'>
                <Link to={`/people/${person._id}`}>
                    <h1>{person.name}</h1>
                </Link>
                <img style={{height: 250, borderRadius: '50%'}} src={person.image} alt={person.name} />
                <h3>{person.title}</h3>
            </div>
        ));
    };

    // loading function
    const loading = () => {
        return <h1>Loading...</h1>
    };

    // ----- RETURN some JSX -----
    return (
        <section>
            {/* <form onSubmit={handleSubmit}>
                <input type='text' value={newForm.name} name='name' placeholder='name' onChange={handleChange} />
                <input type='text' value={newForm.image} name='image' placeholder='image' onChange={handleChange} />
                <input type='text' value={newForm.title} name='title' placeholder='title' onChange={handleChange} />
                <input type='submit' value='Create Person' />
            </form> */}
            <Form createPeople={props.createPeople} />
            {props.people ? loaded() : loading()}
        </section>
    );
}

// ========== EXPORT the COMPONENT ==========
export default Index;