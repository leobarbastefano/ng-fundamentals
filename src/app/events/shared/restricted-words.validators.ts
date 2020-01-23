import { FormControl } from '@angular/forms';

// restricting words
export function restrictedWords(words) {
  return (control: FormControl): { [key: string]: any } => {
    // check if words are passed in - if not return null
    if (!words) {
      return null;
    }

    // find retricted words
    const invalidWords = words
      .map(w => control.value.includes(w) ? w : null) // map will loop in the array
      .filter(w => w != null);

    // return restriced words
    return invalidWords && invalidWords.lenght > 0
      ? { restrictedWords: invalidWords.join(', ') }
      : null;
  };
}
