# Base image
FROM node:20-alpine

# Install curl
RUN apk --no-cache add curl

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the app's port and define the start command
EXPOSE 13701
CMD ["sh", "start.sh"]