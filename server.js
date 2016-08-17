/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');

// Server

const express = require('express');
const http = require('http');
const engine = require('socket.io');

const port = 3000;
const app = express();

let data = [
	{id: 1, author: 'Cosa uno', text: 'Comentario'},
	{id: 2, author: 'Cosa dos', text: 'Otro Comentario'}
];

const request = require('request');

let server = app.listen(port);

const io = engine.listen(server);

io.on('connection', (socket) => {
	io.emit('Connection success');

	socket.on('read',() => {
		io.emit('data',data)
	})

	socket.on('sign', (sign) => {
		data.unshift(sign)
		io.emit('data',data)
	});
});

// Server end

new WebpackDevServer(webpack(config), config.devServer)
.listen(config.port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at 0.0.0.0:' + config.port);
  console.log('Opening your system browser...');
  open('http://0.0.0.0:' + config.port);
});
