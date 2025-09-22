# Read-Dir Application

This repository contains a **frontend Angular app** and a **backend Node.js service** that allows reading directories and files.

---

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v20.x recommended)
- [npm](https://www.npmjs.com/)
- [Angular CLI](https://angular.io/cli) (optional, if running Angular manually)
- A web browser to test the frontend

---

## Backend (Node.js) Setup

1. Navigate to the backend folder:

```bash
cd read-dir-service
```

2. Install dependencies:

```bash
npm install
```

3. Start the backend server:

```bash
npm start
```

By default, the backend will run on:

```
http://localhost:3000
```

### API Endpoint

- **Endpoint:** `/api/v1/files`
- **Method:** `GET`
- **Query Parameters:**
  - `path` — Path to the directory you want to read
  - `depth` — Depth of directory traversal (integer)

Example request:

```
GET http://localhost:3000/api/v1/files?path=C:\Users\YourUser\Documents&depth=2
```

---

## Frontend (Angular) Setup

1. Open a **new terminal** and navigate to the frontend folder:

```bash
cd read-dir-client
```

2. Install dependencies:

```bash
npm install
```

3. Start the Angular development server:

```bash
npm start
```

By default, the frontend will run on:

```
http://localhost:4200
```

---

## Building the Frontend for Production

1. Build Angular in production mode:

```bash
npm run build
```

2. Compiled files will be located in:

```
read-dir-client/dist/read-dir/
```

3. These files can be served using **Nginx** or any static server.

---

## Running Both Applications Together

1. Start the **backend** first:

```bash
cd read-dir-service
npm install
npm start
```

2. Start the **frontend** in a new terminal:

```bash
cd read-dir-client
npm install
npm start
```

3. Open your browser at:

```
http://localhost:4200
```

4. Enter a valid directory path and depth. The frontend will fetch data from:

```
http://localhost:3000/api/v1/files?path=<directoryPath>&depth=<number>
```

---

## Troubleshooting

- **Cannot GET /**: Ensure you are running `ng serve` in the frontend folder.
- **CORS errors**: Make sure backend allows requests from `http://localhost:4200`.
- **Backend exits immediately**: Verify `index.js` exists in `read-dir-service` and `package.json` points to it.
- **Angular build errors**: Ensure `@angular-devkit/build-angular` is installed in devDependencies.
- **Directory not found**: Ensure the path exists and Node.js has permission.

---

## Example API Request

Frontend UI input:

```
Path: C:\Users\YourUser\Documents
Depth: 2
```

Backend GET request sent automatically:

```
http://localhost:3000/api/v1/files?path=C:\Users\YourUser\Documents&depth=2
```

Backend JSON response:

```json
{
  "name": "Documents",
  "type": "directory",
  "children": [
    {
      "name": "file1.txt",
      "type": "file",
      "size": 1024
    },
    {
      "name": "Subfolder",
      "type": "directory",
      "children": [
        ...
      ]
    }
  ]
}
```

---

> Note: This setup is **manual**, as Docker is currently not working. Make sure to start the **backend first**, then the **frontend**.

