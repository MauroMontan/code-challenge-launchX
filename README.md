
# VISUAL PARTNER-SHIP CODE CHALLENGE


> project started at 18:27 april 28 2022

#### Requirements:

- create an endpoint to get all user from visualpartners.json
- create an endpoint to get all cretificated student email's
- create an endpoint to get stutends with credits higher than 500


## TODO:

- [x] create a GitHub repository.
- [x] add Github Actions.
- [x] ? explain clearly my commits.
- [ ] create a readme to detail dependencies, my components design, and detail my   api.



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

endpoitns has been tested with [Insomnia](https://insomnia.rest/). you can open the insomnia request collection for this project [here](https://github.com/MauroMontan/fizzbuzz-api-rest/tree/main/insomnia_collection)

missions availables:

- java
- node

> GET localhost:3000/explorers

> GET localhost:3000/explorers/{mission}

> GET localhost:3000/explorers/amout/java

> GET localhost:3000/explorers/usernames/{mission}

> GET localhost:3000/explorers/fizzbuzz/{score}


### Explorer model 

``` javascript

{
  "name" : string,
  "githubUsername" : string,
  "score" : number,
  "mission" : strng,
  "stacks" : Array<string>
}

```

this is a [Innovaccion Virtual](https://www.instagram.com/innovaccionvirtual/) LaunchX backend exercise :).
