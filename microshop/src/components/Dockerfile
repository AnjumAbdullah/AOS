# Step 1: Use Node.js official image as the base image
FROM node:16

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the backend code
COPY . .

# Step 6: Expose the port that the app runs on
EXPOSE 5000

# Step 7: Run the app
CMD ["node", "server.js"]