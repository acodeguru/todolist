FROM node:14.2.0-stretch

RUN npm install
RUN npm run tsc

ENTRYPOINT ["node"]
CMD ["./dist/app.js"]
