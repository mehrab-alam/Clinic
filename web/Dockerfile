FROM ubuntu:22.04
ARG HOST
ARG USER
ARG PORT
ENV MYSQL_HOST ${HOST} 
ENV MYSQL_USERS ${USER}
ENV MYSQL_PORT ${PORT}
ARG TOKEN
ARG USERNAME
ENV GITHUB_TOKEN ${TOKEN}
ENV  GITHUB_USERNAME ${USERNAME}
ENV GITHUB_PROJECT_URL https://${GITHUB_USERNAME}:${GITHUB_TOKEN}@github.com/mehrab-alam/Clinic.git
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN apt-get update
RUN apt-get install curl -y
RUN curl -s https// deb.nodesource.com/setup_18.x | bash
RUN apt-get install nodejs -y
RUN apt-get install git -y
RUN git clone $GITHUB_PROJECT_URL 
RUN apt-get install wget -y
RUN npm install -g npm@9.6.7
RUN npm install
EXPOSE 3000
COPY /entrypoint.sh /entrypoint.sh

HEALTHCHECK --interval=30s --timeout=10s \
    CMD wget http://localhost:3000/ || exit 1
RUN chmod +x entrypoint.sh 
CMD ["/entrypoint.sh"]

