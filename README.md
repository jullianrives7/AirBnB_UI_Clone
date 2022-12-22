## --------------- _Galvanize MCSP-16 Team 5_ ---------------

# Front End Capstone Project : AirBnB UI Clone

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

## Libraries & Utilities

- [React](https://reactjs.org/) x [Vite](https://vitejs.dev/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [React Icons](https://react-icons.github.io/react-icons/search)
- [React Scroll](https://www.npmjs.com/package/react-scroll)
- [React Suite](https://rsuitejs.com/)
- [Material UI](https://mui.com/core/)
- [Loading.io](https://loading.io/)
- [Readme.so](https://readme.so)
- [Axios](https://axios-http.com/docs/intro)

## API Reference

| Parameter | Type  | Description                               |
| :-------- | :---- | :---------------------------------------- |
| `ApiUrl`  | `url` | https://fec-api-server-lpsg.onrender.com/ |

#### PLEASE NOTE:

If you receive an "EOF" message, repeatedly refresh page to wake Render server

### GET API Root

```http
  GET ApiUrl/

  (Returns 'Hello World!')
```

#### Get all hosts data

```http
  GET ApiUrl/api/all_hosts

```

#### Get specified host data at index

```http
  GET ApiUrl/api/host/${id}

  (Note: only one host is currently present in data table)
```

| Parameter | Type      | Description                                                  |
| :-------- | :-------- | :----------------------------------------------------------- |
| `id`      | `integer` | **Required**. Index of item to fetch. Valid Input Range: (1) |

#### Get all rentals data

```http
  GET ApiUrl/api/all_rentals

```

#### Get specified rental data at index

```http
  GET ApiUrl/api/rental/${id}

  (Note: only one rental is currently present in data table)
```

| Parameter | Type      | Description                                                  |
| :-------- | :-------- | :----------------------------------------------------------- |
| `id`      | `integer` | **Required**. Index of item to fetch. Valid Input Range: (1) |

#### Get all reviews data

```http
  GET ApiUrl/api/all_reviews

```

#### Get specified review data at index

```http
  GET ApiUrl/api/review/${id}

```

| Parameter | Type      | Description                                                      |
| :-------- | :-------- | :--------------------------------------------------------------- |
| `id`      | `integer` | **Required**. Index of item to fetch. Valid Input Range: (1 - 6) |

#### Get all photos data

```http
  GET ApiUrl/api/all_photos

```

#### Get specified photo data at index

```http
  GET ApiUrl/api/photo/${id}

```

| Parameter | Type      | Description                                                       |
| :-------- | :-------- | :---------------------------------------------------------------- |
| `id`      | `integer` | **Required**. Index of item to fetch. Valid Input Range: (1 - 23) |

## _Collaborators_

- Jullian Rives - [@jullianrives7](https://github.com/jullianrives7)
- Simon Solomon - [@snsolomar](https://github.com/snsolomar)
- Huy Nguyen - [@HuyNguyen09196](https://github.com/HuyNguyen09196)
- Fernando Castro - [@Fcastro958](https://github.com/Fcastro958)
