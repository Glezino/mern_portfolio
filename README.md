# MERN PORTFOLIO

![](/client/public/image0.png)
![](/client/public/image6.png)

# Technologies 
### MERN 
MongoDB, Expressjs, React/Redux, Nodejs

## Tech-stack
| Frontend        | Backend        |
|-----------------|----------------|
| react: ^18.2.0  | cors: ^2.8.5   |
| react-dom: ^18.2.0 | dotenv: ^16.4.5 |
| react-redux: ^9.1.0 | express: ^4.19.2 |
| react-router-dom: ^6.22.3 | mongoose: ^8.3.0 |
| redux: ^5.0.1   | nodemon: ^3.1.0 |
| @reduxjs/toolkit: ^2.2.3 |               |
| antd: ^5.16.1   |               |
| axios: ^1.6.8   |               |
| three: ^0.163.0 |               |




# Project Structure
```
server/
    package.json  
    .env
client/
    package.json
```
# Installation & Usage
Clone repository:
```
git clone <this_repo>
```
Client-side (PORT:5173)
```
cd client
npm i
npm run dev
```
Server-side (PORT:5000)
```
cd server
npm i
nodemon server
```
Create a db in localhost or Atlas  
Create .env and add the url:  
```
mongodb_url = mongodb://localhost:27017/db_name
 ```
Alternatively, change the connection in <span style="color:red">dbConfig.js</span>  
```
mongoose.connect('mongodb://localhost:27017/mern_portfolio');
```
After refreshing the db, copy the data stored in <span style="color:red">client/staticData.js</span> into the created entities    
# TODO
Login security  
Contact form with backend  
Frontend test  
Backend test  
Add inmersive experience  
Responsive Design  







