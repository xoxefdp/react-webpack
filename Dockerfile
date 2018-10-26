FROM node:8-alpine

# create a work directory
WORKDIR /usr/src/app

# copy from source to docker
COPY . /usr/src/app/

# install dependencies
RUN npm install --loglevel silly

# expose a port out the container
EXPOSE 8080

# execution entrypoint
ENTRYPOINT [ "/usr/local/bin/npm", "run" ]

# execution interchangeable command
CMD [ "start:dev" ]