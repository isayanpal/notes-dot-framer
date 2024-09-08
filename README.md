# Notes-Dot

![image](https://github.com/isayanpal/notes-dot-framer/assets/102523492/1e823487-4f39-4696-9f5f-be8599b876f3)

## Installation

To get a local copy up and running, follow these steps:

1. **Clone the repository**

   ```sh
   git clone https://github.com/isayanpal/notes-dot-framer.git
   ```

2. **Navigate to the project directory**

   ```sh
   cd notes-dot-framer
   ```

3. **Install dependencies**

   ```sh
   npm install
   ```

## Usage

1. **Start the react app**

   ```sh
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173/`.

## Using Docker to run the app in your loacl machine -

1. **Clone the repository**

   ```sh
   git clone https://github.com/isayanpal/notes-dot-framer.git
   ```

2. **Navigate to the project directory**

   ```sh
   cd notes-dot-framer
   ```

3. **Build your Docker Image**

   ```sh
    docker build -t react-app:dev .
   ```

4. **Run your Docker Image**

   ```sh
    docker run -p 5173:5173 react-app:dev
   ```

5. Open your browser and navigate to `http://localhost:5173/`.
