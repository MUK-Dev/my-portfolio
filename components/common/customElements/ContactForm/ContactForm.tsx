import { useState } from 'react';

import s from './ContactForm.module.css';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const submitForm = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formBody = [];

    const emailKey = encodeURIComponent('email');
    const emailValue = encodeURIComponent(email);
    const nameKey = encodeURIComponent('name');
    const nameValue = encodeURIComponent(name);
    const messageKey = encodeURIComponent('message');
    const messageValue = encodeURIComponent(message);

    formBody.push(emailKey + '=' + emailValue);
    formBody.push(nameKey + '=' + nameValue);
    formBody.push(messageKey + '=' + messageValue);

    await fetch(
      'https://script.google.com/macros/s/AKfycbzCBKV7e9BtmMF2Sl0lvnYlNNZ7AA3YZMDGJEXlHK44dQX-DPQH9Ba0mF5ANUNGxVrhQg/exec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.join('&'),
      }
    )
      .then(() => {
        setLoading(false);
        setEmail('');
        setMessage('');
        setName('');
      })
      .catch((_) => {
        setLoading(false);
      });
  };

  return (
    <form
      onSubmit={submitForm}
      className={`center-align card z-index0 ${s.root}`}
    >
      {loading ? (
        <div className='progress'>
          <div className='indeterminate'></div>
        </div>
      ) : null}
      <h2>Get In Touch</h2>
      <div className='input-field col s12'>
        <input
          id='email'
          type='text'
          name='email'
          value={email}
          className='validate white-text'
          placeholder='Email'
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='input-field col s12'>
        <input
          id='name'
          required
          type='text'
          name='name'
          value={name}
          placeholder='Full Name'
          className='validate white-text'
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='input-field col s12'>
        <textarea
          id='textarea1'
          placeholder='Message'
          name='message'
          value={message}
          required
          className='materialize-textarea white-text'
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button className='btn-floating halfway-fab waves-effect waves-light red'>
        <i className='material-icons'>send</i>
      </button>
    </form>
  );
};

export default ContactForm;
