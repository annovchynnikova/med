export default ({ app: { i18n } }, inject) => {
  inject('getErrorTextByResponse', (response) => {
    let errorText = i18n.t('errors.default');
    if (response.status === 422) {
      errorText = response.data.errors[Object.keys(response.data.errors)[0]];
      if (typeof errorText === 'object') errorText = errorText[Object.keys(errorText)[0]];
    } else if (response.status === 401) {
      errorText = i18n.t('Login.AuthorizationFailed');
    } else if (response.data && response.data.message) errorText = response.data.message;
    return errorText;
  });
};
