# Step 1: Use the official Node.js image as a base
FROM node:16 AS build

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the source code
COPY . .

# Step 6: Build the app for production
RUN npm run build

# Step 7: Use Nginx to serve the built app
FROM nginx:stable-alpine

# Step 8: Copy the build from the previous stage to Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose port 80 for the container
EXPOSE 80

# Step 10: Start Nginx
CMD ["nginx", "-g", "daemon off;"]