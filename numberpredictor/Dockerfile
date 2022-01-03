FROM alpine:3.14
RUN apk add --no-cache gcc musl-dev linux-headers nodejs npm
WORKDIR /code
COPY . .
EXPOSE 3000
RUN npm install -g serve
WORKDIR /code
RUN npm run build 
CMD ["serve", "-s", "build"]