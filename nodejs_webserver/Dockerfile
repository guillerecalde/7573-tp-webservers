#  Create a new image from the base nodejs 7 image.
FROM node:7

# Create the target directory in the imahge
RUN mkdir -p /usr/src/app

# Set the created directory as the working directory
WORKDIR /usr/src/app

# Copy the package.json inside the working directory
COPY package.json /usr/src/app

# Install required dependencies
RUN npm install

# Copy the application source files.
COPY . /usr/src/app

# Install nodemon
RUN npm install nodemon

# Open 7573 port. This is the port that our development server uses
EXPOSE 7573

# Start the application. This is the same as running ng serve.
CMD ["npm", "start"]
