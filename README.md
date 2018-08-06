<p align="center"><a href="https://guilhermewaess.github.io/ng-fveh" target="_blank"><img width="400"src="https://github.com/guilhermewaess/ng-fveh/raw/master/src/assets/logo.png"></a></p>

<p align="center">
  <a href="https://circleci.com/gh/guilhermewaess/ng-fveh/tree/master"><img src="https://codecov.io/gh/guilhermewaess/ng-fveh/branch/master/graph/badge.svg" alt="Build Status"></a>
  <a href="https://codecov.io/gh/guilhermewaess/ng-fveh"><img src="https://codecov.io/gh/guilhermewaess/ng-fveh/branch/master/graph/badge.svg" alt="Coverage Status"></a>
  <a href="https://www.npmjs.com/package/ng-fveh"><img src="https://badge.fury.io/js/ng-fveh.svg" alt="Version"></a>
</p>

# Ng-Fveh - Form Validations Errors Helper


### Install

    npm install ng-fveh
    
    
#### This lib contains some helpers to make your life easier when we talk about Angular forms.
More info and documentation you can find [on demo page](https://guilhermewaess.github.io/ng-fveh/)

### Errors presenter component - <fveh-errors-presenter [field]="form.get('field')>"
This component will show all errors from your field.

### Fveh Form Is Valid Decorator @FvehFormIsValid('formName')
This decorator will prevent your function to be executed and will mark all controls as touched.

### Fveh Group Match Validator
This custom validator should help you with field match validations, e.g. password and confirm password.
To use it, you should create a new group in your form and send a extra parameters after controls:

    { validator: FvehValidators.groupMatch(['E-mail', 'Email Confirmation']) }
  
**Param FrieldlyFieldNames:** If the fields doens't match, it will generate a new error on field with this as a payload

    Error: {
      fvehGroupMatch: {
         fields: friendlyFieldNames // ['E-mail', 'Email Confirmation']
      },
    }

See the example on  [on demo page](https://guilhermewaess.github.io/ng-fveh/) :)
