export default {
  required: () => 'This field is required',
  maxlength: errorObject =>
    `Max permited characters: ${errorObject.requiredLength}, but you typed: ${
      errorObject.actualLength
    }`,
  fvehGroupMatch: ({fields}) => `The fields: ${fields.toString().replace(/,/g, ', ')} should equal`,
};
