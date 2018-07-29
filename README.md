# Ng-Fveh - Form Validations Errors Helper


[![CircleCI](https://img.shields.io/circleci/project/github/RedSparr0w/node-csgo-parser.svg)](https://circleci.com/gh/guilhermewaess/ng-fveh/tree/master)
[![codecov](https://codecov.io/gh/guilhermewaess/ng-fveh/branch/master/graph/badge.svg)](https://codecov.io/gh/guilhermewaess/ng-fveh)
[![npm version](https://badge.fury.io/js/ng-fveh.svg)](https://badge.fury.io/js/ng-fveh)

#### This lib contains some helpers to make your life easier when we talk about Angular forms.
More info and documentation you can find [on demo page](https://guilhermewaess.github.io/ng-fveh/)

### Errors presenter component - <fveh-errors-presenter [field]="form.get('field')>"
This component will show all errors from your field.

### Fveh Form Is Valid Decorator @FvehFormIsValid('formName')
This decorator will prevent your function to be executed and will mark all controls as touched.

### WIP: Fveh Group Match Validator
This validation will validate if all controls in a group have the same value.
For example: password and confirmPassword fields.
If the group doesn't match, it will put an error inside all controls.
