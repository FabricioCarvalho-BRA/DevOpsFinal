FROM node:slim

# Create app directory
WORKDIR /app
COPY . /app

# Install app dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]