## --------------- _Galvanize MCSP-16 Team 5_ ---------------

# Front End Capstone Project : AirBnB UI Clone

## Tech Stack

![Vite](https://camo.githubusercontent.com/c1ee3046774b3a0f6165dbe7f4e8a323f583f21e48d60a4dba8edb49fc2463bc/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f566974652d4237334246453f7374796c653d666f722d7468652d6261646765266c6f676f3d76697465266c6f676f436f6c6f723d464644363245)
![React](https://camo.githubusercontent.com/ab4c3c731a174a63df861f7b118d6c8a6c52040a021a552628db877bd518fe84/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642)
![Javascript](https://camo.githubusercontent.com/93c855ae825c1757f3426f05a05f4949d3b786c5b22d0edb53143a9e8f8499f6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d3332333333303f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d463744463145)
![CSS](https://camo.githubusercontent.com/e6b67b27998fca3bccf4c0ee479fc8f9de09d91f389cccfbe6cb1e29c10cfbd7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465)
![HTML5](https://camo.githubusercontent.com/49fbb99f92674cc6825349b154b65aaf4064aec465d61e8e1f9fb99da3d922a1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465)
![Bootstrap](https://camo.githubusercontent.com/b13ed67c809178963ce9d538175b02649800772be1ce0cb02da5879e5614e236/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f426f6f7473747261702d3536334437433f7374796c653d666f722d7468652d6261646765266c6f676f3d626f6f747374726170266c6f676f436f6c6f723d7768697465)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgresQL](https://camo.githubusercontent.com/29e7fc6c62f61f432d3852fbfa4190ff07f397ca3bde27a8196bcd5beae3ff77/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f706f7374677265732d2532333331363139322e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d706f737467726573716c266c6f676f436f6c6f723d7768697465)
![Docker](https://camo.githubusercontent.com/63350538fde994bc287ccd4908809301e157980e6564bf78d2c5cec22c0a5914/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446f636b65722d3243413545303f7374796c653d666f722d7468652d6261646765266c6f676f3d646f636b6572266c6f676f436f6c6f723d7768697465)

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

## Objectives & Minimum Requirements

- Build a Full Stack UI Clone of a popular existing app’s “item detail page”
- Page must contain many distinct modules of related functionality (min. 4)
- Selected App UI should have sufficient complexity
- Each team member must build at least one module
- Implement React & use React life-cycle methods
- Perform external API requests

## Table of Contents

- FEC Team 5 WireFrame : [FEC Team 5 WireFrame on Excalidraw](https://excalidraw.com/#room=25525c9d9a85c7b900a2,k3A_etviJ_GZQk5dSDoJbw)
- AirBnB Page to Clone : [AirBnB - Naturalist Boudoir Cabin](https://www.airbnb.com/rooms/28833661?adults=1&category_tag=Tag%3A8225&children=0&infants=0&search_mode=flex_destinations_search&check_in=2023-01-29&check_out=2023-02-03&federated_search_id=5a99f34d-c87c-478d-a5c9-ceeb3d3681f4&source_impression_id=p3_1671120364_omr8ogC2GMaKPUi3)
- Completed project here : [FEC Team 5 Project on Render ](https://fec-frontend.onrender.com/)
- **Note:** _Refresh the project page repeatedly to wake the Render server if page does not display immediately_

## Installation & Setup

- Fork / clone down this repo : [Galvanize MCSP-16 : FEC Team 5 Github Repo](https://github.com/jullianrives7/Galvanize_FEC_Team5)
- Optional: To set the backend of this project to run locally, go to the 'server.js' file within the 'server' directory and change "production" to "dev" on line 5. Then go to the 'config.js' file in the 'server' directory and alter the connection string to point at your localized db (docker container was used in this example)
- cd into 'server' directory and install backend dependencies

```bash
(from 'Galvanize_FEC_Team5' directory)

  cd server/
  npm install
```

- cd into 'client' directory and install frontend dependencies
- **Note:** '_--force' tag is needed to install all frontend dependencies for this project_

```bash
(from 'server' directory)

  cd ../client/
  npm install --force
```

- Run a local instance React/Vite to view project in browser

```bash
(from 'client' directory)

  npm run dev

  ([CMD] + [Click] the "Local" url in your terminal to open in browser)
  (Link should look like this: ➜  Local:   http://localhost:5173/)
```

## API Reference

| Parameter | Type  | Description                               |
| :-------- | :---- | :---------------------------------------- |
| `ApiUrl`  | `url` | https://fec-api-server-lpsg.onrender.com/ |

#### PLEASE NOTE:

If you receive an "EOF" message, repeatedly refresh page to wake Render server

### GET API Root

```
  GET ApiUrl/

  (Returns 'Hello World!')
```

#### Get all hosts data

```
  GET ApiUrl/api/all_hosts
```

#### Get specified host data at index

```
  GET ApiUrl/api/host/${id}

  (Note: only one host is currently present in data table)
```

| Parameter | Type      | Description                                                  |
| :-------- | :-------- | :----------------------------------------------------------- |
| `id`      | `integer` | **Required**. Index of item to fetch. Valid Input Range: (1) |

#### Get all rentals data

```
  GET ApiUrl/api/all_rentals
```

#### Get specified rental data at index

```
  GET ApiUrl/api/rental/${id}

  (Note: only one rental is currently present in data table)
```

| Parameter | Type      | Description                                                  |
| :-------- | :-------- | :----------------------------------------------------------- |
| `id`      | `integer` | **Required**. Index of item to fetch. Valid Input Range: (1) |

#### Get all reviews data

```
  GET ApiUrl/api/all_reviews
```

#### Get specified review data at index

```
  GET ApiUrl/api/review/${id}
```

| Parameter | Type      | Description                                                      |
| :-------- | :-------- | :--------------------------------------------------------------- |
| `id`      | `integer` | **Required**. Index of item to fetch. Valid Input Range: (1 - 6) |

#### Get all photos data

```
  GET ApiUrl/api/all_photos
```

#### Get specified photo data at index

```
  GET ApiUrl/api/photo/${id}
```

| Parameter | Type      | Description                                                       |
| :-------- | :-------- | :---------------------------------------------------------------- |
| `id`      | `integer` | **Required**. Index of item to fetch. Valid Input Range: (1 - 23) |

## Libraries & Utilities Documentation

- [React](https://reactjs.org/) x [Vite](https://vitejs.dev/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [React Icons](https://react-icons.github.io/react-icons/search)
- [React Scroll](https://www.npmjs.com/package/react-scroll)
- [React Suite](https://rsuitejs.com/)
- [Material UI](https://mui.com/core/)
- [Loading.io](https://loading.io/)
- [Readme.so](https://readme.so)
- [Axios](https://axios-http.com/docs/intro)

## _Collaborators_

- Jullian Rives - [@jullianrives7](https://github.com/jullianrives7)
- Simon Solomon - [@snsolomar](https://github.com/snsolomar)
- Huy Nguyen - [@HuyNguyen09196](https://github.com/HuyNguyen09196)
- Fernando Castro - [@Fcastro958](https://github.com/Fcastro958)
