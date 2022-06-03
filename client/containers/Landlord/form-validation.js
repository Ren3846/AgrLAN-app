import { DEFAULT_FORM_STATE, getEmptyField } from '../General/form-validation';
import { I18n } from 'react-i18nify';

export default (formData, props) => {
  const emptyValueName = getEmptyField(formData, ['comment', 'file']);
  if (emptyValueName) {
    props.setFormState({ ...DEFAULT_FORM_STATE, warning: { name: emptyValueName } });
    return false;
  }

  return true;
};
