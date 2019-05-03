import React from 'react'
import './index.scss'

export default function ApiModal() {
  return(
    <div className='api-modal__instruction'>
      <ol>
        <li>Go to <a href='https://www.football-data.org/' target='_blank' rel='noopener noreferrer'>Site</a></li>
        <li>
          Click to "Get your free API key" or "Get started"
          <img
            src='https://firebasestorage.googleapis.com/v0/b/football-b08dd.appspot.com/o/Screenshot_1.png?alt=media&token=f03a6baf-0ec6-40d3-91a1-da65b0169486'
            alt='tutorial'
          /></li>
        <li>
          Use this form to create account
          <img src='https://firebasestorage.googleapis.com/v0/b/football-b08dd.appspot.com/o/Screenshot_2.png?alt=media&token=f065bc95-aeee-4836-afc4-1154c7d2c8fb' alt='tutorial'/>
        </li>
        <li>
          Check your mail, copy your token and put it into the field "Your API token"
          <img
            src='https://firebasestorage.googleapis.com/v0/b/football-b08dd.appspot.com/o/Screenshot_3.png?alt=media&token=42da679d-f0d9-42e0-a0c5-430b3dbcef41'
            alt='tutorial'/>
        </li>
        <li>
          Click "TEST" to check token.
        </li>
      </ol>
      <p>P.S. If you have a problem just send me a mail <b>Palllke@yahoo.com</b></p>
    </div>
  )
}
