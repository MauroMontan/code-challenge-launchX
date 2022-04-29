
# VISUAL PARTNER-SHIP CODE CHALLENGE


> project started at 18:27 april 28 2022 and finished at 22:02 april 28 2022

#### Requirements:

- create an endpoint to get all user from visualpartners.json
- create an endpoint to get all cretificated student email's
- create an endpoint to get stutends with credits higher than 500


## TODO:

- [x] create a GitHub repository.
- [x] add Github Actions.
- [x] explain clearly my commits.
- [x] create a readme to detail dependencies, my components design, and detail my api.



## Project dependencies:

- [express js](https://expressjs.com/), fast and minimalist framework for creating REST APIS

- [jest](https://jestjs.io/), javascript framework for testing.

- [eslint](https://eslint.org/), linter for javascript, find problems and fix code style.

## for running this api locally follow the next steps.

### install project dependencies:

```
$ npm install 
```


### Running jest test:

> test are running automatically on github actions.

```
$ npm run jest
```


### Running the api on 3000 port:

```
$ npm run dev
```


### Explorer endpoint

endpoitns has been tested with [Insomnia](https://insomnia.rest/). you can open the insomnia request collection for this project by importing this file on insmonia app [here](https://github.com/MauroMontan/code-challenge-launchX/tree/main/insomnia-collection) .

**if you want to test it on browser or postman here you have my endpoints ! :D.**

<details>
  <summary> get a list of all the visual partner-ship students </summary>

```
GET localhost:3000/students
```

> status code: 200


|name        | value  |
|------------|--------|
|X-Powered-By| Express|
|Content-Type| application/json; charset=utf-8|


</details>


<details>
  <summary> get a list of all the certificated visual partner-ship student email's </summary>

```
GET localhost:3000/estudents/certificated/emails
```

> status code: 200


|name        | value  |
|------------|--------|
|X-Powered-By| Express|
|Content-Type| application/json; charset=utf-8|

</details>


<details>
  <summary> get a list of all the students that has credits higher than 500 </summary>

```
GET localhost:3000/estudents/credited
```

> status code: 200


|name        | value  |
|------------|--------|
|X-Powered-By| Express|
|Content-Type| application/json; charset=utf-8|
</details>


## schemas: 

### Student schema:

> The **getAllStudents** and **getCreditedStudents** methodd from StudentController returnd an array of objects following this schema. 

```
{
    "id":string,
	"name": string,
	"email": string,
	"credits": number,
	"enrollments":Array<string>,
	"previousCourses": number,
	"haveCertification": boolean
},

```


this is a [Innovaccion Virtual](https://www.instagram.com/innovaccionvirtual/) LaunchX backend exercise :).
