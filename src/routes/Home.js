import React from 'react';
import {Link} from 'react-router';

const logo = require('../images/tesis.jpg')

export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class='home'>
        <img class='center-block' src={logo} alt="Logo"/>
      	<h1 class='text-center'>React Facilito, Pasa y Firma</h1>
      	<button class="btn btn-default btn-lg center-block">
          <Link to='sign'>Firma ahora !</Link>
        </button>
      </div>
    );
  }
}
