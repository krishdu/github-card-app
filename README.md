# Getting Started with First React App 😀

### Github Card App
> It's a basic app to show github user's profile if user input input github handles.
> I have created this for learning React. Here I first started with React Class Component.
 
* Learnings: 
    * How to create React App with NPX.
    * How to pass Props (properties) from one component to other.
    
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

| [Live Application (👆)](https://github-card-application.herokuapp.com/) |
| ------ |  

<p align="center">
<img alt="GIF" src="https://github.com/krishdu/github-card-app/blob/master/github-card-image-v1.gif?raw=true" width="800" height="400"/>
</p>

## ✨ My Thought Process ✨
```
Step 1
```
+ Create a Card component and show static data

```
Step 2
```
 + Create a CardList component and show list of static data

```
Step 3
```
 + Create a Form component to get user data
```
Step 4
```
 + install axios to call HTTP get method `npm i axios`
 + make GET request `https://api.github.com/users/<userHandle>`
 + populate data in console

```
Step 5
```
 + handle the state in parent component (i.e. App)
 + Render each profile

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
