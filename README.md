# Chat Application Frontend (Client-Side)
## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Introduction
Welcome to the Chat Application Frontend repository! This project is a React-based web application that allows users to engage in real-time chat within a chatroom or privately with other users.

## Features
Public chatroom
Private messaging between users
Real-time updates using WebSocket.io
User registration and connection management

# Getting Started
## Installation
1.Clone the repository to your local machine:
## git clone https://github.com/AakashDevilstar/Real-Time-Chat-Application

2.Navigate to the project directory:
## cd Client-Side

3.Install the project dependencies:
## npm install

## Running the Application
To run the application locally, follow these steps:

1. Start the development server: npm run start

2. Open your web browser and navigate to http://localhost:3000.

## Usage
Upon accessing the application, users can register their username.
Users can join the public chatroom or initiate private chats with other users.
Real-time messages are displayed in the chatbox.


## Technologies Used
React,WebSocket.io,SockJS,Stomp.js

## Contributing
If you'd like to contribute to this project, please follow the Contributing Guidelines.

## License
This project is licensed under the MIT License.

## Acknowledgments
Special thanks to the [WebSocket.io](https://socket.io/) and [React](https://react.dev/) communities for their excellent tools and documentation.


# Chat Application Backend (Server-Side)
This repository contains the backend code for a real-time chat application developed using Java, Spring Boot, and WebSocket.io.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [WebSocket Configuration](#websocket-configuration)
- [Chat Controller](#chat-controller)
- [Message Model](#message-model)
- [Status Enum](#status-enum)
- [Running the Backend](#running-the-backend)
- [Connect Backend with Frontend](#connect-backend-with-frontend)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This backend code serves as the server-side implementation for a real-time chat application. It is built using Java, Spring Boot, and WebSocket.io.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Java](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [Eclipse IDE](https://www.eclipse.org/downloads/)

## Getting Started

To get started with the backend, follow these steps:

1. Open Eclipse IDE.
2. Import the Server-Side folder into Eclipse.
3. Navigate to the Run Configurations.
4. Choose "Run as" > "Configurations..."
5. Browse and select the project: Server-Side folder.
6. Choose "Search" and select the Main Class: `com.involveininnovation.chat.ChatApplication`.
7. Click "Run."

## Project Structure

- `ChatApplication.java`: Spring Boot main application class.
- `WebSocketConfig.java`: WebSocket configuration class.
- `ChatController.java`: Controller handling chat-related messages.
- `Message.java`: Model representing a chat message.
- `Status.java`: Enum representing different message statuses.

## WebSocket Configuration

The WebSocket configuration is handled in `WebSocketConfig.java`, where Stomp endpoints are registered, and message broker configurations are set.

## Chat Controller

`ChatController.java` is responsible for handling incoming messages from clients. It includes methods to receive and send messages to the public chatroom and private messages between users.

## Message Model

The `Message.java` class represents a chat message, including sender name, receiver name, message content, date, and status.

## Status Enum

`Status.java` is an enum representing different statuses for a chat message, including JOIN, MESSAGE, and LEAVE.

## Running the Backend

Ensure the backend is running and accessible at `http://localhost:8080`.

## Connect Backend with Frontend

Refer to the frontend README for instructions on connecting the frontend to the backend.

## Contributing

If you'd like to contribute to this project, please follow the [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
