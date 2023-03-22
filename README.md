# Chatistics
A WhatsApp Chat analyzer and statistics. 

![GitHub contributors](https://img.shields.io/github/contributors/SkSumit/Chatistics?style=flat-square)
![GitHub forks](https://img.shields.io/github/forks/SkSumit/Chatistics?style=flat-square)
![GitHub Repo stars](https://img.shields.io/github/stars/SkSumit/Chatistics?style=flat-square)
![Packagist License](https://img.shields.io/github/license/SkSumit/Chatistics?style=flat-square)




<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a >
    <img src="images/icons8-whatsapp.gif" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Chatistics</h3>

  <p align="center">
   A WhatsApp Chat analyzer and statistics. 
    <br />
    <a ><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://chatistics.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/SkSumit/Chatistics/issues">Report Bug</a>
    ·
    <a href="https://github.com/SkSumit/Chatistics/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#running">Running</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![product-gif](/images/Chatistics.gif)


#### Chatistics is an open source WhatsApp chat analyzer, which provides fun and meaningful insights. We respect privacy and do not store the chats, we only store filenames for our analytics.

### Built With

Frameworks used in the website
* [Next.js](https://nextjs.org/)
* [Flask](https://flask.palletsprojects.com/en/1.1.x)
* [Pandas](https://pandas.pydata.org/)



<!-- GETTING STARTED -->
##  ⚡️ Getting Started


### Prerequisites

Tools needed to run this project
* python
* yarn 
  
###  📦 Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install packages

#### Backend

```bash
cd .\backend\
pip install virtualenv
virtualenv env
env\Scripts\activate
pip install -r requirements.txt
```

#### Frontend

```bash
cd .\frontend\
yarn install
```   
3. Get your API Keys for [Firebase](https://firebase.google.com/)
 
4.Create an `.env` file, in the `backend` folder and add your API keys
  ```PY
  FIREBASE_API_KEY= '<Your API KEY>',
  FIREBASE_AUTH_DOMAIN= '<Your API KEY>',
  FIREBASE_PROJECT_ID= '<Your API KEY>',
  FIREBASE_STORAGE_BUCKET= '<Your API KEY>',
  FIREBASE_MESSAGING_SENDER_ID= '<Your API KEY>',
  FIREBASE_APP_ID= '<Your API KEY>'
  FIREBASE_MEASUREMENT_ID= '<Your API KEY>'
  FIREBASE_DATABASE_URL= '<Your API KEY>'
  ```

<!-- USAGE EXAMPLES -->
## 🐎 Running

Backend would be running on PORT 5000

```bash
python run.py
```
 ***Open new terminal to run front-end***

Frontend would be running on PORT 3000

```bash
yarn run dev
```


## Usage

* For analysing your personal or group chats.



<!-- ROADMAP -->
## 🚧 Roadmap

See the [open issues](https://github.com/SkSumit/Chatistics/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## 🔧 Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## 📄 License

Distributed under the GNU General Public License. See `LICENSE` for more information.



<!-- CONTACT -->
## 🤙 Contact

Atharva Kulkarni - [@LinkedIn](https://www.linkedin.com/in/atharva-kulkarni-b119b7195/) - mailmenehakulkarni@gmail.com

Sumit Kolpekwar - [@LinkedIn](https://www.linkedin.com/in/sumitkolpekwar/) - kolsum24@gmail.com

Yash Dewangan - [@LinkedIn](https://www.linkedin.com/in/yash-dewangan-903346132/) - yashdewangan123456@gmail.com

Project Link: [Chatistics](https://github.com/SkSumit/Chatistics/tree/main)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [ReadMe Template](https://github.com/othneildrew/Best-README-Template)
* [Img Shields](https://shields.io)
* [Vercel](https://vercel.com/)
* [Heroku](https://heroku.com/)
* [Bulma](http://bulma.io/)
* [Recharts](http://recharts.org/)
* [Font Awesome](https://fontawesome.com)

