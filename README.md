# Master Web Component Forms Integration – with Lit and Angular

:newspaper: You can find the corresponding article [here](https://www.thinktecture.com/en/web-components/web-component-forms-integration-with-lit-and-angular/)
---


The showcase Angular applications were generated with Angular CLI version 13.3.3.

The Web Component Project was generated with `npm init @open-wc` from [OpenWC](https://open-wc.org/)


## Setup
---
Each approach from the article is in its own branch. The `main-Branch` just contains the project base structure from scaffolding. 


## Approach 1: Hide everything inside the component 

```
git checkout approach-one
```
## Approach 2: Using the power of slotting / content projection

```
git checkout approach-two
```
1. After you checked out the branch run `npm i` in each of the projects
2. Then go to the `tt-showcase` project and run 'npm link ../tt-input' to link both projects
3. Run `npm start`to serve the Angular application
