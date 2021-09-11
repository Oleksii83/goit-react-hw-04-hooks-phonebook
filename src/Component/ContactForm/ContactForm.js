import { useState } from 'react';
import shortid from 'shortid';
import './ContactForm.css';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  return (
    <form className="Input-container" onSubmit={handleSubmit}>
      <h3 className="Input-name"> Name </h3>
      <label htmlFor={nameInputId}>
        <input
          className="Input"
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className="TelInputContainer" htmlFor={numberInputId}>
        <h3 className="Input-name"> Number </h3>
        <input
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          id={numberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button type="submit" className="input-btn">
        Add contact
      </button>
    </form>
  );
}

// class OldContactForm extends Component {
//   state = {
//     contacts: [],
//     name: '',
//     number: '',
//   };

//   nameInputId = shortid.generate();
//   numberInputId = shortid.generate();

//   handleChange = e => {
//     this.setState({
//       [e.currentTarget.name]: e.currentTarget.value,
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state);

//     this.reset();
//   };
//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <form className="Input-container" onSubmit={this.handleSubmit}>
//         <h3 className="Input-name"> Name </h3>
//         <label htmlFor={this.nameInputId}>
//           <input
//             className="Input"
//             value={this.state.name}
//             onChange={this.handleChange}
//             type="text"
//             name="name"
//             id={this.nameInputId}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//           />
//         </label>
//         <label className="TelInputContainer" htmlFor={this.numberInputId}>
//           <h3 className="Input-name"> Number </h3>
//           <input
//             value={this.state.number}
//             onChange={this.handleChange}
//             type="tel"
//             name="number"
//             id={this.numberInputId}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             required
//           />
//         </label>
//         <button type="submit" className="input-btn">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// export default ContactForm;
